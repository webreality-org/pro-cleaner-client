import Image from 'next/image';
import Link from 'next/link';

import ReIconPlus from '@/components/reUi/ReIconPlus';
import ReNav from '@/components/reUi/ReNav';
import { Button } from '@/components/ui/button';
import Footer from '@/components/view/shared/Footer';
import { topHeaderItems } from '@/constants';
import { TChildrenProps } from '@/types';

const Layout = ({ children }: TChildrenProps) => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div>
        <div className="mx-auto max-w-7xl px-10 py-2">
          <div className="flex items-center justify-between ">
            <Link href="/">
              <Image
                className=""
                src="/assets/images/logo-transparent.png"
                height={100}
                width={100}
                alt=""
              />
            </Link>
            {topHeaderItems.map((item) => (
              <>
                <ReIconPlus key={item.icon} iconSrc={item.icon} content={item.content} />
              </>
            ))}
            <Button type="button" className="rounded-2xl bg-primary-300 text-typo-400 ">
              Get a quote
            </Button>
          </div>
        </div>
        <ReNav />
        <main className=" relative">
          <div className="flex">
            <section className="flex  flex-1 flex-col">
              <div className="w-full ">{children}</div>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
// max-md:pb-14
