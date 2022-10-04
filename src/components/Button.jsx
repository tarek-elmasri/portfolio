import React from "react";
import styles from "styled-components";

const StyledButton = styles.button`
  width: 8rem;
  height: 3rem;
  background-color: var(--theme-color);
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 200ms linear;
  
  > span {
    color: black;
    font-weight: bold;
  };
  &:hover{
    box-shadow: 4px 4px 4px var(--shadow-color);
  };

`;

const Button = (props) => {
  return (
    <StyledButton {...props}>
      <span>{props.children}</span>
    </StyledButton>
  );
};

export default Button;
