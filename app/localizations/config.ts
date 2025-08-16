import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import hi from "./hi.json";


i18n
    .use(initReactI18next)
    .init({
        lng: "hi",
        fallbackLng: "en",
        debug: true,
        resources: {
            en: { translation: en },
            hi: { translation: hi },
        },
    });

export const switchLanguage = (lng: "en" | "hi") => {
    i18n.changeLanguage(lng);
};

export default i18n;