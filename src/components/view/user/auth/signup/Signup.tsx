import SignupForm from './SignupForm';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Signup() {
  return (
    <div className="">
      <Card className="min-h-[500px] w-[650px]">
        <CardHeader className="text-center">
          <CardTitle>Register</CardTitle>
          <CardDescription>Start the journey with us today.</CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </div>
  );
}
