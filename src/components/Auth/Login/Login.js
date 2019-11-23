import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import CandidateLogin from './CandidateLogin';
import EmployeerLogin from './EmployeerLogin';

const Login = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Styles>
      <div>
        <Row>
          <Col className="login">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => {
                    toggle('1');
                  }}
                >
                  Candidate
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => {
                    toggle('2');
                  }}
                >
                  Employeer
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <CandidateLogin />
              </TabPane>
              <TabPane tabId="2">
                <EmployeerLogin />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    </Styles>
  );
};

export default Login;

const Styles = styled.div`
  .login {
    margin: 20px 200px 60px 200px;
  }

  .register-login-title {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #797979;
  }
  .login-title h3 {
    font: 700 Normal 25px/35px "Raleway", sans-serif;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: #ffffff;
    margin-left: 30px;
  }

  .tab-content {
    border-bottom: 1px solid #dee2e6;
    border-left: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
    border-top-right-radius: 0.45rem;
    border-bottom-right-radius: 0.45rem;
    border-bottom-left-radius: 0.25rem;
    padding: 15px 30px;
  }

  .login-form .form-login-title {
    padding-left: 130px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #cc3f24;
  }

  .login-form .form,
  .social-login {
    padding-left: 120px;
  }

  .col-facebook,
  .col-google {
    margin-top: 30px;
    margin-bottom: 15px;
  }

  .social-login .social-btn:hover,
  .social-login .social-btn:active {
    border: none;
  }
  .social-login .facebook-btn {
    background: #415dae;
    color: #fff;
    border: none;
    font-size: 0.9rem;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .social-login .facebook-btn:hover,
  .social-login .facebook-btn:active,
  .social-login .facebook-btn:focus {
    border: none;
    outline: none;
  }
  .social-login .google-btn {
    outline: none;
    background: #cc3f24;
    color: #fff;
    font-size: 0.85rem;
    border: none;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media (max-width: 992px) {
    .login {
      margin: 45px;
    }
  }
  @media (max-width: 767px) {
    .login {
      margin: 25px;
    }

    .col-facebook {
      margin-top: 25px;
      margin-bottom: 15px;
    }
    .col-google {
      margin-top: 0;
      margin-bottom: 15px;
    }
    .login-title h3 {
      font: 700 Normal 20px/25px "Raleway", sans-serif;
      margin-left: 20px;
    }

    .login-form .form-login-title {
      padding-left: 0px;
    }

    .login-form .form,
    .social-login {
      padding-left: 10px;
    }
  }
`;
