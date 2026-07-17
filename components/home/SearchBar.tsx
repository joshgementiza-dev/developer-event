"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { CATEGORIES } from "@/constants/categories";

const fieldClass =
  "h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/50";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // MVP: search navigation to be wired when the events page is ready
  }

  return (
    <form
      onSubmit={handleSearch}
      role="search"
      aria-label="Search developer events"
      className="rounded-xl border border-border bg-card p-3 shadow-sm md:p-4"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        {/* Search input */}
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events, speakers, or organizers..."
            aria-label="Search query"
            className={cn(fieldClass, "pl-9")}
          />
        </div>

        {/* Category select */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter by category"
          className={cn(fieldClass, "md:w-48")}
        >
          <option value="">All Categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Location select — disabled, future-ready; hidden on mobile to keep form compact */}
        <select
          disabled
          aria-label="Filter by location (coming soon)"
          title="Location filter coming soon"
          className={cn(fieldClass, "hidden cursor-not-allowed opacity-50 md:block md:w-40")}
        >
          <option>All Locations</option>
        </select>

        {/* Submit */}
        <button
          type="submit"
          aria-label="Search events"
          className={cn(buttonVariants(), "h-10 shrink-0 gap-2 px-6")}
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          Search
        </button>
      </div>
    </form>
  );
}
