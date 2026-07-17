"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventsSearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function EventsSearchBar({
  value,
  onChange,
  placeholder = "Search events by name or keyword...",
  className,
}: EventsSearchBarProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <label htmlFor="events-search" className="sr-only">
        Search events
      </label>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <input
        id="events-search"
        type="search"
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
        autoComplete="off"
        className="h-11 w-full rounded-lg border border-border bg-background pl-9 pr-4 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/50 md:h-12"
      />
    </div>
  );
}
