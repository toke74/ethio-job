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
import TitleImage from '../../../assets/heroImage.jpg';
import CandidateRegister from './CandidateRegister';
import EmployeerRegister from './EmployeerRegister';

const Register = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Styles>
      <div>
        {/* <Row>
          <Col className="register-title d-flex align-items-center">
            <h3>Sign Up With Ethio Job </h3>
          </Col>
        </Row> */}
        <Row>
          <Col className="register">
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
                <CandidateRegister />
              </TabPane>
              <TabPane tabId="2">
                <EmployeerRegister />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    </Styles>
  );
};

export default Register;

const Styles = styled.div`
  .register {
    margin: 20px 200px 60px 200px;
  }
  /* .register-title {
    min-height: 15vh;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${TitleImage}) center/cover no-repeat fixed;
  } */

  .register-login-title {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #797979;
  }
  .register-title h3 {
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

  .register-form .form-register-title {
    padding-left: 135px;
    margin-top: 25px;
    margin-bottom: 10px;
    /* color: #797979;
    color: #157efb; */
    color: #cc3f24;
  }

  .register-form .form,
  .social-register {
    padding-left: 120px;
  }

  .col-facebook,
  .col-google {
    margin-top: 30px;
    margin-bottom: 15px;
  }

  .social-register .social-btn:hover,
  .social-register .social-btn:active {
    border: none;
  }
  .social-register .facebook-btn {
    background: #415dae;
    color: #fff;
    border: none;
    font-size: 0.9rem;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .social-register .facebook-btn:hover,
  .social-register .facebook-btn:active,
  .social-register .facebook-btn:focus {
    border: none;
    outline: none;
  }
  .social-register .google-btn {
    outline: none;
    background: #cc3f24;
    color: #fff;
    font-size: 0.85rem;
    border: none;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media (max-width: 992px) {
    .register {
      margin: 45px;
    }
  }
  @media (max-width: 767px) {
    .register {
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
    .register-title h3 {
      font: 700 Normal 20px/25px "Raleway", sans-serif;
      margin-left: 20px;
    }

    .register-form .form-register-title {
      padding-left: 20px;
    }

    .register-form .form,
    .social-register {
      padding-left: 10px;
    }
  }
`;
