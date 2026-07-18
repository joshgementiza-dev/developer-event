import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import EventsSearchSection from "@/components/events/EventsSearchSection";
import EventsFilterBar from "@/components/events/EventsFilterBar";
import EventsSortBar from "@/components/events/EventsSortBar";
import ResultsSummary from "@/components/events/ResultsSummary";
import EventGrid from "@/components/events/EventGrid";
import Container from "@/components/layout/Container";
import { MOCK_EVENTS } from "@/data/events";

export const metadata: Metadata = {
  title: "Events | DevEvents",
  description:
    "Browse and discover developer conferences, workshops, hackathons, webinars, and meetups.",
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Events" },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Browse Events"
        description="Discover conferences, workshops, hackathons, webinars, and meetups."
        breadcrumbs={BREADCRUMBS}
      />

      <EventsSearchSection />

      <EventsFilterBar />

      <EventsSortBar />

      <div className="border-b border-border py-3 md:py-4">
        <Container>
          <ResultsSummary total={MOCK_EVENTS.length} />
        </Container>
      </div>

      <EventGrid events={MOCK_EVENTS} />

      {/* Task 13.1 — Pagination */}
      <div />
    </>
  );
}
