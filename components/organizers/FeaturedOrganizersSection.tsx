import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import OrganizerCard from "./OrganizerCard";
import type { OrganizerType } from "@/types/organizer";

const FEATURED_ORGANIZERS: OrganizerType[] = [
  {
    id: "1",
    name: "React Community",
    logo: "https://picsum.photos/seed/org-react/200/200",
    description:
      "The official React community organizing conferences, workshops, and local meetups worldwide for frontend developers.",
    eventCount: 48,
    href: "/organizers/react-community",
  },
  {
    id: "2",
    name: "CNCF",
    logo: "https://picsum.photos/seed/org-cncf/200/200",
    description:
      "Cloud Native Computing Foundation hosts KubeCon and dozens of cloud-native events across the globe each year.",
    eventCount: 32,
    href: "/organizers/cncf",
  },
  {
    id: "3",
    name: "GDG Community",
    logo: "https://picsum.photos/seed/org-gdg/200/200",
    description:
      "Google Developer Groups organize local and global events covering Android, web, cloud, and machine learning.",
    eventCount: 120,
    href: "/organizers/gdg-community",
  },
  {
    id: "4",
    name: "Open Source Collective",
    logo: "https://picsum.photos/seed/org-osc/200/200",
    description:
      "A fiscal host supporting open source communities with hackathons, sprints, and contributor summits.",
    eventCount: 17,
    href: "/organizers/open-source-collective",
  },
  {
    id: "5",
    name: "DevOps Days",
    logo: "https://picsum.photos/seed/org-devopsdays/200/200",
    description:
      "A worldwide series of technical conferences covering topics of software development, IT infrastructure, and culture.",
    eventCount: 64,
    href: "/organizers/devops-days",
  },
  {
    id: "6",
    name: "JS Nation",
    logo: "https://picsum.photos/seed/org-jsnation/200/200",
    description:
      "The largest JavaScript conference platform, running remote and in-person events for the global JS community.",
    eventCount: 23,
    href: "/organizers/js-nation",
  },
];

export default function FeaturedOrganizersSection() {
  return (
    <section className="bg-card py-12 md:py-16">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Featured Organizers
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Communities and organizations powering the developer event scene.
            </p>
          </div>
          <Link
            href="/organizers"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "hidden shrink-0 sm:flex"
            )}
          >
            View All Organizers
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_ORGANIZERS.map(({ id, ...props }) => (
            <OrganizerCard key={id} {...props} />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/organizers"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}
          >
            View All Organizers
          </Link>
        </div>
      </Container>
    </section>
  );
}
