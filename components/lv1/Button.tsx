import React from 'react';
import styled from 'styled-components';

type Props = {
  click: VoidFunction;
};

const Button: React.VFC<Props> = ({ click }: Props) => {
  const start = () => {
    console.log('計測開始');
  };

  return (
    <Style>
      <input
        style={{ color: 'white' }}
        type="button"
        value="3秒測るボタン"
        onClick={() => click()}
      />
    </Style>
  );
};

export default Button;

const Style = styled.div`
  color: #e5e5e5;
`;
