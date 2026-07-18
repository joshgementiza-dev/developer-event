import type { EventType } from "@/types/event";
import EventCard from "./EventCard";
import Container from "@/components/layout/Container";

interface EventGridProps {
  events: EventType[];
  emptyState?: React.ReactNode;
}

export default function EventGrid({ events, emptyState }: EventGridProps) {
  return (
    <section aria-label="Events" className="py-8 md:py-12 lg:py-16">
      <Container>
        {events.length === 0 && emptyState ? (
          emptyState
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {events.map(({ id, ...cardProps }) => (
              <EventCard key={id} {...cardProps} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
