import ReNavMobile from '@/components/re-ui/ReNavMobile';
import Footer from '@/components/view/shared/Footer';
import TopNav from '@/components/view/shared/navbars/TopNav/TopNav';
import Navbar from '@/components/view/shared/navbars/navbar/Navbar';
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
