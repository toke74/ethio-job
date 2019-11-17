import React from 'react';
import {Link} from 'react-router-dom';
import {NavItem, Nav, NavLink} from 'reactstrap';

const SignedInMenu = ({SignOut}) => {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={Link} to="/user">
          User avatar
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink style={{cursor: 'pointer'}} onClick={SignOut}>
          LogOut
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default SignedInMenu;
