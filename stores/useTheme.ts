import { create } from "zustand";

interface IThemeStore {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}

export const useTheme = create<IThemeStore>((set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme }),
}));
