import { Metadata } from 'next';

import AllSteps from '@/components/view/user/auth/signin/AllSteps';

export const metadata: Metadata = {
  title: 'Pc-signin',
  description: 'get clean start',
};

const SigninPage = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <AllSteps />
    </div>
  );
};

export default SigninPage;
