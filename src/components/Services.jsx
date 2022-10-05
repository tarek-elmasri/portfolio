import React from "react";
import styles from "styled-components";
import logoFade from "../assets/logo-fade.png";

const StyledServices = styles.section`
  margin-top: 5rem;

  .services-title{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    text-align:center;

    & > h1 {
      padding: 1rem 2rem;
      background-image: url(${logoFade});
      background-size: 20%;
      background-repeat: no-repeat;
    };
  };

  .services-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  };

`;

const Services = () => {
  return (
    <StyledServices>
      <div className="services-title">
        <h1>Our Services</h1>
      </div>
      <div className="services-content">
        <div></div>
        <div>Service Two</div>
        <div>Service Three</div>
      </div>
    </StyledServices>
  );
};

export default Services;
