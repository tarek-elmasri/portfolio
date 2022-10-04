import React from "react";
import styles from "styled-components";
import logo from "../assets/logo-light.png";
import { Link } from "react-scroll";
import globalVariables from "../assets/globalValues";

const Wrapper = styles.nav`
  position: sticky;
  top: 0;
  left: 0;
  padding-right: var(--container-padding);
  padding-left: var(--container-padding);
  padding-top: .75rem;
  padding-bottom: .75rem;
  box-shadow: 0px 4px 4px rgba(254, 176, 0, 0.2);
  opacity: .8;
  display: flex;
  align-items: center;
  justify-content: space-between;


  .nav-link{
    margin: 0 1.5rem;
    cursor: pointer;
  };

  .line{
    height: 5px;
    width: 18px;
    margin-top: .5rem;
    background-color: var(--theme-color);
  };
`;
const Navbar = () => {
  const NavLink = ({ title, target }) => (
    <div>
      <Link
        className="nav-link"
        activeClass="active"
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
      </Link>
      <div className="line" />
    </div>
  );
  return (
    <Wrapper>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div style={{ display: "flex" }}>
        <NavLink target="#" title="About Us" />
        <NavLink target="#" title="Skills" />
        <NavLink target="#" title="Projects" />
        <NavLink target="#" title="Hire Us" />
      </div>
    </Wrapper>
  );
};

export default Navbar;
