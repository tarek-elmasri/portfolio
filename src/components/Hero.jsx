import React, { useCallback, useRef } from "react";
import styles from "styled-components";
import heroImg from "../assets/hero-img.png";
import logoFade from "../assets/logo-fade.png";
import Button from "./Button";
import { useInView } from "react-intersection-observer";

const StyledHero = styles.section`
  padding-top: 3rem;
  
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap-reverse;

  .hero-data{
    max-width: 50%;
    background-image: url(${logoFade});
    background-repeat: no-repeat;
    background-position: right;
    transition: all 400ms linear;

    & > h2, & > p  {
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
    transition: all 400ms linear;

    & > img {
      max-width: 100%;
    };

    &.hero-img-in{
      opacity: 1;
    };
    &.hero-img-out{
      opacity: 0;
    };
  };


`;

const Hero = () => {
  const animationRef = useRef();
  const { ref: inViewRef, inView } = useInView({
    delay: 400,
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
          HTML5, CSS&CSS3, JavaScript/ES6/AJAX, REST API, Git&Github. User
          interface development, responsive web design, engineering
          cross-browser, cross-device, writing high-quality, semantic, testable,
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
