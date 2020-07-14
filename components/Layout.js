import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import useTranslation from '@hooks/useTranslation';
import Navigation from '@components/Navigation';

const Layout = ({ titleKey, children }) => {
  const { t } = useTranslation();
  return (
    <StyledLayout>
      <Head>
        <title>{t(titleKey)}</title>
      </Head>
      <Navigation />
      <>{children}</>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export default Layout;
