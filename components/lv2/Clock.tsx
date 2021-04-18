import React from 'react';
import dynamic from 'next/dynamic';
import Title from '../lv1/Title';

const Clock = () => {
  const DynamicComponentWithNoSSR = dynamic(() => import('../lv1/ClockCounter'), {
    ssr: false,
  });
  return (
    <>
      <Title />
      <DynamicComponentWithNoSSR />
      <audio src="./images/alarm.mp3" controls />
    </>
  );
};

export default Clock;
