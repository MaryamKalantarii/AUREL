'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// EDITORIAL MAGAZINE GALLERY DATA
interface EditorialItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string; // for masonry-like variation
  description: string;
}

const magazineItems: EditorialItem[] = [
  {
    id: '1',
    title: 'The Solitaire Facet',
    category: 'HAUTE JOAILLERIE',
    image: '/images/about/archive1.jpg',
    aspect: 'col-span-12 lg:col-span-8 h-[550px]',
    description: 'Precision-cut crystal prisms engineered to refract soft ambient warmth across architectural planes.',
  },
  {
    id: '2',
    title: 'Satin Brass Luminaire',
    category: 'ARCHITECTURAL EDITION',
    image: '/images/about/archive2.jpg',
    aspect: 'col-span-12 lg:col-span-4 h-[550px]',
    description: 'Hand-brushed 24K gold nano-coating applied to high-density structural alloys.',
  },
  {
    id: '3',
    title: 'Monolithic Reflection',
    category: 'BESPOKE INSTALLATION',
    image: '/images/about/archive3.jpg',
    aspect: 'col-span-12 lg:col-span-5 h-[480px]',
    description: 'Seamless joinery concealing all internal fixtures for pure sculptural elevation.',
  },
  {
    id: '4',
    title: 'Optical Refraction',
    category: 'CRYSTAL METRICS',
    image: '/images/about/archive4.jpg',
    aspect: 'col-span-12 lg:col-span-7 h-[480px]',
    description: 'Calibrated optical geometry casting delicate shadow paths across minimalist interiors.',
  },
];

// دیتای چندبعدی متریال‌ها و نظرات
interface CraftDetail {
  id: string;
  number: string;
  title: string;
  materialName: string;
  materialCode: string;
  materialDesc: string;
  image: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  accentGlow: string;
}

const craftData: CraftDetail[] = [
  {
    id: 'brass',
    number: '01',
    title: 'Tactile Architecture',
    materialName: 'Hand-Brushed Solid Brass',
    materialCode: 'BR-2200K',
    materialDesc:
      'Solid brass components with a handcrafted finish and a nano-coating for enhanced resistance to oxidation.',
    image: '/images/about/tactile1.png',
    quote:
      'The tactile weight of the hand-brushed brass and the warm ambient glow completely transformed our space.',
    author: 'Elena Rostova',
    role: 'Lead Interior Architect',
    location: 'Milan',
    accentGlow:
      'from-[#D8C2A8]/20 via-[#D8C2A8]/5 to-transparent',
  },
  {
    id: 'glass',
    number: '02',
    title: 'Optical Refraction',
    materialName: 'Fluted Precision Glass',
    materialCode: 'GL-OPTIC-X',
    materialDesc:
      'Optical crystal glass with precisely calibrated light refraction, creating soft and delicate patterns of light and shadow.',
    image: '/images/about/tactile2.png',
    quote:
      'Aurel brings a rare balance of precision optics and sculptural elegance. The light diffusion feels exceptionally natural.',
    author: 'Marcus Vance',
    role: 'Design Principal, Studio Atelier',
    location: 'Zurich',
    accentGlow:
      'from-[#E2D5C3]/20 via-[#E2D5C3]/5 to-transparent',
  },
  {
    id: 'frame',
    number: '03',
    title: 'Monolithic Structure',
    materialName: 'Anodized Dark Frame',
    materialCode: 'AL-BLK-90',
    materialDesc:
      'A matte anodized aluminum frame featuring a seamless, monolithic construction with no visible external screws or fasteners.',
    image: '/images/about/tactile3.png',
    quote:
      'Minimalism executed with supreme craftsmanship. Each fixture feels like a permanent piece of architectural art.',
    author: 'Sophie Laurent',
    role: 'Private Collector',
    location: 'Paris',
    accentGlow:
      'from-[#8A857D]/20 via-[#8A857D]/5 to-transparent',
  },
];
// دیتای تابلوی آکاردئونی سکشن پایانی (Momento Legal Style)
interface AccordionPanel {
  id: string;
  number: string;
  subtitle: string;
  title: string;
  description: string;
  tag: string;
  ctaText: string;
}

