"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@workspace/ui/components/table";

import { Card, CardContent, CardHeader, CardTitle, CardDescription,CardFooter } from "@workspace/ui/components/card";

import { StoreSchema, StoresSchema } from "@workspace/api-response/admin/store";
import Link from "next/link";
import { PaginationComponent } from "@/components/page/pagination";
import { getUserStores } from "@/lib/api/store/store";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@workspace/ui/components/button";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { ErrorFallback } from "@/components/error/error-fallback";


export const ListOfStores = ({ stores }: { stores: StoreSchema[] }) => {
    // use only id and name from stores and also add view
    return (
        <Card>
            <CardHeader>
                <CardTitle>List of Stores</CardTitle>
                <CardDescription>Manage your stores</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableCaption>A list of all stores</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {stores.map((store) => (
                            <TableRow key={store.id}>
                                <TableCell>{store.id}</TableCell>
                                <TableCell>{store.name}</TableCell>
                                <TableCell>
                                    <Button variant="link" size="sm" className="text-blue-500">
                                        <Link href={`/dashboard/${store.id}`}>
                                            View
                                        </Link>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );

}

export const ListOfStoresWithPagination = () => {
    const [storesData, setStoresData] = useState<StoresSchema | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchStores = useCallback(async (page = 1, limit = 10) => {
        setLoading(true);
        setError(null);
        try {
            const response = await getUserStores(page, limit);
            if (response.status === "success") {
                setStoresData(response.data);
            } else {
                throw new Error(response.message || "Failed to fetch stores");
            }
        } catch (err) {
            setError(err as Error);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchStores();{}
    }, [fetchStores]);

    const onPageChange = (page: number) => {
        fetchStores(page, storesData?.pagination?.limit || 10);
    };

    if (loading) return <ListOfStoresSkeleton />;
    if (error) return <ErrorFallback error={error} resetErrorBoundary={() => fetchStores()} />;
    if (!storesData) return null;

    return (
        <Card>
            <CardContent>
                <ListOfStores stores={storesData.stores} />

            </CardContent>
            <CardFooter>
                <PaginationComponent
                    pageDetails={storesData.pagination}
                    onPageChange={onPageChange}
                />
            </CardFooter>

        </Card>
    );
};

export const ListOfStoresSkeleton = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <Skeleton className="h-6 w-1/3" />
                </CardTitle>
                <CardDescription>
                    <Skeleton className="h-4 w-1/2" />
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableCaption>
                        <Skeleton className="h-4 w-1/4" />
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead><Skeleton className="h-4 w-12" /></TableHead>
                            <TableHead><Skeleton className="h-4 w-24" /></TableHead>
                            <TableHead><Skeleton className="h-4 w-16" /></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <TableRow key={index}>
                                <TableCell><Skeleton className="h-4 w-12" /></TableCell>
                                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}