import { baseApi } from './api/baseApi';
import otpCounterReducer from './slices/optVerifySlices/otpCounterSlice';
import otpTimerReducer from './slices/optVerifySlices/otpTimerSlice';

export const reducer = {
  // sidebar: sidebarReducer,
  otpTimer: otpTimerReducer,
  otpCounter: otpCounterReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
