import { UserIdentity } from "@/interfaces/auth/authentication.interfaces";
import { create } from "zustand";

interface Props {
  user: UserIdentity | null;
  setUser: (user: UserIdentity | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<Props>((set) => ({
  user: null,
  setUser: (user: UserIdentity | null) => set(() => ({ user })),
  clearUser: () => set({ user: null }),
}));
