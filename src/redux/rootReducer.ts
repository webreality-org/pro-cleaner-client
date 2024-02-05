import { baseApi } from './api/baseApi';
import otpTimerSlice from './slices/otpTimerSlice';

export const reducer = {
  // sidebar: sidebarReducer,
  otpTimer: otpTimerSlice,
  [baseApi.reducerPath]: baseApi.reducer,
};
