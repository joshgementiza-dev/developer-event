import Container from "@/components/layout/Container";
import HeroActions from "./HeroActions";

const stats = [
  { label: "Developer Events", value: "500+" },
  { label: "Expert Speakers", value: "200+" },
  { label: "Cities Covered", value: "50+" },
  { label: "Categories", value: "30+" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Purple glow at top */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-full max-w-3xl -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              The Developer Event Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Discover the Best{" "}
            <span className="text-primary">Developer Events</span>
          </h1>

          {/* Supporting text */}
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A platform for conferences, workshops, hackathons, and meetups. Find
            your next developer community event.
          </p>

          {/* CTA buttons */}
          <HeroActions />

          {/* Decorative stats grid */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 rounded-xl border border-border bg-card/50 px-4 py-5"
              >
                <span className="text-2xl font-bold text-foreground">{value}</span>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
