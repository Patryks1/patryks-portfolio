import Head from 'next/head';
import React from 'react';
import { CopyRight } from '../Shared';

interface IProps {
  children: React.ReactNode;
}

const BlogHomeLayout = (props: IProps): JSX.Element => {
  const { children } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Patryk Slowinski | Blog</title>
      </Head>
      <div className="overflow-x-hidden">
        {children}
        <footer>
          <CopyRight />
        </footer>
      </div>
    </React.Fragment>
  );
};

export default BlogHomeLayout;