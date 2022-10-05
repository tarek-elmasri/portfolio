import React, { useState } from "react";
import styles from "styled-components";
import logo from "../assets/logo-light.png";
import { Link } from "react-scroll";
import Button from "./Button";
import globalVariables from "../assets/globalValues";

const NavLink = ({ title, target, active, as }) =>
  as === "button" ? (
    <Button>{title}</Button>
  ) : (
    <div>
      <Link
        className="nav-link"
        to={target}
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={50}
        duration={500}
        delay={1000}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
      >
        <span>{title}</span>
        <div className={`line ${active ? "active" : "inactive"}`} />
      </Link>
    </div>
  );

const Wrapper = styles.nav`
position: sticky;
top: 0;
left: 0;
z-index: 1000;
padding-right: var(--container-padding);
padding-left: var(--container-padding);
padding-top: 2rem;
padding-bottom: 2rem;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
background-color: var(--bg-color);
opacity: .9;
display: flex;
align-items: center;
justify-content: space-between;


.nav-link{
  position: relative;
  margin: 0 1.5rem;
  cursor: pointer;
  display: block;

  > span{
    font-weight: bold;
  };

  .line{
    position: absolute;
    bottom: -15px;
    height: 5px;
    width: 20px;
    background-color: var(--bg-color);
    transition: background-color 400ms linear;

    &.active{
      background-color: var(--theme-color);
    };
  };
};

.nav-links{
  display: none;
  @media (min-width: ${globalVariables.screens.md}){
    display: flex;
    align-items: center;
  };

};

  .nav-bar-icon{
    @media (min-width: ${globalVariables.screens.md}){
      display: none;
      };
    };
  }
`;
const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <NavLink target="#" title="About Us" active={true} />
        <NavLink target="#" title="Skills" />
        <NavLink target="#" title="Projects" />
        <NavLink as={"button"} target="#" title="Hire Us" />
      </div>
      <div className="nav-bar-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>
      </div>
    </Wrapper>
  );
};

export default Navbar;
