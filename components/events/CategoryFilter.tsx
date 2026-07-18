"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CATEGORIES } from "@/constants/categories";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  onChange?: (value: string) => void;
}

export default function CategoryFilter({ onChange }: CategoryFilterProps) {
  const [value, setValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value;
    setValue(next);
    onChange?.(next);
  }

  return (
    <div className="relative">
      <select
        value={value}
        onChange={handleChange}
        aria-label="Filter by category"
        className={cn(
          "h-9 cursor-pointer appearance-none rounded-md border border-border bg-background",
          "pl-3 pr-8 text-sm transition-colors",
          "focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/50",
          value ? "text-foreground" : "text-muted-foreground"
        )}
      >
        <option value="">All Categories</option>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
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
