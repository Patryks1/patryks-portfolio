import React from 'react';

export type ListType = 'ul' | 'ol';

type Props = {
  children: string;
  type: ListType;
};

const List = (props: Props): JSX.Element => {
  const { children, type } = props;

  if (type == 'ul') {
    return <ul className="list-inside list-circle mt-1 mb-3">{children}</ul>;
  }

  return <ol className="list-inside list-decimal mt-1 mb-3">{children}</ol>;
};

const ListItem = (props: Props): JSX.Element => {
  const { children } = props;

  return <li>{children}</li>;
};

List.ListItem = ListItem;

export default List;
