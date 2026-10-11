'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  X,
  Minus,
  Plus,
  ArrowLeft,
  ArrowRight,
  Truck,
  ShieldCheck,
  Headphones,
  Sparkles,
  LockKeyhole,
  ShoppingBag,
} from 'lucide-react';

type CartItem = {
  id: number;
  name: string;
  variant: string;
  price: number;
  image: string;
  quantity: number;
};

const initialItems: CartItem[] = [
  {
    id: 1,
    name: 'AUREL Classic Watch',
    variant: 'GOLD / BLACK',
    price: 299,
    image: '/images/earrings.jpg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'AUREL Leather Bag',
    variant: 'BLACK',
    price: 189,
    image: '/images/product-detail-2.jpg',
    quantity: 1,
  },
  {
    id: 3,
    name: 'AUREL Perfume',
    variant: '100 ML',
    price: 129,
    image: '/images/bracelet.jpg',
    quantity: 1,
  },
];

const money = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );
  const shipping = subtotal === 0 || subtotal >= 100 ? 0 : 12;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  function changeQuantity(id: number, amount: number) {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  }

  function removeItem(id: number) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#090806] text-[#eee9df]">
      <Header />

      {/* HERO — adapted from the AUREL editorial hero */}
      <section className="cart-hero relative isolate flex min-h-[340px] items-center justify-center overflow-hidden border-b border-[#b8a782]/[0.12] px-5 py-16 text-center sm:min-h-[380px] lg:min-h-[410px]">
        <div className="pointer-events-none absolute inset-0 -z-30 bg-[#080705]" />

        {/* Muted ambient glow: mostly ivory, with only a trace of champagne */}
        <div className="cart-hero-glow pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[55vw] w-[55vw] max-h-[520px] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="cart-hero-vignette pointer-events-none absolute inset-0 -z-10" />

        {/* Soft sculptural light ribbons */}
        <div className="cart-ribbon cart-ribbon-a pointer-events-none absolute -left-[18%] top-[3%] -z-10 h-[180px] w-[78%] rounded-[50%] sm:h-[240px]" />
        <div className="cart-ribbon cart-ribbon-b pointer-events-none absolute -left-[15%] top-[43%] -z-10 h-[160px] w-[76%] rounded-[50%] sm:h-[220px]" />
        <div className="cart-ribbon cart-ribbon-c pointer-events-none absolute -right-[22%] top-[38%] -z-10 h-[190px] w-[85%] rounded-[50%] sm:h-[250px]" />
        <div className="cart-ribbon cart-ribbon-d pointer-events-none absolute -right-[14%] -top-[72%] -z-10 h-[300px] w-[65%] rounded-[50%]" />

        <div className="relative z-10 flex w-full flex-col items-center">
          <div className="mb-5 flex items-center justify-center gap-4 font-sans text-[10px] font-light uppercase tracking-[0.42em] text-[#bca982] sm:text-[11px]">
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#aaa092] to-[#c6b8a3] sm:w-14" />
            YOUR CART
            <span className="h-px w-10 bg-gradient-to-l from-transparent via-[#aaa092] to-[#c6b8a3] sm:w-14" />
          </div>

          <div className="cart-wordmark-wrap relative">
            <h1 className="cart-wordmark relative z-10 whitespace-nowrap bg-gradient-to-b from-[#eee5d4] via-[#d4c4a5] to-[#81745b] bg-clip-text font-serif text-[21vw] font-extralight uppercase leading-[0.92] tracking-[0.055em] text-transparent sm:text-[18vw] lg:text-[190px]">
              AUREL
            </h1>

            {/* Fine animated light streak inspired by the original hero */}
            <div className="cart-light-streak pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
              <div className="h-px w-[125%] -rotate-[16deg] bg-gradient-to-r from-transparent via-[#e2d4b8]/65 to-transparent shadow-[0_0_16px_rgba(210,190,150,0.22)]" />
              <div className="absolute h-3 w-[115%] -rotate-[16deg] bg-gradient-to-r from-transparent via-[#d8c9b3]/10 to-transparent blur-lg" />
            </div>

            <div className="cart-flare pointer-events-none absolute left-[15%] top-[15%] z-30 h-2 w-2 rounded-full bg-[#dfd0b0] shadow-[0_0_10px_3px_rgba(210,190,150,0.45)] sm:left-[17%]" />
          </div>

          <p className="mt-6 font-sans text-[9px] font-light uppercase tracking-[0.4em] text-[#c0b49c] sm:text-[11px] sm:tracking-[0.55em]">
            TIMELESS BEAUTY, YOURS
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
      </section>

      {/* CART CONTENT */}
      <section className="mx-auto max-w-[1320px] px-5 py-10 sm:px-8 md:py-14 lg:px-10 lg:py-16">
        <div className="grid items-start gap-6 lg:grid-cols-[1.9fr_0.95fr] lg:gap-7">
          {/* Cart items */}
          <div className="overflow-hidden rounded-xl border border-[#b6a27b]/[0.13] bg-[#0d0b08]">
            <div className="flex items-center justify-between border-b border-[#b6a27b]/[0.10] px-5 py-6 sm:px-7">
              <h2 className="font-serif text-2xl">Your Cart</h2>
              <span className="text-[10px] tracking-[0.12em] text-white/50">
                {itemCount} ITEMS
              </span>
            </div>

            {items.length === 0 ? (
              <div className="px-6 py-20 text-center">
                <ShoppingBag size={30} strokeWidth={1} className="mx-auto text-white/35" />
                <h3 className="mt-5 font-serif text-2xl">Your cart is empty</h3>
                <p className="mt-3 text-sm text-white/45">Discover something timeless.</p>
                <Link href="/collection" className="mt-7 inline-flex items-center gap-2 text-sm text-[#cbbd9f] transition hover:text-white">
                  Explore Collection <ArrowRight size={15} />
                </Link>
              </div>
            ) : (
              <div className="px-5 sm:px-7">
                {items.map((item) => (
                  <article key={item.id} className="grid grid-cols-[88px_minmax(0,1fr)] gap-4 border-b border-[#b6a27b]/[0.09] py-5 last:border-b-0 sm:grid-cols-[112px_minmax(0,1fr)_auto] sm:items-center sm:gap-5">
                    <div className="relative aspect-square overflow-hidden rounded-lg border border-[#b6a27b]/[0.10] bg-[#11100d]">
                      <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 88px, 112px" className="object-cover transition-transform duration-700 hover:scale-105" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-serif text-base leading-relaxed sm:text-lg">{item.name}</h3>
                      <p className="mt-1.5 text-[9px] tracking-[0.2em] text-white/45">{item.variant}</p>
                      <p className="mt-3 text-sm text-[#e9e2d5]">{money(item.price)}</p>

                      <div className="mt-4 inline-flex items-center gap-4 rounded-full border border-[#b6a27b]/[0.18] px-3 py-1.5 sm:hidden">
                        <button aria-label="Decrease quantity" onClick={() => changeQuantity(item.id, -1)} disabled={item.quantity <= 1} className="text-white/65 transition hover:text-white disabled:opacity-30"><Minus size={12} /></button>
                        <span className="min-w-3 text-center text-xs">{item.quantity}</span>
                        <button aria-label="Increase quantity" onClick={() => changeQuantity(item.id, 1)} className="text-white/65 transition hover:text-white"><Plus size={12} /></button>
                      </div>
                      <button aria-label={`Remove ${item.name}`} onClick={() => removeItem(item.id)} className="mt-3 block text-[10px] text-white/40 transition hover:text-white sm:hidden">Remove item</button>
                    </div>

                    <div className="hidden items-center gap-6 sm:flex">
                      <div className="inline-flex items-center gap-4 rounded-full border border-[#b6a27b]/[0.18] px-3 py-2">
                        <button aria-label="Decrease quantity" onClick={() => changeQuantity(item.id, -1)} disabled={item.quantity <= 1} className="text-white/65 transition hover:text-white disabled:opacity-30"><Minus size={12} /></button>
                        <span className="min-w-3 text-center text-xs">{item.quantity}</span>
                        <button aria-label="Increase quantity" onClick={() => changeQuantity(item.id, 1)} className="text-white/65 transition hover:text-white"><Plus size={12} /></button>
                      </div>
                      <button aria-label={`Remove ${item.name}`} onClick={() => removeItem(item.id)} className="text-white/40 transition hover:text-white"><X size={17} strokeWidth={1.2} /></button>
                    </div>
                  </article>
                ))}
              </div>
            )}

            <div className="border-t border-white/[0.08] px-5 py-5 sm:px-7">
              <Link href="/collection" className="inline-flex items-center gap-3 text-xs text-[#c7b99c] transition hover:text-white">
                <ArrowLeft size={15} strokeWidth={1.3} /> Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order summary */}
          <aside className="rounded-xl border border-[#b6a27b]/[0.13] bg-[#0d0b08] p-6 sm:p-7 lg:sticky lg:top-24">
            <h2 className="font-serif text-2xl">Order Summary</h2>
            <div className="mt-7 space-y-5 text-[13px]">
              <div className="flex items-center justify-between text-white/55"><span>Subtotal</span><span className="text-white/85">{money(subtotal)}</span></div>
              <div className="flex items-center justify-between text-white/55"><span>Shipping</span><span className="text-white/85">{shipping === 0 ? 'Free' : money(shipping)}</span></div>
              <div className="flex items-center justify-between text-white/55"><span>Tax</span><span className="text-white/85">{money(tax)}</span></div>
            </div>
            <div className="my-7 border-t border-[#b6a27b]/[0.11]" />
            <div className="flex items-center justify-between gap-3">
              <span className="font-serif text-lg">Total</span>
              <span className="font-serif text-3xl">{money(total)}</span>
            </div>
            <Link href="/checkout" aria-disabled={items.length === 0} className={`mt-8 flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#d7cbb3] px-4 py-4 text-xs font-medium text-[#17140f] transition duration-300 hover:bg-[#e8dfce] ${items.length === 0 ? 'pointer-events-none opacity-40' : ''}`}>
              Proceed to Checkout <ArrowRight size={15} />
            </Link>
            <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-white/45"><LockKeyhole size={12} /> Secure Checkout</div>
          </aside>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-[#b6a27b]/[0.10]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 px-5 py-8 sm:px-8 md:grid-cols-4 md:px-10 md:py-11">
          {[
            { icon: Truck, title: 'Free Shipping', description: 'On orders over $100' },
            { icon: ShieldCheck, title: 'Secure Payment', description: '100% safe & encrypted' },
            { icon: Headphones, title: '24/7 Support', description: "We're here for you" },
            { icon: Sparkles, title: 'Premium Quality', description: 'Crafted with passion' },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className={`flex flex-col items-center px-3 py-5 text-center ${index % 2 === 0 ? 'border-r border-[#b6a27b]/[0.09]' : ''} ${index < 2 ? 'border-b border-[#b6a27b]/[0.09] md:border-b-0' : ''} ${index === 1 || index === 2 ? 'md:border-r md:border-white/[0.08]' : ''}`}>
                <Icon size={25} strokeWidth={1.1} className="text-[#bca982]" />
                <h3 className="mt-4 font-serif text-base">{feature.title}</h3>
                <p className="mt-2 text-[11px] text-white/45">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .cart-hero {
          background:
            radial-gradient(ellipse at 50% 48%, rgba(190, 168, 126, 0.055), transparent 43%),
            linear-gradient(115deg, #090806 0%, #100e0a 48%, #080705 100%);
        }

        .cart-hero-glow {
          background: radial-gradient(circle, rgba(190, 166, 121, 0.075) 0%, rgba(177, 151, 106, 0.025) 35%, transparent 70%);
          filter: blur(65px);
          animation: glow-breathe 7s ease-in-out infinite alternate;
        }

        .cart-hero-vignette {
          background: linear-gradient(180deg, rgba(0,0,0,0.12), transparent 28%, rgba(0,0,0,0.16) 75%, rgba(0,0,0,0.52));
        }

        .cart-ribbon {
          border-top: 1px solid rgba(194, 171, 128, 0.13);
          border-bottom: 1px solid rgba(255, 255, 255, 0.025);
          background: linear-gradient(165deg, transparent 32%, rgba(190, 166, 122, 0.035) 42%, rgba(255,255,255,0.022) 46%, transparent 60%);
          box-shadow: inset 0 9px 18px rgba(255,255,255,0.012), 0 -12px 35px rgba(0,0,0,0.5);
          filter: blur(1.5px);
          transform: rotate(-17deg);
        }

        .cart-ribbon-a {
          border-top-color: rgba(193, 164, 116, 0.19);
          box-shadow: 0 -7px 22px rgba(183, 153, 103, 0.035);
          animation: ribbon-drift 13s ease-in-out infinite alternate;
        }

        .cart-ribbon-b {
          transform: rotate(13deg);
          border-top-color: rgba(255,255,255,0.1);
        }

        .cart-ribbon-c {
          transform: rotate(-24deg);
          border-top-color: rgba(194, 166, 119, 0.16);
          background: linear-gradient(160deg, transparent 35%, rgba(193, 166, 120, 0.04) 45%, rgba(255,255,255,0.02) 49%, transparent 62%);
          animation: ribbon-drift 16s ease-in-out infinite alternate-reverse;
        }

        .cart-ribbon-d {
          transform: rotate(-30deg);
          border-bottom: 0;
          border-top-color: rgba(255,255,255,0.045);
        }

        .cart-wordmark {
          filter: drop-shadow(0 25px 45px rgba(0,0,0,0.65));
        }

        .cart-light-streak {
          opacity: 0.72;
          animation: streak-glide 8s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        .cart-flare {
          animation: flare-pulse 4s ease-in-out infinite;
        }

        @keyframes ribbon-drift {
          from { translate: 0 0; }
          to { translate: 0 -9px; }
        }

        @keyframes streak-glide {
          0%, 100% { opacity: 0.3; transform: translateX(-4%); }
          50% { opacity: 0.85; transform: translateX(4%); }
        }

        @keyframes flare-pulse {
          0%, 100% { opacity: 0.55; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @keyframes glow-breathe {
          from { opacity: 0.55; transform: translate(-50%, -50%) scale(0.92); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
        }

        @media (prefers-reduced-motion: reduce) {
          .cart-hero-glow, .cart-ribbon-a, .cart-ribbon-c, .cart-light-streak, .cart-flare {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}

