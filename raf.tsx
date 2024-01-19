// Theme.js

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect } from 'react';
import './test.css';

export const themes = [
  { value: 'light', label: 'Light', icon: '/assets/icons/sun.svg' },
  { value: 'dark', label: 'Dark', icon: '/assets/icons/moon.svg' },
  { value: 'system', label: 'System', icon: '/assets/icons/computer.svg' },
];

const Theme = () => {
  const { theme, setTheme } = useTheme();
  console.log('🌼 🔥🔥 Theme 🔥🔥 theme🌼', theme);


  useEffect(() => {
    const handleColorSchemeChange = (e) => {
      const newColorScheme = e.matches ? 'dark' : 'light';
      setTheme(newColorScheme);
    };

    const colorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeMediaQuery.addEventListener('change', handleColorSchemeChange);

    return () => {
      colorSchemeMediaQuery.removeEventListener('change', handleColorSchemeChange);
    };
  }, [setTheme]);

  const themeHandler = (selectedTheme:string) => {
    setTheme(selectedTheme);

    if (selectedTheme !== 'system') {
      localStorage.setItem('theme', selectedTheme);
    } else {
      localStorage.removeItem('theme');
    }
  };

  return (
    <label className="toggle" htmlFor="switch">
      <input id="switch" className="input" type="checkbox"  />
      {theme === 'light' ? (
        <button type='button'  onClick={() => themeHandler('dark')} className="icon icon--sun">
          <Image
            src="/assets/icons/sun.svg"
            alt="sun"
            width={20}
            height={20}
            className="active-theme"
           
          />
        </button>
      ) : (
        <button type='button' onClick={() => themeHandler('light')} className="icon icon--moon">
          <Image
            src="/assets/icons/moon.svg"
            alt="moon"
            width={20}
            height={20}
            className="active-theme"
            
          />
        </button>
      )}
    </label>
  );
};

export default Theme;
