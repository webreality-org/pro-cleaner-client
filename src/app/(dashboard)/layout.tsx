'use client';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import LeftSidebar from '@/components/view/shared/leftSideBar/page';
import Navbar from '@/components/view/shared/navbar/Navbar';
import BreadCrumb from '@/components/view/shared/BreadCrumb/page';

const Layout = ({ children }: { children: ReactNode }) => {
  const asPath = usePathname();
  const path = asPath.toString().toLowerCase().substring(1);

  return (
    <>
      <Navbar />
      <main className="">
        <div className="flex">
          <LeftSidebar />
          <section className="flex min-h-screen flex-1 flex-col">
            <BreadCrumb path={path} />
            <div className="mt-2 w-full max-w-5xl px-4">{children}</div>
          </section>
        </div>
        {/* <Footer/> */}
      </main>
    </>
  );
};

export default Layout;
