import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
  slctSec: number | null;
};

const TimeCount: React.VFC<Props> = ({ slctSec }: Props) => {
  if (!slctSec) {
    return null;
  }
  const [time, setTime] = useState(slctSec);

  console.log(time);

  setTimeout(() => {
    setTime(time - 1);
  }, 1000);

  return <Style>{`残り${time}秒`}</Style>;
};

export default TimeCount;

const Style = styled.div`
  color: #e5e5e5;
  font-size: 8rem;
`;
