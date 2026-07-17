"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center gap-3 text-center"
      >
        <CheckCircle2
          className="h-10 w-10 text-green-500"
          aria-hidden="true"
        />
        <p className="text-base font-medium text-foreground">
          Thank you for subscribing!
        </p>
        <p className="text-sm text-muted-foreground">
          We&apos;ll keep you updated on the latest developer events.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="form"
      aria-label="Newsletter subscription"
      noValidate
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <div className="flex flex-1 flex-col gap-1.5">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          placeholder="you@example.com"
          autoComplete="email"
          aria-describedby={error ? "newsletter-error" : undefined}
          aria-invalid={error ? "true" : undefined}
          className="h-10 rounded-lg border border-border bg-input px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:ring-offset-2 focus:ring-offset-background"
        />
        {error && (
          <p
            id="newsletter-error"
            role="alert"
            className="text-xs text-destructive"
          >
            {error}
          </p>
        )}
      </div>

      <button
        type="submit"
        className={cn(
          buttonVariants({ size: "default" }),
          "h-10 shrink-0 px-6"
        )}
      >
        Subscribe
      </button>
    </form>
  );
}
