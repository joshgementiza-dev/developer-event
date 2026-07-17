import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/shared/PageHeader";
import EventsSearchBar from "@/components/events/EventsSearchBar";

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

      {/* Search Section */}
      <section aria-label="Search events" className="border-b border-border py-4 md:py-6">
        <Container>
          <EventsSearchBar />
        </Container>
      </section>

      {/* Task 3.1 — Filter Bar */}
      <div />

      {/* Task 4.1 — Sort Dropdown */}
      <div />

      {/* Task 5.1 — Results Summary */}
      <div />

      {/* Task 6.2 — Events Grid */}
      <div />

      {/* Task 13.1 — Pagination */}
      <div />
    </>
  );
}
