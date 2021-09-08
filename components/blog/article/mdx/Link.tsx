import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = {
  href: string;
  children: string;
};

const Link = (props: Props): JSX.Element => {
  const { href, children } = props;

  return (
    <a href={href}>
      <FontAwesomeIcon icon={faLink} /> {children}
    </a>
  );
};

export default Link;
