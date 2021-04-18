import React from 'react';
import { Timer, NavigationBar } from '../lv2/_index2';

type Props = {
  timerActive: boolean;
  timerClick: () => void;
};

const TimerPage: React.VFC<Props> = ({ timerActive, timerClick }: Props) => {
  if (!timerActive) {
    return null;
  }
  return (
    <>
      <Timer timerActive={timerActive} />
      <NavigationBar timerClick={timerClick} />
    </>
  );
};

export default TimerPage;
