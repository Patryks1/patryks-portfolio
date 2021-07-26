import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { CopyRight, Navigation, PageLoader } from './Shared';

interface IProps {
  children: React.ReactNode;
}

const Layout = (props: IProps): JSX.Element => {
  const { children } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="author" content="Patryk Slowinski" />
        <meta name="description" content="Patryk Slowinski personal portfolio" />

        <title>Patryk Slowinski | Portfolio</title>

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Patryk Slowinski | Portfolio" />
        <meta property="og:title" content="Patryk Slowinski | Portfolio" />
        <meta property="og:description" content="Patryk Slowinski personal portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PatrykSlowinskiPortfolio" />
        <meta name="twitter:creator" content="@slowinskiPat" />

        {
          // TODO: Replace this with package, SVG loader does not want to work might need some kind of plugin
        }
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"
        />
      </Head>
      {!isLoading && <Navigation />}
      {children}
      <footer>
        <CopyRight />
      </footer>
      <PageLoader isShowing={isLoading} />
    </React.Fragment>
  );
};

export default Layout;
