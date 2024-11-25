import { useEffect } from 'react';

export function useTheme() {
  useEffect(() => {
    const applyTheme = () => {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Apply the theme on initial load
    applyTheme();

    // Add a listener for changes in OS color scheme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', applyTheme);

    // Clean up the event listener on unmount
    return () => mediaQuery.removeEventListener('change', applyTheme);
  }, []);

  const setLightMode = () => {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
  };

  const setDarkMode = () => {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
  };

  const setSystemMode = () => {
    localStorage.removeItem('theme');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return { setLightMode, setDarkMode, setSystemMode };
}
