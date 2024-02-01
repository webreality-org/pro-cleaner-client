'use client';
import { ReactNode } from 'react';

import LeftSidebar from '@/components/view/shared/leftSideBar/page';
import Navbar from '@/components/view/shared/navbar/Navbar';
import MobileNavDashboard from '@/components/view/navbars/navbar/MobileNavDashboard';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="">
        <div className="flex">
          <LeftSidebar />
          <section className="flex-1">
            <div className="flex min-h-screen flex-col sm:border-r sm:border-zinc-700">
              <Navbar />
              <MobileNavDashboard />
              <div className="relative flex grow flex-col bg-zinc-100">
                <div className="px-2 pt-36 md:pt-4 lg:pt-4">{children}</div>
              </div>
            </div>
          </section>
        </div>
        {/* <Footer/> */}
      </main>
    </>
  );
};

export default Layout;
