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
  const sound = (type: any, sec: number): void => {
    console.log('soundが鳴りました');
    //Property 'webkitAudioContext' does not exist on type 'Window & typeof globalThis'
    //が表示されるのでanyで退避
    var ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    // const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(sec);
  };

  return (
    <Style>
      <input
        style={{ color: 'white' }}
        type="button"
        value={time}
        onClick={() => {
          sound('sign', 1);
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
