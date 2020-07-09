const NextI18Next = require('next-i18next').default;

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
