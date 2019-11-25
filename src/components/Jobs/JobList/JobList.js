import React, { Fragment } from 'react';
import JobListItem from './JobListItem/JobListItem';

const JobList = ({ jobs }) => {
  return (
    <Fragment>
      {jobs && jobs.map((job) => <JobListItem key={job.id} jobs={job} />)}
    </Fragment>
  );
};

export default JobList;
