import Head from 'next/head';
import React from 'react';
import { CopyRight } from './Shared';

interface IProps {
  children: React.ReactNode;
}

const Layout = (props: IProps): JSX.Element => {
  const { children } = props;

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="author" content="Patryk Slowinski" />
      </Head>
      <main className="bg-primary antialiased">
        {children}
        <footer>
          <CopyRight />
        </footer>
      </main>
    </React.Fragment>
  );
};

export default Layout;
