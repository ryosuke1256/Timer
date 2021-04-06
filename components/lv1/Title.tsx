import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  font-size: 3.5rem;
  color: #e5e5e5;
`;

const Title: React.VFC = () => {
  return <Style>Clock</Style>;
};

export default Title;
