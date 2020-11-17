import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => {
  const pages = ['New Application', 'Dashboard'];

  const pageLinks = pages.map((page, idx) => {
    const sendTo = '/' + page.toLowerCase().replace(/ /g, '-');

    return (
      <Link to={sendTo} className="link" key={`${page}-${idx}`}>
        {page}
      </Link>
    );
  });

  return <div className="navbar">{pageLinks}</div>;
};

export default Navbar;
