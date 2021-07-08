import { NextPage } from 'next';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LandingSection from '../components/LandingPage/LandingSection';

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

      <main className="text-white flex flex-col space-y-20 overflow-x-hidden">
        <LandingSection />
        <section className="container mx-auto space-y-6">
          <h1 className="text-pink-500 text-5xl font-bold">About Me</h1>
          <div className="flex">
            <div className="flex flex-col">
              <img
                className="w-80 h-80 rounded-full"
                src="https://images.unsplash.com/photo-1625320014712-cc333e4e93a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="profile_pic"
              />
              <h1>Patryk Slowinski</h1>
            </div>

            <div className="flex flex-col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat minus,
                consequuntur hic sapiente rerum veniam, velit, natus cumque magni nihil tenetur
                officia iure dicta quia quas fuga aliquid vero?
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <h1>My Work</h1>
        </section>
        <section className="container mx-auto">
          <h1>Contact Me</h1>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
