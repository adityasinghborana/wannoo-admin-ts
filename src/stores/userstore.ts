import { create } from 'zustand';

type UserRole = 'admin' | 'editor' | 'viewer'; // add your roles here

interface UserState {
  role: UserRole | null;
  setRole: (role: UserRole) => void;
}

export const useUserStore = create<UserState>((set) => ({
  role: null,
  setRole: (role) => set({ role }),
}));
   