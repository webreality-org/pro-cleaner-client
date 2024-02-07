'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { MailIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import SocialLogin from './SocialLogin';

import { ReButton } from '@/components/reUi/ReButton';
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
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit: SubmitHandler<TInputs> = async (data) => {};
  return (
    <>
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
        <div className="flex-between">
          <div className="checkbox-wrapper-37">
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              name="checkbox"
              id="terms-checkbox-37"
              className="hidden"
            />
            <label htmlFor="terms-checkbox-37" className="terms-label flex-center cursor-pointer  ">
              <svg
                className={cn('checkbox-svg h-5 w-5', {})}
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* <defs>
                <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="50%" style={{ stopColor: '#fff', stopOpacity: 1 }} />
                  <stop offset="70%" style={{ stopColor: '#fff', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#00d9ff', stopOpacity: 1 }} />
                </radialGradient>
              </defs> */}
                <mask id="path-1-inside-1_476_5-37" fill="white">
                  <rect width="200" height="200" rx="20" ry="20"></rect>
                </mask>
                <rect
                  width="200"
                  height="200"
                  rx="20"
                  ry="20"
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
              <span className="label-text ml-2">keep me logged in</span>
            </label>
          </div>

          <Link href={'/forget-pass'} className="cursor-pointer text-sm text-gray-700">
            Forgot password?
          </Link>
        </div>
        <div className="grid place-items-center">
          <ReButton
            // isSubmitting={isSubmitting}
            type="submit"
            // disabled={fieldError}
            // className={cn('text-typo-50 bg-primary-400 ', {
            //   hidden: formStep !== 1,
            // })}
          >
            submit
          </ReButton>
        </div>{' '}
        <SocialLogin />
      </ReForm>

      <SocialLogin />

      <div className="grid place-items-center">
        <Link href={'/sign-up'} className="cursor-pointer text-sm text-gray-700">
          Don&#39;t have an account? <span className="underline ">Sign up</span>
        </Link>
      </div>
    </>
  );
};

export default SigninForm;
