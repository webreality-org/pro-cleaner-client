import ContactUs from '@/components/view/common/home/ContactUs/ContactUs';
import Banner from '@/components/view/common/home/banner/Banner';
import Stats from '@/components/view/common/home/stats/Stats';
import WhyChooseUs from '@/components/view/common/home/why-choose-us/WhyChooseUs';

export default function Home() {
  return (
    <>
      {/* banner section */}
      <Banner />
      {/* why choose us section */}
      <WhyChooseUs />
      {/* stats section */}
      <Stats />
      {/* contact us section */}
      <ContactUs />
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
