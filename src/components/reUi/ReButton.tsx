'use client';

import { ReactNode } from 'react';

import { Button } from '../ui/button';

import { cn } from '@/lib/utils';

type TButton = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  isSubmitting?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
};

export function ReButton({
  isSubmitting = false,
  onClick,
  type = 'button',
  className,
  disabled = false,
  children,
}: TButton) {
  const defaultClassName = cn('bg-green-500 text-black', {
    'bg-sky-700 text-white': children === 'Edit',
    'bg-red-500 text-white': children === 'Delete',
  });
  return (
    <Button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={className || defaultClassName}
    >
      {isSubmitting ? `${children} loading..` : children}
    </Button>
  );
}
