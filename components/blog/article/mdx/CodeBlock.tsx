import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  className: string;
  metastring: string;
};

const RE = /{([\d,_]+)}/;

const calculateLinesToHighlight = (meta: string): ((index: number) => boolean) => {
  if (!RE.test(meta)) {
    return () => false;
  }

  const lineNumbers = RE.exec(meta)[1]
    .split(`,`)
    .map((v) => v.split(`_`).map((x) => parseInt(x, 10)));

  return (index) => {
    const lineNumber = index + 1;
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    );

    return inRange;
  };
};

const CodeBlock = (props: Props): JSX.Element => {
  const { children, className } = props;
  const codeProps = className?.split('-');
  const language = codeProps && codeProps[1];
  const displayLineNumbers = codeProps && codeProps[2] === 'true';
  const shouldHighlightLine = calculateLinesToHighlight(codeProps && codeProps[3]);

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

              // TODO: Work out if the index is in the middle
              if (shouldHighlightLine(i)) {
                const isTop = !shouldHighlightLine(i - 1);
                const isBottom = !shouldHighlightLine(i + 1);

                let roundness;

                if (isTop) {
                  roundness = 'rounded-t-md';
                }

                if (isBottom) {
                  roundness = 'rounded-b-md';
                }

                if (isTop && isBottom) {
                  roundness = 'rounded-md';
                }

                lineProps.className = `${lineProps.className} bg-gray-700 px-2 ${roundness}`;
              }

              return (
                <div key={i} {...lineProps}>
                  {displayLineNumbers && <span>{i + 1} | </span>}
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
