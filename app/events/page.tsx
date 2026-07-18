import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import EventsSearchSection from "@/components/events/EventsSearchSection";
import EventsFilterBar from "@/components/events/EventsFilterBar";
import EventsSortBar from "@/components/events/EventsSortBar";

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

      {/* Task 5.1 — Results Summary */}
      <div />

      {/* Task 6.2 — Events Grid */}
      <div />

      {/* Task 13.1 — Pagination */}
      <div />
    </>
  );
}
