import React, { useState } from 'react';
import { ClockPage, TimerPage, StopWatchPage, AlarmPage } from '../lv3/_index3';

const Pages: React.VFC = () => {
  const [clockActive, setClockActive] = useState<boolean>(true);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [stopWatchActive, setStopWatchActive] = useState<boolean>(false);
  const [alarmActive, setAlarmActive] = useState<boolean>(false);

  const timerClick = () => {
    setTimerActive(true);
    setClockActive(false);
    setStopWatchActive(false);
    setAlarmActive(false);
  };
  console.log('render');

  return (
    <>
      <ClockPage clockActive={clockActive} timerClick={timerClick} />
      <TimerPage timerActive={timerActive} timerClick={timerClick} />
      <StopWatchPage stopWatchActive={stopWatchActive} />
      <AlarmPage alarmActive={alarmActive} />
    </>
  );
};

export default Pages;
