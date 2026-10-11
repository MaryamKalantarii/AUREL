'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Header } from "@/components/layout/Header";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <main className={`aurel-404 ${mounted ? 'is-visible' : ''}`}>
      {/* 1. GLOBAL HEADER */}
      <Header />

      {/* Background */}
      <div className="aurel-404__background" />
      <div className="aurel-404__overlay" />
      <div className="aurel-404__grain" />

      {/* Main content */}
      <section className="aurel-404__content">
        <h1 className="aurel-404__number" aria-label="Error 404">
          404
        </h1>

        <p className="aurel-404__headline">
          THE LIGHT CAN’T FIND THIS PAGE
        </p>

        <p className="aurel-404__description">
          The page you are looking for might have been removed,
          <br className="desktop-break" />
          had its name changed, or is temporarily unavailable.
        </p>

        <Link href="/" className="aurel-404__button">
          <span>BACK TO HOME</span>
          <ArrowRight className="aurel-404__arrow" />
        </Link>
      </section>

      {/* Bottom signature */}
      <footer className="aurel-404__footer">
        <span>CRAFTED TO CAPTURE LIGHT.</span>
        <span>404 — PAGE NOT FOUND</span>
      </footer>

      <style jsx global>{`
        .aurel-404,
        .aurel-404 * {
          box-sizing: border-box;
        }

        .aurel-404 {
          position: relative;
          isolation: isolate;
          width: 100%;
          min-height: 100vh;
          min-height: 100svh;
          overflow: hidden;
          background: #060605;
          color: #f5f0e8;
          font-family: var(--font-sans, sans-serif);
        }

        .aurel-404__background {
          position: absolute;
          z-index: -3;
          inset: 0;
          background-image: url('/images/404/404.png');
          background-size: cover;
          background-position: center center;
          transform: scale(1.045);
          transition: transform 1.8s cubic-bezier(.2, .65, .3, 1);
        }

        .aurel-404.is-visible .aurel-404__background {
          transform: scale(1);
        }

        .aurel-404__overlay {
          position: absolute;
          z-index: -2;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at center, rgba(6, 6, 5, 0.4) 0%, rgba(6, 6, 5, 0.85) 100%);
        }

        .aurel-404__grain {
          position: absolute;
          z-index: -1;
          inset: 0;
          pointer-events: none;
          opacity: .08;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.25'/%3E%3C/svg%3E");
        }

        .aurel-404__content {
          position: relative;
          z-index: 1;
          min-height: calc(100vh - 120px);
          padding: 40px 24px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 1s ease .15s, transform 1s cubic-bezier(.2, .65, .3, 1) .15s;
        }

        .aurel-404.is-visible .aurel-404__content {
          opacity: 1;
          transform: translateY(0);
        }

        .aurel-404__number {
          margin: 0 0 10px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(120px, 16vw, 210px);
          font-weight: 200;
          line-height: .9;
          letter-spacing: -.02em;
          color: #f7f5f0;
        }

        .aurel-404__headline {
          margin: 16px 0 20px;
          font-size: clamp(11px, 1.2vw, 15px);
          font-weight: 300;
          letter-spacing: .4em;
          color: #f7f5f0;
          text-transform: uppercase;
        }

        .aurel-404__description {
          margin: 0 0 32px;
          color: rgba(168, 163, 154, .85);
          font-size: 13px;
          font-style: italic;
          font-weight: 300;
          line-height: 1.8;
        }

        .aurel-404__button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 14px 28px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(8px);
          color: #f7f5f0;
          text-decoration: none;
          font-size: 9px;
          letter-spacing: .25em;
          transition: all .4s ease;
        }

        .aurel-404__button:hover {
          background: #d8c2a8;
          color: #060605;
          border-color: #d8c2a8;
        }

        .aurel-404__arrow {
          width: 14px;
          height: 14px;
          stroke-width: 1.25;
          transition: transform .3s ease;
        }

        .aurel-404__button:hover .aurel-404__arrow {
          transform: translateX(4px);
        }

        .aurel-404__footer {
          position: absolute;
          right: 5.5%;
          bottom: 25px;
          left: 5.5%;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: rgba(246, 239, 228, .66);
          font-size: 8px;
          letter-spacing: .2em;
        }

        @media (max-width: 560px) {
          .desktop-break {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}