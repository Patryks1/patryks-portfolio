import React from 'react';
import { useState } from 'react';
import { ISendEmailRequest } from '../../../interfaces';
import { IRestBaseResponse } from '../../../interfaces/contact.interfaces';
import { FadeInSection, SectionTitle } from '../../Shared';
import { TextBox, TextArea, Button } from '../../UI';
import * as EmailValidator from 'email-validator';

enum ResponseMessageType {
  error,
  success
}

type ResponseMessage = {
  message: string;
  type: ResponseMessageType;
};

const ContactMeSection = (): JSX.Element => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<ResponseMessage>();

  const onSendClicked = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();

    if (!email) {
      setResponseMessage({
        message: 'Email is required',
        type: ResponseMessageType.error
      });
      return;
    }

    if (!EmailValidator.validate(email)) {
      setResponseMessage({
        message: 'Invalid Email',
        type: ResponseMessageType.error
      });
      return;
    }

    if (!message) {
      setResponseMessage({
        message: 'Message is required',
        type: ResponseMessageType.error
      });
      return;
    }

    setResponseMessage(null);
    setIsLoading(true);

    const payload: ISendEmailRequest = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message
    };

    fetch('/api/sendEmail', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async (response) => {
        const responseJson: IRestBaseResponse = await response.json();

        if (responseJson) {
          const isSuccess: boolean = responseJson.status === 200;

          setResponseMessage({
            message: responseJson.detail,
            type: isSuccess ? ResponseMessageType.success : ResponseMessageType.error
          });

          if (isSuccess) {
            resetForm();
          }
        } else {
          setResponseMessage({
            message: 'Failed to send message, Please try again',
            type: ResponseMessageType.error
          });
        }

        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setResponseMessage({
          message: 'Failed to send message, Please try again',
          type: ResponseMessageType.error
        });
      });
  };

  const resetForm = (): void => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  const renderErrorMessage = (): JSX.Element => {
    if (!responseMessage) {
      return null;
    }

    return (
      <h1
        className={
          responseMessage.type === ResponseMessageType.error ? 'text-red-500' : 'text-green-500'
        }>
        {responseMessage.message}
      </h1>
    );
  };

  return (
    <section className="container mx-auto p-14 lg:px-20 mt-20">
      <FadeInSection direction="right">
        <SectionTitle title="Contact Me" />
      </FadeInSection>
      <FadeInSection direction="right">
        <p className="text-center px-5 lg:px-60 mt-20">Have a question or want to work together?</p>
      </FadeInSection>
      <FadeInSection direction="right">
        <form className="w-full max-w-lg mx-auto mt-20">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <TextBox
                label="First Name"
                id="first-name"
                type="text"
                placeHolder="First Name"
                onChange={(e) => {
                  setFirstName(e.currentTarget.value);
                }}
                value={firstName}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <TextBox
                label="Last Name"
                id="last-name"
                type="text"
                placeHolder="Last Name"
                onChange={(e) => {
                  setLastName(e.currentTarget.value);
                }}
                value={lastName}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <TextBox
                label="E-mail"
                id="email"
                type="email"
                placeHolder="E-Mail"
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
                value={email}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <TextArea
                label="Message"
                id="message"
                onChange={(e) => {
                  setMessage(e.currentTarget.value);
                }}
                value={message}
              />
            </div>
          </div>
          <Button text="Send" onClick={onSendClicked} isLoading={isLoading} disabled={isLoading} />
          {renderErrorMessage()}
        </form>
      </FadeInSection>
    </section>
  );
};

export default ContactMeSection;
