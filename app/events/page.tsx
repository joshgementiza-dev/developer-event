import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import EventsContent from "@/components/events/EventsContent";

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

      <EventsContent />

      {/* Task 13.1 — Pagination */}
      <div />
    </>
  );
}
