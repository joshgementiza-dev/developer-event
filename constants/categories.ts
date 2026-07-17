export const CATEGORIES = [
  "Web Development",
  "AI & Machine Learning",
  "DevOps",
  "Cloud",
  "Mobile",
  "Cybersecurity",
  "Data Science",
] as const;

export type Category = (typeof CATEGORIES)[number];
