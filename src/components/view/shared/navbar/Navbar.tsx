import Image from 'next/image';
import Link from 'next/link';

import logo from '../.././../../../public/assets/images/logo.svg';
import Theme from '../../../ui-utils/Theme';

import NoSSRWrapper from '@/components/ui-utils/NoSSRWrapper';

const Navbar = () => {
  return (
    <nav className=" background-light900_dark200 z-50 w-full gap-5 px-6 py-2 shadow-sm dark:shadow-lg sm:px-12">
      <div className="flex justify-between">
        <Link href="/" className="flex items-center gap-1">
          <p className="h2-bold py-2 font-spaceGrotesk text-dark-100 dark:text-light-100">
            <Image src={logo} width="100" height="10" alt="" />
          </p>
        </Link>

        <div className="flex-between gap-5">
          <NoSSRWrapper>
            <Theme />
          </NoSSRWrapper>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
