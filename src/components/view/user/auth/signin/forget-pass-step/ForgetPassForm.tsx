import { MailIcon } from 'lucide-react';

import { ReButton } from '@/components/reUi/ReButton';
import ReForm from '@/components/reUi/ReForm';
import ReInput from '@/components/reUi/ReInput';

const ForgetPassForm = () => {
  const onSubmit = async () => {
    console.log('');
  };
  return (
    <div>
      {' '}
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
      <ReButton onClick={() => {}}>Back to login</ReButton>
    </div>
  );
};

export default ForgetPassForm;