const panelsData: AccordionPanel[] = [
  {
    id: 'bespoke',
    number: '01',
    subtitle: 'COMMISSION WORK',
    title: 'Bespoke High Jewelry Lighting',
    description: 'همکاری مستقیم با معماران و کلکسیونرهای خصوصی جهت طراحی و ساخت قطعات سفارشی تک‌نسخه با روکش طلا و متریال‌های نادر.',
    tag: 'PRIVATE CLIENTS',
    ctaText: 'Start Commission',
  },
  {
    id: 'catalog',
    number: '02',
    subtitle: 'ARCHITECTURAL DOSSIER',
    title: 'Lookbook & Technical Specs',
    description: 'دانلود کاتالوگ جامع، فایل‌های سهبعدی CAD/BIM و جزئیات کالیبراسیون نور برای پروژه‌های معماری فاخر.',
    tag: 'SPECIFICATIONS',
    ctaText: 'Download Dossier',
  },
  {
    id: 'atelier',
    number: '03',
    subtitle: 'VISIT OUR STUDIO',
    title: 'Private Atelier Appointments',
    description: 'تجربه لمس متریال‌ها و مشاهده کیفیت پخش نور در استودیوی اختصاصی اورل با تعیین وقت قبلی.',
    tag: 'APPOINTMENTS',
    ctaText: 'Book a Private Visit',
  },
];

