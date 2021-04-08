import React from 'react';
import { useState } from 'react';
import Button from '../lv1/Button';
import Log from '../lv1/Log';

const Timer: React.VFC = () => {
  const [word, setWord] = useState('');
  const log = () => {
    console.log('a');
    setWord('３秒経過しました');
    sound('sign', 1);
  };

  const click = (setTime: number) => {
    console.log('click');
    setTimeout(log, setTime);
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
      <Log word={word} />
    </>
  );
};

export default Timer;
