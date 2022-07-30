import {MantineProvider} from '@mantine/core';
import {ReactNode} from 'react';

export const ThemProvider = ({children}: {children: ReactNode}) => {
  return (
    <MantineProvider
      theme={{
        dir: 'rtl',
        colorScheme: 'dark',
        fontFamily: 'dana,sans-serif',
        headings: {fontFamily: 'dana,sans-serif'},
      }}
    >
      {children}
    </MantineProvider>
  );
};
