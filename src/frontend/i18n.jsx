import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslation from './locales/en.json'
import ptTranslation from './locales/pt.json'

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        lng: 'pt',
        fallbacklng: 'en',
        resources: {
            en: {
                translation: enTranslation
            },
            pt: {
                translation: ptTranslation
            }
        },
        interpolation: {
            escapeValue: false
        },
    })

    export default i18n