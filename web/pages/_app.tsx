import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { keystoneAPI } from '../services/api';

import GlobalStyles from '../styles/global';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={keystoneAPI}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
