
'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { ArrowRight, MailIcon } from 'lucide-react';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });
type Input = z.infer<typeof registerSchema>;

export default function Home() {
  const { toast } = useToast();
  const [completedSteps, setCompletedSteps] = useState(0);
  const [formStep, setFormStep] = useState(0);
  const steps = ['Info', 'Password', 'Verify'];
  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      confirmPassword: '',
      email: '',
      name: '',
      password: '',
      studentId: '',
      year: '',
    },
    mode: 'onChange',
  });

  function onSubmit(data: Input) {
    console.log('🌼 🔥🔥 onSubmit 🔥🔥 data🌼', data);

    if (data.confirmPassword !== data.password) {
      toast({
        title: 'Passwords do not match',
        variant: 'destructive',
      });
      return;
    }
    alert(JSON.stringify(data, null, 4));
    console.log(data);
  }

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Start the journey with us today.</CardDescription>
        </CardHeader>
        <CardContent>
          <Stepper currentStep={formStep} steps={steps} completedSteps={completedSteps} />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
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
                {/* name */}
                <ReInput
                  name="name"
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
                {/* student id */}

                <ReInput
                  name="studentId"
                  type="text"
                  description="this is a input description"
                  label="studentId"
                  prefix={<MailIcon />}
                />
                {/* year */}
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year of study</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a verified email to display" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[10, 11, 12, 13].map((year) => {
                            return (
                              <SelectItem value={year.toString()} key={year}>
                                Year {year}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
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
                </Button>
                <Button
                  type="button"
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
