'use client';

import { useSearchParams } from 'next/navigation';
import { ChangeEvent, ClipboardEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

import { useToast } from '@/components/ui/use-toast';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { counterState, setCounter } from '@/redux/features/optVerify/otpCounterSlice';
import { setTimerOn, timerState } from '@/redux/features/optVerify/otpTimerSlice';
import { completedStepsState, setCompletedSteps } from '@/redux/features/shared/StepperSlices';

const OtpBox = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const completedSteps = useAppSelector(completedStepsState);

  const { toast } = useToast();

  const timerOn = useAppSelector(timerState);
  const counter = useAppSelector(counterState);

  const [otp, setOtp] = useState(['', '', '', '']);
  const [verifyDisabled, setVerifyDisabled] = useState(true);

  const inputRefs = useRef<HTMLInputElement[]>([]);
  const email = '';

  // useEffect to handle the counter on
  useEffect(() => {
    if (timerOn) {
      const interval = setInterval(() => {
        dispatch(setCounter(counter - 1));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timerOn, dispatch, counter]);
  // useEffect to handle counter off
  useEffect(() => {
    if (counter === 0) {
      dispatch(setTimerOn(false));
    }
  }, [counter, dispatch]);
  // useEffect to handle the focus on the first input
  useEffect(() => {
    setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 500);
  }, [timerOn]);

  // useEffect to handle the verify button disable toggle
  useEffect(() => {
    const isFilled = otp.every((digit) => /\d/.test(digit));
    setVerifyDisabled(!isFilled);
  }, [otp]);
  // resend handler
  const handleResend = () => {
    setOtp(['', '', '', '']);

    dispatch(setTimerOn(true));
    dispatch(setCounter(60));
  };
  // input change handler
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
  // paste handler
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
  // keydown handler
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
  // arrow key handler
  const handleArrowKey = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (event.key === 'ArrowRight' && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  useEffect(() => {
    const search = searchParams.get('fs');
    if (search === '2') {
      dispatch(setCompletedSteps(2));
    }
  }, [searchParams, dispatch]);
  // verify email handler
  const handleVerifyEmail = () => {
    dispatch(setCompletedSteps(3));
    setOtp(['', '', '', '']);
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

  return (
    <div>
      <div className="flex-center my-4 justify-between gap-1 rounded-md border p-2 400:p-4  sm:p-5">
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
            disabled={counter !== 0}
            type="button"
            onClick={handleResend}
          >
            Resend
          </button>
          {timerOn && (
            <span className="ml-2 ">
              {counter > 0 ? 'in' : ''}
              <span className="-mr-1"> {counter > 0 ? counter : ''} </span>
              {counter > 0 ? 's' : ''}
            </span>
          )}
        </div>
      </div>
      <div className="grid place-items-center">
        {completedSteps !== 3 ? (
          <button
            type="button"
            className="mt-10  rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
            disabled={verifyDisabled}
            onClick={handleVerifyEmail}
          >
            Verify Email
          </button>
        ) : (
          <p className="mt-10 text-green-500">congratulations! Email Verified. Try Login</p>
        )}
      </div>
    </div>
  );
};

export default OtpBox;
