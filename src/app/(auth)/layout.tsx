import { ReactNode } from 'react';

import Navbar from '@/components/view/navbars/navbar/Navbar';
import TopNav from '@/components/view/navbars/TopNav/TopNav';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <TopNav />
      <Navbar />
      <main className="flex min-h-[80vh] items-center justify-center bg-white">{children}</main>
    </div>
  );
};

export default Layout;
