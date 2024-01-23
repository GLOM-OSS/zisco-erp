import { createContext } from 'react';

import { Language } from './language.interface';

export const initialState: Language = {
  preferredLanguage: 'fr',
  languageDispatch: () => null,
};

const LanguageContext = createContext<Language>(initialState);

export default LanguageContext;
