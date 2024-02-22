import type { ReactNode } from 'react';

import Navbar from '@/components/view/shared/navbars/navbar/Navbar';
import TopNav from '@/components/view/shared/navbars/top-nav/TopNav';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <TopNav />
      <Navbar />
      <main className="flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-white">
        {children}
      </main>
    </div>
  );
};

export default Layout;
// test
