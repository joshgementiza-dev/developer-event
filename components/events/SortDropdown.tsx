"use client";

import { ChevronDown } from "lucide-react";
import type { SortOption } from "@/types/event";
import { cn } from "@/lib/utils";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "upcoming", label: "Upcoming" },
  { value: "newest", label: "Newest" },
  { value: "alphabetical", label: "Alphabetical" },
];

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    onChange(e.target.value as SortOption);
  }

  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="events-sort"
        className="shrink-0 text-sm text-muted-foreground"
      >
        Sort by
      </label>
      <div className="relative">
        <select
          id="events-sort"
          value={value}
          onChange={handleChange}
          className={cn(
            "h-9 cursor-pointer appearance-none rounded-md border border-border bg-background",
            "pl-3 pr-8 text-sm text-foreground transition-colors",
            "focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/50"
          )}
        >
          {SORT_OPTIONS.map(({ value: v, label }) => (
            <option key={v} value={v}>
              {label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
