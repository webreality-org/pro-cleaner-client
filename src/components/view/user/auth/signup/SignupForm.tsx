'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Step1 from './Step1';

import { ReButton } from '@/components/reUi/ReButton';
import { ReGlide } from '@/components/reUi/ReGlide';
import RePassInput from '@/components/reUi/RePassInput';
import { ReStepper } from '@/components/reUi/reStepper/ReStepper';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { OtpVerification } from '@/components/view/common/otp/OtpVerification';
import { cn, formUrlQuery } from '@/lib/utils';
import { TUserRegisterInput, userRegisterSchema } from '@/lib/validations/userAuth.validations';
import { useAppDispatch } from '@/redux/hooks';
import { setTimerOn } from '@/redux/slices/optVerifySlices/otpTimerSlice';

const SignupForm = () => {
  const [formStep, setFormStep] = useState(0);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleUpdateParams = (value: string) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'fs',
      value,
    });

    router.push(newUrl, { scroll: false });
  };

  const dispatch = useAppDispatch();
  const [completedSteps, setCompletedSteps] = useState(0);

  const [passwordError, setPasswordError] = useState(false);
  const [fieldError, setFieldError] = useState(false);
  const steps = ['Info', 'Password', 'Verify'];
  const defaultValues = {
    confirmPassword: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phoneNumber: '',
  };
  const form = useForm<TUserRegisterInput>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { getFieldState, handleSubmit, watch, formState } = form;
  const { isSubmitting } = formState;
  const emailState = getFieldState('email');
  useEffect(() => {
    const passwordState = getFieldState('password');
    const confirmPasswordState = getFieldState('confirmPassword');
    const firstNameState = getFieldState('firstName');
    const lastNameState = getFieldState('lastName');
    const phoneNumberState = getFieldState('phoneNumber');
    if (formStep === 0) {
      const isStep0Invalid =
        !emailState.isDirty ||
        emailState.invalid ||
        !firstNameState.isDirty ||
        firstNameState.invalid ||
        !lastNameState.isDirty ||
        lastNameState.invalid ||
        !phoneNumberState.isDirty ||
        phoneNumberState.invalid;

      setFieldError(isStep0Invalid);
    }

    if (formStep === 1) {
      setFieldError(!confirmPasswordState.isDirty || confirmPasswordState.invalid || passwordError);
    }

    setPasswordError(passwordState.isDirty && passwordState.invalid);
  }, [setPasswordError, getFieldState, formStep, setFieldError, emailState, passwordError]);

  const onSubmit: SubmitHandler<TUserRegisterInput> = async (data) => {
    if (data) {
      setFormStep((prev) => prev + 1);
      setCompletedSteps((prev) => prev + 1);
      dispatch(setTimerOn(true));
    }
    console.log(data);
  };
  useEffect(() => {
    const search = searchParams.get('fs');
    console.log('🌼 🔥🔥 ReGlide 🔥🔥 search🌼', search);

    if (search === '2') {
      setFormStep(parseInt(search));
    }
  }, [searchParams]);

  return (
    <div className="p-2">
      <ReStepper
        currentStep={formStep}
        setFormStep={setFormStep}
        steps={steps}
        completedSteps={completedSteps}
      />
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex min-h-[450px] flex-col justify-between space-y-3 overflow-x-hidden"
        >
          <ReGlide index={0} formStep={formStep}>
            <Step1 />
          </ReGlide>
          <ReGlide index={1} formStep={formStep}>
            <RePassInput />

            <RePassInput
              name="confirmPassword"
              disabled={watch('password') === '' || passwordError}
            />
          </ReGlide>
          <ReGlide index={2} formStep={formStep}>
            <OtpVerification
              setCompletedSteps={setCompletedSteps}
              completedSteps={completedSteps}
            />
          </ReGlide>

          <div className="">
            <div
              className={cn({
                'grid place-items-end': formStep === 0,
              })}
            >
              <Button
                type="button"
                disabled={fieldError}
                className={cn(
                  'disabled:opacity-40 disabled:text-white text-typo-50 bg-primary-500 ',
                  {
                    // hidden: formStep === 1,
                    hidden: formStep !== 0 || searchParams.get('fs') === '2',
                  }
                )}
                onClick={() => {
                  setFormStep((prev) => prev + 1);
                  setCompletedSteps((prev) => prev + 1);

                  handleUpdateParams((formStep + 1).toString());
                }}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className={'flex justify-between '}>
              <Button
                type="button"
                className={cn('text-typo-50 bg-primary-400 ', {
                  hidden: formStep !== 1,
                })}
                onClick={() => {
                  setFormStep((prev) => prev - 1);
                  setCompletedSteps((prev) => prev - 1);
                }}
              >
                Previous
              </Button>
              <ReButton
                text="submit"
                isSubmitting={isSubmitting}
                type="submit"
                disabled={fieldError}
                className={cn('text-typo-50 bg-primary-400 ', {
                  hidden: formStep !== 1,
                })}
              />
            </div>
          </div>
        </form>
        <div className="grid place-items-center">
          <Button
            type="button"
            onClick={() => router.push('/sign-in')}
            disabled={completedSteps !== 3}
            className={cn('disabled:bg-slate-500 text-white', {
              hidden: formStep !== 2,
            })}
          >
            login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
