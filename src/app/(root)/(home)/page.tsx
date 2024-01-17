import { SearchParamsProps } from '@/types';

export default async function Home({ searchParams }: SearchParamsProps) {
  return (
    <>
      <div className="border-b border-black bg-hero-img-2 bg-cover bg-fixed">
        <div className="inset-y-0 left-0 flex items-center justify-start bg-gradient-to-r from-black/50 via-transparent to-transparent">
          <div className="mx-auto flex max-w-7xl flex-col items-center py-[9rem]">
            <h1 className="font-title text-[3rem] font-normal text-white sm:text-[4rem] md:text-[6rem]">
              Stay curious.
            </h1>
            <h2 className="font-title text-[2rem] font-normal text-yellow-400 sm:text-[3rem] md:text-[2rem]">
              Explore LivingBook
            </h2>
            <p className="w-full text-[1.3rem] font-normal leading-7 text-white md:w-[31rem] md:text-[1.5rem]">
              Discover Hotels, Resorts, and many living facilities in your favorite places.
            </p>
            <button className="mt-[2.5rem] rounded-lg bg-lime-500 px-4 py-2 text-black">
              Know more
            </button>
          </div>
        </div>
      </div>

      <div className="container-size min-h-screen">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="font-title text-[3rem] font-normal text-black sm:text-[4rem] md:text-[6rem]">
            Explore LivingBook
          </h1>
          <p className="w-full text-[1.3rem] font-normal leading-7 text-black md:w-[31rem] md:text-[1.5rem]">
            Discover Hotels, Resorts, and many living facilities in your favorite places.
          </p>
        </div>
      </div>
    </>
  );
}
