import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  className: string;
};

const CodeBlock = (props: Props): JSX.Element => {
  const { children, className } = props;
  const language = className?.replace(/language-/, '');

  return (
    <Highlight {...defaultProps} code={children as string} language={language as Language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          {language && (
            <h1 className="w-2/12 sm:w-1/12 text-center text-white bg-gray-700 rounded-lg py-1 m-1 hover:opacity-80 cursor-pointer float-right">
              {language}
            </h1>
          )}
          <pre className={`p-5 rounded-lg my-5 ${className}`} style={{ ...style }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </>
      )}
    </Highlight>
  );
};

export default CodeBlock;
