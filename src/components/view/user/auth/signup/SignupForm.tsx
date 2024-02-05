'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Step1 from './Step1';

import { ReButton } from '@/components/reUi/ReButton';
import RePassInput from '@/components/reUi/RePassInput';
import { Stepper } from '@/components/reUi/ReStepper';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { OtpVerification } from '@/components/view/common/otp/OtpVerification';
import { cn } from '@/lib/utils';
import { TUserRegisterInput, userRegisterSchema } from '@/lib/validations/userAuth.validations';
import { useAppDispatch } from '@/redux/hooks';
import { setTimerOn } from '@/redux/slices/optVerifySlices/otpTimerSlice';

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const [completedSteps, setCompletedSteps] = useState(0);
  const [formStep, setFormStep] = useState(0);
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

  return (
    <div className="p-2">
      <Stepper currentStep={formStep} steps={steps} completedSteps={completedSteps} />
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-3 overflow-x-hidden">
          <motion.div
            className={cn('space-y-3', {})}
            animate={{
              translateX: `-${formStep * 100}%`,
            }}
            transition={{
              ease: 'easeInOut',
            }}
          >
            <Step1 />
          </motion.div>
          <motion.div
            className={cn('space-y-3 absolute top-0 left-0 right-0', {
              hidden: formStep === 0,
            })}
            animate={{
              translateX: `${100 - formStep * 100}%`,
            }}
            transition={{
              ease: 'easeInOut',
            }}
          >
            {/* password */}
            <RePassInput />
            {/* <RePassInput isValidationDrop /> */}
            {/* confirm password */}
            <RePassInput
              name="confirmPassword"
              disabled={watch('password') === '' || passwordError}
            />
          </motion.div>
          <motion.div
            className={cn('space-y-3 absolute top-0 left-0 right-0', {
              hidden: formStep !== 2,
            })}
            animate={{
              translateX: `${200 - formStep * 100}%`,
            }}
            transition={{
              ease: 'easeInOut',
            }}
          >
            <OtpVerification />
          </motion.div>

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
                    hidden: formStep === 1 || formStep === 2,
                  }
                )}
                onClick={() => {
                  setFormStep((prev) => prev + 1);
                  setCompletedSteps((prev) => prev + 1);
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
                  hidden: formStep === 2 || formStep === 0,
                })}
              />

              {/* <Button
                type="submit"
                disabled={fieldError}
                className={cn('text-typo-50 bg-primary-400 ', {
                  hidden: formStep === 2 || formStep === 0,
                })}
              >
                submit
              </Button> */}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
