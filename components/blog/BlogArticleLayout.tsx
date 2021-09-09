import Head from 'next/head';
import React from 'react';
import { CopyRight } from '../Shared';
import BlogNavigation from './BlogNavigation';

export interface IArticleMetaData {
  title: string;
  seoTitle: string;
  abstract: string;
  isPublished: boolean;
  publishedOn: Date;
}

interface IProps {
  children: React.ReactNode;
  metaData: IArticleMetaData;
}

const BlogArticleLayout = (props: IProps): JSX.Element => {
  const { children, metaData } = props;
  const { title } = metaData;

  //TODO: Remove container from here to allow more control
  return (
    <>
      <Head>
        <title>Patryk Slowinski | {title}</title>
      </Head>
      <div className="overflow-x-hidden flex flex-col">
        <BlogNavigation />
        <article className="container mx-auto px-10 md:px-32">{children}</article>
        <footer>
          <CopyRight />
        </footer>
      </div>
    </>
  );
};

export default BlogArticleLayout;
