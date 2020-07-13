import React from 'react';
import { NextPage } from 'next';
import Error from 'next/error';
import { getDisplayName } from 'next/dist/next-server/lib/utils';

import { isLocale, Locale } from '@translations/types';
import { LocaleProvider } from '@context/LocaleContext';

export default (Component) => {
  const WithLocale = ({ locale, ...pageProps }) => {
    if (!locale) {
      return <Error statusCode={404} />;
    }
    return (
      <LocaleProvider lang={locale}>
        <Component {...pageProps} />
      </LocaleProvider>
    );
  };

  WithLocale.getInitialProps = async (ctx) => {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if (typeof ctx.query.lang !== 'string' || !isLocale(ctx.query.lang)) {
      return { ...pageProps, locale: undefined };
    }
    return { ...pageProps, locale: ctx.query.lang };
  };

  WithLocale.displayName = `withLang(${getDisplayName(Component)})`;

  return WithLocale;
};
