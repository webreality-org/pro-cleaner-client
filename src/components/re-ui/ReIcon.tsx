// components/Icon.tsx

import Image from 'next/image';
import React from 'react';

interface IconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ReIcon: React.FC<IconProps> = ({ src, alt, width = 40, height = 40 }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default ReIcon;
