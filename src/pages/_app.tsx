import 'styles/globals.scss';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NextPage} from 'next';
import {ReactElement, ReactNode} from 'react';
import {PublicLayout} from '../layouts/public.Layout';
import {ThemProvider} from '../providers/them.provider';

type TPage<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const MyApp = ({Component, pageProps}: AppProps & {Component: TPage}) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemProvider>
          {Component.getLayout ? (
            Component.getLayout(<Component {...pageProps} />)
          ) : (
            <PublicLayout>
              <Component {...pageProps} />
            </PublicLayout>
          )}
        </ThemProvider>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
