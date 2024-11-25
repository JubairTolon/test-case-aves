import { create } from 'zustand';

interface ThemeStoreState {
  theme: string;
  setTheme: (value: string) => void;
}

export const useThemeStore = create<ThemeStoreState>((set) => ({
  theme: localStorage.getItem('theme') || 'light',
  setTheme: (value) => {
    localStorage.setItem('theme', value);
    document.documentElement.classList.remove(value === 'light' ? 'dark' : 'light');
    document.documentElement.classList.add(value);
    set({ theme: value });
  },
}));
