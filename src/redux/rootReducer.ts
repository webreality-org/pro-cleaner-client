import { baseApi } from './api/baseApi';
import otpCounterReducer from './features/optVerify/otpCounterSlice';
import otpTimerReducer from './features/optVerify/otpTimerSlice';
import completedStepsReducer from './features/shared/StepperSlices';

export const reducer = {
  otpTimer: otpTimerReducer,
  otpCounter: otpCounterReducer,
  steps: completedStepsReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
