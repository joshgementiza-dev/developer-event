import Skeleton from "@/components/shared/Skeleton";

export default function EventCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
    >
      {/* Banner */}
      <Skeleton className="aspect-video rounded-none" />

      {/* Content */}
      <div className="p-4">
        {/* Badges */}
        <div className="mb-3 flex flex-wrap gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-10 rounded-full" />
        </div>

        {/* Title — two lines */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="mt-1.5 h-4 w-3/4" />

        {/* Date & time */}
        <div className="mt-3 flex gap-3">
          <Skeleton className="h-3.5 w-24" />
          <Skeleton className="h-3.5 w-16" />
        </div>

        {/* Location */}
        <Skeleton className="mt-2 h-3.5 w-32" />
      </div>
    </div>
  );
}
