import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  className: string;
  metastring: string;
};

const RE = /{([\d,-]+)}/;

const calculateLinesToHighlight = (meta) => {
  if (!RE.test(meta)) {
    return () => false;
  }

  const lineNumbers = RE.exec(meta)[1]
    .split(`,`)
    .map((v) => v.split(`-`).map((x) => parseInt(x, 10)));

  return (index) => {
    const lineNumber = index + 1;
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    );
    return inRange;
  };
};

const CodeBlock = (props: Props): JSX.Element => {
  const { children, className, metastring } = props;
  console.log(props);
  const language = className?.replace(/language-/, '');
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

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
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });

              if (shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} bg-blue-500`;
              }

              return (
                <div key={i} {...lineProps}>
                  <span className="line-number-style">{i + 1} | </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </pre>
        </>
      )}
    </Highlight>
  );
};

export default CodeBlock;
