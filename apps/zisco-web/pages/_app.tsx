import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { IntlProvider } from 'react-intl';
import '../public/styles/global.scss';
import '../public/styles/notifGlobalStyles.css';
import '../public/styles/phoneNumberStyles.css';
import '../public/styles/reset.css';
import '../public/styles/root.scss';
import LanguageContextProvider, {
  usePreferredLanguage,
} from '../utils/contexts/language/LanguageContextProvider';
import { theme } from '../utils/theme';

import { ReactNode } from 'react';
import enMessages from '../utils/languages/en-us';
import esMessages from '../utils/languages/es';
import frMessages from '../utils/languages/fr';
import ruMessages from '../utils/languages/ru';

export function TempApp({ children }: { children: ReactNode }) {
  const preferredLanguage = usePreferredLanguage();
  const activeMessages = getActiveLanguage();

  function getActiveLanguage() {
    switch (preferredLanguage) {
      case 'en':
        return enMessages;
      case 'fr':
        return frMessages;
      case 'es':
        return esMessages;
      case 'ru':
        return ruMessages;
      default:
        return enMessages;
    }
  }

  return (
    <IntlProvider
      messages={activeMessages}
      locale={preferredLanguage}
      defaultLocale="en"
    >
      {children}
    </IntlProvider>
  );
}

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ZiscoERP - Powerful HR, Accounting, CRM System</title>
      </Head>
      <main className="app">
        <LanguageContextProvider>
          <TempApp>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </TempApp>
        </LanguageContextProvider>
      </main>
    </>
  );
}

export default CustomApp;
