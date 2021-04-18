import React from 'react';
import Image from 'next/image';

type Props = {
  Style: any;
  text: string;
  clockClick?: () => void;
};

const Navigation = ({ Style, text, clockClick }: Props) => {
  return (
    <Style onClick={() => clockClick()}>
      <Image src="/images/clock512.png" alt="clock" width="48" height="48" />
      <div>{text}</div>
    </Style>
  );
};

export default Navigation;
