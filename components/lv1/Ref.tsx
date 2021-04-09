import React from 'react';
import { useRef } from 'react';

const Ref = () => {
  //useRef(initialvalue)
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
    console.log(inputEl.current);
  };
  //   inputEl.current.addEventListener('click', () => console.log('hello'));

  return (
    <>
      <input ref={inputEl} type="text" id="hello" />
      <button onClick={onButtonClick} style={{ color: 'white' }}>
        Focus the input
      </button>
    </>
  );
};

export default Ref;
