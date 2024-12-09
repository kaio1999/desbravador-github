import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Repo {
  name: string;
  description: string;
  stars: number;
  language: string;
  html_url: string;
}

interface ReposState {
  repos: Repo[];
  setRepos: (repos: Repo[]) => void;
  clearRepos: () => void;
}

export const useReposStore = create<ReposState>()(
  persist(
    (set) => ({
      repos: [],
      setRepos: (repos) => set({ repos }),
      clearRepos: () => set({ repos: [] }),
    }),
    {
      name: "repos-store",
    }
  )
);
