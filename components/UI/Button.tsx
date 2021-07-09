import React from 'react';

interface IButtonProps {
  text: string;
  className?: string;
}

const Button = (props: IButtonProps): JSX.Element => {
  const { text, className } = props;
  return (
    <>
      <button
        className={`shadow bg-pink-500 hover:bg-pink-400 float-right focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ${className}`}
        type="button">
        {text}
      </button>
    </>
  );
};

export default Button;
