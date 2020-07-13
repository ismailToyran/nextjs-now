import React from 'react';

import Layout from '@components/Layout';
import Painting from '@components/Painting';
import withLocale from '@hocs/withLocale';

import { env } from 'utils';

const IndexPage = () => {
  return (
    <Layout titleKey='notAPipe'>
      <Painting />
    </Layout>
  );
};

export default withLocale(IndexPage);
