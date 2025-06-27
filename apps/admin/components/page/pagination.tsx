import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@workspace/ui/components/pagination"

import { PaginationSchema } from "@workspace/schema/common/page";


export function PaginationComponent({ pageDetails, onPageChange }: { pageDetails: PaginationSchema, onPageChange: (page: number) => void }) {
    const { currentPage, limit, totalPages } = pageDetails;
    if (totalPages < 1 || currentPage < 1 || limit < 1) {
        return null; // No pagination needed
    }
    const start = Math.floor((currentPage - 1) / limit) * limit;
    const end = Math.min(start + limit, totalPages);

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={() => currentPage > 1 && onPageChange(currentPage - 1)} className="cursor-pointer" />
                </PaginationItem>
                {Array.from({ length: end - start }, (_, index) => {
                    const pageNumber = start + index + 1;
                    return (
                        <PaginationItem key={pageNumber}>
                            <PaginationLink isActive={pageNumber === currentPage} onClick={() => onPageChange(pageNumber)} className="cursor-pointer">
                                {pageNumber}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}
                {
                    end < totalPages && (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    )
                }
                <PaginationItem>
                    <PaginationNext onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)} className="cursor-pointer" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}