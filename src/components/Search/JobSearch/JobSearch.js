import React, {Component} from 'react';
import styled from 'styled-components';

import KeywordSearch from './JobSearchItem/KeywordSearch';
import JobLocation from './JobSearchItem/JobLocation';
import JobCategory from './JobSearchItem/JobCategory';
import JobType from './JobSearchItem/JobType';
import ExperienceLevel from './JobSearchItem/ExperienceLevel';

const Styles = styled.div`
  input::placeholder {
    color: #c3c3c3;
    /* opacity: 0.9; */
  }

  .title {
    font-size: 1.51em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }

  .job-search-item,
  .job-location-item,
  .job-category-item,
  .job-experience-item {
    background-color: #f9f9f9;
    border-style:solid;
    border-color:#e5e5e5;
  }
`;
class JobSearch extends Component {
  render () {
    return (
      <Styles>
        <div>
          <KeywordSearch />
          <JobLocation />
          <JobCategory />
          <JobType />
          <ExperienceLevel />
        </div>
      </Styles>
    );
  }
}

export default JobSearch;
