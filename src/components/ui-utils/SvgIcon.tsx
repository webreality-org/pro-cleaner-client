// SvgIcon.tsx
import React, { HTMLProps } from 'react';

type SvgIconProps = HTMLProps<HTMLSpanElement> & {
  svgContent: string;
};

const SvgIcon: React.FC<SvgIconProps> = ({ svgContent, ...props }) => (
  <span dangerouslySetInnerHTML={{ __html: svgContent }} {...props} />
);

export default SvgIcon;
