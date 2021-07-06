import React from 'react';
import { INavButton } from '../../interfaces';
import NavButton from './NavButton';

interface IProps {
  navButtons: INavButton[];
}

const NavBar = (props: IProps): JSX.Element => {
  const { navButtons } = props;

  return (
    <div className="flex bg-gray-600 text-white font-semibold">
      {navButtons.map((button) => (
        <NavButton key={button.path} path={button.path} label={button.label} />
      ))}
    </div>
  );
};

export default NavBar;
