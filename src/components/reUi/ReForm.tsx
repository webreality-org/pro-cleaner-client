'use client';

import { DevTool } from '@hookform/devtools';
import { ReactElement, ReactNode } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import NoSSRWrapper from '../ui-utils/NoSSRWrapper';

import { Form } from '@/components/ui/form';

export type FormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
  mode?: 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all' | undefined;
};

export type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & FormConfig;

function ReForm({ children, submitHandler, defaultValues, resolver, mode = 'onBlur' }: FormProps) {
  const formConfig: FormConfig = {};
  formConfig.mode = mode;

  if (defaultValues) formConfig.defaultValues = defaultValues;
  if (resolver) formConfig.resolver = resolver;

  const form = useForm(formConfig);

  const { handleSubmit, reset } = form;

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log('🌼 🔥🔥 ReForm 🔥🔥 data🌼', data);

    submitHandler(data);
    // reset();
  };
  // useEffect(() => reset(defaultValues), [defaultValues, reset, form]);
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative h-[550px] w-[550px] space-y-3 overflow-x-hidden"
      >
        {children}
      </form>
      <NoSSRWrapper>
        <DevTool control={form.control} />
      </NoSSRWrapper>
    </Form>
  );
}

export default ReForm;
// write your code here
