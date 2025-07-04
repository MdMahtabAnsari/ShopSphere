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

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card";

import { BillboardSchema, BillboardsSchema } from "@workspace/api-response/admin/billboard";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { PaginationComponent } from "@/components/page/pagination";
import { ErrorFallback } from "@/components/error/error-fallback";
import { useState, useEffect, useCallback } from "react";
import { getBillboards } from "@/lib/api/billboard/billboard";


export function ListOfBillboards({
    billboards,
}: {
    billboards: BillboardSchema[];
}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>List of Billboards</CardTitle>
                <CardDescription>Manage your billboards</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableCaption>A list of all billboards</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Label</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {billboards.map((billboard) => (
                            <TableRow key={billboard.id}>
                                <TableCell>{billboard.id}</TableCell>
                                <TableCell>{billboard.label}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="link"
                                        size="sm"
                                        className="text-blue-500"
                                    >
                                        <Link href={`/dashboard/${billboard.storeId}/billboards/${billboard.id}`}>
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

export function ListOfBillboardsSkeleton() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>List of Billboards</CardTitle>
                <CardDescription>Loading...</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableCaption>Loading billboards...</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Label</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <TableRow key={index}>
                                <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}


export function ListOfBillboardsWithPagination({ storeId }: { storeId: string }) {
    const [billboardsData, setBillboardsData] = useState<BillboardsSchema | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchBillboards = useCallback(async (page = 1, limit = 10) => {
        setLoading(true);
        setError(null);
        try {
            const response = await getBillboards(storeId, page, limit);
            if (response.status === "success") {
                setBillboardsData(response.data);
            } else {
                throw new Error(response.message || "Failed to fetch billboards");
            }
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    }
        , [storeId]);

    const onPageChange = useCallback((page: number) => {
        fetchBillboards(page, billboardsData?.pagination?.limit || 10);
    }, [fetchBillboards, billboardsData?.pagination?.limit]);

    useEffect(() => {
        fetchBillboards()
    }, [fetchBillboards]);

    if (loading) return <ListOfBillboardsSkeleton />;
    if (error) return <ErrorFallback error={error} resetErrorBoundary={() => fetchBillboards()} />;
    if (!billboardsData) return null;

    return (
        <Card>
            <CardContent>
                <ListOfBillboards billboards={billboardsData.billboards} />
            </CardContent>
            <CardFooter>
                <PaginationComponent
                    pageDetails={billboardsData.pagination}
                    onPageChange={onPageChange}
                />
            </CardFooter>
        </Card>
    )
}