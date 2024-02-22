'use client';

import Image from 'next/image';
import React from 'react';

import image from '../../../../../../public/assets/images/contactUs.png';

import { PrimaryButton } from '@/components/re-ui/raf-forhad/re-button/re-button';
import ReInputs from '@/components/re-ui/raf-forhad/Re-input/Re-inputs';

export default function ContactUs() {
  const handleClick = () => {
    // Handle button click logic here
    console.log('Button clicked!');
  };

  return (
    // <div className="container flex h-full w-full flex-row items-center justify-between">
    //   <div className="flex h-full w-1/3 flex-col items-center space-y-5 rounded-lg bg-[#4BA0E8]">
    //     <Image src={image} height={150} width={150} alt="" />
    //   </div>
    //   <div>
    //     <PrimaryButton onClick={handleClick}>{'hello'}</PrimaryButton>
    //     <ReInputs />
    //   </div>
    // </div>
    <ReInputs />
  );
}
