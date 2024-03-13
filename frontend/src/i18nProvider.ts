// Source code generated by AppGPT (www.appgpt.tech)

 // in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"PurchaseLink":{"name":"Purchase Link","fields":{"link":"Link","id":"id"}},"Videos":{"name":"Videos","fields":{"videoLink":"Video Link","id":"id"}},"NFLStars":{"name":"Nflstars","fields":{"imageLink":"Image Link","id":"id"}}}};
const frResources = { resources: {"PurchaseLink":{"name":"Purchase Link (fr)","fields":{"link":"Link (fr)","id":"id"}},"Videos":{"name":"Videos (fr)","fields":{"videoLink":"Video Link (fr)","id":"id"}},"NFLStars":{"name":"Nflstars (fr)","fields":{"imageLink":"Image Link (fr)","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    