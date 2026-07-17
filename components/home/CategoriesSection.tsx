import Link from "next/link";
import {
  Globe,
  Brain,
  GitBranch,
  Cloud,
  Smartphone,
  ShieldCheck,
  BarChart2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/layout/Container";
import CategoryCard from "./CategoryCard";

interface CategoryItem {
  name: string;
  icon: LucideIcon;
  eventCount: number;
  href: string;
}

const CATEGORY_DATA: CategoryItem[] = [
  { name: "Web Development", icon: Globe, eventCount: 142, href: "/categories/web-development" },
  { name: "AI & Machine Learning", icon: Brain, eventCount: 89, href: "/categories/ai-ml" },
  { name: "DevOps", icon: GitBranch, eventCount: 67, href: "/categories/devops" },
  { name: "Cloud", icon: Cloud, eventCount: 58, href: "/categories/cloud" },
  { name: "Mobile", icon: Smartphone, eventCount: 45, href: "/categories/mobile" },
  { name: "Cybersecurity", icon: ShieldCheck, eventCount: 38, href: "/categories/cybersecurity" },
  { name: "Data Science", icon: BarChart2, eventCount: 72, href: "/categories/data-science" },
];

export default function CategoriesSection() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Browse by Category
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Explore events by the technologies and topics you care about.
            </p>
          </div>
          <Link
            href="/categories"
            className="hidden shrink-0 text-sm text-primary hover:underline sm:block"
            aria-label="View all categories"
          >
            View all →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORY_DATA.map((cat) => (
            <CategoryCard
              key={cat.name}
              name={cat.name}
              icon={cat.icon}
              eventCount={cat.eventCount}
              href={cat.href}
            />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link href="/categories" className="text-sm text-primary hover:underline">
            View all categories →
          </Link>
        </div>
      </Container>
    </section>
  );
}
