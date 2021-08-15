import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import { LandingSection, ContactMeSection, MyWorkSection } from '../components/landingPage';
import { ScrollToTop } from '../components/Shared';

const AboutMeSection = dynamic(() => import('../components/landingPage/aboutMe/AboutMeSection'));

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
