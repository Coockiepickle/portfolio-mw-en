
import 'react-i18next';
import enTranslations from './locales/en.json';

// Type definition for the translation resources
declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof enTranslations;
    };
  }
}
