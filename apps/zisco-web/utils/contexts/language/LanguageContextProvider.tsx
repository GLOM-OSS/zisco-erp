import { Reducer, useContext, useReducer } from 'react';
import LanguageContext, { initialState } from './languageContext';

import { Language, LanguageType, State } from './language.interface';

const languageReducer: Reducer<Language, LanguageType> = (
  state: State,
  preferredLanguage: LanguageType
) => {
  localStorage.setItem('active_language', preferredLanguage);
  return { ...state, preferredLanguage };
};

function LanguageContextProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [languageState, languageDispatch] = useReducer(
    languageReducer,
    initialState
  );
  const value = {
    preferredLanguage: languageState.preferredLanguage,
    languageDispatch,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContextProvider;

export const usePreferredLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      'useLanguage must be used as a descendant of LanguageProvider'
    );
  } else return context.preferredLanguage;
};

export const useSwapPreferredLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      'useLanguage must be used as a descendant of LanguageProvider'
    );
  } else return context.languageDispatch;
};
