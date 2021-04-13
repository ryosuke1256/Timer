import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
  timerChange: boolean;
  selectTimer: number;
  countStart: boolean;
  slctSec: number | null;
  slctMin: number | null;
};

const TimeCount: React.VFC<Props> = ({
  timerChange,
  selectTimer,
  countStart,
  slctSec,
  slctMin,
}: Props) => {
  if (!countStart) {
    return null;
  }
  const [sec, setSec] = useState(slctSec);
  const [min, setMin] = useState(slctMin);
  const [timeoutID, setTimeoutID] = useState<NodeJS.Timeout>(null);
  const [timerStart, setTimerStart] = useState(0);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (sec === 0 && min === 0) {
        return;
      } else if (sec === 0) {
        setMin(min - 1);
        setSec(59);
      } else {
        setSec(sec - 1);
      }
      console.log(sec);
    }, 1000);
    setTimeoutID(timeoutID);
  }, [sec, timerStart]);

  useEffect(() => {
    //1分未満なら
    if (selectTimer < 60000) {
      setSec(selectTimer / 1000);
      setMin(0);
    } else {
      setSec((selectTimer % 60000) / 1000);
      setMin(selectTimer / 60000);
      //useEffect [sec,min]で呼び出すとバグる[sec]だと動かない timeStartで呼び出す
      setTimerStart(timerStart + 1);
    }
    //前のタイマーの処理を止める必要があった
    clearTimeout(timeoutID);
  }, [timerChange]);

  if (sec < 10 && min < 10) {
    return <Style>{`残り0${min}:0${sec}`}</Style>;
  } else if (sec < 10) {
    return <Style>{`残り${min}:0${sec}`}</Style>;
  } else if (min < 10) {
    return <Style>{`残り0${min}:${sec}`}</Style>;
  } else {
    return <Style>{`残り${min}:${sec}`}</Style>;
  }
};

export default TimeCount;

const Style = styled.div`
  color: #e5e5e5;
  font-size: 8rem;
`;
