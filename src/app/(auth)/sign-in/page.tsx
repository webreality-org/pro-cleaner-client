'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { MailIcon } from 'lucide-react';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { loginSchema } from '../_validator/auth';

import LoadingButton from '@/components/reUi/LoadingButton';
import ReForm from '@/components/reUi/ReForm';
import ReInput from '@/components/reUi/ReInput';
import RePassInput from '@/components/reUi/RePassInput';

export type TInputs = z.infer<typeof loginSchema>;

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
      resolver={zodResolver(loginSchema)}
      defaultValues={defaultValues}
      mode="onChange"
    >
      {/* <ReInput
        name="email"
        type="email"
        description="this is a input description"
        label="email"
        prefix={<MailIcon />}
      />
      <RePassInput />

      <LoadingButton type="submit" text="Submit" /> */}
    </ReForm>
  );
};

export default TodoRhf;
