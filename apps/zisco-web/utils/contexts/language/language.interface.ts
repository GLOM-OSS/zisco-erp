export interface LanguageContextProviderProps {
  children: JSX.Element;
}

export type LanguageType = 'en' | 'fr' | 'es' | 'ru';

export interface Language {
  preferredLanguage: LanguageType;
  languageDispatch: React.Dispatch<LanguageType>;
}

export type State = Language;
