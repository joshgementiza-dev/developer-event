import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import SpeakerCard from "./SpeakerCard";
import type { SpeakerType } from "@/types/speaker";

const FEATURED_SPEAKERS: SpeakerType[] = [
  {
    id: "1",
    name: "Alice Chen",
    avatar: "https://picsum.photos/seed/speaker-alice/200/200",
    role: "Staff Engineer",
    company: "Vercel",
    expertise: "React & Next.js",
    talkCount: 24,
    href: "/speakers/alice-chen",
  },
  {
    id: "2",
    name: "Marcus Rivera",
    avatar: "https://picsum.photos/seed/speaker-marcus/200/200",
    role: "Principal Engineer",
    company: "Google",
    expertise: "TypeScript",
    talkCount: 18,
    href: "/speakers/marcus-rivera",
  },
  {
    id: "3",
    name: "Priya Nair",
    avatar: "https://picsum.photos/seed/speaker-priya/200/200",
    role: "AI Research Lead",
    company: "Meta",
    expertise: "AI & Machine Learning",
    talkCount: 31,
    href: "/speakers/priya-nair",
  },
  {
    id: "4",
    name: "James Okafor",
    avatar: "https://picsum.photos/seed/speaker-james/200/200",
    role: "Senior DevOps Engineer",
    company: "AWS",
    expertise: "Kubernetes & Cloud",
    talkCount: 12,
    href: "/speakers/james-okafor",
  },
  {
    id: "5",
    name: "Sofia Andersson",
    avatar: "https://picsum.photos/seed/speaker-sofia/200/200",
    role: "Security Architect",
    company: "Cloudflare",
    expertise: "Cybersecurity",
    talkCount: 9,
    href: "/speakers/sofia-andersson",
  },
  {
    id: "6",
    name: "Kenji Tanaka",
    avatar: "https://picsum.photos/seed/speaker-kenji/200/200",
    role: "Platform Engineer",
    company: "Stripe",
    expertise: "Distributed Systems",
    talkCount: 15,
    href: "/speakers/kenji-tanaka",
  },
  {
    id: "7",
    name: "Amara Osei",
    avatar: "https://picsum.photos/seed/speaker-amara/200/200",
    role: "Developer Advocate",
    company: "GitHub",
    expertise: "Open Source",
    talkCount: 22,
    href: "/speakers/amara-osei",
  },
  {
    id: "8",
    name: "Leo Brandt",
    avatar: "https://picsum.photos/seed/speaker-leo/200/200",
    role: "Mobile Lead",
    company: "Microsoft",
    expertise: "React Native",
    talkCount: 7,
    href: "/speakers/leo-brandt",
  },
];

export default function FeaturedSpeakersSection() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Featured Speakers
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Learn from experts shaping the developer ecosystem.
            </p>
          </div>
          <Link
            href="/speakers"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "hidden shrink-0 sm:flex"
            )}
          >
            View All Speakers
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {FEATURED_SPEAKERS.map(({ id, ...props }) => (
            <SpeakerCard key={id} {...props} />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/speakers"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}
          >
            View All Speakers
          </Link>
        </div>
      </Container>
    </section>
  );
}
