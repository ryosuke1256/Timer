import React from 'react';
import styled from 'styled-components';
import customMedia from '../../styles/customMedia';

const Title: React.VFC = () => {
  return <Style>現在時刻</Style>;
};

export default Title;

const Style = styled.div`
  font-size: 3.5rem;
  color: #e5e5e5;
  //スマホ
  ${customMedia.lessThan('mobile')`
    color:red;
  `}
  //タブレット
  ${customMedia.between('mobile', 'tablet')`

  `}
  //PC
  ${customMedia.greaterThan('tablet')`

  `}
`;
