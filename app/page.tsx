import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <FeaturedSection />
        <Footer />
      </main>
    </div>
  );
}
