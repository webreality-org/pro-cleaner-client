import React, { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import './style.css';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

export default function Banner() {
  const [isInputHidden, setIsInputHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 75;
      const inputElement = document.getElementById('scroll-hide-input');

      if (inputElement) {
        const inputRect = inputElement.getBoundingClientRect();
        const isInputAboveNavbar = inputRect.bottom <= navbarHeight;

        setIsInputHidden(isInputAboveNavbar);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Carousel
        className="h-[90vh]"
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className="zoom-bg h-[100vh] bg-hero-img-5 bg-contain bg-fixed lg:bg-hero-img-4 lg:bg-cover lg:object-cover">
            <div className="inset-y-0  left-0 flex h-[90vh] items-center justify-start bg-gradient-to-r from-black/50 via-transparent to-transparent">
              <div className="mx-auto flex max-w-7xl flex-col items-center py-[2rem]">
                <h1 className="font-title text-[3rem] font-normal text-white sm:text-[4rem] md:text-[6rem]">
                  Stay neat
                </h1>
                <TextGenerateEffect
                  words="Explore Clean Living"
                  className="font-title text-[2rem] font-normal text-yellow-400 sm:text-[3rem] md:text-[2rem]"
                />
                <h2 className="font-title text-[5rem] font-normal text-yellow-400 sm:text-[3rem] md:text-[2rem]">
                  <a href="www.facebook.com">Explore Clean Living</a>
                </h2>

                <p className="w-full text-center  text-[1.3rem] font-normal leading-7 text-white md:w-[31rem] md:text-[1.5rem]">
                  Discover Hotels, Resorts, and many living facilities in your favorite places.
                </p>
                <button className="mt-[2.5rem] rounded-lg bg-lime-500 px-4 py-2 text-black">
                  Know more
                </button>
                <input
                  id="scroll-hide-input"
                  type="text"
                  className={`transition-all duration-300 ${
                    isInputHidden
                      ? 'pointer-events-none opacity-0'
                      : 'pointer-events-auto opacity-100'
                  }`}
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="zoom-bg h-[90vh] bg-hero-img-6 bg-contain bg-fixed lg:bg-hero-img-6 lg:bg-cover lg:object-cover">
            <div className="inset-y-0  left-0 flex h-[90vh] items-center justify-start bg-gradient-to-r from-black/50 via-transparent to-transparent">
              <div className="mx-auto flex max-w-7xl flex-col items-center py-[2rem]">
                <h1 className="font-title text-[3rem] font-normal text-white sm:text-[4rem] md:text-[6rem]">
                  Stay neat
                </h1>
                <h2 className="font-title text-[2rem] font-normal text-yellow-400 sm:text-[3rem] md:text-[2rem]">
                  <a href="www.facebook.com">Explore Clean Living</a>
                </h2>

                <p className="w-full text-center  text-[1.3rem] font-normal leading-7 text-white md:w-[31rem] md:text-[1.5rem]">
                  Discover Hotels, Resorts, and many living facilities in your favorite places.
                </p>
                <button className="mt-[2.5rem] rounded-lg bg-lime-500 px-4 py-2 text-black">
                  Know more
                </button>
                <input
                  id="scroll-hide-input"
                  type="text"
                  className={`transition-all duration-300 ${
                    isInputHidden
                      ? 'pointer-events-none opacity-0'
                      : 'pointer-events-auto opacity-100'
                  }`}
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="zoom-bg h-[90vh] bg-hero-img-7 bg-contain bg-fixed lg:bg-hero-img-7 lg:bg-cover lg:object-cover">
            {' '}
            <div className="inset-y-0  left-0 flex h-[90vh] items-center justify-start bg-gradient-to-r from-black/50 via-transparent to-transparent">
              <div className="mx-auto flex max-w-7xl flex-col items-center py-[2rem]">
                <h1 className="font-title text-[3rem] font-normal text-white sm:text-[4rem] md:text-[6rem]">
                  Stay neat
                </h1>
                <TextGenerateEffect
                  words="Explore Clean Living"
                  className="font-title text-[2rem] font-normal text-yellow-400 sm:text-[3rem] md:text-[2rem]"
                />
                <h2 className="font-title text-[2rem] font-normal text-yellow-400 sm:text-[3rem] md:text-[2rem]">
                  <a href="www.facebook.com">Explore Clean Living</a>
                </h2>

                <p className="w-full text-center  text-[1.3rem] font-normal leading-7 text-white md:w-[31rem] md:text-[1.5rem]">
                  Discover Hotels, Resorts, and many living facilities in your favorite places.
                </p>
                <button className="mt-[2.5rem] rounded-lg bg-lime-500 px-4 py-2 text-black">
                  Know more
                </button>
                <input
                  id="scroll-hide-input"
                  type="text"
                  className={`transition-all duration-300 ${
                    isInputHidden
                      ? 'pointer-events-none opacity-0'
                      : 'pointer-events-auto opacity-100'
                  }`}
                />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-[75%] top-[95%] lg:left-[90%] lg:top-[80%]" />
        <CarouselNext className="left-[85%] top-[95%] lg:left-[94%] lg:top-[80%]" />
      </Carousel>
    </>
  );
}
