"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type DateFilterValue = "today" | "this-week" | "this-month";

const DATE_OPTIONS: { value: DateFilterValue; label: string }[] = [
  { value: "today", label: "Today" },
  { value: "this-week", label: "This Week" },
  { value: "this-month", label: "This Month" },
];

interface DateFilterProps {
  onChange?: (value: DateFilterValue | "") => void;
}

export default function DateFilter({ onChange }: DateFilterProps) {
  const [value, setValue] = useState<DateFilterValue | "">("");

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value as DateFilterValue | "";
    setValue(next);
    onChange?.(next);
  }

  return (
    <div className="relative">
      <select
        value={value}
        onChange={handleChange}
        aria-label="Filter by date"
        className={cn(
          "h-9 cursor-pointer appearance-none rounded-md border border-border bg-background",
          "pl-3 pr-8 text-sm transition-colors",
          "focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/50",
          value ? "text-foreground" : "text-muted-foreground"
        )}
      >
        <option value="">All Dates</option>
        {DATE_OPTIONS.map(({ value: v, label }) => (
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
