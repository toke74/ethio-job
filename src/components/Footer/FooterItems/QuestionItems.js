import React from 'react';

const QuestionItems = () => {
  return (
    <div className="footer-widget mb-4">
      <h2 className="heading-2">Have a Questions?</h2>
      <div className="block-23 mb-3">
        <ul className="list-unstyled">
          <li>
            <span className="icon icon-map-marker" />

            <span className="text">
              203 Fake St. Mountain View, San Francisco, California, USA
            </span>
          </li>
          <li className="mt-2">
            <a href="#f">
              <span className="icon icon-phone" />
              <span className="text">+2 392 3929 210</span>
            </a>
          </li>
          <li>
            <a href="#f">
              <span className="icon icon-envelope" />
              <span className="text">info@yourdomain.com</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuestionItems;
