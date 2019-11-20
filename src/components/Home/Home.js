import React, { Fragment } from 'react';

import Hero from './Hero/Hero';
import Services from './Services/Services';
import DisplayJob from './DisplayJob/DisplayJob';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Services />
      <DisplayJob />
    </Fragment>
  );
};

export default Home;
