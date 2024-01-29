import ReNavMobile from '@/components/reUi/ReNavMobile';
import TopNav from '@/components/view/navbars/TopNav/TopNav';
import Navbar from '@/components/view/navbars/navbar/Navbar';
import Footer from '@/components/view/shared/Footer';
import { TChildrenProps } from '@/types';

const Layout = ({ children }: TChildrenProps) => {
  return (
    <div className="">
      <TopNav />

      <Navbar />
      <ReNavMobile />
      <main className="">
        <section className="">{children}</section>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
// max-md:pb-14
