import { Metadata } from 'next';

import { Signin } from '@/components/view/user/auth/signin/Signin';
export const metadata: Metadata = {
  title: 'Pc-signin',
  description: 'get clean start',
};

const SigninPage = () => {
  return (
    <div>
      <Signin />
    </div>
  );
};

export default SigninPage;
