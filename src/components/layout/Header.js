import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>tap|QA</h1>
      <Link style={linkStyle} to='/'>
        Roster
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to='/clients'>
        Client List
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to='/consultants'>
        Consultants
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to='/skills'>
        Skills
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to='/about'>
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#5FDC05',
  color: '#FFFFFF',
  textAlign: 'left',
  padding: '9px',
};

const linkStyle = {
  color: '#FFFFFF',
  textDecoration: 'none',
};

export default Header;
