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
    <div className="">
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
          <Button
            type="button"
            className="rounded-full bg-primary-400 font-semibold capitalize text-light-100  "
          >
            Get a quote
          </Button>
        </div>
      </div>
      <ReNav />
      <main className="">
        <section className="">{children}</section>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
// max-md:pb-14
