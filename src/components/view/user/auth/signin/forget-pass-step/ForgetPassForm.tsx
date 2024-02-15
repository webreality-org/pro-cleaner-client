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
    <div>
      <ReForm submitHandler={onSubmit}>
        <ReInput
          name="email"
          type="email"
          description="this is a input description"
          label="email"
          prefix={<MailIcon />}
        />
        <ReButton type="submit">Submit</ReButton>
      </ReForm>
      <ReButton
        onClick={() => {
          dispatch(setFormStep(0));
        }}
      >
        Back to login
      </ReButton>
    </div>
  );
};

export default ForgetPassForm;
