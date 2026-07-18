"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import type { EventMode, EventDifficulty } from "@/types/event";
import Container from "@/components/layout/Container";
import CategoryFilter from "./CategoryFilter";
import ModeFilter from "./ModeFilter";
import DifficultyFilter from "./DifficultyFilter";
import DateFilter, { type DateFilterValue } from "./DateFilter";
import ClearFiltersButton from "./ClearFiltersButton";

interface EventsFilterBarProps {
  onCategoryChange?: (value: string) => void;
  onModeChange?: (value: EventMode | "") => void;
  onDifficultyChange?: (value: EventDifficulty | "") => void;
  onDateChange?: (value: DateFilterValue | "") => void;
  onClear?: () => void;
}

export default function EventsFilterBar({
  onCategoryChange,
  onModeChange,
  onDifficultyChange,
  onDateChange,
  onClear,
}: EventsFilterBarProps) {
  const [clearCount, setClearCount] = useState(0);

  function handleClear() {
    setClearCount((c) => c + 1);
    onClear?.();
  }

  return (
    <div className="border-b border-border py-3 md:py-4">
      <Container>
        <div
          role="group"
          aria-label="Event filters"
          className="flex flex-wrap items-center gap-2"
        >
          <span className="flex shrink-0 items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
            Filters
          </span>

          <CategoryFilter key={`category-${clearCount}`} onChange={onCategoryChange} />
          <ModeFilter key={`mode-${clearCount}`} onChange={onModeChange} />
          <DifficultyFilter key={`difficulty-${clearCount}`} onChange={onDifficultyChange} />
          <DateFilter key={`date-${clearCount}`} onChange={onDateChange} />

          <ClearFiltersButton onClick={handleClear} />
        </div>
      </Container>
    </div>
  );
}
