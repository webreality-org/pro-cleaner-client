'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
// eslint-disable-next-line import/order
import Image from 'next/image';

// eslint-disable-next-line import/order
import { motion } from 'framer-motion';

import Link from 'next/link';
import React, { useState } from 'react';

import eyeClose from '../../../../public/assets/icons/eye-close.svg';
import eye from '../../../../public/assets/icons/eye.svg';
import Logo from '../../../../public/assets/images/logo-transparent.png';
import { signUpSchema } from '../_validator/auth';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

type Schema = z.infer<typeof signUpSchema>;
export default function SignUp() {
  const [formStep, setFormStep] = React.useState(0);
  const [showPassword, setShowPassword] = React.useState(false);

  const [isInputFocused, setIsInputFocused] = useState(false);

  // validated states
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);

  const form = useForm<Schema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  function formSet() {
    form.trigger(['firstName', 'lastName', 'gender']);
    const firstNameState = form.getFieldState('firstName');
    const lastNameState = form.getFieldState('lastName');
    const genderState = form.getFieldState('gender');
    if (firstNameState.invalid) return;
    if (lastNameState.invalid) return;
    if (!genderState.isDirty) return;
    setFormStep(1);
  }

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };
  const handleHideContent = () => {
    setIsInputFocused(false);
  };

  function onSubmit(data: Schema) {
    if (data.password !== data.confirmPassword) {
      toast({
        title: 'Password is not matched ',
        variant: 'destructive',
      });
      return;
    }

    const lower = /(?=.*[a-z])/;
    const upper = /(?=.*[A-Z])/;
    const number = /(?=.*[0-9])/;
    const special = /(?=.*[!@#$%^&*])/;
    const length = /(?=.{8,})/;
    if (lower.test(data.password)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(data.password)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(data.password)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (special.test(data.password)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    if (length.test(data.password)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }
    form.reset();
    console.log(data.password);
  }
  console.log(lowerValidated);

  return (
    <div className="cardHover mb-10 mt-[10%] h-full md:mt-[20%] xl:mt-[15%]">
      <Card className="cardHover2 w-[350px]">
        <CardHeader className="flex-center text-black">
          <Image src={Logo} width={150} alt="" />
          <CardTitle>Welcome to pro-cleaner</CardTitle>
          <CardDescription>Please complete the inputs</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-black">
              <motion.div
                className={cn('', {
                  hidden: formStep === 1,
                })}
                animate={{
                  translateX: `-${formStep * 100}% ,  opacity: ${formStep * 100}% `,
                }}
                transition={{
                  ease: 'easeInOut',
                  duration: 2000,
                }}
              >
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="!contents text-black">First Name</Label>
                      <FormControl>
                        <Input
                          placeholder="first name"
                          {...field}
                          className="bg-transparent"
                          autoCapitalize="false"
                        />
                      </FormControl>
                      <FormMessage className="text-black" />
                    </FormItem>
                  )}
                />
                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="!contents text-black">Last Name</Label>
                      <FormControl>
                        <Input
                          placeholder="Last name"
                          {...field}
                          className="bg-white focus:bg-transparent"
                          autoComplete="false"
                        />
                      </FormControl>

                      <FormMessage className="text-black" />
                    </FormItem>
                  )}
                />
                {/* Gender */}
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="!contents text-black">Gender</Label>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Please select your gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white text-black">
                          {['male', 'female'].map((value, index) => (
                            <SelectItem key={index} value={value}>
                              {value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              {/* Step 2 */}
              <motion.div
                className={cn('relative left-80 space-y-3', {
                  hidden: formStep === 0,
                })}
                initial={{ opacity: 1, scale: 1 }}
                animate={{
                  opacity: 1,
                  translateX: `-${formStep * 106}%`,
                  startOffset: 0,
                }}
                transition={{
                  ease: 'easeInOut',
                }}
              >
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="!contents text-black">Email</Label>
                      <FormControl>
                        <Input
                          placeholder="Your email address"
                          {...field}
                          type="email"
                          className="bg-white focus:bg-transparent"
                          autoComplete="false"
                        />
                      </FormControl>

                      <FormMessage className="text-black" />
                    </FormItem>
                  )}
                />
                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="!contents text-black">Password</Label>
                      <FormControl>
                        <Input
                          onMouseEnter={handleInputFocus}
                          onMouseLeave={handleHideContent}
                          placeholder="password"
                          {...field}
                          type={showPassword ? 'text' : 'password'}
                          className="bg-white focus:bg-transparent"
                          autoComplete="false"
                          Image={
                            showPassword ? (
                              <Image
                                onClick={() => setShowPassword(false)}
                                src={eye}
                                height={16}
                                alt="eye"
                              />
                            ) : (
                              <Image
                                onClick={() => setShowPassword(true)}
                                src={eyeClose}
                                height={16}
                                alt="eye"
                              />
                            )
                          }
                        />
                      </FormControl>
                      {isInputFocused ? (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="dropdown flex flex-col items-start justify-start space-y-2 text-left"
                        >
                          {/* Dropdown content goes here */}

                          <span className={lowerValidated ? 'validated' : 'not-validated'}>
                            {lowerValidated ? (
                              <span className="list-icon green">
                                {/* <Icon icon={arrows_circle_check} /> */}+
                              </span>
                            ) : (
                              <span className="list-icon">
                                {/* <Icon icon={arrows_exclamation} /> */}-
                              </span>
                            )}
                            At least one lowercase letter
                          </span>
                          <span className={upperValidated ? 'validated' : 'not-validated'}>
                            {upperValidated ? (
                              <span className="list-icon green">
                                {/* <Icon icon={arrows_circle_check} /> */} +
                              </span>
                            ) : (
                              <span className="list-icon">
                                {/* <Icon icon={arrows_exclamation} /> */} -
                              </span>
                            )}
                            At least one uppercase letter
                          </span>
                          <span className={numberValidated ? 'validated' : 'not-validated'}>
                            {numberValidated ? (
                              <span className="list-icon green">
                                + {/* <Icon icon={arrows_circle_check} /> */}
                              </span>
                            ) : (
                              <span className="list-icon">
                                - {/* <Icon icon={arrows_exclamation} /> */}
                              </span>
                            )}
                            At least one number
                          </span>
                          <span className={specialValidated ? 'validated' : 'not-validated'}>
                            {specialValidated ? (
                              <span className="list-icon green">
                                + {/* <Icon icon={arrows_circle_check} /> */}
                              </span>
                            ) : (
                              <span className="list-icon">
                                -{/* <Icon icon={arrows_exclamation} /> */}
                              </span>
                            )}
                            At least one special character
                          </span>
                          <span className={lengthValidated ? 'validated' : 'not-validated'}>
                            {lengthValidated ? (
                              <span className="list-icon green">
                                + {/* <Icon icon={arrows_circle_check} /> */}
                              </span>
                            ) : (
                              <span className="list-icon">
                                - {/* <Icon icon={arrows_exclamation} /> */}
                              </span>
                            )}
                            At least 8 characters
                          </span>
                        </motion.div>
                      ) : (
                        ''
                      )}
                      <FormMessage className="text-black" />
                    </FormItem>
                  )}
                />
                {/* Confirm Password */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="!contents text-black">Confirm Password</Label>
                      <FormControl>
                        <Input
                          placeholder="confirm password"
                          {...field}
                          type={showPassword ? 'text' : 'password'}
                          className="bg-white focus:bg-transparent"
                          autoComplete="false"
                          Image={
                            showPassword ? (
                              <Image
                                onClick={() => setShowPassword(false)}
                                src={eye}
                                height={16}
                                alt="eye"
                              />
                            ) : (
                              <Image
                                onClick={() => setShowPassword(true)}
                                src={eyeClose}
                                height={16}
                                alt="eye"
                              />
                            )
                          }
                        />
                      </FormControl>

                      <FormMessage className="text-black" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <div className="flex-center gap-x-2">
                {/* Submit Button */}
                <Button
                  type="submit"
                  className={cn('border-2 font-bold text-black', {
                    hidden: formStep === 0,
                  })}
                >
                  SUBMIT
                </Button>
                {/* Next Button */}
                <Button
                  type="button"
                  onClick={() => formSet()}
                  className={cn('border-2 font-bold text-black', {
                    hidden: formStep === 1,
                  })}
                >
                  NEXT
                </Button>
                <Button
                  type="button"
                  onClick={() => setFormStep(0)}
                  className={cn('border-2 font-bold text-black', {
                    hidden: formStep === 0,
                  })}
                >
                  Back
                </Button>
              </div>
            </form>
          </Form>
          <CardHeader className="flex-center py-4 font-bold text-gray-500">
            Continue with
          </CardHeader>
          {/* Social login */}
          <div className="flex-center flex-col gap-y-2">
            <div className="card">
              <span>Social</span>
              {/* GOOGLE */}
              <Link className="social-link" href="#">
                <svg
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path fill="#1e88e5" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
                  <path
                    fill="#1565c0"
                    d="M27.723,23.039c0-1.563,3.319-2.012,3.319-5.684c0-2.203-0.196-3.531-1.871-4.313c0-0.546,2.957-0.187,2.957-1.209c-0.513,0-6.476,0-6.476,0S19.095,12,19.095,17.748c0,5.752,5.732,5.088,5.732,5.088s0,0.865,0,1.453c0,0.594,0.77,0.391,0.864,1.583c-0.388,0-7.964-0.208-7.964,4.998s6.679,4.959,6.679,4.959s7.722,0.365,7.722-6.104C32.128,25.854,27.723,24.604,27.723,23.039z M22.127,18.086c-0.604-2.312,0.195-4.543,1.786-4.992c1.593-0.453,3.374,1.059,3.981,3.367c0.605,2.309-0.192,4.543-1.785,4.992C24.517,21.904,22.734,20.391,22.127,18.086z M25.444,34.167c-2.671,0.188-4.946-1.295-5.077-3.316c-0.133-2.016,1.927-3.805,4.6-3.996c2.674-0.188,4.947,1.297,5.08,3.314C30.178,32.193,28.118,33.98,25.444,34.167z"
                  ></path>
                  <path
                    fill="#e8eaf6"
                    d="M25.995,23.039c0-1.563,3.318-2.012,3.318-5.684c0-2.203-0.195-3.531-1.87-4.313c0-0.546,2.956-0.187,2.956-1.209c-0.512,0-6.476,0-6.476,0S17.367,12,17.367,17.748c0,5.752,5.731,5.088,5.731,5.088s0,0.865,0,1.453c0,0.594,0.771,0.391,0.865,1.583c-0.388,0-7.964-0.208-7.964,4.998s6.679,4.959,6.679,4.959s7.721,0.365,7.721-6.104C30.399,25.854,25.995,24.604,25.995,23.039z M20.399,18.086c-0.604-2.312,0.194-4.543,1.785-4.992c1.593-0.453,3.374,1.059,3.982,3.367c0.604,2.309-0.193,4.543-1.786,4.992C22.789,21.904,21.007,20.391,20.399,18.086z M23.717,34.167c-2.671,0.188-4.946-1.295-5.077-3.316c-0.133-2.016,1.927-3.805,4.599-3.996c2.675-0.188,4.948,1.297,5.08,3.314C28.45,32.193,26.391,33.98,23.717,34.167z"
                  ></path>
                </svg>
              </Link>
              {/* FACEBOOK */}
              <Link className="social-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </Link>
              {/* GITHUB */}
              <Link className="social-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fff"
                    d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"
                  ></path>
                  <path
                    fill="#455a64"
                    d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"
                  ></path>
                  <path
                    fill="#455a64"
                    d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"
                  ></path>
                  <path
                    fill="#455a64"
                    d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"
                  ></path>
                  <path
                    fill="#00bcd4"
                    d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"
                  ></path>
                </svg>
              </Link>
            </div>
            <CardDescription className="text-black">
              Already sign up? Please
              <Link href="sign-in" className="validated-400 ml-1 font-bold underline">
                Login
              </Link>
            </CardDescription>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}