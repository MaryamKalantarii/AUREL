import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero/Hero";
import { CraftContainer } from "@/components/sections/Craft/CraftContainer";
import { EditorialCampaign } from "@/components/sections/EditorialCampaign";
import { CollectionSection } from "@/components/sections/Collection/CollectionSection";
import { SavoirFaire } from "@/components/sections/SavoirFaire/SavoirFaire";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-[#080706] min-h-screen overflow-x-hidden">
      {/* 1. Header */}
      <Header />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Craft & Material */}
      <CraftContainer />

      {/* 4. Editorial Campaign */}
      <EditorialCampaign />

      {/* 5. Collection Section */}
      <CollectionSection />

      {/* 6. Savoir-Faire */}
      <SavoirFaire />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}