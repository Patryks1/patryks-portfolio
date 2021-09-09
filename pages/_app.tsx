import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import BlogArticleLayout from '../components/blog/BlogArticleLayout';
import BlogHomeLayout from '../components/blog/BlogHomeLayout';
import Layout from '../components/Layout';
import '../styles/globals.css';
import * as gtag from '../util/gtag';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const isBlogPage = (): boolean => {
    if (router.pathname.includes('blog/article') || router.pathname.includes('blog')) {
      return true;
    }

    return false;
  };

  return isBlogPage() ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
