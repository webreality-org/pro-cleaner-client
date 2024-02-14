import { Dispatch, SetStateAction } from 'react';

import Step1 from './Step1';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type TStep1Types = {
  setFormStep: Dispatch<SetStateAction<number>>;
};

export const Signin = ({ setFormStep }: TStep1Types) => {
  return (
    <div className="">
      <CardHeader className="text-center">
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Start the journey with us today.</CardDescription>
      </CardHeader>
      <CardContent>
        <Step1 setFormStep={setFormStep} />
      </CardContent>
    </div>
  );
};
