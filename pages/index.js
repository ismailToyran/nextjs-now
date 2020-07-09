import Head from 'next/head';
import PropTypes from 'prop-types';

import { i18n, Link, withTranslation } from '../i18n';

const Homepage = ({ t }) => (
  <>
    <Head>
      <title>Offline Next.js with Now 2.0</title>
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

    <div className='hero'>
      <h1 className='title'>{t('h1')}</h1>
      <button
        type='button'
        onClick={() =>
          i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')
        }
      >
        {t('change-locale')}
      </button>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
        text-align: center;
      }
      .title {
        font-family: sans-serif;
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    `}</style>
  </>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Homepage);
