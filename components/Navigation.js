import React from 'react';

import Link from '@components/Link';
import LocaleSwitcher from '@components/LocaleSwitcher';
import useTranslation from '@hooks/useTranslation';

const Navigation = () => {
  const { locale, t } = useTranslation();
  return (
    <ul className='root'>
      <li>
        <LocaleSwitcher />
      </li>
      <li>
        <Link href='/'>
          <a>{t('painting')}</a>
        </Link>
      </li>
      <li>
        <Link href='/artist'>
          <a>{t('artist')}</a>
        </Link>
      </li>
      <style jsx>{`
        .root {
          margin: 1rem 0 1rem 0;
          padding: 0;
          display: flex;
          list-style: none;
        }
        .root > li:not(:last-child) {
          margin-right: 1rem;
        }
        a:link,
        a:visited {
          text-decoration: none;
          color: navy;
          text-transform: uppercase;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </ul>
  );
};

export default Navigation;
