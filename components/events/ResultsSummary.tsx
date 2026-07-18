interface ResultsSummaryProps {
  total: number;
  query?: string;
  filterCount?: number;
}

export default function ResultsSummary({
  total,
  query,
  filterCount,
}: ResultsSummaryProps) {
  return (
    <p role="status" aria-live="polite" className="text-sm text-muted-foreground">
      Showing{" "}
      <span className="font-medium text-foreground">{total}</span>{" "}
      {total === 1 ? "event" : "events"}
      {query && (
        <>
          {" "}matching{" "}
          <span className="font-medium text-foreground">&ldquo;{query}&rdquo;</span>
        </>
      )}
      {filterCount && filterCount > 0 ? (
        <>
          {" "}&bull;{" "}
          <span>
            {filterCount} {filterCount === 1 ? "filter" : "filters"} active
          </span>
        </>
      ) : null}
    </p>
  );
}
