import * as React from 'react';

type Props = {
  children: string;
};

const Delete = (props: Props): JSX.Element => {
  const { children } = props;
  return <p className="line-through">{children}</p>;
};

export default Delete;
