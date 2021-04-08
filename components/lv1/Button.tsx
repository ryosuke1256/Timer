import React from 'react';
import styled from 'styled-components';

type Props = {
  click: (setTime: number) => void;
  time: string;
  setTime: number;
};

const Button: React.VFC<Props> = ({ click, time, setTime }: Props) => {
  return (
    <Style>
      <input style={{ color: 'white' }} type="button" value={time} onClick={() => click(setTime)} />
    </Style>
  );
};

export default Button;

const Style = styled.div`
  color: #e5e5e5;
`;
