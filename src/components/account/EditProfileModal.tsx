'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface UserProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarUrl?: string;
}

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userData: UserProfileData;
  onSave: (newData: UserProfileData) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  userData,
  onSave,
}) => {
  const [formData, setFormData] = useState<UserProfileData>(userData);
  const [previewImage, setPreviewImage] = useState<string | undefined>(userData.avatarUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewImage(result);
        setFormData((prev) => ({ ...prev, avatarUrl: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg bg-[#0E0E0D] border border-white/15 rounded-2xl p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
          >
            {/* Header */}
            <div className="flex justify-between items-center pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#D8C2A8]">
                  PROFILE SETTINGS
                </span>
                <h3 className="font-serif text-2xl font-light text-[#F7F5F0] mt-1">
                  Edit Personal Details
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#8A857D] hover:text-[#F7F5F0] hover:border-white/30 transition-all"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* AVATAR UPLOAD SECTION */}
              <div className="flex items-center gap-6 pb-6 border-b border-white/10">
                <div className="relative w-20 h-20 rounded-full border border-white/20 bg-white/5 overflow-hidden flex items-center justify-center font-serif text-3xl text-[#D8C2A8] flex-none">
                  {previewImage ? (
                    <img src={previewImage} alt="Profile Preview" className="w-full h-full object-cover" />
                  ) : (
                    formData.firstName?.charAt(0) || 'A'
                  )}
                </div>

                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 rounded-full border border-white/20 bg-white/5 font-sans text-[10px] uppercase tracking-[0.2em] text-[#F7F5F0] hover:bg-[#D8C2A8] hover:text-[#060605] hover:border-[#D8C2A8] transition-all duration-300"
                  >
                    Upload New Photo
                  </button>
                  <p className="font-sans text-[9px] text-[#6A655D] mt-2">
                    JPEG, PNG, or WEBP (Max 5MB)
                  </p>
                </div>
              </div>

              {/* INPUT FIELDS */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-[#141412] border border-white/10 rounded-lg px-4 py-3 font-sans text-xs text-[#F7F5F0] focus:outline-none focus:border-[#D8C2A8] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-[#141412] border border-white/10 rounded-lg px-4 py-3 font-sans text-xs text-[#F7F5F0] focus:outline-none focus:border-[#D8C2A8] transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#141412] border border-white/10 rounded-lg px-4 py-3 font-sans text-xs text-[#F7F5F0] focus:outline-none focus:border-[#D8C2A8] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#8A857D] mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#141412] border border-white/10 rounded-lg px-4 py-3 font-mono text-xs text-[#F7F5F0] focus:outline-none focus:border-[#D8C2A8] transition-colors"
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 font-sans text-[10px] uppercase tracking-[0.25em] text-[#8A857D] hover:text-[#F7F5F0] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-[#D8C2A8] text-[#060605] font-sans text-[10px] uppercase tracking-[0.25em] font-medium hover:bg-white transition-colors shadow-[0_0_20px_rgba(216,194,168,0.2)]"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EditProfileModal;