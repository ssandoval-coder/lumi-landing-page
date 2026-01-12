import { translations as es } from './es';
import { translations as en } from './en';
import { translations as pt } from './pt';

export const languages = {
    es,
    en,
    pt,
};

export type Language = keyof typeof languages;

export function getTranslations(lang: Language = 'es') {
    return languages[lang] || languages.es;
}

export const defaultLang: Language = 'es';
export const supportedLanguages: Language[] = ['es', 'en', 'pt'];
