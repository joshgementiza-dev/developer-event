"use client";

import Container from "@/components/layout/Container";
import EventsSearchBar from "./EventsSearchBar";

interface EventsSearchSectionProps {
  value: string;
  onChange: (value: string) => void;
}

export default function EventsSearchSection({ value, onChange }: EventsSearchSectionProps) {
  return (
    <section aria-label="Search events" className="border-b border-border py-4 md:py-6">
      <Container>
        <EventsSearchBar value={value} onChange={onChange} />
      </Container>
    </section>
  );
}
