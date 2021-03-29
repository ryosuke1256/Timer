import Head from 'next/head';
import dynamic from 'next/dynamic';

const index = () => {
  const DynamicComponentWithNoSSR = dynamic(() => import('../components/lv1/Timer'), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>Timer</title>
      </Head>
      <DynamicComponentWithNoSSR />
    </>
  );
};

export default index;
