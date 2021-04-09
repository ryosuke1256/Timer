import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

type Props = {
  countStart: boolean;
  slctSec: number | null;
  slctMin: number | null;
};

type State = {
  sec: number;
  min: number;
};

class NewTimeCount extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { sec: 1, min: 2 };
  }

  //   countDown() {
  //     if(this.state.secs > 0) {
  //         this.setState((state) => ({
  //               sec : state.sec - 1
  //         }));
  //    }
  //   }

  //   // renderの後
  //   componentDidMount() {
  //     setInterval(() => this.countDown(), 1000);
  //   }

  //   // 終了処理として、タイマーをクリアする
  //   componentWillUnmount() {

  //   }
  a() {
    if (this.state.sec < 10 && this.state.min < 10) {
      return <Style>{`残り0${this.state.min}:0${this.state.sec}`}</Style>;
    } else if (this.state.sec < 10) {
      return <Style>{`残り${this.state.min}:0${this.state.sec}`}</Style>;
    } else if (this.state.min < 10) {
      return <Style>{`残り0${this.state.min}:${this.state.sec}`}</Style>;
    } else {
      return <Style>{`残り${this.state.min}:${this.state.sec}`}</Style>;
    }
  }

  render() {}
}

export default NewTimeCount;

const Style = styled.div`
  color: #e5e5e5;
  font-size: 8rem;
`;
