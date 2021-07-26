import { Transition } from '@tailwindui/react';
import React from 'react';

type PageLoaderProps = {
  isShowing: boolean;
};

const PageLoader = (props: PageLoaderProps): JSX.Element => {
  const { isShowing } = props;

  return (
    <Transition
      show={isShowing}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0">
      <div className="h-screen w-screen fixed top-0 left-0 bg-primary flex justify-center items-center">
        <div className="flex flex-col">
          <div className="loading-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h1 className="text-center text-white">Loading...</h1>
        </div>
      </div>
    </Transition>
  );
};

export default PageLoader;
