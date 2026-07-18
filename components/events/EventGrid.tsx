import type { EventType } from "@/types/event";
import EventCard from "./EventCard";
import Container from "@/components/layout/Container";

interface EventGridProps {
  events: EventType[];
}

export default function EventGrid({ events }: EventGridProps) {
  return (
    <section aria-label="Events" className="py-8 md:py-12">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map(({ id, ...cardProps }) => (
            <EventCard key={id} {...cardProps} />
          ))}
        </div>
      </Container>
    </section>
  );
}
