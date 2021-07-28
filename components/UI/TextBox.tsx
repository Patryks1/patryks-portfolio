import React from 'react';

interface ITextBoxProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  id: string;
  type: 'text' | 'password' | 'email';
  placeHolder?: string;
  className?: string;
}

const TextBox = (props: ITextBoxProps): JSX.Element => {
  const { label, id, placeHolder, className, type, ...rest } = props;
  return (
    <>
      <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        {...rest}
        className={`appearance-none block w-full bg-gray-200 border-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-black hover:opacity-90 ${className}`}
        id={id}
        type={type}
        placeholder={placeHolder}
      />
    </>
  );
};

export default TextBox;
