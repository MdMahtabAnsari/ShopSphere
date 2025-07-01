
import { ListOfStoresWithPagination,ListOfStoresSkeleton } from "@/components/dashboard/list-of-stores";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/error/error-fallback";
import { Suspense } from 'react'

export default function Page() {

  return (
    <div className="w-full h-full items-center justify-center">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<ListOfStoresSkeleton/>}>
          <ListOfStoresWithPagination />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}