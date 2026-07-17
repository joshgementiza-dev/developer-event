import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface EmptyStateAction {
  label: string;
  href: string;
}

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: EmptyStateAction;
  className?: string;
}

export default function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center justify-center py-16 text-center",
        className
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
      </div>

      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>

      {description && (
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          {description}
        </p>
      )}

      {action && (
        <Link
          href={action.href}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "mt-6"
          )}
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
