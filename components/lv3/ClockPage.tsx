import React from 'react';
import { Clock, NavigationBar } from '../lv2/_index2';

type Props = {
  clockActive: boolean;
  timerClick: () => void;
};

const ClockPage: React.VFC<Props> = ({ clockActive, timerClick }: Props) => {
  if (!clockActive) {
    return null;
  }
  return (
    <>
      <Clock />
      <NavigationBar timerClick={timerClick} />
    </>
  );
};

export default ClockPage;
