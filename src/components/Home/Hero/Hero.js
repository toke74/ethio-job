import React from 'react';
import styled from 'styled-components';

import HeroImage from '../../../assets/heroImage.jpg';
import SearchTab from '../../Search/SearchTab/SearchTab';

const Styles = styled.div`
  .hero {
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${HeroImage}) center/cover no-repeat fixed;
  }
  .banner-subtitle {
    color: #fff;
    margin-top: 60px !important;
    animation: slideFromRight 5s ease-in-out 1;
    font-size: 1.7rem;
    font-family: 'Grand Hotel', cursive;
  }

  .banner-title {
    color: #fff;
    animation: slideFromLeft 5s ease-in-out 1;
    font-size: 2.2rem;
  }

  @keyframes slideFromRight {
    0% {
      transform: translateX(1000px);
    }
    50% {
      transform: translateX(-200px);
    }
    75% {
      transform: translateX(50px);
    }

    100% {
      transform: translateX(0px);
    }
  }
  @keyframes slideFromLeft {
    0% {
      transform: translateX(-1000px);
    }
    50% {
      transform: translateX(200px);
    }
    75% {
      transform: translateX(-50px);
    }

    100% {
      transform: translateX(0px);
    }
  }
  .search-tab {
    margin-top: 45px !important;
    margin-right: 90px !important;
    margin-left: 120px !important;
  }
  @media (max-width: 992px) {
    .banner-subtitle {
      font-size: 1.4rem;
      padding-top: 55px !important;
    }
    .banner-title {
      font-size: 1.6rem;
    }

    .search-tab {
      margin-right: 20px !important;
      margin-left: 30px !important;
    }
  }
`;
const Hero = () => {
  return (
    <Styles>
      <div className="hero">
        <p className="banner-subtitle pt-4 text-center">
          We have <span className="number">24,500</span> great job offers you
          deserve!
        </p>
        <h1 className="banner-title pt-2  text-center  ">
          Largets Job Site In The Country
        </h1>
        <div className="search-tab">
          <SearchTab />
        </div>
      </div>
    </Styles>
  );
};

export default Hero;
