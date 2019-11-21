import React from 'react';
import { Link } from 'react-router-dom';

const CandidatesItems = () => {
  return (
    <div className="footer-widget mb-4 ml-md-4">
      <h2 className="heading-2">Canditates</h2>
      <ul className="list-unstyled">
        <li>
          <Link to="/register" className="py-2 d-block">
            Register
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="py-2 d-block">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/find-job" className="py-2 d-block">
            Browse Job
          </Link>
        </li>
        <li>
          <Link to="/find-employeer" className="py-2 d-block">
            Search Employeers
          </Link>
        </li>
        <li>
          <Link to="/my-bookmark" className="py-2 d-block">
            My Bookmark
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CandidatesItems;
