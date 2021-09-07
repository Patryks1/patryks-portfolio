import Head from 'next/head';
import React from 'react';
import { CopyRight } from '../Shared';

interface IBlogMetaData {
  title: string;
  seoTitle: string;
  abstract: string;
  isPublished: boolean;
  publishedOn: Date;
}

interface IProps {
  children: React.ReactNode;
}

const BlogLayout = (props: IProps): JSX.Element => {
  const { children } = props;

  return (
    <React.Fragment>
      <Head>
        <title>TITLE OF BLOG</title>
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

export default BlogLayout;
