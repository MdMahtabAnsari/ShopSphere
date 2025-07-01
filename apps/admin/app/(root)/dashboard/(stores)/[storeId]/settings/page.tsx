import {StoreSetting} from "@/components/settings/store-setting";
import {StoreSettingCardSkeleton} from "@/components/settings/store-setting";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/error/error-fallback";
import { Suspense } from 'react'

export default async function Page({ params }: { params: Promise<{ storeId: string }> }){
    const storeId = (await params).storeId;
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<StoreSettingCardSkeleton />}>
                <StoreSetting storeId={storeId} />
            </Suspense>
        </ErrorBoundary>
    );

 }