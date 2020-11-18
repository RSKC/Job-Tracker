import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => {
  const pages = ['New Application', 'Dashboard'];

  const pageLinks = pages.map((page, idx) => {
    const sendTo = '/' + page.toLowerCase().replace(/ /g, '-');

    return (
      <NavLink
        to={sendTo}
        className="link"
        activeClassName="active-link"
        key={`${page}-${idx}`}
      >
        {page}
      </NavLink>
    );
  });

  return <div className="navbar">{pageLinks}</div>;
};

export default Navbar;
