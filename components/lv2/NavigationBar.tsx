import React from 'react';
import styled from 'styled-components';
import Navigation from '../lv1/Navigation';

const NavigationBar = () => {
  return (
    <Styles>
      <Navigation Style={Style} text="現在時刻" />
      <Navigation Style={Style} text="タイマー" />
      <Navigation Style={Style} text="ストップウォッチ" />
      <Navigation Style={Style} text="目覚まし時計" />
    </Styles>
  );
};

export default NavigationBar;

const Styles = styled.div`
  height: 100px;
  width: 100vw;
  padding: 2vh;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  border-top: solid 1px #414141;
`;

const Style = styled.div`
  display: block;
  font-size: 0.1rem;
  color: white;
`;
