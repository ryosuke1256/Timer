import React from 'react';
import { useState } from 'react';
import Button from '../lv1/Button';
import TimeCount from '../lv1/TimeCount';
import Log from '../lv1/Log';

const Timer: React.VFC = () => {
  const [word, setWord] = useState('');
  const [countStart, setCountStart] = useState(false);
  const [slctSec, setSlctSec] = useState<number>(null);
  const [slctMin, setSlctMin] = useState<number>(null);

  const log = (sec, min) => {
    console.log('log');
    if (sec < 60) {
      setWord(`${sec}秒経過しました`);
    } else if (min < 60) {
      setWord(`${min}分経過しました`);
    }
    sound('sign', 1);
  };

  const countdown = (sec, min) => {};

  const click = (setTime: number) => {
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
    setTimeout(() => log(sec, min), setTime);
    setInterval(() => countdown(sec, min), 1000);
  };

  const sound = (type, sec) => {
    console.log('soundが鳴りました');
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.connect(ctx.destination);
    osc.start();
    osc.stop(sec);
  };

  return (
    <>
      <Button click={click} time={'3秒'} setTime={3000} />
      <Button click={click} time={'10分'} setTime={600000} />
      <Button click={click} time={'50分'} setTime={3000000} />
      <TimeCount countStart={countStart} slctSec={slctSec} slctMin={slctMin} />
      <Log word={word} />
    </>
  );
};

export default Timer;
