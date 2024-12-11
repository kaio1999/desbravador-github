import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Repo {
  id: number;
  name: string;
  description?: string;
  language?: string;
  stargazers_count: number;
  owner: {
    login: string;
  };
}

interface ReposState {
  repos: Repo[];
  setRepos: (repos: Repo[]) => void;
}

export const useReposStore = create<ReposState>()(
  persist(
    (set) => ({
      repos: [],
      setRepos: (repos) => set({ repos }),
    }),
    {
      name: "repos-store",
    }
  )
);
