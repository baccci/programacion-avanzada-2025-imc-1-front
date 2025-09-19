import { useSearchParams } from 'next/navigation'
import { buttonVariants } from '@/components/button'
import { IconChevronLeft } from '@/components/icons/icon-chevron-left'
import { IconChevronRight } from '@/components/icons/icon-chevron-right'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink
} from '@/components/pagination'
import { cn } from '@/components/utils/taildwind-class-merge'
import { useQueryParams } from '@/features/imc-calculator/hooks/query-params'
import { usePagination } from '@/hooks/pagination'
import { useHistoryContext } from '../hooks/history'

type PaginationProps = {
  paginationItemsToDisplay?: number
}

export default function IMCPagination({
  paginationItemsToDisplay = 5
}: PaginationProps) {
  const searchParams = useSearchParams()
  const currentPage = parseInt(searchParams.get('page') || '1', 10)

  const { data } = useHistoryContext()
  const totalPages = data?.meta.totalPages ?? 0

  const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
    currentPage,
    totalPages,
    paginationItemsToDisplay
  })

  const { createQueryString } = useQueryParams()

  return (
    <Pagination className="text-input-bg">
      <PaginationContent className="inline-flex gap-0 -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
        {/* Previous page button */}
        <PaginationItem className="[&:first-child>a]:rounded-s-md [&:last-child>a]:rounded-e-md">
          <PaginationLink
            className={cn(
              buttonVariants({
                variant: 'outline'
              }),
              'bg-transparent p-0 text-input-bg border-jordy-blue-900/70',
              'rounded-none shadow-none focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-60'
            )}
            href={
              currentPage === 1
                ? undefined
                : `?${createQueryString('page', String(currentPage - 1))}`
            }
            aria-label="Go to previous page"
            aria-disabled={currentPage === 1 ? true : undefined}
            role={currentPage === 1 ? 'link' : undefined}
          >
            <IconChevronLeft width={16} aria-hidden="true" />
          </PaginationLink>
        </PaginationItem>

        {/* Left ellipsis (...) */}
        {showLeftEllipsis && (
          <PaginationItem className="[&:first-child>a]:rounded-s-md [&:last-child>a]:rounded-e-md bg-transparent">
            <PaginationEllipsis
              className={cn(
                buttonVariants({
                  variant: 'outline'
                }),
                'pointer-events-none rounded-none shadow-none text-input-bg p-0 bg-transparent border-jordy-blue-900/70'
              )}
            />
          </PaginationItem>
        )}

        {/* Page number links */}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              className={cn(
                buttonVariants({
                  variant: 'outline'
                }),
                'rounded-none shadow-none focus-visible:z-10 bg-transparent border-jordy-blue-900/70',
                page === currentPage &&
                  'bg-jordy-blue-600 text-input-bg font-semibold'
              )}
              href={`?${createQueryString('page', String(page))}`}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Right ellipsis (...) */}
        {showRightEllipsis && (
          <PaginationItem className="[&:first-child>a]:rounded-s-md [&:last-child>a]:rounded-e-md bg-transparent">
            <PaginationEllipsis
              className={cn(
                buttonVariants({
                  variant: 'outline'
                }),
                'pointer-events-none rounded-none shadow-none text-input-bg p-0 bg-transparent border-jordy-blue-900/70'
              )}
            />
          </PaginationItem>
        )}

        {/* Next page button */}
        <PaginationItem className="[&:first-child>a]:rounded-s-md [&:last-child>a]:rounded-e-md">
          <PaginationLink
            className={cn(
              buttonVariants({
                variant: 'outline'
              }),
              'p-0 bg-transparent border-jordy-blue-900/70',
              'rounded-none shadow-none focus-visible:z-10 aria-disabled:pointer-events-none [&[aria-disabled]>svg]:opacity-50'
            )}
            href={
              currentPage === totalPages
                ? undefined
                : `?${createQueryString('page', String(currentPage + 1))}`
            }
            aria-label="Go to next page"
            aria-disabled={currentPage === totalPages ? true : undefined}
            role={currentPage === totalPages ? 'link' : undefined}
          >
            <IconChevronRight width={16} aria-hidden="true" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
