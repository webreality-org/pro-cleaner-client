import { ReactNode } from 'react';

import ReNav from '@/components/reUi/ReNav';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-white">
      <ReNav />
      {children}
    </main>
  );
};

export default Layout;
