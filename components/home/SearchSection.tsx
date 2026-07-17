import Container from "@/components/layout/Container";
import SearchBar from "./SearchBar";

export default function SearchSection() {
  return (
    <section aria-label="Event search" className="py-6 md:py-8">
      <Container>
        <SearchBar />
      </Container>
    </section>
  );
}
