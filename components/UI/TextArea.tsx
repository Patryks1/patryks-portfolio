import React from 'react';

interface ITextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label: string;
  id: string;
  placeHolder?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea = (props: ITextAreaProps): JSX.Element => {
  const { label, id, placeHolder, className, onChange, ...rest } = props;
  return (
    <>
      <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        {...rest}
        onChange={onChange}
        placeholder={placeHolder}
        className={`resize-y appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 hover:opacity-90 ${className}`}
        id={id}></textarea>
    </>
  );
};

export default TextArea;
