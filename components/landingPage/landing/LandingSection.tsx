import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LandingAnimatedBackground from './LandingAnimatedBackground';

// TODO: Animated text
const LandingSection = (): JSX.Element => {
  return (
    <section className="relative">
      <LandingAnimatedBackground />
      <div className="flex flex-col absolute top-2/4 left-24">
        <span className="font-bold uppercase tracking-widest">Full stack Software Developer</span>
        <h1 className="text-4xl lg:text-7xl font-bold text-pink-500">
          Patryk
          <br />
          Slowinski
        </h1>
        <p className="font-bold mb-1">The Design is in the des...</p>
        <p>Lorem ipsum dolor sit amet...</p>
      </div>

      <div className="flex justify-center">
        <button className="absolute bottom-8 w-20 h-20 p-6 hover:text-pink-500 duration-500 ease-in-out">
          <FontAwesomeIcon icon={faArrowDown} className="text-4xl animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default LandingSection;
