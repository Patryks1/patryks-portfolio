import { NextPage } from 'next';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
        <div className="flex flex-1 justify-end space-x-4 font-semibold text-lg">
          <a href="test" className="text-3xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="test" className="text-3xl">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </nav>

      <main className="text-white flex flex-col space-y-20 overflow-hidden">
        <LandingSection />
        <AboutMeSection />
        <MyWorkSection />
        <ContactMeSection />
      </main>
    </React.Fragment>
  );
};

export default Home;
