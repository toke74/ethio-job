import React from 'react';
import styled from 'styled-components';
import { Container, Media, Row, Col, Button } from 'reactstrap';
import {
  faMapMarkerAlt,
  faSuitcase,
  faMoneyBillAlt,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoImage from '../../../../assets/image/faceboo.png';
import { jobTypeColors } from '../../../common/util/UtilFile';

const JobListItem = ({ job }) => {
  const bcolors = jobTypeColors(job);
  return (
    <Styles>
      <div className="single-job  rounded p-3">
        <Container fluid>
          <Row className="pt-2">
            <Col md="2" sm="2" className="logo-panel">
              <Media
                object
                src={LogoImage}
                style={{ width: '70px', paddingBottom: '10px' }}
                alt="logo image"
              />
            </Col>
            <Col md="8" sm="10">
              <Row>
                <Col sm="12">
                  <p
                    onClick={(e) => console.log('Clicked')}
                    className="job-title"
                  >
                    {job.title}
                  </p>
                </Col>
                <Col sm="12">
                  <p className="job-content-1">
                    <FontAwesomeIcon icon={faSuitcase} />
                    <span>{job.company}, </span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span> {job.location},</span>
                    <FontAwesomeIcon icon={faMoneyBillAlt} />
                    <span>${job.salaryEstimate}</span>
                  </p>
                  <p className="job-content-2">
                    <span
                      className={` category text-${bcolors} border rounded border-${bcolors}`}
                    >
                      {job.jobType}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faClock} /> Deadline:{' '}
                      <span className="text-danger">{job.deadLine}</span>{' '}
                    </span>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className="apply-time" md="2" sm="12">
              <Button color="primary" size="sm" type="submit">
                Apply
              </Button>
              <p className="posted-time text-warning">5 min ago</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Styles>
  );
};

export default JobListItem;

const Styles = styled.div`
  .single-job {
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: #f9f9f9;
    border-style: solid;
    border-color: #e5e5e5;
  }

  .single-job:hover {
    box-shadow: -1px 0px 5px 0px rgba(21, 126, 251, 0.84);
  }

  .job-title {
    color: #555;
    font-size: 1.1rem;
    opacity: 0.9;
    cursor: pointer;
  }
  .job-title:hover {
    color: #157efb;
    text-decoration: underline;
  }
  .svg-inline--fa {
    color: #797979;
    margin-right: 5px;
  }

  .job-content-1 span,
  .job-content-2 span {
    color: #797979;
    font-size: 0.8rem;
    margin-right: 40px;
  }
  .category {
    font-size: 0.8rem;
    padding: 2px 15px;
    text-align: center;
  }
  .posted-time {
    padding-top: 15px;
  }
  @media (max-width: 767px) {
    .job-content-1 span,
    .job-content-2 span {
      font-size: 0.75rem;
      margin-right: 25px;
    }
    .job-content-2 {
      display: flex;
      justify-content: space-between;
    }
    .category {
      color: #157efb !important;
      font-size: 0.8rem;
      padding: 2px 10px;
    }
    .apply-time {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .apply-time button {
      padding: 5px 20px 7px !important;
    }
  }
`;
