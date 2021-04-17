import React from 'react';
import Image from 'next/image';

type Props = {
  Style: any;
  text: string;
};

const Navigation = ({ Style, text }: Props) => {
  return (
    <Style>
      <Image src="/images/clock512.png" alt="clock" width="48" height="48" />
      <div>{text}</div>
    </Style>
  );
};

export default Navigation;
