import React, { useCallback, useRef } from "react";
import styles from "styled-components";
import heroImg from "../assets/hero-img.png";
import logoFade from "../assets/logo-fade.png";
import Button from "./Button";
import { useInView } from "react-intersection-observer";
import globalVariables from "../assets/globalValues";

const StyledHero = styles.section`
  margin-top: 3rem;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  
  .hero-data{
    order: 2;
    background-image: url(${logoFade});
    background-repeat: no-repeat;
    background-position: right;
    transition: all 400ms linear;
    
    & > h1, h2, & > p  {
      margin-top: 1rem;
    };

    & > button {
      margin-top: 3rem;
    };
    
    & > h1{
      color: var(--theme-color);
    };
    
    &.hero-data-in {
      opacity: 1;
      transform: translateX(0);
    };
    
    &.hero-data-out{
      opacity: 0;
      transform: translateX(-100%);
    };
  };
  
  .hero-img{
    margin: 2rem;
    order: 1;
    transition: all 400ms linear;
    & > img {
      width: 100%;
    };
    
    &.hero-img-in{
      opacity: 1;
    };
    &.hero-img-out{
      opacity: 0;
    };
  };
  
  
  @media (min-width: ${globalVariables.screens.md}){
    flex-direction: row;
    .hero-data{
     order: 1;
    };
    .hero-img{
      order: 2;
    };
  };
  `;

const Hero = () => {
  const animationRef = useRef();
  const { ref: inViewRef, inView } = useInView({
    delay: 400,
    triggerOnce: false,
  });

  const setAnimationRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      animationRef.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  return (
    <StyledHero>
      <div
        ref={setAnimationRefs}
        className={`hero-data ${inView ? "hero-data-in" : "hero-data-out"}`}
      >
        <h1>Tarek El-Masri</h1>
        <h2>A Profissional Freelancer Web Developer</h2>
        <p>
          I'm a Front-end developer with 1+ years of experience in React JS,
          <br />
          HTML5, CSS&CSS3, JavaScript/ES6/AJAX, REST API, Git&Github. User
          <br />
          interface development, responsive web design, engineering
          <br />
          cross-browser, cross-device, writing high-quality, semantic, testable,
          <br />
          maintainable, and well-documented code
        </p>
        <Button>Hire Us</Button>
      </div>

      <div
        ref={setAnimationRefs}
        className={`hero-img ${inView ? "hero-img-in" : "hero-img-out"}`}
      >
        <img src={heroImg} alt="hero-img" />
      </div>
    </StyledHero>
  );
};

export default Hero;
