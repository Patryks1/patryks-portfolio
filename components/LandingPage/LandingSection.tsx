import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LandingAnimatedBackground from './LandingAnimatedBackground';

const LandingSection = (): JSX.Element => {
  return (
    <section className="relative">
      <LandingAnimatedBackground />
      <div className="flex flex-col absolute top-2/4 left-24">
        <span className="font-bold uppercase tracking-widest">Full stack web developer</span>
        <h1 className="text-4xl lg:text-7xl font-bold text-pink-500">
          Patryk
          <br />
          Slowinski
        </h1>
        <p className="font-bold mb-1">The Design is in the des...</p>
        <p>Lorem ipsum dolor sit amet...</p>
      </div>

      <button className="absolute bottom-5 left-2/4">
        <FontAwesomeIcon icon={faArrowAltCircleDown} className="text-5xl" />
      </button>
    </section>
  );
};

export default LandingSection;
