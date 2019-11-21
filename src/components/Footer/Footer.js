import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import AboutItems from './FooterItems/AboutItems';
import EmployeerItems from './FooterItems/EmployeerItems';
import CandidatesItems from './FooterItems/CandidatesItems';
import QuestionItems from './FooterItems/QuestionItems';

const Styles = styled.div`
  .footer-section {
    font-size: 16px;
    background: #222831;
    padding: 5em 0 2em;
  }

  .footer-widget h2 {
    font-weight: normal;
    color: #fff;
    margin-bottom: 26px;
    font-size: 20px;
    font-weight: 400;
  }
  .footer-section p {
    color: rgba(255, 255, 255, 0.7);
  }

  .footer-section .footer-widget ul li a {
    color: rgba(255, 255, 255, 0.4);
  }

  .footer-section a:hover {
    color: #fff;
    text-decoration: none;
    opacity: 0.5;
  }
  .footer-section a {
    color: rgba(255, 255, 255, 0.7);
  }
  .footer-section .footer-widget ul li a span {
    color: #fff;
  }

  .footer-social li a span {
    font-size: 26px;
    margin: 10px;
  }
  .footer-social {
    display: flex;
  }
  .block-23 ul li .icon {
    width: 40px;
    font-size: 18px;
    padding-top: 2px;
    color: white;
  }

  .block-23 ul li .icon,
  .block-23 ul li .text {
    display: table-cell;
    vertical-align: top;
  }

  .block-23 ul li span {
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 992px) {
    .footer-section {
      padding: 2rem 1rem;
    }

    .footer-widget {
      margin-top: 39px;
    }
  }
`;
class Footer extends Component {
  render() {
    return (
      <Styles>
        <footer className="footer-section">
          <Container>
            <Row className="mb-4">
              <Col md>
                <AboutItems />
              </Col>
              <Col md>
                <EmployeerItems />
              </Col>
              <Col md>
                <CandidatesItems />
              </Col>
              <Col md>
                <QuestionItems />
              </Col>
            </Row>
          </Container>
        </footer>
      </Styles>
    );
  }
}

export default Footer;
