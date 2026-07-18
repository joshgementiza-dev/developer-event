"use client";

import { useState, useMemo, useEffect, type ReactNode } from "react";
import { SearchX, CalendarX } from "lucide-react";
import EmptyState from "@/components/shared/EmptyState";
import type { Category } from "@/constants/categories";
import type { EventMode, EventDifficulty, SortOption } from "@/types/event";
import type { DateFilterValue } from "./DateFilter";
import { MOCK_EVENTS } from "@/data/events";
import EventsSearchSection from "./EventsSearchSection";
import EventsFilterBar from "./EventsFilterBar";
import EventsSortBar from "./EventsSortBar";
import ResultsSummary from "./ResultsSummary";
import EventGrid from "./EventGrid";
import Pagination from "@/components/shared/Pagination";
import Container from "@/components/layout/Container";

const PAGE_SIZE = 9;

export default function EventsContent() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "">("");
  const [mode, setMode] = useState<EventMode | "">("");
  const [difficulty, setDifficulty] = useState<EventDifficulty | "">("");
  const [dateFilter, setDateFilter] = useState<DateFilterValue | "">("");
  const [sort, setSort] = useState<SortOption>("upcoming");
  const [page, setPage] = useState(1);

  const filteredEvents = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = MOCK_EVENTS.filter((e) => {
      if (category && e.category !== category) return false;
      if (mode && e.mode !== mode) return false;
      if (difficulty && e.difficulty !== difficulty) return false;
      if (dateFilter) {
        const eventDate = new Date(e.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (dateFilter === "today") {
          const tomorrow = new Date(today);
          tomorrow.setDate(today.getDate() + 1);
          if (!(eventDate >= today && eventDate < tomorrow)) return false;
        } else if (dateFilter === "this-week") {
          const weekEnd = new Date(today);
          weekEnd.setDate(today.getDate() + 7);
          if (!(eventDate >= today && eventDate <= weekEnd)) return false;
        } else if (dateFilter === "this-month") {
          if (
            !(
              eventDate.getMonth() === today.getMonth() &&
              eventDate.getFullYear() === today.getFullYear()
            )
          )
            return false;
        }
      }
      if (q) {
        if (e.title.toLowerCase().includes(q)) return true;
        if (e.description?.toLowerCase().includes(q)) return true;
        if (e.tags?.some((tag) => tag.toLowerCase().includes(q))) return true;
        return false;
      }
      return true;
    });

    if (sort === "upcoming") {
      filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (sort === "newest") {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sort === "alphabetical") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [query, category, mode, difficulty, dateFilter, sort]);

  useEffect(() => {
    setPage(1);
  }, [query, category, mode, difficulty, dateFilter, sort]);

  const pageCount = Math.max(1, Math.ceil(filteredEvents.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const pagedEvents = filteredEvents.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const filterCount = [category, mode, difficulty, dateFilter].filter(Boolean).length;

  const emptyState: ReactNode = (() => {
    if (MOCK_EVENTS.length === 0) {
      return (
        <EmptyState
          icon={CalendarX}
          title="No events available"
          description="Check back later for upcoming events."
        />
      );
    }
    if (filteredEvents.length === 0) {
      return (
        <EmptyState
          icon={SearchX}
          title="No events found"
          description="Try adjusting your search or filters to find what you're looking for."
          action={{ label: "Clear Filters", onClick: handleClear }}
        />
      );
    }
    return undefined;
  })();

  function handleClear() {
    setCategory("");
    setMode("");
    setDifficulty("");
    setDateFilter("");
  }

  return (
    <>
      <EventsSearchSection value={query} onChange={setQuery} />

      <EventsFilterBar
        onCategoryChange={(v) => setCategory(v as Category | "")}
        onModeChange={setMode}
        onDifficultyChange={setDifficulty}
        onDateChange={setDateFilter}
        onClear={handleClear}
      />

      <EventsSortBar value={sort} onChange={setSort} />

      <div className="border-b border-border py-3 md:py-4">
        <Container>
          <ResultsSummary
            total={filteredEvents.length}
            query={query.trim() || undefined}
            filterCount={filterCount}
          />
        </Container>
      </div>

      <EventGrid events={pagedEvents} emptyState={emptyState} />

      {filteredEvents.length > 0 && (
        <div className="py-8 md:py-10">
          <Container>
            <Pagination page={safePage} pageCount={pageCount} onPageChange={setPage} />
          </Container>
        </div>
      )}
    </>
  );
}
