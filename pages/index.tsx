import { NextPage } from 'next';
import React from 'react';
import {
  LandingSection,
  AboutMeSection,
  ContactMeSection,
  MyWorkSection
} from '../components/landingPage';
import { ScrollToTop, Navigation } from '../components/Shared';

const Home: NextPage = (): JSX.Element => {
  return (
    <React.Fragment>
      <Navigation />

      <main className="text-white flex flex-col space-y-20 overflow-hidden0">
        <LandingSection />
        <AboutMeSection />
        <MyWorkSection />
        <ContactMeSection />
        <ScrollToTop />
      </main>
    </React.Fragment>
  );
};

export default Home;
