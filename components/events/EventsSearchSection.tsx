"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import EventsSearchBar from "./EventsSearchBar";

export default function EventsSearchSection() {
  const [query, setQuery] = useState("");

  return (
    <section aria-label="Search events" className="border-b border-border py-4 md:py-6">
      <Container>
        <EventsSearchBar value={query} onChange={setQuery} />
      </Container>
    </section>
  );
}
