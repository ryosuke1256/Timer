import React from 'react';
import Head from 'next/head';
import Pages from '../components/lv4/Pages';

const index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Timer</title>
        <meta name="description" content="クールでシンプルなTimerアプリです" />
      </Head>
      <Pages />
    </>
  );
};

export default index;
