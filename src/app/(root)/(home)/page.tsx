import { SearchParamsProps } from '@/types';

export default async function Home({ searchParams }: SearchParamsProps) {
  return (
    <>
      <div className=" h-[80vh] bg-hero-img-5 bg-cover bg-fixed object-cover lg:bg-hero-img-4">
        <div className="inset-y-0  left-0 flex h-[80vh] items-center justify-start bg-gradient-to-r from-black/50 via-transparent to-transparent">
          <div className="mx-auto flex max-w-7xl flex-col items-center py-[9rem]">
            <h1 className="font-title text-[3rem] font-normal text-white sm:text-[4rem] md:text-[6rem]">
              Stay neat
            </h1>
            <h2 className="font-title text-[2rem] font-normal text-yellow-400 sm:text-[3rem] md:text-[2rem]">
              <a href="www.facebook.com">Explore Clean Living</a>
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

      <div className=" min-h-screen text-typo-600">
        <div className="flex flex-col items-center justify-center py-20 ">
          <h1 className="font-title text-[3rem] font-normal  sm:text-[4rem] md:text-[6rem]">
            Explore LivingBook
          </h1>

          <p className="w-full text-[1.3rem] font-normal leading-7 text-typo-700  md:w-[31rem] md:text-[1.5rem]">
            Discover Hotels, Resorts, and many living facilities in your favorite places.
          </p>
        </div>
        <div className="h-36 border bg-dark-100  text-white">100</div>
        <div className="h-36 border bg-dark-200  text-white">200</div>

        <div className="h-48 border bg-dark-300  text-white">300</div>
        <div className="h-36 border bg-dark-400  text-white">400</div>
        <div className="h-36 border bg-dark-500  text-white">500</div>
        <div className="h-36 border bg-dark-600  text-white">600</div>
        <div className="h-36 border bg-dark-650  text-white">650</div>

        <div className="h-36 border bg-dark-700  text-white">700</div>
        <div className="h-48 border bg-dark-800  text-white">800</div>

        <div className="h-36 border bg-dark-900  text-white">900</div>
        <div className="h-36 border bg-dark-950  text-white">950</div>
      </div>
    </>
  );
}
