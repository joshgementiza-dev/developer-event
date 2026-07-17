import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import EventCard from "./EventCard";
import type { EventType } from "@/types/event";

const FEATURED_EVENTS: EventType[] = [
  {
    id: "1",
    title: "React Summit 2025",
    banner: "https://picsum.photos/seed/react-summit/800/450",
    date: "Aug 15, 2025",
    time: "9:00 AM",
    location: "Amsterdam, Netherlands",
    mode: "in-person",
    price: 299,
    href: "/events/react-summit-2025",
  },
  {
    id: "2",
    title: "AI & ML Conference: The Future of Developer Tools",
    banner: "https://picsum.photos/seed/aiml-conf/800/450",
    date: "Sep 3, 2025",
    time: "10:00 AM",
    location: "Online",
    mode: "online",
    price: null,
    href: "/events/ai-ml-conference-2025",
  },
  {
    id: "3",
    title: "DevOps World 2025",
    banner: "https://picsum.photos/seed/devops-world/800/450",
    date: "Sep 18, 2025",
    time: "8:30 AM",
    location: "San Francisco, CA",
    mode: "hybrid",
    price: 149,
    href: "/events/devops-world-2025",
  },
  {
    id: "4",
    title: "Cloud Native Summit",
    banner: "https://picsum.photos/seed/cloud-native/800/450",
    date: "Oct 1, 2025",
    time: "9:00 AM",
    location: "Berlin, Germany",
    mode: "in-person",
    price: 199,
    href: "/events/cloud-native-summit-2025",
  },
  {
    id: "5",
    title: "Cybersecurity for Developers Workshop",
    banner: "https://picsum.photos/seed/cybersec-ws/800/450",
    date: "Oct 10, 2025",
    time: "2:00 PM",
    location: "Online",
    mode: "online",
    price: null,
    href: "/events/cybersecurity-workshop-2025",
  },
  {
    id: "6",
    title: "Mobile Dev Con: Cross-Platform Deep Dive",
    banner: "https://picsum.photos/seed/mobiledev/800/450",
    date: "Oct 22, 2025",
    time: "9:00 AM",
    location: "London, UK",
    mode: "hybrid",
    price: 99,
    href: "/events/mobile-dev-con-2025",
  },
];

export default function FeaturedEventsSection() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Featured Events
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Hand-picked events from the developer community.
            </p>
          </div>
          <Link
            href="/events"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "hidden shrink-0 sm:flex"
            )}
          >
            View All Events
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_EVENTS.map(({ id, ...props }) => (
            <EventCard key={id} {...props} />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/events"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}
          >
            View All Events
          </Link>
        </div>
      </Container>
    </section>
  );
}
