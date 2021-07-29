import { NextPage } from 'next';
import React from 'react';
import {
  LandingSection,
  ContactMeSection,
  AboutMeSection,
  MyWorkSection
} from '../components/landingPage';
import { ScrollToTop } from '../components/Shared';

const Home: NextPage = (): JSX.Element => {
  return (
    <main className="text-white flex flex-col space-y-20 overflow-hidden">
      <LandingSection />
      <AboutMeSection />
      <MyWorkSection />
      <ContactMeSection />
      <ScrollToTop />
    </main>
  );
};

export default Home;
