import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function HeroActions() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Link
        href="/events"
        className={cn(buttonVariants({ size: "lg" }), "h-11 gap-2 px-8")}
      >
        Browse Events
        <ArrowRight className="h-4 w-4" />
      </Link>
      <Link
        href="/organizer/apply"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "h-11 px-8"
        )}
      >
        Become an Organizer
      </Link>
    </div>
  );
}
