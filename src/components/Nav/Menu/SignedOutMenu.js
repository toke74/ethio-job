import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem, Nav, NavLink } from 'reactstrap';

const SignedOutMenu = ({ SignIn }) => {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={Link} to="/login" onClick={SignIn}>
          LogIn
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/register">
          Register
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default SignedOutMenu;
