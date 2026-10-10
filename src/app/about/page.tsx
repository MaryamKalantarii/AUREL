import { AboutSection } from '@/components/about/AboutSection';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#070707] text-[#f5f2eb] overflow-x-hidden">
     <Header />    


      <AboutSection />

  <Footer />

    </main>
  );
}