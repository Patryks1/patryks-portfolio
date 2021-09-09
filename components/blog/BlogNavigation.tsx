import React from 'react';

const BlogNavigation = (): JSX.Element => {
  return (
    <header className="text-white body-font container mx-auto flex flex-wrap py-5 px-5 md:px-32 mb-10 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center mb-4 md:mb-0">
        <span className="ml-3 text-2xl text-primary cursor-pointer">Patryk Slowinski</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:opacity-80 cursor-pointer">Portfolio</a>
        <a className="mr-5 hover:opacity-80 cursor-pointer">Blog</a>
        <a className="mr-5 hover:opacity-80 cursor-pointer">Latest</a>
      </nav>
    </header>
  );
};

export default BlogNavigation;
