'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface PaymentCard {
  id: string;
  isDefault: boolean;
  cardHolder: string;
  cardNumber: string; // e.g. "•••• •••• •••• 4242"
  expiryDate: string; // e.g. "08/28"
  cardType: 'VISA' | 'MASTERCARD' | 'AMEX';
}

const mockPaymentCards: PaymentCard[] = [
  {
    id: 'p1',
    isDefault: true,
    cardHolder: 'Alex Morgan',
    cardNumber: '•••• •••• •••• 4242',
    expiryDate: '08/28',
    cardType: 'AMEX',
  },
  {
    id: 'p2',
    isDefault: false,
    cardHolder: 'Alex Morgan',
    cardNumber: '•••• •••• •••• 8819',
    expiryDate: '11/27',
    cardType: 'VISA',
  },
];

export const PaymentMethodsList: React.FC = () => {
  const [cards, setCards] = useState<PaymentCard[]>(mockPaymentCards);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New Card Form State
  const [formData, setFormData] = useState({
    cardHolder: 'Alex Morgan',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardType: 'VISA' as 'VISA' | 'MASTERCARD' | 'AMEX',
  });

  const handleSetDefault = (id: string) => {
    setCards((prev) =>
      prev.map((card) => ({
        ...card,
        isDefault: card.id === id,
      }))
    );
  };

  const handleDelete = (id: string) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    const last4 = formData.cardNumber.slice(-4) || '1234';
    const newCard: PaymentCard = {
      id: Date.now().toString(),
      isDefault: cards.length === 0,
      cardHolder: formData.cardHolder,
      cardNumber: `•••• •••• •••• ${last4}`,
      expiryDate: formData.expiryDate || '12/28',
      cardType: formData.cardType,
    };

    setCards((prev) => [...prev, newCard]);
    setIsModalOpen(false);
    setFormData({
      cardHolder: 'Alex Morgan',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardType: 'VISA',
    });
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center pb-4 border-b border-white/10">
        <div>
          <h2 className="font-serif text-xl font-light tracking-wide text-[#F7F5F0]">
            PAYMENT METHODS
          </h2>
          <p className="font-sans text-xs text-[#8A857D] mt-1">
            Manage your saved payment cards and billing preferences.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 rounded-full border border-[#D8C2A8]/40 bg-[#D8C2A8]/10 font-sans text-[10px] uppercase tracking-[0.2em] text-[#D8C2A8] hover:bg-[#D8C2A8] hover:text-[#060605] transition-all duration-300"
        >
          + ADD CARD
        </button>
      </div>

      {/* CARDS LIST */}
      <div className="space-y-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`bg-[#0B0B0A] border rounded-xl p-5 flex flex-col justify-between transition-all duration-300 ${
              card.isDefault
                ? 'border-[#D8C2A8]/60 shadow-[0_0_15px_rgba(216,194,168,0.05)]'
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-medium text-[#D8C2A8] bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  {card.cardType}
                </span>
                {card.isDefault && (
                  <span className="font-sans text-[8px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full border border-[#D8C2A8]/40 text-[#D8C2A8] bg-[#D8C2A8]/10">
                    DEFAULT
                  </span>
                )}
              </div>

              <button
                onClick={() => handleDelete(card.id)}
                className="font-sans text-[10px] uppercase tracking-[0.15em] text-[#8A857D] hover:text-red-400 transition-colors"
              >
                REMOVE
              </button>
            </div>

            <div className="space-y-1">
              <div className="font-mono text-base text-[#F7F5F0] tracking-widest">
                {card.cardNumber}
              </div>
              <div className="flex justify-between items-center text-xs text-[#8A857D] font-sans pt-2">
                <span>{card.cardHolder}</span>
                <span className="font-mono text-[11px]">Expires {card.expiryDate}</span>
              </div>
            </div>

            {!card.isDefault && (
              <div className="pt-4 mt-4 border-t border-white/5">
                <button
                  onClick={() => handleSetDefault(card.id)}
                  className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] hover:text-[#D8C2A8] transition-colors"
                >
                  SET AS DEFAULT PAYMENT METHOD
                </button>
              </div>
            )}
          </div>
        ))}

        {cards.length === 0 && (
          <div className="text-center py-12 border border-dashed border-white/10 rounded-xl">
            <p className="font-sans text-xs text-[#8A857D]">No payment methods saved.</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-3 font-sans text-[10px] uppercase tracking-[0.2em] text-[#D8C2A8] underline"
            >
              Add a new credit or debit card
            </button>
          </div>
        )}
      </div>

      {/* ADD CARD MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-lg bg-[#0E0E0D] border border-white/15 rounded-2xl p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
            >
              <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-6">
                <h3 className="font-serif text-xl font-light text-[#F7F5F0]">Add Payment Card</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#8A857D] hover:text-[#F7F5F0]"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddCard} className="space-y-4">
                <div>
                  <label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] mb-1">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={formData.cardHolder}
                    onChange={(e) => setFormData({ ...formData, cardHolder: e.target.value })}
                    className="w-full bg-[#141412] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-xs text-[#F7F5F0] focus:outline-none focus:border-[#D8C2A8]"
                    required
                  />
                </div>

                <div>
                  <label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="4532 •••• •••• 8819"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full bg-[#141412] border border-white/10 rounded-lg px-4 py-2.5 font-mono text-xs text-[#F7F5F0] focus:outline-none focus:border-[#D8C2A8]"
                    maxLength={19}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] mb-1">
                      Expiry Date (MM/YY)
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                      className="w-full bg-[#141412] border border-white/10 rounded-lg px-4 py-2.5 font-mono text-xs text-[#F7F5F0] focus:outline-none focus:border-[#D8C2A8]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] mb-1">
                      Security Code (CVV)
                    </label>
                    <input
                      type="password"
                      placeholder="•••"
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      className="w-full bg-[#141412] border border-white/10 rounded-lg px-4 py-2.5 font-mono text-xs text-[#F7F5F0] focus:outline-none focus:border-[#D8C2A8]"
                      maxLength={4}
                      required
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-end gap-4 border-t border-white/10 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 font-sans text-[10px] uppercase tracking-[0.2em] text-[#8A857D]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#D8C2A8] text-[#060605] font-sans text-[10px] uppercase tracking-[0.2em] font-medium"
                  >
                    Save Card
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PaymentMethodsList;