import Head from 'next/head';
import Header from '../navigation/header';

const MainLayout = (props) => {
  return (
    <>
      <Head>
        <title>Hokusai Tribute</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='This is a tribute page for Hokusai' />
        <meta name='keywords' content='Hokusai, art, paint' />
        <meta name='author' content='Sparrow' />
      </Head>
      <Header />
      <div className='container'>{props.children}</div>
    </>
  );
};

export default MainLayout;
