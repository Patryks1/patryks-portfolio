import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

const Custom404: NextPage = (): JSX.Element => {
  return (
    <React.Fragment>
      <main className="flex justify-center">
        <div className="flex flex-col">
          <h1>404 Page Not Found</h1>
          <div className="flex justify-center pt-2">
            <Link href="/">
              <h1 className="py-2 px-2 bg-gray-600 w-20 text-white rounded-md justify-center flex cursor-pointer">
                Go back
              </h1>
            </Link>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Custom404;
