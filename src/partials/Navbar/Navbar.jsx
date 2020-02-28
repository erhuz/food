import React from 'react';
import { Nav, Box } from "grommet";
import {
  Home as HomeIcon,
  UserSettings as UserSettingsIcon,
  Cafeteria as CafeteriaIcon,
} from "grommet-icons";
import { Link } from 'react-router-dom';

const navStyles = {
  position: 'fixed',
  width: '100vw',
  bottom: '0',
  zIndex: 9999,
}

const marginStyles = {
  height: 28 + 24,
}

const Navbar = ({items}) => {

  const containerAnimation = {
    "type": "fadeIn",
    "delay": 0,
    "duration": 500,
    "size": "xsmall"
  }

  const navItemPadding = {
    padding: 12,
  }

  return (
    <Box animation={containerAnimation}>
      <Nav style={navStyles} direction="row" justify="around" background="brand" pad="xsmall">
        <Link style={navItemPadding} to='/'>
          <HomeIcon />
        </Link>
        <Link style={navItemPadding} to='/food'>
          <CafeteriaIcon />
        </Link>
        <Link style={navItemPadding} to='/settings'>
          <UserSettingsIcon />
        </Link>
      </Nav>
      <div style={marginStyles}></div>
    </Box>
  );
}

export default Navbar;