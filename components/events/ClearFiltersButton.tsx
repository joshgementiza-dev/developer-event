"use client";

import { X } from "lucide-react";

interface ClearFiltersButtonProps {
  onClick: () => void;
}

export default function ClearFiltersButton({ onClick }: ClearFiltersButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-card hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <X className="h-3.5 w-3.5" aria-hidden="true" />
      Clear
    </button>
  );
}
