"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import Container from "@/components/layout/Container";
import CategoryFilter from "./CategoryFilter";
import ModeFilter from "./ModeFilter";
import DifficultyFilter from "./DifficultyFilter";
import DateFilter from "./DateFilter";
import ClearFiltersButton from "./ClearFiltersButton";

export default function EventsFilterBar() {
  const [clearCount, setClearCount] = useState(0);

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

          <CategoryFilter key={`category-${clearCount}`} />
          <ModeFilter key={`mode-${clearCount}`} />
          <DifficultyFilter key={`difficulty-${clearCount}`} />
          <DateFilter key={`date-${clearCount}`} />

          <ClearFiltersButton onClick={() => setClearCount((c) => c + 1)} />
        </div>
      </Container>
    </div>
  );
}
