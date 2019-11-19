import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .services-section {
    min-height: 55vh;
    display: flex;
    align-items: center;
    padding-left: 45px;
    padding-right: 15px;
    /* background-color: rgb(234, 234, 234); */
    background-color: #f9f9f9;
    margin-bottom: 30px;
  }
  .services .icon span {
    font-size: 60px;
    color: #157efb;
  }
  .services .icon i {
    font-size: 60px;
    color: #157efb;
  }
  .services .media-body h3 {
    font-size: 18px !important;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
  }
  .services .media-body p {
    color: rgba(0, 0, 0, 0.4);
  }
  .services .icon {
    line-height: 1.3;
    position: relative;
  }
  @media (max-width: 992px) {
    .services-section {
      padding: 4rem 10px;
    }
  }
`;

class Services extends Component {
  render () {
    return (
      <Styles>
        <div className="services-section border">
          <Container fluid>
            <Row>
              <Col md="3" sm="6">
                <div className="services">
                  <div className="icon">
                    <span className="flaticon-resume" />
                  </div>
                  <div className="media-body">
                    <h3 className="heading mb-3">Search Millions of Jobs</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <div className="services">
                  <div>
                    <div className="icon">
                      <span className="flaticon-collaboration" />
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">Easy To Manage Jobs</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <div className="services">
                  <div>
                    <div className="icon">
                      <span className="flaticon-promotions" />
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">Top Careers</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="3" sm="6">
                <div className="services">
                  <div>
                    <div className="icon">
                      <span className="flaticon-employee" />
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">Search Expert Candidates</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Styles>
    );
  }
}

export default Services;
