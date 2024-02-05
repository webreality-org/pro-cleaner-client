import SigninForm from './SigninForm';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Signin = () => {
  return (
    <div className="">
      <Card className="w-[650px]">
        <CardHeader className="text-center">
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Start the journey with us today.</CardDescription>
        </CardHeader>
        <CardContent>
          <SigninForm />
        </CardContent>
      </Card>
    </div>
  );
};
