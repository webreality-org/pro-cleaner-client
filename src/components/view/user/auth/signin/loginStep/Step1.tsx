'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { MailIcon } from 'lucide-react';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import SocialLogin from '../SocialLogin';

import { ReButton } from '@/components/reUi/ReButton';
import ReForm from '@/components/reUi/ReForm';
import ReInput from '@/components/reUi/ReInput';
import RePassInput from '@/components/reUi/RePassInput';
import { cn } from '@/lib/utils';
import { userLoginSchema } from '@/lib/validations/userAuth.validations';
import './check.css';

export type TInputs = z.infer<typeof userLoginSchema>;

const defaultValues = {
  email: '',
  password: '',
  isValid: false,
};
type DefaultValues = typeof defaultValues;
type TStep1Types = {
  setFormStep: Dispatch<SetStateAction<number>>;
};

const Step1 = ({ setFormStep }: TStep1Types) => {
  const [isChecked, setIsChecked] = useState(false);

  const [isTermChecked, setIsTermChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleTermCheckboxChange = () => {
    setIsTermChecked(!isTermChecked);
  };

  const handleForgetPass = () => {
    setFormStep(1);
  };

  const onSubmit: SubmitHandler<TInputs> = async (data) => {};
  return (
    <>
      <ReForm<DefaultValues>
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
          <div className="">
            <div className="checkbox-wrapper-37">
              <input
                type="checkbox"
                onChange={handleCheckboxChange}
                name="checkbox"
                id="terms-checkbox-37"
                className="hidden"
              />
              <label htmlFor="terms-checkbox-37" className="terms-label flex cursor-pointer  ">
                <svg
                  className={cn('checkbox-svg h-5 w-5', {})}
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" rx="20" ry="20"></rect>
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    rx="20"
                    ry="20"
                    className={cn('checkbox-box', {
                      'checkbox-box-checked': isChecked,
                    })}
                    strokeWidth="50"
                    mask="url(#path-1-inside-1_476_5-37)"
                  ></rect>
                  <path
                    className="checkbox-tick stroke-current"
                    d="M52 111.018L76.9867 136L149 64"
                    strokeWidth="25"
                  ></path>
                </svg>
                <span className="label-text ml-2">keep me logged in</span>
              </label>
            </div>
            <div className="checkbox-wrapper-37">
              <input
                type="checkbox"
                onChange={handleTermCheckboxChange}
                name="checkboxTerms"
                id="terms-checkbox"
                className="hidden"
              />
              <label htmlFor="terms-checkbox" className="terms-label flex cursor-pointer  ">
                <svg
                  className={cn('checkbox-svg h-5 w-5', {})}
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_476_5-37" fill="white">
                    <rect width="200" height="200" rx="20" ry="20"></rect>
                  </mask>
                  <rect
                    width="200"
                    height="200"
                    rx="20"
                    ry="20"
                    className={cn('checkbox-box', {
                      'checkbox-box-checked': isTermChecked,
                    })}
                    strokeWidth="50"
                    mask="url(#path-1-inside-1_476_5-37)"
                  ></rect>
                  <path
                    className="checkbox-tick stroke-current"
                    d="M52 111.018L76.9867 136L149 64"
                    strokeWidth="25"
                  ></path>
                </svg>
                <span className="label-text ml-2">agree terms and policy</span>
              </label>
            </div>
          </div>

          <ReButton
            onClick={handleForgetPass}
            className="cursor-pointer bg-transparent text-sm text-gray-700"
          >
            Forgot password?
          </ReButton>
        </div>
        <div className="grid place-items-center pt-10">
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
      </ReForm>
      <div className="grid place-items-center">
        <Link href={'/sign-up'} className="cursor-pointer text-sm text-gray-700">
          Don&#39;t have an account? <span className="underline ">Sign up</span>
        </Link>
      </div>
      <div className="py-5 text-center">or continue with</div>
      <SocialLogin />
    </>
  );
};

export default Step1;
