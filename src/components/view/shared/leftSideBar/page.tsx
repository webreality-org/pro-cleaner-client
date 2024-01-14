'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Home from '../../../../../public/assets/icons/home.svg';
import product from '../../../../../public/assets/icons/product.svg';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const LeftSidebar = () => {
  const asPath = usePathname();

  return (
    <div className="top-0 justify-between space-y-20 border-r max-sm:hidden lg:w-[266px]">
      <div className="mt-2 flex flex-1 flex-col gap-3 px-2 text-center">
        {/* home */}
        <Link
          href="/dashBoardHome"
          passHref
          className={
            asPath === '/dashBoardHome'
              ? 'primary-gradient flex items-center justify-center gap-x-2 rounded-lg bg-slate-50/20 p-2 text-black'
              : 'text-dark300_light900 flex items-center justify-center gap-x-2 rounded-lg border p-2'
          }
        >
          <Image src={Home} alt="home" width={20} height={20} />
          <p className={`${asPath} === '/'  ? 'base-bold' : 'base-medium max-lg:hidden`}>Home</p>
        </Link>
        {/* products */}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" style={{ border: '0px !important' }}>
            <AccordionTrigger
              style={{ textDecoration: 'none', border: '1px solid' }}
              className={
                asPath === '/dashBoardProduct'
                  ? '!hover:no-underline flex items-center justify-center gap-x-2 rounded-lg bg-slate-50/20 p-2 text-black'
                  : '!hover:no-underline flex items-center justify-center gap-x-2 rounded-lg !border p-2'
              }
            >
              <Image src={product} alt="home" width={20} height={20} />
              <p className={`${asPath} === '/'  ? 'base-bold' : 'base-medium max-lg:hidden`}>
                Products
              </p>
            </AccordionTrigger>
            <AccordionContent className="mt-2 flex flex-col space-y-2 pl-6">
              {/* child1 */}
              <Link
                href="/ChildOne"
                passHref
                className={
                  asPath === '/ChildOne'
                    ? 'primary-gradient flex items-center justify-center gap-x-2 rounded-lg bg-slate-50/20 p-2 text-black'
                    : 'text-dark300_light900 flex items-center justify-center gap-x-2 rounded-lg border p-2'
                }
              >
                <Image src={Home} alt="home" width={20} height={20} />
                <p
                  className={`${asPath} === '/child1'  ? 'base-bold' : 'base-medium max-lg:hidden`}
                >
                  Child 1
                </p>
              </Link>

              {/* child 2 */}
              <Link
                href="/child2"
                passHref
                className={
                  asPath === '/child2'
                    ? 'primary-gradient flex items-center justify-center gap-x-2 rounded-lg bg-slate-50/20 p-2 text-black'
                    : 'text-dark300_light900 flex items-center justify-center gap-x-2 rounded-lg border p-2'
                }
              >
                <Image src={Home} alt="home" width={20} height={20} />
                <p
                  className={`${asPath} === '/child2'  ? 'base-bold' : 'base-medium max-lg:hidden`}
                >
                  Child 2
                </p>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-3 px-4">
        <Link href="/sign-in">
          <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
            <Image
              src="/assets/icons/account.svg"
              alt="login"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Button>
        </Link>

        <Link href="/sign-up">
          <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
            <Image
              src="/assets/icons/sign-up.svg"
              alt="sign up"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="max-lg:hidden">Sign up</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LeftSidebar;
