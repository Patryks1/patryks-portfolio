import React from 'react';
import { SectionTitle } from '../../Shared';
import { TextBox, TextArea, Button } from '../../UI';

const ContactMeSection = (): JSX.Element => {
  return (
    <section className="container mx-auto p-20 lg:px-20">
      <SectionTitle title="Contact Me" />
      <p className="text-center px-5 lg:px-60 mt-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nisi soluta quos ex, ullam
        autem nihil maiores eos, incidunt neque ipsam odit doloribus culpa explicabo. Vel obcaecati
        itaque totam fugit.
      </p>
      <form className="w-full max-w-lg mx-auto mt-20">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <TextBox label="First Name" id="first-name" type="text" placeHolder="First Name" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <TextBox label="Last Name" id="last-name" type="text" placeHolder="Last Name" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <TextBox label="E-mail" id="email" type="email" placeHolder="E-Mail" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <TextArea label="Message" id="message" />
          </div>
        </div>
        <Button text="Send" />
      </form>
    </section>
  );
};

export default ContactMeSection;
