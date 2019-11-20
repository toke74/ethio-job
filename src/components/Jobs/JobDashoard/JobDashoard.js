import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';

import TitleImage from '../../../assets/heroImage.jpg';

import JobSearch from '../../Search/JobSearch/JobSearch';
import JobList from '../JobList/JobList';
import sampleJob from '../../../data/sampleJob';

const Styles = styled.div`
  .job-dashboard-title {
    min-height: 25vh;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${TitleImage}) center/cover no-repeat fixed;
  }

  .job-dashboard-title h3 {
    font: 700 Normal 25px/35px "Raleway", sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #ffffff;
    
  }
  @media (max-width: 767px) {
    .job-dashboard-title h3 {
      font: 700 Normal 20px/25px "Raleway", sans-serif;
      
    }
  }
`;

class JobDashoard extends Component {
  render () {
    const jobs = sampleJob;
    return (
      <Fragment>
        <Styles>
          <Row className="mb-4">
            <Col className="job-dashboard-title d-flex justify-content-center  align-items-center">
              <h3>
                We have 24,500 great job offers you deserve!

              </h3>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col className="mt-3" md="4">
                <JobSearch />

              </Col>
              <Col md="8">
                <JobList jobs={jobs} />
              </Col>
            </Row>
          </Container>
        </Styles>
      </Fragment>
    );
  }
}

export default JobDashoard;