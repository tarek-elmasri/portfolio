import React from "react";
import styles from "styled-components";

const StyledServices = styles.section`
  margin-top: 3rem;

  .services-title{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
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
        <div>Service One</div>
        <div>Service Two</div>
        <div>Service Three</div>
      </div>
    </StyledServices>
  );
};

export default Services;
