import { Skeleton } from "@/components/ui/skeleton";

export function ProductListSkeleton() {
  return (
    <div className="space-y-8 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border overflow-hidden">
            <div className="flex p-4">
              <Skeleton className="h-24 w-24 rounded-lg flex-shrink-0" />
              <div className="ml-4 space-y-2 flex-grow">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-5 w-20 mt-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Skeleton className="h-10 w-64" />
      </div>
    </div>
  );
}
