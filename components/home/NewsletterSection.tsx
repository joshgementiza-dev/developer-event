import Container from "@/components/layout/Container";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="bg-card py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Stay in the Loop
          </h2>
          <p className="mt-3 max-w-md text-sm text-muted-foreground md:text-base">
            Get the latest developer events, workshops, and conference
            announcements delivered straight to your inbox.
          </p>

          <div className="mt-8 flex w-full justify-center">
            <NewsletterForm />
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </Container>
    </section>
  );
}
