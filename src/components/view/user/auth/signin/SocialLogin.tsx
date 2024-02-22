import ReIcon from '@/components/re-ui/ReIcon';
import { items } from '@/constants';

const SocialLogin = () => {
  return (
    <div className="flex cursor-pointer items-center justify-center gap-x-4 pb-4 text-center">
      {items.map((icon, index) => (
        <ReIcon key={index} src={icon.src} alt={icon.name} />
      ))}
    </div>
  );
};

export default SocialLogin;
