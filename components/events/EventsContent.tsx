"use client";

import { useState, useMemo } from "react";
import type { Category } from "@/constants/categories";
import type { EventMode, EventDifficulty } from "@/types/event";
import { MOCK_EVENTS } from "@/data/events";
import EventsSearchSection from "./EventsSearchSection";
import EventsFilterBar from "./EventsFilterBar";
import EventsSortBar from "./EventsSortBar";
import ResultsSummary from "./ResultsSummary";
import EventGrid from "./EventGrid";
import Container from "@/components/layout/Container";

export default function EventsContent() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "">("");
  const [mode, setMode] = useState<EventMode | "">("");
  const [difficulty, setDifficulty] = useState<EventDifficulty | "">("");

  const filteredEvents = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MOCK_EVENTS.filter((e) => {
      if (category && e.category !== category) return false;
      if (mode && e.mode !== mode) return false;
      if (difficulty && e.difficulty !== difficulty) return false;
      if (q) {
        if (e.title.toLowerCase().includes(q)) return true;
        if (e.description?.toLowerCase().includes(q)) return true;
        if (e.tags?.some((tag) => tag.toLowerCase().includes(q))) return true;
        return false;
      }
      return true;
    });
  }, [query, category, mode, difficulty]);

  const filterCount = [category, mode, difficulty].filter(Boolean).length;

  function handleClear() {
    setCategory("");
    setMode("");
    setDifficulty("");
  }

  return (
    <>
      <EventsSearchSection value={query} onChange={setQuery} />

      <EventsFilterBar
        onCategoryChange={(v) => setCategory(v as Category | "")}
        onModeChange={setMode}
        onDifficultyChange={setDifficulty}
        onClear={handleClear}
      />

      <EventsSortBar />

      <div className="border-b border-border py-3 md:py-4">
        <Container>
          <ResultsSummary
            total={filteredEvents.length}
            query={query.trim() || undefined}
            filterCount={filterCount}
          />
        </Container>
      </div>

      <EventGrid events={filteredEvents} />
    </>
  );
}
