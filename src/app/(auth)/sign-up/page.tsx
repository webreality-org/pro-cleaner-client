'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { ArrowRight, MailIcon, PhoneIncoming, User2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { registerSchema } from '../_validator/auth';

import ReInput from '@/components/reUi/ReInput';
import RePassInput from '@/components/reUi/RePassInput';
import { Stepper } from '@/components/reUi/ReStepper';
import NoSSRWrapper from '@/components/ui-utils/NoSSRWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Verification from '@/components/view/otp/Otp';
import { cn } from '@/lib/utils';

type Input = z.infer<typeof registerSchema>;
let count = 0;

export default function Home() {
  count++;
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
  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
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

  const onSubmit: SubmitHandler<Input> = async (data) => {
    if (data) {
      setFormStep((prev) => prev + 1);
      setCompletedSteps((prev) => prev + 1);
    }
    console.log('🌼 🔥🔥 const onSubmit:SubmitHandler<Input>= 🔥🔥 data🌼', data);
  };

  return (
    <div className="">
      <NoSSRWrapper>
        <div>count: {count / 2}</div>
      </NoSSRWrapper>
      <Card className="w-[650px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Start the journey with us today.</CardDescription>
        </CardHeader>
        <CardContent>
          <Stepper currentStep={formStep} steps={steps} completedSteps={completedSteps} />
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative space-y-3 overflow-x-hidden"
            >
              <motion.div
                className={cn('space-y-3', {
                  // hidden: formStep === 1,
                })}
                // formStep === 0 -> translateX === 0
                // formStep === 1 -> translateX === '-100%'
                animate={{
                  translateX: `-${formStep * 100}%`,
                }}
                transition={{
                  ease: 'easeInOut',
                }}
              >
                {/* first name */}
                <ReInput
                  name="firstName"
                  type="text"
                  description="this is a input description"
                  label="First Name"
                  prefix={<User2Icon size={16} />}
                />
                {/* last name */}
                <ReInput
                  name="lastName"
                  type="text"
                  description="this is a input description"
                  label="Last Name"
                  prefix={<User2Icon size={16} />}
                />
                {/* email */}

                <ReInput
                  name="email"
                  type="email"
                  description="this is a input description"
                  label="Email"
                  prefix={<MailIcon size={16} />}
                />
                {/* student id */}

                <ReInput
                  name="phoneNumber"
                  type="text"
                  description="this is a input description"
                  label="Phone Number"
                  prefix={<PhoneIncoming size={16} />}
                />
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
                {formStep === 2 && <Verification />}
              </motion.div>

              {/* <div className="flex gap-2">
                <Button
                  type="submit"
                  className={cn({
                    hidden: formStep === 0,
                  })}
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  variant={'ghost'}
                  className={cn({
                    hidden: formStep === 1,
                  })}
                  onClick={async() => {
                    // validation
                   await form.trigger(['email', 'name', 'year', 'studentId']);
                    const emailState = form.getFieldState('email');
                    const nameState = form.getFieldState('name');
                    const yearState = form.getFieldState('year');
                    const idState = form.getFieldState('studentId');

                    if (!emailState.isDirty || emailState.invalid) return;
                    if (!nameState.isDirty || nameState.invalid) return;
                    if (!yearState.isDirty || yearState.invalid) return;
                    if (!idState.isDirty || idState.invalid) return;

                    setFormStep(1);
                  }}
                >
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant={'ghost'}
                  onClick={() => {
                    setFormStep(0);
                  }}
                  className={cn({
                    hidden: formStep === 0,
                  })}
                >
                  Go Back
                </Button>
              </div> */}
              <div className="">
                <div
                  className={cn({
                    'grid place-items-end': formStep === 0,
                  })}
                >
                  <Button
                    type="button"
                    disabled={fieldError}
                    className={cn('disabled:opacity-40 disabled:text-white ', {
                      hidden: formStep === 1 || formStep === 2,
                    })}
                    onClick={() => {
                      setFormStep((prev) => prev + 1);
                      setCompletedSteps((prev) => prev + 1);
                    }}
                  >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className={'flex justify-between'}>
                  <Button
                    type="button"
                    className={cn({
                      hidden: formStep === 0,
                    })}
                    onClick={() => {
                      setFormStep((prev) => prev - 1);
                      setCompletedSteps((prev) => prev - 1);
                    }}
                  >
                    Previous
                  </Button>

                  <Button
                    type="submit"
                    disabled={fieldError}
                    className={cn({
                      hidden: formStep === 2 || formStep === 0,
                    })}
                  >
                    submit
                    {isSubmitting && 'loading'}
                  </Button>
                </div>

                {/* <Button
                  type="button"
                  className={cn({
                    hidden: formStep !== 2,
                  })}
                >
                  Verify
                </Button> */}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
