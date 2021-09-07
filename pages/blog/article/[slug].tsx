import React, { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getSingleArticle, getAllArticles } from '../../../blog/blogHelper';

const Article = ({ code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component />;
};

export const getStaticProps = async ({ params }) => {
  const article = await getSingleArticle(params.slug);

  return {
    props: { ...article }
  };
};

export const getStaticPaths = async () => {
  const paths = getAllArticles().map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};

export default Article;
