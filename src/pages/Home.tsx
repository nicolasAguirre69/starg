import CarouselChannels from "@/components/layout/CarouselChanels";
import ContactForm from "@/components/layout/ContactForm";
import Description from "@/components/layout/Description";
import HeroSection from "@/components/layout/HeroSection";
import Navbar from "@/components/layout/Navbar";
import BenefitsGrid from "@/components/layout/BenefitsGrid";
import PlansCarousel from "@/components/layout/PlansCarousel";
import UserProtection from "@/components/layout/UserProtection";
import { homeBenefits } from "@/data/benefits";
import { tvPlans } from "@/data/plans";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <HeroSection />
      </div>

      <div className="flex flex-col">
        <Description />
      </div>

      <div className="bg-muted">
        <PlansCarousel plans={tvPlans} />
      </div>

      <CarouselChannels />

      <div className="bg-muted">
        <BenefitsGrid items={homeBenefits} />
      </div>

      <UserProtection />

      <div className="bg-muted">
        <ContactForm />
      </div>
    </>
  );
}