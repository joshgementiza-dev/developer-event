import { SlidersHorizontal } from "lucide-react";
import Container from "@/components/layout/Container";
import CategoryFilter from "./CategoryFilter";
import ModeFilter from "./ModeFilter";
import DifficultyFilter from "./DifficultyFilter";

export default function EventsFilterBar() {
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

          <CategoryFilter />

          <ModeFilter />

          <DifficultyFilter />

          {/* Task 3.5 — Date Filter */}
          {/* Task 3.6 — Clear Filters Button */}
        </div>
      </Container>
    </div>
  );
}
