import ReNav from '@/components/reUi/ReNav';
import TopNav from '@/components/view/navbar/TopNav';
import Footer from '@/components/view/shared/Footer';
import { TChildrenProps } from '@/types';

const Layout = ({ children }: TChildrenProps) => {
  return (
    <div className="">
      <TopNav />
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
