'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AddressItem {
  id: string;
  isDefault: boolean;
  fullName: string;
  street: string;
  apartment?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

const mockAddresses: AddressItem[] = [
  {
    id: '1',
    isDefault: true,
    fullName: 'Alex Morgan',
    street: '740 Park Avenue',
    apartment: 'Apt 12A',
    city: 'New York',
    state: 'NY',
    postalCode: '10021',
    country: 'United States',
    phone: '+1 (555) 123-4567',
  },
  {
    id: '2',
    isDefault: false,
    fullName: 'Alex Morgan',
    street: '1540 Ocean Drive',
    apartment: 'Suite 402',
    city: 'Miami',
    state: 'FL',
    postalCode: '33139',
    country: 'United States',
    phone: '+1 (555) 987-6543',
  },
];

export const AddressesList: React.FC = () => {
  const [addresses, setAddresses] = useState<AddressItem[]>(mockAddresses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<AddressItem | null>(null);

  // Form State
  const [formData, setFormData] = useState<Omit<AddressItem, 'id'>>({
    isDefault: false,
    fullName: 'Alex Morgan',
    street: '',
    apartment: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'United States',
    phone: '',
  });

  const handleOpenAddModal = () => {
    setEditingAddress(null);
    setFormData({
      isDefault: addresses.length === 0,
      fullName: 'Alex Morgan',
      street: '',
      apartment: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'United States',
      phone: '',
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (addr: AddressItem) => {
    setEditingAddress(addr);
    setFormData({ ...addr });
    setIsModalOpen(true);
  };

  const handleSetDefault = (id: string) => {
    setAddresses((prev) =>
      prev.map((item) => ({
        ...item,
        isDefault: item.id === id,
      }))
    );
  };

  const handleDelete = (id: string) => {
    setAddresses((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAddress) {
      // Update
      setAddresses((prev) =>
        prev.map((item) =>
          item.id === editingAddress.id ? { ...item, ...formData } : item
        )
      );
    } else {
      // Add
      const newAddr: AddressItem = {
        id: Date.now().toString(),
        ...formData,
      };

      if (formData.isDefault) {
        setAddresses((prev) =>
          prev.map((item) => ({ ...item, isDefault: false })).concat(newAddr)
        );
      } else {
        setAddresses((prev) => [...prev, newAddr]);
      }
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center pb-4 border-b border-white/10">
        <div>
          <h2 className="font-serif text-xl font-light tracking-wide text-[#F7F5F0]">
            SAVED ADDRESSES
          </h2>
          <p className="font-sans text-xs text-[#8A857D] mt-1">
            Manage your delivery destinations and primary address.
          </p>
        </div>

        <button
          onClick={handleOpenAddModal}
          className="px-4 py-2 rounded-full border border-[#D8C2A8]/40 bg-[#D8C2A8]/10 font-sans text-[10px] uppercase tracking-[0.2em] text-[#D8C2A8] hover:bg-[#D8C2A8] hover:text-[#060605] transition-all duration-300"
        >
          + ADD ADDRESS
        </button>
      </div>

      {/* ADDRESSES GRID */}
      <div className="space-y-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`bg-[#0B0B0A] border rounded-xl p-5 flex flex-col justify-between transition-all duration-300 ${
              addr.isDefault
                ? 'border-[#D8C2A8]/60 shadow-[0_0_15px_rgba(216,194,168,0.05)]'
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <span className="font-serif text-base font-light text-[#F7F5F0]">
                  {addr.fullName}
                </span>
                {addr.isDefault && (
                  <span className="font-sans text-[8px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full border border-[#D8C2A8]/40 text-[#D8C2A8] bg-[#D8C2A8]/10">
                    DEFAULT
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 text-[10px] font-sans uppercase tracking-[0.15em] text-[#8A857D]">
                <button
                  onClick={() => handleOpenEditModal(addr)}
                  className="hover:text-[#D8C2A8] transition-colors"
                >
                  EDIT
                </button>
                <span>•</span>
                <button
                  onClick={() => handleDelete(addr.id)}
                  className="hover:text-red-400 transition-colors"
                >
                  REMOVE
                </button>
              </div>
            </div>

            <div className="font-sans text-xs font-light text-[#A8A39A] leading-relaxed space-y-0.5">
              <p>{addr.street}{addr.apartment ? `, ${addr.apartment}` : ''}</p>
              <p>{addr.city}, {addr.state} {addr.postalCode}</p>
              <p>{addr.country}</p>
              <p className="font-mono text-[11px] text-[#6A655D] pt-1">{addr.phone}</p>
            </div>

            {!addr.isDefault && (
              <div className="pt-4 mt-4 border-t border-white/5">
                <button
                  onClick={() => handleSetDefault(addr.id)}
                  className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] hover:text-[#D8C2A8] transition-colors"
                >
                  SET AS DEFAULT ADDRESS
                </button>
              </div>
            )}
          </div>
        ))}

        {addresses.length === 0 && (
          <div className="text-center py-12 border border-dashed border-white/10 rounded-xl">
            <p className="font-sans text-xs text-[#8A857D]">You have no saved addresses.</p>
            <button
              onClick={handleOpenAddModal}
              className="mt-3 font-sans text-[10px] uppercase tracking-[0.2em] text-[#D8C2A8] underline"
            >
              Add your first address
            </button>
          </div>
        )}
      </div>

      {/* ADD / EDIT MODAL */}
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
                <h3 className="font-serif text-xl font-light text-[#F7F5F0]">
                  {editingAddress ? 'Edit Address' : 'Add New Address'}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#8A857D] hover:text-[#F7F5F0]"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#141412] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-xs text-[#F7F5F0] focus:outline-none focus:border-[#D8C2A8]"
                    required
                  />
                </div>

                <div>
                  <label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    value={formData.street}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                    placeholder="e.g. 740 Park Avenue"
                    className="w-full bg-[#141412] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-xs text-[#F7F5F0] focus:outline-none focus:border-[#D8C2A8]"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] mb-1">
                      Apartment / Suite
                    </label>
                    <input
                      type="text"
                      value={formData.apartment}
                      onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                      placeholder="e.g. Apt 12A"
                      className="w-full bg-[#141412] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-xs text-[#F7F5F0] focus:outline-none focus:border-[#D8C2A8]"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#141412] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-xs text-[#F7F5F0] focus:outline-none focus:border-[#D8C2A8]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] mb-1">
                      State / Province
                    </label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full bg-[#141412] border border-white/10 rounded-lg px-4 py-2.5 font-sans text-xs text-[#F7F5F0] focus:outline-none focus:border-[#D8C2A8]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full bg-[#141412] border border-white/10 rounded-lg px-4 py-2.5 font-mono text-xs text-[#F7F5F0] focus:outline-none focus:border-[#D8C2A8]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#141412] border border-white/10 rounded-lg px-4 py-2.5 font-mono text-xs text-[#F7F5F0] focus:outline-none focus:border-[#D8C2A8]"
                    required
                  />
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
                    Save Address
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

export default AddressesList;