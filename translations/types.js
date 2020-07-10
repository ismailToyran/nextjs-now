import { locales } from './config';

export function isLocale(tested) {
  console.log(tested);
  locales.some((locale) => console.log(locale === tested));
  return locales.some((locale) => locale === tested);
}
