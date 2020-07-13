import { defaultLocale } from '@translations/config';
import { isLocale } from '@translations/types';

const getInitialLocale = () => {
  const localSetting = localStorage.getItem('locale');
  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  }

  const [browserSetting] = navigator.language.split('-');
  if (isLocale(browserSetting)) {
    return browserSetting;
  }

  return defaultLocale;
};

export default getInitialLocale;
