import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Style = styled.div`
  color: red;
`;

const Timer = () => {
  const now = new Date();
  const [hour, setHour] = useState(now.getHours());
  const [min, setMin] = useState(now.getMinutes());
  const [sec, setSec] = useState(now.getSeconds());
  setInterval(() => {
    const now = new Date();
    setHour(now.getHours());
    setMin(now.getMinutes());
    setSec(now.getSeconds());
  }, 1000);
  return (
    <Style>
      <div>Timer</div>
      <div>
        {hour}時{min}分{sec}秒
      </div>
    </Style>
  );
};

export default Timer;
