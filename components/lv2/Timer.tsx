import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Button from '../lv1/Button';
import TimeCounter from '../lv1/TimeCounter';
import Text from '../lv1/Text';
import styled from 'styled-components';
import customMedia from '../../styles/customMedia';

const Timer: React.VFC = () => {
  const [word, setWord] = useState('');
  const [countStart, setCountStart] = useState(false);
  const [slctSec, setSlctSec] = useState<number>(0);
  const [slctMin, setSlctMin] = useState<number>(0);
  const [selectTimer, setSelectTimer] = useState<number>(0);
  const [timerChange, setTimerChange] = useState<boolean>(false);

  const audioContext = useRef(null);

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

  function initAudioContext(type, sec, audioContext) {
    var audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    // const audioContext = new AudioContext();
    const osc = audioContext.createOscillator();
    osc.connect(audioContext.destination);
    osc.type = type;
    osc.start();
    osc.stop(sec);
  }

  const log = (sec: number, min: number): void => {
    console.log('log');
    if (sec < 60) {
      setWord(`${sec}秒経過しました`);
    } else if (min < 60) {
      setWord(`${min}分経過しました`);
    }
    sound('sign', 1);
  };

  useEffect(() => {
    setWord('');
  }, [timerChange]);

  const click = (setTime: number, active: boolean): void => {
    setCountStart(true);
    console.log('click');
    const sec = setTime / 1000;
    const min = setTime / 60000;
    if (sec < 60) {
      setSlctSec(sec);
    } else if (min < 60) {
      setSlctSec(0);
      setSlctMin(min);
    }
    console.log(setTime);

    // setTimeout(() => {
    //   // sound('sign', 1);
    //   initAudioContext('sign', 1, audioContext);
    //   log(sec, min);
    // }, setTime);
  };

  return (
    <>
      <Button
        audioContext={audioContext}
        initAudioContext={initAudioContext}
        timerChange={timerChange}
        setTimerChange={setTimerChange}
        setSelectTimer={setSelectTimer}
        click={click}
        time={'3秒'}
        setTime={3000}
      />
      <Button
        audioContext={audioContext}
        initAudioContext={initAudioContext}
        timerChange={timerChange}
        setTimerChange={setTimerChange}
        setSelectTimer={setSelectTimer}
        click={click}
        time={'10分'}
        setTime={600000}
      />
      <Button
        audioContext={audioContext}
        initAudioContext={initAudioContext}
        timerChange={timerChange}
        setTimerChange={setTimerChange}
        setSelectTimer={setSelectTimer}
        click={click}
        time={'50分'}
        setTime={3000000}
      />
      <TimeCounter
        timerChange={timerChange}
        selectTimer={selectTimer}
        countStart={countStart}
        slctSec={slctSec}
        slctMin={slctMin}
      />
      <Text Text={word} Style={Style} />
    </>
  );
};

export default Timer;

const Style = styled.div`
  font-size: 3rem;
  color: #e5e5e5;
`;
