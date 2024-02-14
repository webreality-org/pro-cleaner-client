import { ReButton } from '@/components/reUi/ReButton';

const SocialLogin = () => {
  return (
    <div className="flex justify-center gap-3 ">
      <ReButton>Google</ReButton>
      <ReButton>FaceBook</ReButton>
      <ReButton>Instagram</ReButton>
      <ReButton>LinkedIn</ReButton>
    </div>
  );
};

export default SocialLogin;
