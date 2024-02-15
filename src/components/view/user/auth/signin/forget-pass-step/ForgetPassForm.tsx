import { MailIcon } from 'lucide-react';

import { ReButton } from '@/components/reUi/ReButton';
import ReForm from '@/components/reUi/ReForm';
import ReInput from '@/components/reUi/ReInput';
import { incrementFormStep, setFormStep } from '@/redux/features/auth/signinStepSlices';
import { useAppDispatch } from '@/redux/hooks';

const ForgetPassForm = () => {
  const dispatch = useAppDispatch();
  const onSubmit = async () => {
    dispatch(incrementFormStep());
    console.log('');
  };
  return (
    <div className=" flex flex-col  ">
      <ReForm submitHandler={onSubmit}>
        <ReInput
          name="email"
          type="email"
          description="this is a input description"
          label="email"
          prefix={<MailIcon />}
        />
        <div className="grid place-items-center">
          <ReButton type="submit">Submit</ReButton>
        </div>
      </ReForm>
      <div className="grid place-self-end">
        <ReButton
          onClick={() => {
            dispatch(setFormStep(0));
          }}
        >
          Back to login
        </ReButton>
      </div>
    </div>
  );
};

export default ForgetPassForm;
