import React from 'react';
import { CopyRight } from '../Shared';

interface IProps {
  children: React.ReactNode;
}

const BlogArticleLayout = (props: IProps): JSX.Element => {
  const { children } = props;

  return (
    <React.Fragment>
      <div className="overflow-x-hidden flex flex-col h-screen justify-between">
        <div className="container mx-auto px-10 md:px-32">{children}</div>
        <footer>
          <CopyRight />
        </footer>
      </div>
    </React.Fragment>
  );
};

export default BlogArticleLayout;
