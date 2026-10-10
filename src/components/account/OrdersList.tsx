'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export interface OrderItem {
  id: string;
  orderNumber: string;
  date: string;
  status: 'DELIVERED' | 'IN TRANSIT' | 'PROCESSING' | 'CANCELLED';
  price: string;
  itemCount: number;
  image: string;
  itemsSummary: string;
}

const allOrders: OrderItem[] = [
  {
    id: '1',
    orderNumber: '#AU-10024',
    date: 'Apr 12, 2026',
    status: 'DELIVERED',
    price: '$4,850',
    itemCount: 1,
    image: '/images/account/recentorder.jpg',
    itemsSummary: 'Lumen Architectural Pendant',
  },
  {
    id: '2',
    orderNumber: '#AU-10023',
    date: 'Mar 28, 2026',
    status: 'DELIVERED',
    price: '$3,200',
    itemCount: 1,
    image: '/images/account/recentorder2.jpg',
    itemsSummary: 'Optical Refraction Sconce',
  },
  {
    id: '3',
    orderNumber: '#AU-10021',
    date: 'Feb 14, 2026',
    status: 'IN TRANSIT',
    price: '$5,760',
    itemCount: 2,
    image: '/images/account/recentorder3.jpg',
    itemsSummary: 'Monolithic Floor Column (x2)',
  },
  {
    id: '4',
    orderNumber: '#AU-10018',
    date: 'Jan 05, 2026',
    status: 'DELIVERED',
    price: '$2,100',
    itemCount: 1,
    image: '/images/account/recentorder.jpg',
    itemsSummary: 'Aurel Brass Ring Dimmer',
  },
];

export const OrdersList: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'DELIVERED' | 'IN TRANSIT'>('ALL');

  const filteredOrders = allOrders.filter((order) => {
    if (filter === 'ALL') return true;
    return order.status === filter;
  });

  return (
    <div className="space-y-6">
      {/* HEADER & FILTERS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h2 className="font-serif text-xl font-light tracking-wide text-[#F7F5F0]">
            ORDER HISTORY
          </h2>
          <p className="font-sans text-xs text-[#8A857D] mt-1">
            View and track your previous purchases.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 bg-[#0B0B0A] p-1 rounded-lg border border-white/10">
          {(['ALL', 'DELIVERED', 'IN TRANSIT'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1.5 rounded-md font-sans text-[9px] uppercase tracking-[0.2em] transition-all ${
                filter === status
                  ? 'bg-white/10 text-[#D8C2A8]'
                  : 'text-[#8A857D] hover:text-[#F7F5F0]'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* ORDERS CARDS */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <Link
            key={order.id}
            href={`/account/orders/${order.id}`}
            className="group bg-[#0B0B0A] border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#D8C2A8]/50 transition-all duration-300 block"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex-none">
                <img
                  src={order.image}
                  alt={order.orderNumber}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-[#F7F5F0] group-hover:text-[#D8C2A8] transition-colors">
                    {order.orderNumber}
                  </span>
                  <span
                    className={`text-[8px] font-sans px-2 py-0.5 rounded-full border ${
                      order.status === 'DELIVERED'
                        ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                        : 'border-amber-500/30 text-amber-400 bg-amber-500/10'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <p className="font-serif text-xs text-[#A8A39A] mt-1">{order.itemsSummary}</p>
                <p className="font-sans text-[10px] text-[#6A655D] mt-0.5">{order.date}</p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
              <div className="text-left sm:text-right">
                <div className="font-serif text-base text-[#F7F5F0]">{order.price}</div>
                <div className="font-sans text-[9px] text-[#6A655D]">
                  {order.itemCount} {order.itemCount > 1 ? 'items' : 'item'}
                </div>
              </div>

              <span className="text-[#8A857D] group-hover:translate-x-1 group-hover:text-[#D8C2A8] transition-all">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;