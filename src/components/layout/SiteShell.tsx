"use client";

import React from "react";

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F7F5F0] selection:bg-white selection:text-black">
      {children}
    </div>
  );
}