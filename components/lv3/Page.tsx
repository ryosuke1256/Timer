import React, { useState } from 'react';
import Navigation from '../lv1/Navigation';
import { Clock, Timer, NavigationBar, StopWatch } from '../lv2/_index2';

const Page: React.VFC = () => {
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
  const Active = () => {};
  return (
    <>
      {clockActive ? <Clock /> : null}
      <NavigationBar />
    </>
  );
};
export default Page;
