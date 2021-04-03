import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const index: React.FC = () => {
  const DynamicComponentWithNoSSR = dynamic(() => import('../components/lv1/Timer'), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>Timer</title>
        <meta name="description" content="クールでシンプルなTimerアプリです" />
      </Head>
      <DynamicComponentWithNoSSR />
    </>
  );
};

export default index;
