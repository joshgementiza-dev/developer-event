import { cn } from "@/lib/utils";
import Skeleton from "./Skeleton";

interface CardSkeletonProps {
  /** "centered" for speaker-style cards, "left" for organizer-style cards */
  layout?: "centered" | "left";
  className?: string;
}

export default function CardSkeleton({
  layout = "centered",
  className,
}: CardSkeletonProps) {
  const isCentered = layout === "centered";

  return (
    <div
      aria-busy="true"
      aria-label="Loading"
      className={cn(
        "rounded-xl border border-border bg-card p-5",
        isCentered ? "flex flex-col items-center" : "flex flex-col gap-4",
        className
      )}
    >
      {/* Avatar / Logo placeholder */}
      <Skeleton
        className={cn(
          isCentered
            ? "h-20 w-20 rounded-full"
            : "h-12 w-12 shrink-0 rounded-lg"
        )}
      />

      {/* Text lines */}
      <div
        className={cn(
          "flex flex-col gap-2",
          isCentered ? "mt-4 w-full items-center" : "w-full"
        )}
      >
        {/* Name / Title */}
        <Skeleton className={cn("h-4", isCentered ? "w-28" : "w-36")} />

        {/* Subtitle */}
        <Skeleton className={cn("h-3.5", isCentered ? "w-36" : "w-full")} />

        {/* Badge / Description line 1 */}
        <Skeleton
          className={cn(
            "h-3.5",
            isCentered ? "mt-1 w-20 rounded-full" : "w-full"
          )}
        />

        {/* Description line 2 (left layout only) */}
        {!isCentered && <Skeleton className="h-3.5 w-3/4" />}

        {/* Footer stat */}
        <Skeleton className={cn("h-3", isCentered ? "mt-1 w-16" : "mt-1 w-24")} />
      </div>
    </div>
  );
}
