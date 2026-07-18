"use client";

import ErrorState from "@/components/shared/ErrorState";
import Container from "@/components/layout/Container";

interface ErrorPageProps {
  reset: () => void;
}

export default function EventsError({ reset }: ErrorPageProps) {
  return (
    <div className="py-8 md:py-12">
      <Container>
        <ErrorState onRetry={reset} />
      </Container>
    </div>
  );
}
