/* eslint-disable import/order */
'use client';
import Image from 'next/image';

import logo from '../../../public/assets/images/logo.svg';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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

export default function ReNavMobile() {
  return (
    <div className="flex flex-row items-center justify-between p-4 lg:hidden">
      <div>
        <Image src={logo} width={100} height={100} alt="logo" />
      </div>
      <div className="flex">
        <Sheet>
          <SheetTrigger asChild>
            <span className="flex cursor-pointer items-center justify-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="60"
                height="60"
                viewBox="0 0 64 64"
              >
                <linearGradient
                  id="BTq72ScaTZ1UBmT8omo2pa_44024_gr1"
                  x1="32"
                  x2="32"
                  y1="5.333"
                  y2="59.867"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop stopColor="white"></stop>
                  <stop stopColor="white"></stop>
                </linearGradient>
                <path
                  fill="url(#BTq72ScaTZ1UBmT8omo2pa_44024_gr1)"
                  d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"
                ></path>
                <linearGradient
                  id="BTq72ScaTZ1UBmT8omo2pb_44024_gr2"
                  x1="32"
                  x2="32"
                  y1="5.333"
                  y2="59.867"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop stopColor="white"></stop>
                  <stop stopColor="white"></stop>
                </linearGradient>
                <path
                  fill="url(#BTq72ScaTZ1UBmT8omo2pb_44024_gr2)"
                  d="M32,52c-11.028,0-20-8.972-20-20s8.972-20,20-20s20,8.972,20,20S43.028,52,32,52z M32,14 c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S41.925,14,32,14z"
                ></path>
                <linearGradient
                  id="BTq72ScaTZ1UBmT8omo2pc_44024_gr3"
                  x1="32"
                  x2="32"
                  y1="21.5"
                  y2="26.336"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop stopColor="white"></stop>
                  <stop stopColor="white"></stop>
                </linearGradient>
                <path
                  fill="url(#BTq72ScaTZ1UBmT8omo2pc_44024_gr3)"
                  d="M42,25c0,0.552-0.448,1-1,1H23c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h18 c0.552,0,1,0.448,1,1V25z"
                ></path>
                <linearGradient
                  id="BTq72ScaTZ1UBmT8omo2pd_44024_gr4"
                  x1="32"
                  x2="32"
                  y1="29.333"
                  y2="34.5"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="1" stopColor="white"></stop>
                  <stop offset="0" stopColor="white"></stop>
                </linearGradient>
                <path
                  fill="url(#BTq72ScaTZ1UBmT8omo2pd_44024_gr4)"
                  d="M42,33c0,0.552-0.448,1-1,1H23c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h18 c0.552,0,1,0.448,1,1V33z"
                ></path>
                <linearGradient
                  id="BTq72ScaTZ1UBmT8omo2pe_44024_gr5"
                  x1="32"
                  x2="32"
                  y1="37"
                  y2="41.337"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop stopColor="white"></stop>
                  <stop stopColor="white"></stop>
                </linearGradient>
                <path
                  fill="url(#BTq72ScaTZ1UBmT8omo2pe_44024_gr5)"
                  d="M42,41c0,0.552-0.448,1-1,1H23c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h18 c0.552,0,1,0.448,1,1V41z"
                ></path>
              </svg>
            </span>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col bg-black/60">
            <SheetHeader className="mt-2 flex items-center justify-between">
              <Image src={logo} width={100} height={100} alt="logo" />
            </SheetHeader>
            <ul className="mt-10 flex flex-col gap-y-6 text-lg font-bold text-white">
              <SheetClose asChild>
                <li>
                  <Link href="/">HOME</Link>
                </li>
              </SheetClose>

              <li>
                <Accordion type="single" collapsible className="!border-0">
                  <AccordionItem value="1" className="border-0">
                    <AccordionTrigger className="!border-0 p-0 font-bold !ring-0 hover:border-0 hover:no-underline hover:ring-0 focus:border-none focus:outline-none focus:ring-0">
                      SERVICES
                    </AccordionTrigger>
                    <AccordionContent className="!border-0">
                      <ul className="!z-[200] grid w-[400px] gap-3 p-2  font-bold text-white md:grid-cols-2">
                        {components.map((component) => (
                          <Link key={component.title} href={component.href}>
                            {component.title}
                          </Link>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT US</Link>
              </li>
            </ul>
            <SheetFooter className="flex !items-start !justify-start text-start">
              <SheetClose asChild>
                <Button type="submit" className="mt-10 border-2 px-10 text-lg font-bold text-white">
                  LOGIN
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
