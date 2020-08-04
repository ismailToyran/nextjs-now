import React from 'react';

import Layout from '@components/Layout';
import Painting from '@components/Painting';
import withLocale from '@hocs/withLocale';

const IndexPage = () => {
  console.log('domain url:', process.env.DOMAIN_URL);
  console.log('public domain url:', process.env.NEXT_PUBLIC_DOMAIN_URL);
  console.log('try2');
  return (
    <Layout titleKey="notAPipe">
      <Painting />
    </Layout>
  );
};

export default withLocale(IndexPage);