export const AboutSection = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroPinnedRef = useRef<HTMLDivElement>(null);
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const streakRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // سکشن Horizontal Showcase Section
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);

  // استیت برای سکشن 04 (Materiality & Critique)
  const [activeIndex, setActiveIndex] = useState(0);

  // استیت برای سکشن پایانی (Momento Legal Accordion)
  const [activePanel, setActivePanel] = useState<number>(0);

  // Interactive spotlight state
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleSpotlightMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlightRef.current) return;
    const rect = spotlightRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(
    () => {
      if (!mounted || !containerRef.current || !heroPinnedRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const letters = containerRef.current.querySelectorAll('.aurel-letter');

      // 1. INITIAL STATES (SECTION 1)
      gsap.set(titleWrapperRef.current, { opacity: 0, scale: 0.94 });
      gsap.set(letters, { y: 45, opacity: 0, filter: 'blur(14px)', scale: 1.02 });
      gsap.set(subtitleRef.current, { y: 18, opacity: 0, letterSpacing: '0.9em' });
      gsap.set(streakRef.current, { opacity: 0, xPercent: -80 });
      gsap.set(flareRef.current, { opacity: 0, scale: 0.5 });

      // 2. CINEMATIC INTRO TIMELINE
      const intro = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          ScrollTrigger.refresh();
        },
      });

      intro
        .to(titleWrapperRef.current, { opacity: 1, scale: 1, duration: 1.6 })
        .to(
          letters,
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            duration: 1.6,
            stagger: { each: 0.08, from: 'center' },
            ease: 'power4.out',
          },
          '-=1.2'
        )
        .to(subtitleRef.current, { y: 0, opacity: 1, letterSpacing: '0.65em', duration: 1.3 }, '-=1')
        .to(streakRef.current, { opacity: 0.75, xPercent: 0, duration: 1.5, ease: 'power3.inOut' }, '-=1.1')
        .to(flareRef.current, { opacity: 1, scale: 1, duration: 1.1 }, '-=1');

      // 3. AMBIENT IDLE ANIMATIONS
      if (streakRef.current) {
        gsap.to(streakRef.current, {
          opacity: 0.42,
          scale: 1.01,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (flareRef.current) {
        gsap.to(flareRef.current, {
          scale: 1.12,
          opacity: 0.72,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // 4. SCROLL TIMELINE (SECTION 1)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroPinnedRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      scrollTl
        .fromTo(titleWrapperRef.current, { opacity: 1, scale: 1, yPercent: 0 }, { opacity: 0, scale: 1.12, yPercent: -10, ease: 'power1.inOut' }, 0)
        .fromTo(streakRef.current, { opacity: 0.75, xPercent: 0, rotation: 0 }, { opacity: 0, xPercent: 60, rotation: -12, ease: 'power1.inOut' }, 0)
        .fromTo(flareRef.current, { opacity: 1, scale: 1, x: 0, y: 0 }, { opacity: 0, scale: 1.3, x: 80, y: -40, ease: 'power1.inOut' }, 0)
        .fromTo(glowRef.current, { opacity: 0.1, scale: 1 }, { opacity: 0.8, scale: 1.8, ease: 'none' }, 0);

      // 5. SECTION 2: HORIZONTAL SCROLL
      if (horizontalSectionRef.current && horizontalTrackRef.current) {
        const track = horizontalTrackRef.current;
        const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 120);

        gsap.to(track, {
          x: getScrollAmount,
          ease: 'none',
          scrollTrigger: {
            trigger: horizontalSectionRef.current,
            start: 'top top',
            end: () => `+=${track.scrollWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        const cardImages = track.querySelectorAll('.gallery-img');
        cardImages.forEach((img) => {
          gsap.fromTo(
            img,
            { scale: 1.2 },
            {
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: horizontalSectionRef.current,
                start: 'top top',
                end: () => `+=${track.scrollWidth}`,
                scrub: true,
              },
            }
          );
        });
      }
    },
    { scope: containerRef, dependencies: [mounted] }
  );

  if (!mounted) {
    return <div className="w-full min-h-screen bg-[#060605]" />;
  }

  const activeCraft = craftData[activeIndex];

  return (
    <div ref={containerRef} className="w-full bg-[#060605] text-[#F7F5F0] select-none overflow-x-hidden">
      {/* HEADER */}
  
      {/* FIXED META */}
      <div className="fixed left-8 top-1/2 z-40 -translate-y-1/2 font-sans text-[10px] font-light tracking-[0.3em] text-[#7A756D] sm:left-14">
        <span>01</span>
        <span className="mt-1 block text-[9px] text-[#4A4742]">ABOUT</span>
      </div>

      <div className="fixed right-8 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-6 font-sans text-[9px] font-light tracking-[0.4em] text-[#7A756D] sm:right-14">
        <span className="rotate-90 uppercase">SCROLL</span>
        <div className="relative h-12 w-px bg-white/10">
          <div className="absolute left-0 top-0 h-3 w-px bg-[#D8C2A8] animate-bounce" />
        </div>
        <div className="h-1.5 w-1.5 rounded-full border border-white/30" />
      </div>

      {/* SECTION 1: HERO */}
      <section ref={heroPinnedRef} className="relative h-screen w-full overflow-hidden">
        <div
          ref={glowRef}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[38vw] w-[38vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8C2A8]/[0.07] blur-[140px]"
        />

        <div className="flex h-full items-center justify-center">
          <div ref={titleWrapperRef} className="relative cursor-default text-center will-change-transform">
            <h1 className="relative z-10 flex items-center justify-center whitespace-nowrap font-serif text-[22vw] font-extralight uppercase leading-none tracking-[0.06em] text-transparent bg-clip-text bg-gradient-to-b from-[#F3EEE5] via-[#D1BD9F] to-[#4F463B] drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] sm:text-[19vw]">
              {'AUREL'.split('').map((char, index) => (
                <span key={index} className="aurel-letter inline-block will-change-transform">
                  {char}
                </span>
              ))}
            </h1>

            <div ref={streakRef} className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center will-change-transform">
              <div className="h-[2px] w-[125%] -rotate-[16deg] bg-gradient-to-r from-transparent via-[#FFF8EE] to-transparent shadow-[0_0_25px_#FFE0B2] mix-blend-screen" />
              <div className="absolute h-[18px] w-[115%] -rotate-[16deg] bg-gradient-to-r from-transparent via-[#E8D1B5]/25 to-transparent blur-lg mix-blend-screen" />
            </div>

            <div ref={flareRef} className="pointer-events-none absolute left-[15%] top-[14%] z-30 flex items-center justify-center mix-blend-screen will-change-transform sm:left-[17%]">
              <div className="h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_30px_10px_#FFF3E0]" />
              <div className="absolute h-28 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent opacity-90" />
              <div className="absolute h-[2px] w-28 bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />
              <div className="absolute h-24 w-24 rounded-full bg-[#EAD0B3]/20 blur-2xl" />
            </div>

            <p ref={subtitleRef} className="mt-8 font-sans text-[10px] font-light uppercase tracking-[0.65em] text-[#B8A793] sm:text-xs">
              OBJECTS OF LIGHT.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: HORIZONTAL GALLERY */}
      <section ref={horizontalSectionRef} className="relative h-screen w-full bg-[#080807] overflow-hidden">
        <div className="absolute top-12 left-12 z-30 font-sans text-[10px] uppercase tracking-[0.45em] text-[#D8C2A8]">
          02 — VISUAL GALLERY
        </div>

        <div
          ref={horizontalTrackRef}
          className="flex h-full items-center gap-12 sm:gap-16 px-16 sm:px-24 lg:px-32 will-change-transform"
        >
          <div className="relative flex-none w-[75vw] sm:w-[45vw] lg:w-[30vw] flex flex-col justify-center pr-8">
            <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-[#D8C2A8] mb-4">
              COLLECTION SHOWCASE
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-extralight leading-tight text-[#F7F5F0]">
              Sculpted <br />
              <span className="italic font-normal text-[#D8C2A8]">In Light.</span>
            </h2>
            <p className="mt-6 font-sans text-xs sm:text-sm font-light text-[#8A857D] leading-relaxed">
              Explore our minimal luminescent sculptures, meticulously designed for architectural balance.
            </p>
          </div>

          <div className="relative flex-none w-[80vw] sm:w-[50vw] lg:w-[32vw] h-[68vh] bg-[#121210] border border-white/10 rounded-sm overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#060605] via-transparent to-black/30 opacity-80" />
            <img src="/images/about/about 1.jpg" alt="Lumen Sculpture I" className="gallery-img absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#D8C2A8] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">LUMEN I</span>
                <span className="font-serif text-xl font-light text-[#F7F5F0]">01</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F7F5F0] group-hover:text-[#D8C2A8] transition-colors">Architectural Pendant</h3>
                <p className="font-sans text-xs font-light text-[#B8B4AC] mt-2 line-clamp-2">Hand-brushed solid brass housing with calibrated warm 2200K LED core.</p>
              </div>
            </div>
          </div>

          <div className="relative flex-none w-[80vw] sm:w-[50vw] lg:w-[32vw] h-[68vh] bg-[#121210] border border-white/10 rounded-sm overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#060605] via-transparent to-black/30 opacity-80" />
            <img src="/images/about/about2.png" alt="Lumen Sculpture II" className="gallery-img absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#D8C2A8] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">LUMEN II</span>
                <span className="font-serif text-xl font-light text-[#F7F5F0]">02</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F7F5F0] group-hover:text-[#D8C2A8] transition-colors">Optical Wall Sconce</h3>
                <p className="font-sans text-xs font-light text-[#B8B4AC] mt-2 line-clamp-2">Precision optic glass diffusion creating wide atmospheric light streaks.</p>
              </div>
            </div>
          </div>

          <div className="relative flex-none w-[80vw] sm:w-[50vw] lg:w-[32vw] h-[68vh] bg-[#121210] border border-white/10 rounded-sm overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#060605] via-transparent to-black/30 opacity-80" />
            <img src="/images/about/about3.png" alt="Lumen Sculpture III" className="gallery-img absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#D8C2A8] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">LUMEN III</span>
                <span className="font-serif text-xl font-light text-[#F7F5F0]">03</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F7F5F0] group-hover:text-[#D8C2A8] transition-colors">Minimal Floor Column</h3>
                <p className="font-sans text-xs font-light text-[#B8B4AC] mt-2 line-clamp-2">Monolithic dark aluminum frame engineered for ambient focal points.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* NEW FEATURE 1: INTERACTIVE SPOTLIGHT SHOWCASE */}


      {/* NEW FEATURE 2: EDITORIAL MAGAZINE GRID */}
      <section className="relative w-full bg-[#060605] py-28 px-6 sm:px-16 lg:px-24 border-t border-white/10">
        <div className="mb-16">
          <div className="flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.45em] text-[#D8C2A8] mb-3">
            <span className="h-2 w-2 rounded-full bg-[#D8C2A8]" />
            <span>CURATED PORTFOLIO</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-extralight text-[#F7F5F0]">
            Editorial <span className="italic text-[#D8C2A8]">Archive.</span>
          </h2>
        </div>

        {/* Asymmetrical High-Contrast Editorial Grid */}
        <div className="grid grid-cols-12 gap-8">
          {magazineItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0C0C0B] hover:border-[#D8C2A8]/50 transition-all duration-700 ${item.aspect}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 flex flex-col justify-between">
                <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-[#D8C2A8] bg-black/50 backdrop-blur-md w-fit px-3 py-1 rounded-full border border-white/10">
                  {item.category}
                </span>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-extralight text-[#F7F5F0] mb-2 group-hover:text-[#D8C2A8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs font-light text-[#A8A39A] max-w-md line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

            {/* SECTION 03: CRAFT & CRITIQUE */}
      <section className="relative w-full bg-[#060605] text-[#F7F5F0] py-28 px-6 sm:px-16 lg:px-24 border-t border-white/10 overflow-hidden">
        {/* Geometric Background Lines */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D8C2A8]/30 to-transparent" />
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>

        {/* Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.45em] text-[#D8C2A8] mb-3">
              <span className="h-2 w-2 rounded-full bg-[#D8C2A8] animate-ping" />
              <span>03 — ATELIER & JEWELRY ARCHITECTURE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-extralight tracking-tight text-[#F7F5F0]">
              Sculpted Like <span className="italic text-[#D8C2A8] font-normal">Fine Jewelry.</span>
            </h2>
          </div>
          <p className="font-sans text-xs font-light text-[#8A857D] max-w-sm leading-relaxed">
            Where haute joaillerie precision meets architectural luminaire engineering.
          </p>
        </div>

        {/* Interactive Grid Canvas */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Card 1 */}
          <div className="group relative md:col-span-7 bg-[#0B0B0A] border border-white/10 rounded-xl p-8 sm:p-12 overflow-hidden transition-all duration-700 hover:border-[#D8C2A8]/50 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(216,194,168,0.08)] flex flex-col justify-between min-h-[380px]">
            <div className="absolute -right-12 -top-12 w-60 h-60 rounded-full border border-white/5 group-hover:border-[#D8C2A8]/20 transition-colors duration-700 pointer-events-none" />
            <div className="absolute right-8 top-8 font-mono text-[10px] tracking-[0.3em] text-[#4A4742] group-hover:text-[#D8C2A8] transition-colors">
              [ ARTISAN FACET ]
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full border border-[#D8C2A8]/30 font-sans text-[9px] uppercase tracking-[0.3em] text-[#D8C2A8] mb-6">
                01. PRECISION CUTTING
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#F7F5F0] leading-tight mb-4">
                Diamond-Grade <br />
                <span className="italic font-normal text-[#D8C2A8]">Beveling & Edges</span>
              </h3>
              <p className="font-sans text-xs font-light text-[#8A857D] max-w-md leading-relaxed">
                Every brass body and optical crystal element is hand-faceted with gemological accuracy, creating precise reflections that mirror fine jewelry standards.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex items-center justify-between">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A8A39A]">
                CRAFTSMANSHIP METRICS
              </span>
              <span className="font-serif text-lg italic text-[#D8C2A8] group-hover:translate-x-2 transition-transform duration-500">
                Explore Detail →
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative md:col-span-5 bg-[#0B0B0A] border border-white/10 rounded-xl p-8 sm:p-12 overflow-hidden transition-all duration-700 hover:border-[#D8C2A8]/50 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(216,194,168,0.08)] flex flex-col justify-between min-h-[380px]">
            <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full border border-white/5 group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
            <div className="flex justify-between items-center mb-6">
              <span className="inline-block px-3 py-1 rounded-full border border-white/10 font-sans text-[9px] uppercase tracking-[0.3em] text-[#8A857D]">
                02. MATERIALITY
              </span>
              <span className="font-mono text-[10px] text-[#4A4742]">24K/C360</span>
            </div>

            <div className="my-auto">
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F7F5F0] mb-3">
                Solid Gold <span className="italic text-[#D8C2A8]">&</span> Brushed Brass
              </h3>
              <p className="font-sans text-xs font-light text-[#8A857D] leading-relaxed">
                Surfaces treated with non-oxidizing nano-coatings to preserve the deep warm luster over decades.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.2em] text-[#D8C2A8]">
              <span>SURFACE FINISH</span>
              <span>SATIN NANO</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative md:col-span-12 bg-gradient-to-r from-[#0D0D0C] via-[#121210] to-[#0D0D0C] border border-white/10 rounded-xl p-8 sm:p-10 overflow-hidden transition-all duration-700 hover:border-[#D8C2A8]/50 hover:-translate-y-1 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-full border border-[#D8C2A8]/30 flex items-center justify-center font-serif text-2xl text-[#D8C2A8] group-hover:rotate-45 transition-transform duration-700">
                ❖
              </div>
              <div>
                <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-[#D8C2A8]">
                  03. CUSTOM HIGH JEWELRY COMMISSIONS
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-light text-[#F7F5F0] mt-1">
                  Bespoke Architectural Installations for Private Collectors
                </h4>
              </div>
            </div>

            <button className="whitespace-nowrap px-8 py-4 rounded-full bg-[#D8C2A8] text-[#060605] font-sans text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-white transition-colors duration-500 shadow-[0_0_20px_rgba(216,194,168,0.2)]">
              REQUEST BESPOKE PIECE
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 04: MATERIALITY & CRITIQUE (با استفاده از craftData) */}
      <section className="relative w-full bg-[#080807] text-[#F7F5F0] py-28 px-6 sm:px-16 lg:px-24 border-t border-white/10 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.45em] text-[#D8C2A8] mb-3">
              <span className="h-2 w-2 rounded-full bg-[#D8C2A8]" />
              <span>04 — MATERIAL SPECS & ARCHITECTURAL REVIEWS</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-extralight tracking-tight text-[#F7F5F0]">
              Tactile <span className="italic text-[#D8C2A8] font-normal">Excellence.</span>
            </h2>
          </div>

          {/* Tab Selection */}
          <div className="flex items-center gap-2 border border-white/10 p-1 rounded-full bg-[#0D0D0C]">
            {craftData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`px-5 py-2 rounded-full font-sans text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
                  activeIndex === index
                    ? 'bg-[#D8C2A8] text-[#060605] font-medium'
                    : 'text-[#8A857D] hover:text-[#F7F5F0]'
                }`}
              >
                {item.number}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Material Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCraft.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0D0D0C] border border-white/10 rounded-2xl p-8 sm:p-12 overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${activeCraft.accentGlow} pointer-events-none`} />

            {/* Left Content */}
            <div className="lg:col-span-7 z-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs tracking-[0.3em] text-[#D8C2A8]">{activeCraft.materialCode}</span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#8A857D]">{activeCraft.title}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-5xl font-light text-[#F7F5F0] mb-4">
                  {activeCraft.materialName}
                </h3>

                <p className="font-sans text-xs sm:text-sm font-light text-[#A8A39A] leading-relaxed mb-8">
                  {activeCraft.materialDesc}
                </p>
              </div>

              {/* Quote Block */}
              <div className="pt-8 border-t border-white/10">
                <p className="font-serif italic text-base sm:text-lg text-[#D8C2A8] leading-relaxed mb-4">
                  "{activeCraft.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <span className="font-sans text-xs text-[#F7F5F0] font-medium">{activeCraft.author}</span>
                  <span className="text-[#4A4742]">•</span>
                  <span className="font-sans text-xs text-[#8A857D]">{activeCraft.role}, {activeCraft.location}</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 z-10 h-[320px] sm:h-[400px] rounded-xl overflow-hidden border border-white/10 relative">
              <img
                src={activeCraft.image}
                alt={activeCraft.materialName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0C] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </AnimatePresence>
      </section>


    </div>
  );
};
