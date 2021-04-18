import React from 'react';
import { Clock, NavigationBar } from '../lv2/_index2';

type Props = {
  clockActive: boolean;
  timerClick: () => void;
  clockClick: () => void;
};

const ClockPage: React.VFC<Props> = ({ clockActive, timerClick, clockClick }: Props) => {
  if (!clockActive) {
    return null;
  }
  return (
    <>
      <Clock />
      <NavigationBar timerClick={timerClick} clockClick={clockClick} />
    </>
  );
};

export default ClockPage;
