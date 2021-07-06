import Head from 'next/head';
import React from 'react';
import { navButtons } from '../configs';
import { NavBar } from './navigation';

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
      </Head>

      <NavBar navButtons={navButtons} />

      {children}
    </React.Fragment>
  );
};

export default Layout;
