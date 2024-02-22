/* eslint-disable jsx-a11y/label-has-associated-control */
import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type TReInputProps = {
  name: string;
  label?: string;
  description?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  control?: any;
};
const ReInput = ({
  name,
  label,
  description,
  prefix,
  suffix,

  type = 'text',
  autoComplete = 'off',
  placeholder,
}: TReInputProps) => {
  const { control } = useFormContext();
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {/* <FormLabel>{label}</FormLabel> */}
            <FormControl>
              <div className="flex-center gap-2 rounded border border-gray-400 px-2 focus-visible:ring-2  focus-visible:ring-offset-2">
                <div className="text-sm">{prefix}</div>
                <div>
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      placeholder=""
                      className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full rounded-md border border-t-transparent bg-transparent p-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
                      {...field}
                    />

                    <label className="!before:content[' '] !after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 !peer-placeholder-shown:text-blue-gray-500 !peer-disabled:peer-placeholder-shown:text-blue-gray-500 !before:box-border !peer-disabled:after:border-transparent pointer-events-none !absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent">
                      Email
                    </label>
                  </div>
                </div>

                {/* <Input
                  className="border-none px-0   focus-visible:ring-0  focus-visible:ring-offset-0"
                  placeholder={placeholder}
                  type={type}
                  autoComplete={autoComplete}
                  {...field}
                /> */}
                {suffix}
              </div>
            </FormControl>
            <FormDescription>{description}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ReInput;
