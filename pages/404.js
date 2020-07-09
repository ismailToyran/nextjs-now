import { useTranslation } from 'react-i18next';

const Error = () => {
  const { t } = useTranslation(['common']);
  return <p>{t('error-with-status', { statusCode: '404' })}</p>;
};

export default Error;
