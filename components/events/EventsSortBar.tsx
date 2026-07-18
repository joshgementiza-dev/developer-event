"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import SortDropdown from "./SortDropdown";
import type { SortOption } from "@/types/event";

export default function EventsSortBar() {
  const [sort, setSort] = useState<SortOption>("upcoming");

  return (
    <div className="border-b border-border py-3 md:py-4">
      <Container>
        <div className="flex items-center justify-end">
          <SortDropdown value={sort} onChange={setSort} />
        </div>
      </Container>
    </div>
  );
}
