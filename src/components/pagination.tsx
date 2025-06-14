"use client";
import { useSearchParams } from "next/navigation";
import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface PaginationProps {
  pageCount: number;
  className?: string;
}

export function Pagination({ pageCount, className }: PaginationProps) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const buildHref = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`;
  };

  const renderPageLinks = () => {
    const pages = [];
    const maxPagesToShow = 1;

    if (pageCount <= 1) {
      return null;
    }

    if (pageCount <= maxPagesToShow * 2 + 1) {
      for (let i = 1; i <= pageCount; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={buildHref(i)}
              isActive={i === currentPage}
              className={cn(
                i === currentPage && "pointer-events-none cursor-default"
              )}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      pages.push(
        <PaginationItem key={1}>
          <PaginationLink
            href={buildHref(1)}
            isActive={1 === currentPage}
            className={cn(
              1 === currentPage && "pointer-events-none cursor-default"
            )}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (currentPage > maxPagesToShow + 1) {
        pages.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      const startPage = Math.max(2, currentPage - maxPagesToShow);
      const endPage = Math.min(pageCount - 1, currentPage + maxPagesToShow);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={buildHref(i)}
              isActive={i === currentPage}
              className={cn(
                i === currentPage && "pointer-events-none cursor-default"
              )}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (currentPage < pageCount - maxPagesToShow) {
        pages.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      pages.push(
        <PaginationItem key={pageCount}>
          <PaginationLink
            href={buildHref(pageCount)}
            isActive={pageCount === currentPage}
            className={cn(
              pageCount === currentPage && "pointer-events-none cursor-default"
            )}
          >
            {pageCount}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <ShadcnPagination className={cn("mt-10 md:justify-end", className)}>
      <PaginationContent>{renderPageLinks()}</PaginationContent>
    </ShadcnPagination>
  );
}
