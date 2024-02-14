'use client';
import { useState } from 'react';
import { z } from 'zod';

import ForgetPass from './forget-pass-step/ForgetPass';
import { Signin } from './loginStep/Signin';

import { ReGlide } from '@/components/reUi/ReGlide';
import { Card } from '@/components/ui/card';
import { userLoginSchema } from '@/lib/validations/userAuth.validations';

export type TInputs = z.infer<typeof userLoginSchema>;

const AllSteps = () => {
  const [formStep, setFormStep] = useState(0);

  const components = [
    {
      component: <Signin setFormStep={setFormStep} />,
    },
    {
      component: (
        <>
          <ForgetPass />
          {/* <RePassInput isValidationDrop /> */}
        </>
      ),
    },
  ];

  return (
    <>
      <Card className="h-[600px] w-[650px]">
        {components.map((each, index) => (
          <ReGlide key={index} index={index} formStep={formStep}>
            {each.component}
          </ReGlide>
        ))}
      </Card>
    </>
  );
};

export default AllSteps;
