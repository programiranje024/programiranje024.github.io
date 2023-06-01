import { AppProps } from 'next/app';
import React from 'react';

import '@/styles/globals.css';

if (!process.browser) {
  React.useLayoutEffect = () => {
    return;
  };
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
