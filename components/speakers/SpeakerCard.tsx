import Link from "next/link";
import Image from "next/image";
import { Mic } from "lucide-react";
import type { SpeakerType } from "@/types/speaker";

type SpeakerCardProps = Omit<SpeakerType, "id">;

export default function SpeakerCard({
  name,
  avatar,
  role,
  company,
  expertise,
  talkCount,
  href,
}: SpeakerCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/50 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {/* Avatar */}
      <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-border transition-shadow group-hover:ring-primary/40">
        <Image
          src={avatar}
          alt={name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="mt-4 font-semibold text-foreground transition-colors group-hover:text-primary">
        {name}
      </h3>

      {/* Role & Company */}
      <p className="mt-1 text-sm text-muted-foreground">
        {role}
        {company && (
          <>
            {" "}
            <span aria-hidden="true">·</span> {company}
          </>
        )}
      </p>

      {/* Expertise badge */}
      <span className="mt-3 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
        {expertise}
      </span>

      {/* Talk count */}
      <p className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
        <Mic className="h-3.5 w-3.5" aria-hidden="true" />
        {talkCount} {talkCount === 1 ? "talk" : "talks"}
      </p>
    </Link>
  );
}
