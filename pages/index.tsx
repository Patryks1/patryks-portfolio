import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import {
  LandingSection,
  AboutMeSection,
  ContactMeSection,
  MyWorkSection
} from '../components/landingPage';

const Home: NextPage = (): JSX.Element => {
  return (
    <React.Fragment>
      <nav className="w-full flex justify-end px-10 py-3 fixed top-0 left-0 z-50 text-white">
        <div className="flex flex-1 justify-end space-x-4 font-semibold">
          <Link href="/cv">
            <h1 className="p-1 hover:opacity-80 cursor-pointer">Download CV</h1>
          </Link>
          <a href="https://uk.linkedin.com/in/patrykslowinski" target="_blank" rel="noreferrer">
            <i className="devicon-linkedin-plain text-3xl hover:opacity-80"></i>
          </a>
          <a href="https://github.com/Patryks1" target="_blank" rel="noreferrer">
            <i className="devicon-github-original text-3xl hover:opacity-80"></i>
          </a>
        </div>
      </nav>

      <main className="text-white flex flex-col space-y-20 overflow-hidden0">
        <LandingSection />
        <AboutMeSection />
        <MyWorkSection />
        <ContactMeSection />
      </main>
    </React.Fragment>
  );
};

export default Home;
