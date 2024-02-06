'use client';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface ReGlideProps {
  children: ReactNode;
  index: number;
  formStep: number;
}

export const ReGlide = ({ formStep = 0, index = 0, children }: ReGlideProps) => {
  const searchParams = useSearchParams();
  const search = searchParams.get('fs');
  if (search === '2') {
    formStep = parseInt(search);
  }
  let translateX = -(formStep * 100);

  if (index !== 0) {
    translateX = index * 100 - formStep * 100;
  }

  return (
    <motion.div
      className={cn('space-y-3', {
        hidden: formStep !== index,
      })}
      animate={{
        translateX: `${translateX}%`,
      }}
      transition={{
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};
