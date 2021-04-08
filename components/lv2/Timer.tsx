import React from 'react';
import { useState } from 'react';
import Button from '../lv1/Button';
import Log from '../lv1/Log';

const Timer: React.VFC = () => {
  const [word, setWord] = useState('');

  const log = (setTime) => {
    console.log('a');
    if (setTime < 60000) {
      setWord(`${setTime / 1000}秒経過しました`);
    } else if (setTime < 3600000) {
      setWord(`${setTime / 60000}分経過しました`);
    }
    sound('sign', 1);
  };

  const click = (setTime: number) => {
    console.log('click');
    setTimeout(() => log(setTime), setTime);
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
      <Log word={word} />
    </>
  );
};

export default Timer;
