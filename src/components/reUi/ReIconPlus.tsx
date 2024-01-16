import Image from 'next/image';

const ReIconPlus = ({ iconSrc, content }: { iconSrc: string; content: string }) => {
  return (
    <div>
      <p className="flex-center gap-2">
        <Image className="icon-light" src={iconSrc} height={20} width={20} alt="" />
        {content}
      </p>
    </div>
  );
};

export default ReIconPlus;
