import ResendMail from './ResendMail';

import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MailStep = () => {
  return (
    <div className="">
      <CardHeader className="text-center">
        <CardTitle>Forget your pass ?</CardTitle>
        <CardDescription>Start resetting.</CardDescription>
      </CardHeader>
      <CardContent>
        <ResendMail />
      </CardContent>
    </div>
  );
};

export default MailStep;
