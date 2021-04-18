import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
  Style: any;
  text: string;
  timerClick: () => void;
};

const NavTimer = ({ Style, text, timerClick }: Props) => {
  const [timerOn, setTimerOn] = useState<boolean>(false);

  return (
    <Style onClick={() => timerClick()}>
      <Image src="/images/clock512.png" alt="clock" width="48" height="48" />
      <div>{text}</div>
    </Style>
  );
};

export default NavTimer;
