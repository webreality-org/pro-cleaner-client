'use client';

import clsx from 'clsx';
import { useFormStatus } from 'react-dom';

import { Button } from '../ui/button';

type TButton = {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
};

export default function LoadingButton({ text, type }: TButton) {
  const { pending } = useFormStatus();
  return (
    <Button
      type={type}
      className={clsx('bg-green-500 text-black', {
        'bg-sky-700 text-white': text === 'Edit',
        'bg-red-500 text-white': text === 'Delete',
      })}
    >
      {pending ? 'Loading...' : `${text}`}
    </Button>
  );
}
