import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin, Bookmark } from "lucide-react";
import type { EventType } from "@/types/event";

const MODE_STYLES: Record<EventType["mode"], string> = {
  "in-person": "bg-green-500/10 text-green-500",
  online: "bg-primary/10 text-primary",
  hybrid: "bg-amber-500/10 text-amber-500",
};

const MODE_LABELS: Record<EventType["mode"], string> = {
  "in-person": "In Person",
  online: "Online",
  hybrid: "Hybrid",
};

type EventCardProps = Omit<EventType, "id">;

export default function EventCard({
  title,
  banner,
  date,
  time,
  location,
  mode,
  price,
  href,
}: EventCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      {/* Banner */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={banner}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* z-10 keeps button above stretched-link overlay */}
        <button
          type="button"
          aria-label="Save event"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
        >
          <Bookmark className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Badges — z-10 keeps them above stretched-link overlay */}
        <div className="relative z-10 mb-3 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${MODE_STYLES[mode]}`}
          >
            {MODE_LABELS[mode]}
          </span>
          {price === null ? (
            <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500">
              Free
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">
              ${price}
            </span>
          )}
        </div>

        {/* Title — stretched link makes the entire card surface clickable */}
        <h3 className="line-clamp-2 font-semibold text-foreground transition-colors group-hover:text-primary">
          <Link
            href={href}
            className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/50"
          >
            {title}
          </Link>
        </h3>

        {/* Date & time */}
        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {time}
          </span>
        </div>

        {/* Location */}
        <div className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="line-clamp-1">{location}</span>
        </div>
      </div>
    </article>
  );
}
