import React from 'react';

import Layout from '@components/Layout';
import Painting from '@components/Painting';
import withLocale from '@hocs/withLocale';

const IndexPage = () => {
  console.log(process.env.GOOGLE_MAP_EMBED);
  return (
    <Layout titleKey='notAPipe'>
      <Painting />
    </Layout>
  );
};

export default withLocale(IndexPage);
