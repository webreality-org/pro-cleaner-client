'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import ReIconPlus from '@/components/reUi/ReIconPlus';
import ReNav from '@/components/reUi/ReNav';
import { Button } from '@/components/ui/button';
import Footer from '@/components/view/shared/Footer';
import { topHeaderItems } from '@/constants';
import { cn } from '@/lib/utils';
import { TChildrenProps } from '@/types';

const Layout = ({ children }: TChildrenProps) => {
  const [isTopHidden, setIsTopHidden] = useState(false);
  console.log('🌼 🔥🔥 Layout 🔥🔥 isTopHidden🌼', isTopHidden);

  const handleTopHeader = () => {
    setIsTopHidden(!isTopHidden);
  };
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-10 py-2 ">
        <div className="flex flex-col lg:flex-row lg:justify-between  ">
          <Link className="hidden lg:block" href="/">
            <Image
              className=""
              src="/assets/images/logo-transparent.png"
              height={100}
              width={100}
              alt=""
            />
          </Link>
          <div className="flex flex-col py-3 lg:flex-row">
            <AnimatePresence>
              {isTopHidden && (
                <motion.div
                  key="topHeaderContent"
                  className={cn('flex lg:gap-8 flex-col lg:flex-row')}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {topHeaderItems.map((item, i) => (
                    <>
                      <ReIconPlus key={Math.random()} items={item} />
                    </>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="hidden lg:flex lg:gap-8 ">
              {topHeaderItems.map((item, i) => (
                <ReIconPlus key={i} items={item} />
              ))}
            </div>
            <div className="mt-3 flex justify-between rounded-full bg-primary-200/20 lg:hidden">
              <motion.button
                type="button"
                className="ml-4 "
                onClick={handleTopHeader}
                initial={{ scale: 1 }}
                animate={{ scale: isTopHidden ? 1 : 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  className=""
                  src={isTopHidden ? '/assets/icons/arrow-up.svg' : '/assets/icons/arrow-down.svg'}
                  height={20}
                  width={20}
                  alt=""
                />
              </motion.button>
              <Button
                type="button"
                className="rounded-full bg-primary-400 font-semibold capitalize text-light-100  "
              >
                Get a quote
              </Button>
            </div>
          </div>
          <div className="mt-3 hidden justify-between rounded-full  lg:flex ">
            <button type="button" className="ml-2 lg:hidden " onClick={handleTopHeader}>
              {isTopHidden ? 'Show' : 'Hide'}
            </button>
            <Button
              type="button"
              className="rounded-full bg-primary-400 font-semibold capitalize text-light-100  "
            >
              Get a quote
            </Button>
          </div>
        </div>
      </div>
      <ReNav />
      <main className="">
        <section className="">{children}</section>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
// max-md:pb-14
