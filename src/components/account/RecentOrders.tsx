'use client';

import React from 'react';
import Link from 'next/link';

export interface OrderItem {
  id: string;
  orderNumber: string;
  date: string;
  status: 'DELIVERED' | 'IN TRANSIT' | 'PROCESSING';
  price: string;
  itemCount: number;
  image: string;
}

const mockOrders: OrderItem[] = [
  {
    id: '1',
    orderNumber: '#AU-10024',
    date: 'Apr 12, 2026',
    status: 'DELIVERED',
    price: '$4,850',
    itemCount: 1,
    image: '/images/account/recentorder.jpg',
  },
  {
    id: '2',
    orderNumber: '#AU-10023',
    date: 'Mar 28, 2026',
    status: 'DELIVERED',
    price: '$3,200',
    itemCount: 1,
    image: '/images/account/recentorder2.jpg',
  },
  {
    id: '3',
    orderNumber: '#AU-10021',
    date: 'Feb 14, 2026',
    status: 'IN TRANSIT',
    price: '$5,760',
    itemCount: 2,
    image: '/images/account/recentorder3.jpg',
  },
];

export const RecentOrders: React.FC = () => {
  return (
    <div className="pt-8">
      {/* Header Area */}
      <div className="flex justify-between items-center mb-6 pb-2 border-b border-white/10">
        <h2 className="font-serif text-lg font-light tracking-wide text-[#F7F5F0]">
          RECENT ORDERS
        </h2>
        <Link 
          href="/account/orders" 
          className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8A857D] hover:text-[#D8C2A8] transition-colors"
        >
          VIEW ALL ORDERS →
        </Link>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {mockOrders.map((order) => (
          <Link
            key={order.id}
            href={`/account/orders/${order.id}`}
            className="group bg-[#0B0B0A] border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-[#D8C2A8]/50 transition-all duration-300 block cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex-none">
                <img 
                  src={order.image} 
                  alt={order.orderNumber} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div>
                <div className="font-mono text-xs text-[#F7F5F0] group-hover:text-[#D8C2A8] transition-colors">
                  {order.orderNumber}
                </div>
                <div className="font-sans text-[10px] text-[#6A655D] mt-0.5">{order.date}</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className={`text-[9px] font-sans px-2.5 py-1 rounded-full border ${
                order.status === 'DELIVERED'
                  ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                  : 'border-amber-500/30 text-amber-400 bg-amber-500/10'
              }`}>
                {order.status}
              </span>

              <div className="text-right">
                <div className="font-serif text-sm text-[#F7F5F0]">{order.price}</div>
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

export default RecentOrders;