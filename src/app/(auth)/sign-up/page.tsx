import { Metadata } from 'next';

import Signup from '@/components/view/user/auth/signup/Signup';
import { TSearchParamsProps } from '@/types';

export const metadata: Metadata = {
  title: 'Pc-signup',
  description: 'get clean start',
};

const SignupPage = ({ searchParams }: TSearchParamsProps) => {
  console.log('🌼 🔥🔥 SignupPage 🔥🔥 props🌼', searchParams);

  return <Signup />;
};

export default SignupPage;
