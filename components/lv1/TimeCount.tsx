import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
  countStart: boolean;
  slctSec: number | null;
  slctMin: number | null;
};

//無駄なreder減らすためにslctMin,slctSecとsec,min分けてる
const TimeCount: React.VFC<Props> = ({ countStart, slctSec, slctMin }: Props) => {
  if (!countStart) {
    return null;
  }
  const [sec, setSec] = useState(slctSec);
  const [min, setMin] = useState(slctMin);

  console.log(sec);
  console.log(min);

  setTimeout(() => {
    if (sec === 0) {
      setSec(59);
      setMin(min - 1);
    } else {
      setSec(sec - 1);
    }
  }, 1000);

  return <Style>{`残り${min}:${sec}`}</Style>;
};

export default TimeCount;

const Style = styled.div`
  color: #e5e5e5;
  font-size: 8rem;
`;
