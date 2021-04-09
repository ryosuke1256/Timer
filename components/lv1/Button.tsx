import React from 'react';
import styled from 'styled-components';

type Props = {
  timerChange: any;
  setTimerChange: any;
  setSelectTimer: any;
  click: (setTime: number) => void;
  time: string;
  setTime: number;
};

const Button: React.VFC<Props> = ({
  timerChange,
  setTimerChange,
  setSelectTimer,
  click,
  time,
  setTime,
}: Props) => {
  return (
    <Style>
      <input
        style={{ color: 'white' }}
        type="button"
        value={time}
        onClick={() => {
          click(setTime);
          setSelectTimer(setTime);
          setTimerChange(!timerChange);
        }}
      />
    </Style>
  );
};

export default Button;

const Style = styled.div`
  color: #e5e5e5;
`;
