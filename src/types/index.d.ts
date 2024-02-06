import { ReactNode } from 'react';

import { BADGE_CRITERIA } from '@/constants';

export type TSearchParamsProps = {
  searchParams?: { [key: string]: string | undefined };
};

export type TURLProps = {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
};

export interface BadgeCounts {
  GOLD: number;
  SILVER: number;
  BRONZE: number;
}

export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;
export type TMeta = {
  limit: number;
  page: number;
  size: number;
};
export type ResponseSuccessType = {
  data: any;
  meta?: TMeta;
  status: number;
  statusText: string;
  success: boolean;
  headers: any;
  config: any;
};
export type TGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type TGenericErrorResponse = {
  statusCode: number;
  errorName: string;
  errorMessages: TGenericErrorMessage[];
};

// ============================
// reTypes
export type TChildrenProps = {
  children: ReactNode;
};
export type TChildrenClassProps = {
  children: ReactNode;
  classModifier?: string;
};
