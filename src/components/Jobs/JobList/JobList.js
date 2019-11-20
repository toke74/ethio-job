import React, { Component, Fragment } from 'react';
import JobListItem from './JobListItem/JobListItem';
class JobList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.jobs.map((job) => <JobListItem key={job.id} job={job} />)}
      </Fragment>
    );
  }
}

export default JobList;
