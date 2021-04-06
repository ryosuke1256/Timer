import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Title from '../components/lv1/Title';

const index: React.FC = () => {
  const DynamicComponentWithNoSSR = dynamic(() => import('../components/lv1/Clock'), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>Timer</title>
        <meta name="description" content="クールでシンプルなTimerアプリです" />
      </Head>
      <Title />
      <DynamicComponentWithNoSSR />
    </>
  );
};

export default index;
