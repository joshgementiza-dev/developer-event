import Link from "next/link";
import { MapPin, Clock, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import type { EventMode } from "@/types/event";

interface UpcomingEvent {
  id: string;
  title: string;
  day: string;
  month: string;
  time: string;
  location: string;
  mode: EventMode;
  organizer: string;
  href: string;
}

const MODE_LABELS: Record<EventMode, string> = {
  "in-person": "In Person",
  online: "Online",
  hybrid: "Hybrid",
};

const MODE_STYLES: Record<EventMode, string> = {
  "in-person": "bg-green-500/10 text-green-500",
  online: "bg-primary/10 text-primary",
  hybrid: "bg-amber-500/10 text-amber-500",
};

const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: "1",
    title: "Frontend Masters Live: React 19 Deep Dive",
    day: "20",
    month: "Aug",
    time: "10:00 AM",
    location: "Online",
    mode: "online",
    organizer: "Frontend Masters",
    href: "/events/react-19-deep-dive",
  },
  {
    id: "2",
    title: "TypeScript Community Meetup — Berlin",
    day: "27",
    month: "Aug",
    time: "6:30 PM",
    location: "Berlin, Germany",
    mode: "in-person",
    organizer: "TypeScript Berlin",
    href: "/events/typescript-meetup-berlin",
  },
  {
    id: "3",
    title: "Open Source Hackathon: Build in Public",
    day: "05",
    month: "Sep",
    time: "9:00 AM",
    location: "San Francisco, CA",
    mode: "hybrid",
    organizer: "OSS Collective",
    href: "/events/open-source-hackathon-2025",
  },
  {
    id: "4",
    title: "Next.js Monthly — Architecture Patterns",
    day: "11",
    month: "Sep",
    time: "7:00 PM",
    location: "Online",
    mode: "online",
    organizer: "Next.js Community",
    href: "/events/nextjs-monthly-sep",
  },
  {
    id: "5",
    title: "Cloud Infrastructure Summit — APAC",
    day: "19",
    month: "Sep",
    time: "9:00 AM",
    location: "Singapore",
    mode: "in-person",
    organizer: "CloudNative APAC",
    href: "/events/cloud-infra-summit-apac",
  },
  {
    id: "6",
    title: "Kubernetes Workshop: From Zero to Production",
    day: "26",
    month: "Sep",
    time: "10:00 AM",
    location: "London, UK",
    mode: "hybrid",
    organizer: "CNCF UK Chapter",
    href: "/events/kubernetes-workshop-london",
  },
];

export default function UpcomingEventsSection() {
  return (
    <section className="bg-card py-12 md:py-16">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Upcoming Events
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Events happening soon — don&apos;t miss out.
            </p>
          </div>
          <Link
            href="/events?sort=upcoming"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "hidden shrink-0 sm:flex"
            )}
          >
            View All
          </Link>
        </div>

        <ul className="mt-8 divide-y divide-border" aria-label="Upcoming events list">
          {UPCOMING_EVENTS.map((event) => (
            <li key={event.id} className="group relative flex items-start gap-4 py-5 first:pt-0 last:pb-0">
              {/* Date badge */}
              <div
                aria-label={`${event.month} ${event.day}`}
                className="flex w-14 shrink-0 flex-col items-center rounded-lg bg-primary/10 px-2 py-2.5 text-center text-primary"
              >
                <span className="text-[10px] font-semibold uppercase tracking-widest">
                  {event.month}
                </span>
                <span className="text-2xl font-bold leading-none">{event.day}</span>
              </div>

              {/* Event details */}
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <h3 className="line-clamp-1 font-semibold text-foreground transition-colors group-hover:text-primary">
                  <Link
                    href={event.href}
                    className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/50"
                  >
                    {event.title}
                  </Link>
                </h3>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Building2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {event.organizer}
                  </span>
                </div>
              </div>

              {/* Mode badge — hidden on smallest screens to reduce clutter */}
              <span
                className={cn(
                  "relative z-10 hidden shrink-0 items-center self-center rounded-full px-2.5 py-0.5 text-xs font-medium sm:inline-flex",
                  MODE_STYLES[event.mode]
                )}
              >
                {MODE_LABELS[event.mode]}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 sm:hidden">
          <Link
            href="/events?sort=upcoming"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}
          >
            View All Upcoming Events
          </Link>
        </div>
      </Container>
    </section>
  );
}
