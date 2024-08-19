import React from 'react';
import Navbar from '../components/Navbar';
import logo from '../assets/react.svg';

const NavbarContainer = () => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Education', href: '/education' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact Me', href: '/contact' },
  ];

  return <Navbar logo={logo} links={links} />;
};

export default NavbarContainer;
