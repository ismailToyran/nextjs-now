const NextI18Next = require('next-i18next').default;
const path = require('path');

path.resolve('./public/static/locales/');

module.exports = new NextI18Next({
  defaultLanguage: 'tr',
  fallbackLng: 'tr',
  otherLanguages: ['tr', 'en'],
  localeSubpaths: {
    tr: 'tr',
    en: 'en',
  },
  strictMode: false,
});
