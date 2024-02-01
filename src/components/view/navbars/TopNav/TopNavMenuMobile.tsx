'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownCircle, ChevronUpCircle } from 'lucide-react';
import { useState } from 'react';

import QuoteButton from './QuoteButton';

import ReIconPlus from '@/components/reUi/ReIconPlus';
import { topHeaderItems } from '@/constants';
import { cn } from '@/lib/utils';

const TopNavMenuMobile = () => {
  const [isTopHidden, setIsTopHidden] = useState(false);
  const handleTopHeader = () => {
    setIsTopHidden(!isTopHidden);
  };
  return (
    <div>
      {' '}
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
            {topHeaderItems.map((item) => (
              <ReIconPlus key={Math.random()} items={item} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-3 flex justify-between rounded-full bg-primary-200/20 lg:hidden">
        <motion.button
          type="button"
          className="ml-4 "
          onClick={handleTopHeader}
          initial={{ scale: 1 }}
          animate={{ scale: isTopHidden ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {isTopHidden ? (
            <ChevronDownCircle className="text-primary-500 hover:fill-primary-300 hover:text-white" />
          ) : (
            <ChevronUpCircle className="text-primary-500 hover:fill-primary-300 hover:text-white" />
          )}
        </motion.button>
        <QuoteButton />
      </div>
    </div>
  );
};

export default TopNavMenuMobile;
