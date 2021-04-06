import React from 'react';
import styled from 'styled-components';

type Props = {
  word: string | null;
};

const Log: React.VFC<Props> = ({ word }: Props) => {
  return <Style>{word}</Style>;
};

export default Log;

const Style = styled.div`
  font-size: 3rem;
  color: #e5e5e5;
`;
