'use client';

import { ChangeEvent, ClipboardEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

import { useToast } from '@/components/ui/use-toast';

const VerifyEmail = () => {
  const { toast } = useToast();
  const [otp, setOtp] = useState(['', '', '', '']);

  const email = '';

  const [verifyDisabled, setVerifyDisabled] = useState(true);
  const [count, setCount] = useState(60);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const countRef = useRef<number | null>(null);

  useEffect(() => {
    countRef.current = window.setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(countRef.current!);
  }, []);

  useEffect(() => {
    if (count === 0) {
      clearInterval(countRef.current!);
    }
  }, [count]);
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleResend = () => {
    setOtp(['', '', '', '']);
    clearInterval(countRef.current!);
    setCount(10);
    countRef.current = window.setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;

    setOtp((prevOtp) => {
      const updatedOtp = [...prevOtp];
      updatedOtp[index] = value;
      return updatedOtp;
    });

    if (value !== '') {
      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }

    const isFilled = otp.every((digit) => /\d/.test(digit));
    setVerifyDisabled(!isFilled);
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain');
    const numbersOnly = pastedData.replace(/\D/g, '').slice(0, 4);

    setOtp((prevOtp) => {
      const updatedOtp = [...prevOtp];
      for (let i = 0; i < numbersOnly.length; i += 1) {
        updatedOtp[i] = numbersOnly[i];
      }

      if (numbersOnly.length < otp.length) {
        for (let i = numbersOnly.length; i < otp.length; i += 1) {
          updatedOtp[i] = '';
        }
      }

      if (numbersOnly.length === otp.length) {
        inputRefs.current[otp.length - 1]?.blur();
      }

      return updatedOtp;
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace') {
      setOtp((prevOtp) => {
        const updatedOtp = [...prevOtp];
        updatedOtp[index] = '';
        return updatedOtp;
      });

      inputRefs.current[index - 1]?.focus();
    }
  };
  const handleArrowKey = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (event.key === 'ArrowRight' && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerifyEmail = () => {
    if (!email) {
      toast({
        title: 'Passwords do not match',
        variant: 'destructive',
      });
      return;
    }
    const bodyData = { email, otp: otp.join('') };
    console.log(bodyData);
  };

  useEffect(() => {
    const isFilled = otp.every((digit) => /\d/.test(digit));
    setVerifyDisabled(!isFilled);
  }, [otp]);

  return (
    <div className="shadow-custom-reset-password mx-auto mt-3 rounded-md px-4 py-8 300:px-8 400:max-w-md 400:px-14 sm:px-14">
      <h4 className="mb-3 text-center text-lg font-semibold">Email Verification Code</h4>
      <p className="mb-10 text-center">
        We have sent an OTP code to your registered email. Please check your email.
      </p>
      <div className="my-4 flex items-center justify-between gap-1 rounded-md border p-2 400:p-4  sm:p-5">
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(ref) => {
              inputRefs.current[index] = ref!;
            }}
            type="text"
            className="mx-1 h-6  w-8 rounded border border-gray-300 text-center focus:border-blue-500   focus:outline-none 400:h-8 400:w-12 sm:h-10 sm:w-16"
            value={value}
            maxLength={1}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => {
              handleKeyDown(e, index);
              handleArrowKey(e, index);
            }}
            onPaste={handlePaste}
          />
        ))}
      </div>

      <div className="flex justify-between">
        <p>Did not get the code?</p>
        <div>
          <button
            className="text-blue-500 disabled:text-black"
            disabled={count !== 0}
            type="button"
            onClick={handleResend}
          >
            Resend
          </button>
          <span className="ml-2 space-x-1">
            {count > 0 ? 'in' : ''}
            <span className="pl-.5"> {count > 0 ? count : ''} </span>
            {count > 0 ? 's' : ''}
          </span>
        </div>
      </div>
      <div className="grid place-items-center">
        <button
          type="button"
          className="mt-10  rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
          disabled={verifyDisabled}
          onClick={handleVerifyEmail}
        >
          Verify Email
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
