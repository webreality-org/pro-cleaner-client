import { useEffect } from 'react';

import { counterState, setCounter } from '@/redux/features/optVerify/otpCounterSlice';
import { setTimerOn, timerState } from '@/redux/features/optVerify/otpTimerSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Timer = () => {
  const timerOn = useAppSelector(timerState);
  const counter = useAppSelector(counterState);
  const dispatch = useAppDispatch();
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
  return (
    <div>
      <div>
        {timerOn && (
          <span className="ml-2 ">
            {counter > 0 ? 'in' : ''}
            <span className="-mr-1"> {counter > 0 ? counter : ''} </span>
            {counter > 0 ? 's' : ''}
          </span>
        )}
      </div>
    </div>
  );
};

export default Timer;
