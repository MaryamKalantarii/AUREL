'use client';

import React, { useState, useEffect } from 'react';
import { AccountSidebar, AccountTab } from '@/components/account/AccountSidebar';
import { ProfileInfo } from '@/components/account/ProfileInfo';
import { RecentOrders } from '@/components/account/RecentOrders';
import { OrdersList } from '@/components/account/OrdersList';
import { AddressesList } from '@/components/account/AddressesList';
import { WishlistList } from '@/components/account/WishlistList';
import { PaymentMethodsList } from '@/components/account/PaymentMethodsList';
import { ExclusiveAccessBanner } from '@/components/account/ExclusiveAccessBanner';
import { Header } from "@/components/layout/Header"; 
import { Footer } from "@/components/layout/Footer";

export default function AccountPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<AccountTab>('profile');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full min-h-screen bg-[#060605]" />;
  }

  return (
    <div className="w-full min-h-screen bg-[#060605] text-[#F7F5F0] font-sans antialiased selection:bg-[#D8C2A8] selection:text-[#060605] flex flex-col justify-between">
      
      {/* GLOBAL HEADER */}
      <Header />

      {/* MAIN CONTAINER */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 w-full flex-1">
        {/* TITLE AREA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-12 mb-12 border-b border-white/10 gap-6">
          <div>
       
            <h1 className="font-serif text-4xl sm:text-6xl font-extralight tracking-wide text-[#F7F5F0]">MY ACCOUNT.</h1>
            <p className="font-sans text-xs font-light text-[#8A857D] mt-3">Manage your details, orders and preferences.</p>
          </div>

          <div className="text-right hidden md:block">
            <div className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#8A857D]">A PERSONAL SPACE</div>
            <div className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#D8C2A8] mt-1">FOR YOUR AUREL JOURNEY.</div>
          </div>
        </div>

        {/* LAYOUT GRID - FIXED 12 COLUMNS FOR DESKTOP */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
          
          {/* SIDEBAR (3 Columns) */}
          <div className="md:col-span-3 lg:col-span-3 xl:col-span-3">
            <AccountSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* MAIN CONTENT AREA (5 Columns) */}
          <section className="md:col-span-5 lg:col-span-5 xl:col-span-5 space-y-12">
            {activeTab === 'profile' && (
              <>
                <ProfileInfo />
                <RecentOrders />
              </>
            )}

            {activeTab === 'orders' && <OrdersList />}

            {activeTab === 'addresses' && <AddressesList />}

            {activeTab === 'wishlist' && <WishlistList />}

            {activeTab === 'payment' && <PaymentMethodsList />}
          </section>

          {/* RIGHT BANNER (4 Columns) */}
          <div className="md:col-span-4 lg:col-span-4 xl:col-span-4 h-full">
            <ExclusiveAccessBanner />
          </div>

        </div>
      </main>

      {/* GLOBAL FOOTER */}
      <Footer />

    </div>
  );
}