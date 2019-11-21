import React from 'react';

const AboutItems = () => {
  return (
    <div className="footer-widget mb-4">
      <h2 className="heading-2">About</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <ul className="footer-social list-unstyled float-md-left float-lft mt-3">
        <li>
          <a href="/twitter" className="py-2 d-block">
            <span className="icon-twitter" />
          </a>
        </li>
        <li>
          <a href="/facebook" className="py-2 d-block">
            <span className="icon-facebook" />
          </a>
        </li>
        <li>
          <a href="/twitter" className="py-2 d-block">
            <span className="icon-instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutItems;
