"use client";

import Container from "@/components/layout/Container";
import SortDropdown from "./SortDropdown";
import type { SortOption } from "@/types/event";

interface EventsSortBarProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function EventsSortBar({ value, onChange }: EventsSortBarProps) {
  return (
    <div className="border-b border-border py-3 md:py-4">
      <Container>
        <div className="flex items-center justify-end">
          <SortDropdown value={value} onChange={onChange} />
        </div>
      </Container>
    </div>
  );
}
