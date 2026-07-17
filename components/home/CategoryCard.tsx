import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  eventCount: number;
  href: string;
}

export default function CategoryCard({
  name,
  icon: Icon,
  eventCount,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-primary/50 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{eventCount} events</p>
      </div>
    </Link>
  );
}
