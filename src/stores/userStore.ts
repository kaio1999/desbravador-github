import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  avatar_url: string;
  login: string;
  name?: string;
  bio?: string;
  location?: string;
  blog?: string;
  followers: number;
  following: number;
  email?: string;
}

interface UserState {
  user: User;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: {
        avatar_url: "",
        login: "",
        followers: 0,
        following: 0
      },
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-store",
    }
  )
);
