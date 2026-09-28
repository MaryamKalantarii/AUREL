"use client";

import { useLenis } from "@/hooks/useLenis";
import { Header } from "@/components/layout/Header"; 
import { CollectionHero } from "@/components/collection/CollectionHero";
import { EditorialStory } from "@/components/collection/EditorialStory";
import { Newsletter } from "@/components/collection/Newsletter";
// import { Footer } from "@/components/Footer"; 
import { TriptychShowcase } from "@/components/collection/TriptychShowcase";
export default function CollectionPage() {
  //Enabling Lenis smooth scroll for the collection page
  useLenis();

  return (
    <main className="bg-[#111111] text-[#F7F5F0] min-h-screen selection:bg-[#F7F5F0] selection:text-[#111111]">
      <Header />
      <CollectionHero />
      <TriptychShowcase />
      <EditorialStory />
      <Newsletter />
      {/* <Footer /> */}
    </main>
  );
}

