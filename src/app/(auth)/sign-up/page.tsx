import { Metadata } from 'next';

import Signup from '@/components/view/user/auth/signup/Signup';

export const metadata: Metadata = {
  title: 'Pc-signup',
  description: 'get clean start',
};

const SignupPage = () => {
  return <Signup />;
};

export default SignupPage;
