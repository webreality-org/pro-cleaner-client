'use client';
import { usePathname } from 'next/navigation';

import Theme from '../../../ui-utils/Theme';

import NoSSRWrapper from '@/components/ui-utils/NoSSRWrapper';
import BreadCrumb from '@/components/view/shared/BreadCrumb/page';

const Navbar = () => {
  const pathname = usePathname();
  const path = pathname.toString().toLowerCase().substring(1);
  return (
    <nav className=" sticky inset-x-0 top-0 z-30 hidden w-full flex-col border-b border-gray-200 bg-white transition-all md:flex">
      <div className=" flex justify-end gap-5 px-2 py-6">
        <NoSSRWrapper>
          <Theme />
        </NoSSRWrapper>
      </div>
      <BreadCrumb path={path} />
    </nav>
  );
};

export default Navbar;
