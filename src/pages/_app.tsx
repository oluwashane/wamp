import '@/providers/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProvider } from '@/providers/app';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropswithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps,
}: AppPropswithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => page);
  const pageContent = getLayout(
    <Component {...pageProps} />
  );
  return <AppProvider>{pageContent}</AppProvider>;
}
