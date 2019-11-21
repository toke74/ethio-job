import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import JobList from '../../Jobs/JobList/JobList';
import FeaturedJob from '../../Jobs/FeaturedJob/FeaturedJob';

const DisplayJob = () => {
  const jobs = useSelector (state => state.job.jobs);

  return (
    <Styles>
      <div className="recent-featured-job border-0">
        <Container fluid>
          <Row>
            <Col md="8">
              <div className="recent-job-title">
                <h3>Recent Jobs</h3>
              </div>
              <JobList jobs={jobs} />

              <div className="load-more">
                <Button color="primary" className="py-2 px-3" type="submit">
                  <FontAwesomeIcon icon={faPlusCircle} />
                  Show More Jobs
                </Button>
              </div>
            </Col>
            <Col md="4">
              <div className="featured-job-title">
                <h3>Featured Job</h3>
              </div>
              <FeaturedJob jobs={jobs} />
            </Col>
          </Row>
        </Container>
      </div>
    </Styles>
  );
};

export default DisplayJob;

const Styles = styled.div`
  .recent-featured-job {
    padding-left: 25px;
    padding-right: 15px;
  }
  .recent-job-title h3 {
    text-align: center;
    margin-bottom: 40px;
    margin-top: 30px;
    color: #797979;
  }
  .load-more {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .load-more button {
    padding-left: 20px;
    padding-right: 20px;
  }
  .svg-inline--fa {
    margin-right: 5px;
  }

  .featured-job-title h3 {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
    color: #797979;
  }

  @media (max-width: 767px) {
    .recent-featured-job {
      padding-left: 10px;
      padding-right: 5px;
    }
  }
`;
