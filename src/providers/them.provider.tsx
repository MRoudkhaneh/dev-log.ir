import {MantineProvider} from '@mantine/core';
import {ReactNode} from 'react';
import Head from 'next/head';
import {rtlCache} from 'rtl-cache';

export const ThemProvider = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={rtlCache}
        theme={{
          dir: 'rtl',
          colorScheme: 'dark',
          fontFamily: 'dana,sans-serif',
          headings: {fontFamily: 'dana,sans-serif'},
        }}
      >
        {children}
      </MantineProvider>
    </>
  );
};
