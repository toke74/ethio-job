import React, {useState} from 'react';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import styled from 'styled-components';

import JobSearchTab from './JobSearchTab';
import CandidateSearchTab from './CandidateSearchTab';

const Styles = styled.div`
  .nav-tabs {
    border-bottom: none;
  }
  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    color: #fff;
    background-color: #157efb;
    border: none;
  }
  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link {
    color: #495057;
    background-color: #fff;
    border: none;
    cursor: pointer;
  }

  .tab-content {
    background-color: #157efb;
    padding: 25px 35px 35px 25px;
    border-top-right-radius: 0.45rem;
    border-bottom-right-radius: 0.45rem;
    border-bottom-left-radius: 0.25rem;
  }
  @media (max-width: 992px) {
    .form-control {
      margin-bottom: 10px;
    }
    .category {
      margin-bottom: 10px;
    }
  }
`;

const SearchTab = () => {
  const [activeTab, setActiveTab] = useState ('jobSearch');
  return (
    <Styles>
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab === 'jobSearch' ? 'active' : ''}
              onClick={() => setActiveTab ('jobSearch')}
            >
              Find a Job
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === 'searchCandidate' ? 'active' : ''}
              onClick={() => setActiveTab ('searchCandidate')}
            >
              Find a Candidate
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="jobSearch">
            <JobSearchTab />
          </TabPane>
          <TabPane tabId="searchCandidate">

            <CandidateSearchTab />
          </TabPane>
        </TabContent>
      </div>
    </Styles>
  );
};

export default SearchTab;
