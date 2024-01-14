'use client';
import Image from 'next/image';
import Link from 'next/link';

import Theme from '../view/shared/navbar/Theme';

import './ReNav.css';
import ReNavMobile from './ReNavMobile';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

function ReNav() {
  return (
    <nav className="fixed top-0 !z-50 mx-auto w-[100vw] !border-transparent bg-[#16B1E9] ">
      <div className="relative mx-auto hidden w-full min-w-[780] max-w-[1400px] items-center justify-between bg-transparent px-4 lg:flex lg:px-2">
        <div className="mt-4 flex w-full flex-col">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-start justify-start active:bg-none">
              <Image className="" src="/assets/images/logo.svg" height={150} width={150} alt="" />
            </Link>
            <Link href="/" className="inline-flex items-start justify-start active:bg-none">
              <Image className="" src="/assets/images/logo.svg" height={150} width={150} alt="" />
            </Link>
          </div>
          <div className="mt-2 flex w-[100%] items-center justify-between bg-slate-900 px-2 py-4">
            <ul className="menu menu-horizontal hidden h-full items-center space-x-1 px-1 text-sm font-bold uppercase text-white lg:flex lg:text-sm xl:space-x-5 xl:text-base">
              <NavigationMenu
                delayDuration={50}
                orientation="vertical"
                className="NavigationMenuViewport"
              >
                <NavigationMenuList className="gap-x-4">
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="">Home</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="p-0 text-base font-bold uppercase">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="NavigationMenuContent">
                      <ul className="!z-[200] grid w-[400px] gap-3 bg-black p-4 font-bold text-white md:grid-cols-2">
                        {components.map((component) => (
                          <Link key={component.title} href={component.href}>
                            {component.title}
                          </Link>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="">About Us</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="">Contact Us</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </ul>
            {/* Login And SignUp Button */}
            <div className="flex-center flex flex-row gap-10 overflow-hidden">
              <div className="input-container text-black">
                <input
                  type="text"
                  name="text"
                  className="input !text-black"
                  placeholder="Search something..."
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="icon"
                >
                  <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                  <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect fill="white" height="24" width="24"></rect>
                    <path
                      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </div>

              <Link
                href="/sign-in"
                className="btn-one hover:text-accent text-lg font-bold uppercase text-white hover:transition-all hover:duration-300 hover:ease-in"
              >
                Login
              </Link>

              <Theme />
            </div>
          </div>
        </div>
      </div>
      <ReNavMobile />
    </nav>
  );
}

export default ReNav;
