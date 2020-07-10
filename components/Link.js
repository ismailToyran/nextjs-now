import Link from 'next/link';

import useTranslation from '../hooks/useTranslation';

const CustomLink = ({ href, as, children }) => {
  const { locale } = useTranslation();

  return (
    <Link
      href={`/[lang]${href === '/' ? '' : href}`}
      as={`/${locale}${href === '/' ? '' : as ? as : href}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
