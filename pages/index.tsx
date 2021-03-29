import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

const index = () => {
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
    <>
      <Head>
        <title>Timer</title>
      </Head>
      <div>Timer</div>
      <div>
        {hour}時{min}分{sec}秒
      </div>
    </>
  );
};

export default index;
