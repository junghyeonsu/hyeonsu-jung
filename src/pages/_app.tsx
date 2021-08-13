import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import GlobalStyle from '#/styles/globalStyles';
import LayoutProvider from '#/contexts/LayoutContext';
import ExperienceProvider from '#/contexts/ExperienceContext';
import { theme } from '#/styles/theme';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LayoutProvider>
        <ExperienceProvider>
          <GlobalStyle />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </ExperienceProvider>
      </LayoutProvider>
    </ThemeProvider>
  );
}

export default MyApp;
