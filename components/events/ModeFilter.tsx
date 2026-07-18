"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { EventMode } from "@/types/event";
import { cn } from "@/lib/utils";

const MODE_OPTIONS: { value: EventMode; label: string }[] = [
  { value: "in-person", label: "In-Person" },
  { value: "online", label: "Online" },
  { value: "hybrid", label: "Hybrid" },
];

interface ModeFilterProps {
  onChange?: (value: EventMode | "") => void;
}

export default function ModeFilter({ onChange }: ModeFilterProps) {
  const [value, setValue] = useState<EventMode | "">("");

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value as EventMode | "";
    setValue(next);
    onChange?.(next);
  }

  return (
    <div className="relative">
      <select
        value={value}
        onChange={handleChange}
        aria-label="Filter by event mode"
        className={cn(
          "h-9 cursor-pointer appearance-none rounded-md border border-border bg-background",
          "pl-3 pr-8 text-sm transition-colors",
          "focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/50",
          value ? "text-foreground" : "text-muted-foreground"
        )}
      >
        <option value="">All Modes</option>
        {MODE_OPTIONS.map(({ value: v, label }) => (
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
  );
}
