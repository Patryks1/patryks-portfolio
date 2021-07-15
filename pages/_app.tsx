// TODO: Make this conditional depending on env
// import 'preact/debug';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
