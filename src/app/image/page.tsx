'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

import bg from '../../../public/assets/images/bg-5.jpg';
import './style.css';

export default function page() {
  return (
    <div className="flex flex-col">
      {/* <div className="flex h-full flex-col items-center space-y-7">
        <div className="flex-center h-full flex-col space-y-4">
          <h1>Image Fill Property </h1>
          <Image
            src={bg}
            alt="Picture of the author"
            sizes="90vw"
            fill={true}
            className="object-cover object-center"
          />
        </div>
      </div> */}

      {/* <div className="flex h-full flex-col items-center space-y-7">
        <div className="flex-center h-full flex-col space-y-4">
          <h1>Image Sizes Property</h1>
          <Image
            className="!w-[400px] md:!w-[600px]"
            src={bg}
            alt="Picture of the author"
            sizes="100vw"
          />
        </div>
      </div> */}

      {/* <div className="flex h-full flex-col items-center space-y-7">
        <div className="flex-center h-full flex-col space-y-4">
          <h1>Image placeholder Property</h1>
          <Image
            src={bg}
            alt="Cover photo"
            width={700}
            height={500}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            placeholder="blur"
          />
        </div>
      </div> */}

      {/* <div className="flex h-full flex-col items-center space-y-7">
        <div className="flex-center h-full flex-col space-y-4">
          <h1>Image placeholder Property</h1>
          <Image
            src={bg}
            alt="Cover photo"
            width={700}
            height={500}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            placeholder="blur"
          />
        </div>
      </div> */}

      {/* <Image
        onLoadingComplete={(image) => image.classList.remove('opacity-0')}
        src={bg}
        alt="jjjj"
        width={700}
        height={500}
        className="duration-[3s] opacity-0 transition-opacity"
      /> */}

      {/* <ViewSource=e pathname="app/background/page.tsx" /> */}
      <div className="bgWrap">
        <Image
          alt="Mountains"
          src={bg}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="bgText bg-black/50 text-white">
        Image Component
        <br />
        as a Background
      </div>
    </div>
  );
}
