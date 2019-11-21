import React from 'react';
import { Link } from 'react-router-dom';

const EmployeerItems = () => {
  return (
    <div className="footer-widget  mb-5">
      <h2 className="heading-2">Companies</h2>
      <ul className="list-unstyled">
        <li>
          <Link to="/register" className="py-2 d-block">
            Register
          </Link>
        </li>
        <li>
          <Link to="/find-candidates" className="py-2 d-block">
            Browse Candidate
          </Link>
        </li>
        <li>
          <Link className="py-2 d-block" to="/post-job">
            Post a Job
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="py-2 d-block">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="blog" className="py-2 d-block">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default EmployeerItems;
