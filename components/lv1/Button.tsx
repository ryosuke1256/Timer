import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
  audioContext: any;
  initAudioContext: any;
  timerChange: any;
  setTimerChange: any;
  setSelectTimer: any;
  click: (setTime: number, active: boolean) => void;
  time: string;
  setTime: number;
};

const Button: React.VFC<Props> = ({
  audioContext,
  initAudioContext,
  timerChange,
  setTimerChange,
  setSelectTimer,
  click,
  time,
  setTime,
}: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const [audioOn, setAudioOn] = useState<boolean>(false);

  const changeAudioOn = (setTime) => {
    setTimeout(() => setAudioOn(!audioOn), setTime);
  };

  return (
    <Style>
      <input
        style={{ color: 'white' }}
        type="button"
        value={time}
        onClick={() => {
          changeAudioOn(setTime);
          setActive(!active);
          click(setTime, active);
          setSelectTimer(setTime);
          setTimerChange(!timerChange);
        }}
      />
      {audioOn ? <audio src="../../images/alarm.mp3" autoPlay /> : null}
    </Style>
  );
};

export default Button;

const Style = styled.div`
  color: #e5e5e5;
`;
