import React, { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getSingleArticle, getAllArticles } from '../../../blog/blogHelper';
import { GetStaticPaths, GetStaticProps } from 'next';
import { CodeBlock, Link, Header, List, Delete } from '../../../components/blog/article/mdx';
import BlogArticleLayout, { IArticleMetaData } from '../../../components/blog/BlogArticleLayout';

type ArticleProps = {
  code: string;
  frontmatter: {
    [key: string]: any;
  };
};

// https://mdxjs.com/getting-started#markdown
const components = {
  h1: (props) => {
    const extendedProps = {
      type: 'h1',
      ...props
    };
    return Header(extendedProps);
  },
  h2: (props) => {
    const extendedProps = {
      type: 'h2',
      ...props
    };
    return Header(extendedProps);
  },
  h3: (props) => {
    const extendedProps = {
      type: 'h3',
      ...props
    };
    return Header(extendedProps);
  },
  h4: (props) => {
    const extendedProps = {
      type: 'h4',
      ...props
    };
    return Header(extendedProps);
  },
  h5: (props) => {
    const extendedProps = {
      type: 'h5',
      ...props
    };
    return Header(extendedProps);
  },
  h6: (props) => {
    const extendedProps = {
      type: 'h6',
      ...props
    };
    return Header(extendedProps);
  },
  ol: (props) => {
    const extendedProps = {
      type: 'ol',
      ...props
    };
    return List(extendedProps);
  },
  ul: (props) => {
    const extendedProps = {
      type: 'ul',
      ...props
    };
    return List(extendedProps);
  },
  li: List.ListItem,
  a: Link,
  del: Delete,
  code: CodeBlock
};

const Article = (props: ArticleProps): JSX.Element => {
  const { code, frontmatter } = props;
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <BlogArticleLayout metaData={frontmatter as IArticleMetaData}>
      <Component components={components} />
    </BlogArticleLayout>
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
