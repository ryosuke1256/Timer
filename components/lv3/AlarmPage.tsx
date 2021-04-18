import React from 'react';
import Alarm from '../lv2/Alarm';

type Props = {
  alarmActive: boolean;
};

const AlarmPage = ({ alarmActive }) => {
  if (!alarmActive) {
    return null;
  }
  return <div></div>;
};

export default AlarmPage;
