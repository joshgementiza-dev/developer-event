import Container from "@/components/layout/Container";
import SortDropdown from "./SortDropdown";

export default function EventsSortBar() {
  return (
    <div className="border-b border-border py-3 md:py-4">
      <Container>
        <div className="flex items-center justify-end">
          <SortDropdown />
        </div>
      </Container>
    </div>
  );
}
