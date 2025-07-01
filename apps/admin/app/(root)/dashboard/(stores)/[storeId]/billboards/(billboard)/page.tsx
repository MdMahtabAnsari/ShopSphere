import {ListOfBillboardsWithPagination,ListOfBillboardsSkeleton} from "@/components/billboards/list-of-billboards";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/error/error-fallback";
import { Suspense } from 'react'

export default async function Page({params}:{params:Promise<{storeId:string}>}) {
    const {storeId} = await params;
    return(
        <div className="w-full h-full items-center justify-center">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Suspense fallback={<ListOfBillboardsSkeleton/>}>
                    <ListOfBillboardsWithPagination storeId={storeId}/>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}