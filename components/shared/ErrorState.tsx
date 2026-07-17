"use client";

import { AlertCircle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  className?: string;
}

export default function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load this content. Please try again.",
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col items-center justify-center py-16 text-center",
        className
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10">
        <AlertCircle className="h-7 w-7 text-red-500" aria-hidden="true" />
      </div>

      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>

      <p className="mt-2 max-w-xs text-sm text-muted-foreground">
        {description}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "mt-6 gap-2"
          )}
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          Try again
        </button>
      )}
    </div>
  );
}
