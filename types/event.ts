export type EventMode = "in-person" | "online" | "hybrid";

export interface EventType {
  id: string;
  title: string;
  banner: string;
  date: string;
  time: string;
  location: string;
  mode: EventMode;
  price: number | null;
  href: string;
}
