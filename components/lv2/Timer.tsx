import React from 'react';
import { useState } from 'react';
import Button from '../lv1/Button';
import TimeCount from '../lv1/TimeCount';
import Log from '../lv1/Log';

const Timer: React.VFC = () => {
  const [word, setWord] = useState('');
  const [slctSec, setSlctSec] = useState<number | null>(null);

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
    console.log('click');
    const sec = setTime / 1000;
    setSlctSec(sec);
    const min = setTime / 60000;
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
      <TimeCount slctSec={slctSec} />
      <Log word={word} />
    </>
  );
};

export default Timer;
