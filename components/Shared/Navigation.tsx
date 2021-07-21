import React from 'react';

const Navigation = (): JSX.Element => (
  <nav className="w-full flex justify-end px-10 py-3 fixed top-0 left-0 z-50 text-white">
    <div className="flex flex-1 justify-end space-x-4 font-semibold">
      <a href="https://uk.linkedin.com/in/patrykslowinski" target="_blank" rel="noreferrer">
        <i className="devicon-linkedin-plain text-3xl hover:opacity-80"></i>
      </a>
      <a href="https://github.com/Patryks1" target="_blank" rel="noreferrer">
        <i className="devicon-github-original text-3xl hover:opacity-80"></i>
      </a>
    </div>
  </nav>
);

export default Navigation;
