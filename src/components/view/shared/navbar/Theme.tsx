'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { themes } from '@/constants';

const Theme = () => {
  const { theme, setTheme } = useTheme();

  const [systemLight, setSystemLight] = useState(false);

  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    const colorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    setSystemLight(colorSchemeMediaQuery.matches);

    colorSchemeMediaQuery.addEventListener('change', (e: MediaQueryListEvent) => {
      const newColorScheme = e.matches ? 'dark' : 'light';
      setTheme(newColorScheme);
    });
  }, [setTheme]);

  const handleThemeChange = (selectedTheme: string) => {
    if (selectedTheme === theme || (selectedTheme === 'system' && theme === 'system')) {
      return;
    }

    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
      setTheme(selectedTheme);
    }, 700);
  };

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger
          disabled={isRotating}
          className="rounded-full bg-light-100 p-2 focus:bg-light-100 data-[state=open]:bg-light-100 dark:bg-transparent dark:focus:bg-transparent dark:data-[state=open]:bg-transparent"
        >
          <div
            className={`transition-transform duration-500 ${isRotating ? 'rotate-[360deg]' : ''}`}
          >
            {theme === 'light' || (theme === 'system' && !systemLight) ? (
              <Image
                src="/assets/icons/sun.svg"
                alt="sun"
                width={18}
                height={18}
                className="active-theme"
              />
            ) : (
              <Image
                src="/assets/icons/moon-3.svg"
                alt="moon-3"
                width={36}
                height={36}
                className=""
              />
            )}
          </div>
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border bg-light-100 py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((item, i) => (
            <MenubarItem
              key={i}
              className="flex items-center  gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              onClick={() => handleThemeChange(item.value)}
            >
              <Image
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={`${theme === item.value && 'active-theme'}`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  theme === item.value ? 'text-primary-400' : 'text-dark100_light900'
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
