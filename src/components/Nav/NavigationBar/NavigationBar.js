import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import styled from 'styled-components';
import SignedOutMenu from '../Menu/SignedOutMenu';
import SignedInMenu from '../Menu/SignedInMenu';

class NavigationBar extends Component {
  state = {
    authenticated: false,
    isOpen: false,
  };
  handleSignIn = () => {
    this.setState (prevState => ({
      authenticated: !prevState.authenticated,
    }));
  };
  handleSignOut = () => {
    this.setState (prevState => ({
      authenticated: !prevState.authenticated,
    }));
  };

  toggle = () => {
    this.setState (prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render () {
    const {authenticated, isOpen} = this.state;
    return (
      <Styles>
        <div>
          <Navbar fixed="top" color="light" light expand="md">
            <NavbarBrand tag={Link} to="/">EthioJob</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    For Candidates
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag={Link} to="/find-job">
                      Browse Jobs
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/cad-dashboard">
                      Candidate Dashboard
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/job-alert">
                      Job Alerts
                    </DropdownItem>
                    {/* <DropdownItem divider /> */}
                    <DropdownItem tag={Link} to="/my-booknmark">
                      My Bookmarks
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    For Employeer
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag={Link} to="/pricing">
                      Pricing
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/find-candidate">
                      Browse Candidates
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/new-job">
                      Post a Job
                    </DropdownItem>

                    <DropdownItem tag={Link} to="/emp-dashboard">
                      Employeer Dashboard
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink tag={Link} to="/about">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/blog">
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/contact">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>

              {authenticated
                ? <SignedInMenu SignOut={this.handleSignOut} />
                : <SignedOutMenu SignIn={this.handleSignIn} />}

            </Collapse>
          </Navbar>
        </div>
      </Styles>
    );
  }
}

export default NavigationBar;

const Styles = styled.div`
  .navbar {
    padding-top: 15px;
    padding-bottom: 15px;
    box-shadow: 0 0px 5px #777;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    padding: 5px 8px;
    color: #505763;
    font-size: 0.85rem;
    text-decoration: none;
    &:hover {
      color: #000;
      opacity: 0.6;
      padding: 5px 8px;
      background: #dddddc;
    }
    &:focus {
      color: #000;
      opacity: 0.6;
      padding: 5px 15px;
      background: #dddddc;
    }
  }
 
  @media (max-width: 767px) {
    .navbar {
      padding: 10px 30px;
    }
    .navbar-nav .nav-link {
      &:hover {
        background: none;
      }
    }

    .dropdown-item.nav-item a {
      &:hover {
        background: none;
      }
    }

  }
`;
