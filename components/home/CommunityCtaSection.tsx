import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/layout/Container";

export default function CommunityCtaSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="h-[500px] w-[500px] rounded-full bg-primary/15 blur-3xl" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-2xl text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            For Organizers
          </div>

          {/* Headline */}
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Build Your Developer Community
          </h2>

          {/* Description */}
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            Reach thousands of developers by publishing your conferences,
            workshops, and hackathons on DevEvents. Grow your audience and
            connect with the right people.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/organizer/apply"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 gap-2 px-8"
              )}
            >
              Apply as Organizer
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/organizers"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "h-11 px-8"
              )}
            >
              See Featured Organizers
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
