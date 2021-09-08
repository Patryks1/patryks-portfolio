import React, { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getSingleArticle, getAllArticles } from '../../../blog/blogHelper';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import CodeBlock from '../../../components/blog/article/mdx/CodeBlock';

interface IArticleMetaData {
  title: string;
  seoTitle: string;
  abstract: string;
  isPublished: boolean;
  publishedOn: Date;
}

type ArticleProps = {
  code: string;
  frontmatter: {
    [key: string]: any;
  };
};

const components = {
  code: CodeBlock
};

const Article = (props: ArticleProps): JSX.Element => {
  const { code, frontmatter } = props;
  const Component = useMemo(() => getMDXComponent(code), [code]);

  const { title } = frontmatter as IArticleMetaData; // , seoTitle, abstract, publishedOn

  return (
    <>
      <Head>
        <title>Patryk Slowinski | {title}</title>
      </Head>
      <Component components={components} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = await getSingleArticle(params.slug as string);

  return {
    props: { ...article }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArticles().map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};

export default Article;
