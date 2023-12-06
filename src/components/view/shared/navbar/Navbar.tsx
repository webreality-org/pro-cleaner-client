import Link from 'next/link';

import Theme from './Theme';

import NoSSRWrapper from '@/components/ui-utils/NoSSRWrapper';

const Navbar = () => {
  return (
    <nav className=" background-light900_dark200 fixed z-50 w-full gap-5 px-6 py-2 shadow-sm dark:shadow-lg sm:px-12">
      <di className="flex-between mx-auto lg:max-w-screen-xl">
        <Link href="/" className="flex items-center gap-1">
          <p className="h2-bold py-2 font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
            Pro <span className="text-primary-500">cleaner</span>
          </p>
        </Link>

        <div className="flex-between gap-5">
          <NoSSRWrapper>
            <Theme />
          </NoSSRWrapper>
        </div>
      </di>
    </nav>
  );
};

export default Navbar;
