'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { MailIcon } from 'lucide-react';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import ReForm from '@/components/reUi/ReForm';
import ReInput from '@/components/reUi/ReInput';
import RePassInput from '@/components/reUi/RePassInput';
import { userLoginSchema } from '@/lib/validations/userAuth.validations';

export type TInputs = z.infer<typeof userLoginSchema>;

const TodoRhf = () => {
  const defaultValues = {
    email: '',
    password: '',
  };

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    console.log('🌼 🔥🔥 constonSubmit:SubmitHandler<TInputs>= 🔥🔥 data🌼', data);
  };
  return (
    <ReForm
      submitHandler={onSubmit}
      resolver={zodResolver(userLoginSchema)}
      defaultValues={defaultValues}
      mode="onChange"
    >
      <ReInput
        name="email"
        type="email"
        description="this is a input description"
        label="email"
        prefix={<MailIcon />}
      />
      <RePassInput />
    </ReForm>
  );
};

export default TodoRhf;
