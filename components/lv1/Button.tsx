import React, { useState, useEffect } from 'react';
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
  timerChange,
  setTimerChange,
  setSelectTimer,
  click,
  time,
  setTime,
}: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const [clickSoundOn, setClickSoundOn] = useState<boolean>(false);
  const [audioCount, setAudioCount] = useState<number>(0);
  const [audioOn, setAudioOn] = useState<boolean>(false);

  const changeAudioOn = (setTime) => {
    /*ここの処理はrenderが始まる前に行われてはいけない,useEffectも試したけどaudioのautoplayよりも
    useEffectが優先されるらしい*/
    setTimeout(() => {
      setClickSoundOn(false);
    }, 1000);
    setTimeout(() => {
      setAudioOn(!audioOn);
    }, setTime);
  };

  useEffect(() => {}, [clickSoundOn]);

  return (
    <Style>
      <input
        style={{ color: 'white' }}
        type="button"
        value={time}
        onClick={() => {
          setAudioCount(audioCount + 1);
          setClickSoundOn(true);
          changeAudioOn(setTime);
          setActive(!active);
          click(setTime, active);
          setSelectTimer(setTime);
          setTimerChange(!timerChange);
        }}
      />
      {clickSoundOn ? <audio src="../../images/pom.mp3" autoPlay /> : null}
      {audioOn ? <audio src="../../images/alarm.mp3" autoPlay /> : null}
    </Style>
  );
};

export default Button;

const Style = styled.div`
  color: #e5e5e5;
`;
