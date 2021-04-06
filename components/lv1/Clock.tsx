import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Style = styled.div`
  font-size: 5rem;
  color: #e5e5e5;
`;

const Clock: React.VFC = () => {
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
      {hour}時{min}分{sec}秒
    </Style>
  );
};

export default Clock;
