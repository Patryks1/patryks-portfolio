import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface IButtonProps {
  text: string;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: IButtonProps): JSX.Element => {
  const { text, className, onClick, isLoading, disabled } = props;
  return (
    <button
      className={` bg-secondary-500 hover:opacity-80 float-right focus:outline-none text-white font-bold py-2 px-4 rounded flex ${className} disabled:opacity-50`}
      onClick={onClick}
      type="button"
      disabled={disabled}>
      {isLoading && (
        <FontAwesomeIcon icon={faCircleNotch} className="w-4 h-4 mr-3 mt-1 animate-spin" />
      )}
      {text}
    </button>
  );
};

export default Button;
