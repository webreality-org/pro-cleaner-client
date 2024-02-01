'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MailIcon } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { registerSchema } from '../_validator/auth';

import ReInput from '@/components/reUi/ReInput';
import RePassInput from '@/components/reUi/RePassInput';
import { Stepper } from '@/components/reUi/ReStepper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type Input = z.infer<typeof registerSchema>;

export default function Home() {
  const [completedSteps, setCompletedSteps] = useState(0);
  const [formStep, setFormStep] = useState(0);

  const defaultValues = {
    confirmPassword: '',
    email: '',
    name: '',
    phoneNumber: '',
    password: '',
    studentId: '',
    year: '',
    verify: '',
  };

  const steps = ['Info', 'Password', 'Verify'];
  const form = useForm<Input>({
    defaultValues,
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });
  const { getFieldState, handleSubmit, control } = form;

  const onSubmit: SubmitHandler<Input> = async (data) => {
    console.log('🌼 🔥🔥 const onSubmit:SubmitHandler<Input>= 🔥🔥 data🌼', data);

    
  };
  const emailState = getFieldState('email');
  const passwordState = getFieldState('password');


  return (
    <div className="">
      <Card className="">
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
                className={cn('space-y-3', {})}
                animate={{
                  translateX: `-${formStep * 100}%`,
                }}
                transition={{
                  ease: 'easeInOut',
                }}
              >
                {/* name */}
                <ReInput
                  name="name"
control={control}
                  type="text"
                  description="this is a input description"
                  label="name"
                  prefix={<MailIcon />}
                />
                {/* email */}
                <ReInput
                  name="email"
                  type="email"
                  description="this is a input description"
                  label="email"
                  prefix={<MailIcon />}
                />
                <ReInput
                  name="phoneNumber"
                  type="text"
                  description="this is a input description"
                  label="phone"
                  prefix={<MailIcon />}
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
                {/* confirm password */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Please confirm your password..."
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
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
                <ReInput
                  name="verify"
                  type="text"
                  description="this is a input description"
                  label="verify"
                  prefix={<MailIcon />}
                />
              </motion.div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={'ghost'}
                  className={cn({
                    hidden: formStep === 0,
                  })}
                  onClick={() => {
                    setFormStep((prev) => prev - 1);
                    setCompletedSteps((prev) => prev - 1);
                  }}
                >
                  Previous
                  <ArrowLeft className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  disabled={
                    (formStep === 0 && (emailState.invalid || !emailState.isDirty)) ||
                    (formStep === 1 && (passwordState.invalid || !passwordState.isDirty))
                  }
                  className={cn('disabled:opacity-40 disabled:text-white', {
                    hidden: formStep === 2,
                  })}
                  onClick={() => {
                    setFormStep((prev) => prev + 1);
                    setCompletedSteps((prev) => prev + 1);
                  }}
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  type="submit"
                  className={cn({
                    hidden: formStep !== 2,
                  })}
                >
                  Verify
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
