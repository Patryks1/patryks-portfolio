import { GetStaticProps, NextPage } from 'next';
import React from 'react';

interface Props {
  serverMessage: string;
}

const Static: NextPage<Props> = ({ serverMessage }): JSX.Element => {
  return (
    <div className="container">
      <main className="containers">
        <h1>{serverMessage}</h1>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      serverMessage: 'Wow, such Empty'
    }
  };
};

export default Static;
