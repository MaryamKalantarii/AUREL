'use client';

import React, { useState } from 'react';
import { EditProfileModal, UserProfileData } from './EditProfileModal';

export const ProfileInfo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<UserProfileData>({
    firstName: 'Alex',
    lastName: 'Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 123-4567',
    avatarUrl: undefined,
  });

  const handleSave = (newData: UserProfileData) => {
    setUser(newData);
  };

  return (
    <div>
      {/* Edit Modal */}
      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userData={user}
        onSave={handleSave}
      />

      {/* Header Area */}
      <div className="flex justify-between items-center mb-6 pb-2 border-b border-white/10">
        <h2 className="font-serif text-lg font-light tracking-wide text-[#F7F5F0]">
          PROFILE INFORMATION
        </h2>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#D8C2A8] hover:underline flex items-center gap-1"
        >
          ✎ EDIT
        </button>
      </div>

      {/* Avatar & Summary */}
      <div className="flex items-center gap-6 mb-8">
        <div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 overflow-hidden flex items-center justify-center font-serif text-2xl text-[#D8C2A8] flex-none">
          {user.avatarUrl ? (
            <img src={user.avatarUrl} alt={user.firstName} className="w-full h-full object-cover" />
          ) : (
            user.firstName.charAt(0)
          )}
        </div>
        <div>
          <h3 className="font-serif text-xl font-light text-[#F7F5F0]">
            {user.firstName} {user.lastName}
          </h3>
          <p className="font-sans text-xs text-[#8A857D] mt-0.5">{user.email}</p>
          <p className="font-mono text-xs text-[#6A655D] mt-0.5">{user.phone}</p>
        </div>
      </div>

      {/* Profile Details Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
        <div>
          <span className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#6A655D] mb-1">
            FIRST NAME
          </span>
          <span className="font-sans text-xs text-[#F7F5F0]">{user.firstName}</span>
        </div>
        <div>
          <span className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#6A655D] mb-1">
            LAST NAME
          </span>
          <span className="font-sans text-xs text-[#F7F5F0]">{user.lastName}</span>
        </div>
        <div>
          <span className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#6A655D] mb-1">
            PHONE NUMBER
          </span>
          <span className="font-mono text-xs text-[#F7F5F0]">{user.phone}</span>
        </div>
        <div className="col-span-2 sm:col-span-3 pt-4 border-t border-white/5">
          <span className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#6A655D] mb-1">
            EMAIL ADDRESS
          </span>
          <span className="font-sans text-xs text-[#D8C2A8]">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;