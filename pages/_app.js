import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../i18n';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
