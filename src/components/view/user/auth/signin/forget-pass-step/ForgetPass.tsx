import ForgetPassForm from './ForgetPassForm';

import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ForgetPass = () => {
  return (
    <div className="">
      <CardHeader className="text-center">
        <CardTitle>Forget your pass ?</CardTitle>
        <CardDescription>Start resetting.</CardDescription>
      </CardHeader>
      <CardContent>
        hello step 2
        <ForgetPassForm />
      </CardContent>
    </div>
  );
};

export default ForgetPass;
