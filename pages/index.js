import React, { useEffect } from 'react';
import Head from 'next/head';

import getInitialLocale from '@translations/getInitialLocale';

const Index = () => {
  useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`);
  });
  return (
    <Head>
      <meta name='robots' content='noindex, nofollow' />
      <title>Offline Next.js with Vercel</title>
      <link rel='manifest' href='/manifest.json' />
      <link
        rel='shortcut icon'
        type='image/x-icon'
        sizes='64x64'
        href='/favicon.ico'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <meta name='theme-color' content='#72B340' />
      <meta
        name='description'
        content="make your Next.js application work offline using service workers via Google's workbox"
      />
    </Head>
  );
};

export default Index;
