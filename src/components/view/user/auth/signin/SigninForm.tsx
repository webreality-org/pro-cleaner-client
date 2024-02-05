'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { MailIcon } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import ReForm from '@/components/reUi/ReForm';
import ReInput from '@/components/reUi/ReInput';
import RePassInput from '@/components/reUi/RePassInput';
import { cn } from '@/lib/utils';
import { userLoginSchema } from '@/lib/validations/userAuth.validations';
import './check.css';

export type TInputs = z.infer<typeof userLoginSchema>;

const SigninForm = () => {
  const defaultValues = {
    email: '',
    password: '',
  };
  const [isChecked, setIsChecked] = useState(false);
  console.log('🌼 🔥🔥 SigninForm 🔥🔥 isChecked🌼', isChecked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
      {/*   write your code here for keep me signed in */}
      <div className="checkbox-wrapper-37">
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          name="checkbox"
          id="terms-checkbox-37"
          className="hidden"
        />
        <label
          htmlFor="terms-checkbox-37"
          className="terms-label flex cursor-pointer items-center "
        >
          <svg
            className={cn('checkbox-svg h-6 w-6', {})}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_476_5-37" fill="white">
              <rect width="200" height="200" rx="50" ry="50"></rect>
            </mask>
            <rect
              width="200"
              height="200"
              rx="50"
              ry="50"
              // style={{ stroke: '#00d9ff' }}
              className={cn('checkbox-box', {
                'checkbox-box-checked': isChecked,
              })}
              stroke-width="50"
              mask="url(#path-1-inside-1_476_5-37)"
            ></rect>
            <path
              className="checkbox-tick stroke-current"
              d="M52 111.018L76.9867 136L149 64"
              stroke-width="25"
            ></path>
          </svg>
          <span className="label-text ml-2">Checkbox</span>
        </label>
      </div>

      {/*   write your code here for forgot password */}
    </ReForm>
  );
};

export default SigninForm;
