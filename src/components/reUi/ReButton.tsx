'use client';

import { Button } from '../ui/button';

import { cn } from '@/lib/utils';

type TButton = {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  isSubmitting?: boolean;
  className?: string;
  event?: () => void;
  disabled?: boolean;
};

export function ReButton({
  isSubmitting = false,
  text,
  type = 'button',
  className,
  event,
  disabled = false,
}: TButton) {
  const defaultClassName = cn('bg-green-500 text-black', {
    'bg-sky-700 text-white': text === 'Edit',
    'bg-red-500 text-white': text === 'Delete',
  });
  return (
    <Button
      type={type}
      onClick={event}
      disabled={disabled}
      className={className || defaultClassName}
    >
      {isSubmitting ? `${text} loading..` : `${text}`}
    </Button>
  );
}
