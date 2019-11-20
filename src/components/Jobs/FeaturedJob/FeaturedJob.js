import React, { Component } from 'react';
import styled from 'styled-components';
import FeaturedJobItem from './FeaturedJobItem/FeaturedJobItem';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Styles = styled.div``;

class FeaturedJob extends Component {
  render() {
    return (
      <Styles>
        <div>
          <OwlCarousel className="owl-theme" items={1} loop margin={10} nav>
            {this.props.jobs.map((job) => (
              <div className="item" key={job.id}>
                <FeaturedJobItem key={job.id} job={job} />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </Styles>
    );
  }
}

export default FeaturedJob;
