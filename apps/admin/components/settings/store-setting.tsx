"use client";
import { Button } from '@workspace/ui/components/button';
import {CardTitle,Card,CardContent,CardDescription,CardHeader} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import {useUpdateStoreModal} from "@/hooks/store/use-update-store-modal";
import {UpdateStoreModal} from "@/components/modals/store/update-store-modal";
import {useState,useEffect,useCallback} from "react";
import {getStoreById} from "@/lib/api/store/store";
import {StoreSchema} from "@workspace/api-response/admin/store";
import {Skeleton} from "@workspace/ui/components/skeleton";
import {StoreDeleteConformationDialog} from "@/components/dialogs/store-delete-conformation-dialog";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/error/error-fallback";

interface StoreDataProps {
    id: string;
    name: string;
}


export function StoreSetting({storeId}: {storeId: string}) {
    const [storeData, setStoreData] = useState<StoreSchema|null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const getStore = useCallback(async (id: string) => {
        setLoading(true);
        try {
            const response = await getStoreById(id);
            if (response.status === 'success') {
                setStoreData(response.data);
            } else {
                throw new Error(response.message || "Failed to fetch store data");
            }
        } catch (error) {
            console.error("Error fetching store:", error);
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    },[])
    useEffect(() => {
        if (storeId) {
            getStore(storeId);
        }
    }, [storeId]);



    if(error) {
        return <ErrorFallback error={error} resetErrorBoundary={getStore} />;
    }
    if(loading) {
        return <StoreSettingCardSkeleton />;
    }

    return(
        storeData && (
            <StoreSettingCard storeData={storeData} setData={setStoreData}/>
        )
    )
}


export function StoreSettingCard({storeData, setData}: {storeData: StoreSchema, setData: (data: StoreSchema) => void}) {
    const onOpen = useUpdateStoreModal((state) => state.onOpen);
    return(
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>Store Settings</CardTitle>
                <CardDescription>Manage your store settings here.</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="flex flex-col gap-4">
                <div className="flex items-center justify-start">
                    <span>Store Name</span>
                    <span>&nbsp;:&nbsp;</span>
                    <span>{storeData?.name}</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                    <Button className="cursor-pointer" onClick={onOpen}>
                        Edit Store
                    </Button>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <StoreDeleteConformationDialog storeId={storeData.id} />
                    </ErrorBoundary>
                </div>
                <UpdateStoreModal storeData={storeData} setData={setData} />
            </CardContent>
        </Card>
    )
}

export function StoreSettingCardSkeleton() {
    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>
                    <Skeleton className="h-6 w-1/2" />
                </CardTitle>
                <CardDescription>
                    <Skeleton className="h-4 w-3/4" />
                </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="flex flex-col gap-4">
                <div className="flex items-center justify-start">
                    <Skeleton className="h-4 w-1/4" />
                    <span>&nbsp;:&nbsp;</span>
                    <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="flex items-center justify-start gap-2">
                    <Skeleton className="h-8 w-1/3" />
                    <Skeleton className="h-8 w-1/3" />
                </div>
            </CardContent>
        </Card>
    );

}