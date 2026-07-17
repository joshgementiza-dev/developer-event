import Link from "next/link";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import type { OrganizerType } from "@/types/organizer";

type OrganizerCardProps = Omit<OrganizerType, "id">;

export default function OrganizerCard({
  name,
  logo,
  description,
  eventCount,
  href,
}: OrganizerCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {/* Logo */}
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-muted">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          sizes="48px"
          className="object-contain p-1"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
          {name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {eventCount} {eventCount === 1 ? "event" : "events"} hosted
        </p>
      </div>
    </Link>
  );
}
