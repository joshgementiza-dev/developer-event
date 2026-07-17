import HeroSection from "@/components/home/HeroSection";
import SearchSection from "@/components/home/SearchSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedEventsSection from "@/components/events/FeaturedEventsSection";
import UpcomingEventsSection from "@/components/events/UpcomingEventsSection";
import FeaturedSpeakersSection from "@/components/speakers/FeaturedSpeakersSection";
import FeaturedOrganizersSection from "@/components/organizers/FeaturedOrganizersSection";
import CommunityCtaSection from "@/components/home/CommunityCtaSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SearchSection />
      <CategoriesSection />
      <FeaturedEventsSection />
      <UpcomingEventsSection />
      <FeaturedSpeakersSection />
      <FeaturedOrganizersSection />
      <CommunityCtaSection />
      <NewsletterSection />
    </>
  );
}
