import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "styled-components";
import logoFade from "../assets/logo-fade.png";
import { Fade } from "./Animations";
import diamondIcon from "../assets/diamond.svg";
import windowIcon from "../assets/window.svg";
import mobileIcon from "../assets/mobile.svg";

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

const StyledService = styles.div`
  margin: .5rem;
  width: 13rem;
  height: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: var(--bg-color) dotted 2px;
  border-radius: 25px;
  transition: border-color 400ms ease-in-out , box-shadow 400ms ease-in-out;
  &:hover{
    box-shadow: 1px 1px 2px var(--theme-color);
    border-color: var(--theme-color);
  };

  & > h2, & > p {
    margin-top: 2rem;
  };
`;
const Service = ({ icon, title, body }) => {
  const { ref, inView } = useInView();

  return (
    <Fade in={inView} duration={600}>
      <StyledService ref={ref}>
        <img className="service-icon" width={"50px"} src={icon} />
        <h2>{title}</h2>
        <p>{body}</p>
      </StyledService>
    </Fade>
  );
};

const Services = () => {
  return (
    <StyledServices>
      <div className="services-title">
        <h1>Our Services</h1>
      </div>
      <div className="services-content">
        <Service
          icon={diamondIcon}
          title="Web Solutions"
          body="Structuring softowares that matches your business needs and requirements."
        />
        <Service
          icon={windowIcon}
          title="Landing Pages"
          body="Create landing for your business and Products."
        />

        <Service
          icon={mobileIcon}
          title="Mobile Friendly"
          body="All websites are fully responsive with all devices and screens."
        />
      </div>
    </StyledServices>
  );
};

export default Services;
