'use client';

import React from 'react';

export type AccountTab = 'profile' | 'orders' | 'addresses' | 'wishlist' | 'payment';

interface AccountSidebarProps {
  activeTab: AccountTab;
  setActiveTab: (tab: AccountTab) => void;
}

export const AccountSidebar: React.FC<AccountSidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="lg:col-span-3 border-r border-white/10 pr-6 space-y-6">
      <nav className="flex flex-col gap-2 font-sans text-[11px] uppercase tracking-[0.25em]">
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
            activeTab === 'profile'
              ? 'bg-white/5 text-[#D8C2A8] border-l-2 border-[#D8C2A8]'
              : 'text-[#8A857D] hover:text-[#F7F5F0] hover:bg-white/[0.02]'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>PROFILE</span>
        </button>

        <button
          onClick={() => setActiveTab('orders')}
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
            activeTab === 'orders'
              ? 'bg-white/5 text-[#D8C2A8] border-l-2 border-[#D8C2A8]'
              : 'text-[#8A857D] hover:text-[#F7F5F0] hover:bg-white/[0.02]'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span>ORDERS</span>
        </button>

        <button
          onClick={() => setActiveTab('addresses')}
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
            activeTab === 'addresses'
              ? 'bg-white/5 text-[#D8C2A8] border-l-2 border-[#D8C2A8]'
              : 'text-[#8A857D] hover:text-[#F7F5F0] hover:bg-white/[0.02]'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>ADDRESSES</span>
        </button>

        <button
          onClick={() => setActiveTab('wishlist')}
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
            activeTab === 'wishlist'
              ? 'bg-white/5 text-[#D8C2A8] border-l-2 border-[#D8C2A8]'
              : 'text-[#8A857D] hover:text-[#F7F5F0] hover:bg-white/[0.02]'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>WISHLIST</span>
        </button>

        <button
          onClick={() => setActiveTab('payment')}
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
            activeTab === 'payment'
              ? 'bg-white/5 text-[#D8C2A8] border-l-2 border-[#D8C2A8]'
              : 'text-[#8A857D] hover:text-[#F7F5F0] hover:bg-white/[0.02]'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>PAYMENT METHODS</span>
        </button>

        <div className="pt-8 border-t border-white/10 mt-6">
          <button className="flex items-center gap-4 px-4 py-3 text-[#8A857D] hover:text-red-400 transition-colors w-full text-left">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>LOG OUT</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};