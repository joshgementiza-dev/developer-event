import Container from "@/components/layout/Container";
import EventCardSkeleton from "./EventCardSkeleton";

export default function EventGridSkeleton({ count = 9 }: { count?: number }) {
  return (
    <section aria-label="Loading events" aria-busy="true" className="py-8 md:py-12 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {Array.from({ length: count }).map((_, i) => (
            <EventCardSkeleton key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
