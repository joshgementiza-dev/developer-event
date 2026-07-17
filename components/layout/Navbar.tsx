import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Container from "./Container";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Events", href: "/events" },
  { label: "Categories", href: "/categories" },
  { label: "Speakers", href: "/speakers" },
  { label: "Organizers", href: "/organizers" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="shrink-0 text-lg font-bold tracking-tight">
            <span className="text-primary">Dev</span>Events
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <Link href="/login" className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
              Login
            </Link>
            <Link href="/register" className={cn(buttonVariants({ size: "sm" }))}>
              Sign Up
            </Link>
          </div>

          <MobileMenu links={navLinks} />
        </nav>
      </Container>
    </header>
  );
}
