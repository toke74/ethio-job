import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import {
  faMapMarkerAlt,
  faSuitcase,
  faMoneyBillAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { jobTypeColors } from '../../../common/util/UtilFile';

const FeaturedJobItem = ({ job }) => {
  const bcolors = jobTypeColors(job);
  return (
    <Styles>
      <div className="featured-card border rounded p-4">
        <p className="featured-job-title">{job.title}</p>
        <p>
          <span
            className={`border border-${bcolors} rounded p-1 px-2 text-${bcolors}`}
          >
            {job.jobType}
          </span>
        </p>
        <p className="featured-job-icon">
          <span className="d-block mb-1">
            <FontAwesomeIcon icon={faSuitcase} />
            {job.company}
          </span>
          <span className="d-block mb-1">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {job.location}
          </span>
          <span className="d-block mb-2">
            <FontAwesomeIcon icon={faMoneyBillAlt} /> ${job.salaryEstimate}
          </span>
        </p>
        <p className="mb-2">{job.description}</p>
        <p className="d-flex justify-content-end mt-5">
          <Button className="bg-success border-0 py-2 px-4" type="submit">
            View Detial
          </Button>
        </p>
      </div>
    </Styles>
  );
};

export default FeaturedJobItem;

const Styles = styled.div`
  .featured-card {
    min-height: 70vh;
    background-color: #f9f9f9;
  }
  .featured-job-title {
    color: #555;
    font-size: 1.15rem;
    text-align: center;
    opacity: 0.9;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .featured-job-title:hover {
    color: #157efb;
    text-decoration: underline;
  }
  .svg-inline--fa {
    color: #797979;
    margin-right: 5px;
  }
  .featured-job-icon span {
    color: #797979;
    font-size: 0.8rem;
  }
`;
