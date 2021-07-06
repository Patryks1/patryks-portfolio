import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import dbConnect from '../util/mongodb';

interface Props {
  serverMessage: string;
}

const Home: NextPage<Props> = ({ serverMessage }): JSX.Element => {
  return (
    <React.Fragment>
      <main className="containers">
        <h1>{serverMessage}</h1>
      </main>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await dbConnect();

  return {
    props: {
      serverMessage: 'Dynamic Server Message'
    }
  };
};

export default Home;
