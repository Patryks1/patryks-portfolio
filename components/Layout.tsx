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
        <title>Patryk Slowinski | Portfolio</title>
      </Head>
      <div className="overflow-x-hidden">
        {!isLoading && <Navigation />}
        {children}
        <footer>
          <CopyRight />
        </footer>
        <PageLoader isShowing={isLoading} />
      </div>
    </React.Fragment>
  );
};

export default Layout;
