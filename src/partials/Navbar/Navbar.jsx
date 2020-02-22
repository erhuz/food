import React from 'react';
import { Nav } from "grommet";
import {
  Home as HomeIcon,
  ChatOption as ChatOptionIcon,
  Notification as NotificationIcon,
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


  return (
    <>
      <Nav style={navStyles} direction="row" justify="around" background="brand" pad="medium">
        <Link to='/test'>
          <HomeIcon />
        </Link>
        <Link to='/test'>
          <NotificationIcon />
        </Link>
        <Link to='/test'>
          <ChatOptionIcon />
        </Link>
      </Nav>
      <div style={marginStyles}></div>
    </>
  );
}

export default Navbar;