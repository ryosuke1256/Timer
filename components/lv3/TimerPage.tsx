import React from 'react';
import { Timer, NavigationBar } from '../lv2/_index2';

type Props = {
  timerActive: boolean;
  timerClick: () => void;
  clockClick: () => void;
};

const TimerPage: React.VFC<Props> = ({ timerActive, timerClick, clockClick }: Props) => {
  if (!timerActive) {
    return null;
  }
  return (
    <>
      <Timer timerActive={timerActive} />
      <NavigationBar timerClick={timerClick} clockClick={clockClick} />
    </>
  );
};

export default TimerPage;
