import { createGlobalStyle } from "styled-components";
import themes from "./ThemeValues";

export const Theme = createGlobalStyle`
  :root{
    ${(props) => `
        --bg-color: ${themes[props.mode].backgroundColor};
        --theme-color: ${themes[props.mode].themeColor};
        --text-color: ${themes[props.mode].textColor};
        --shadow-color: ${themes[props.mode].shadowColor};
      `}

      --container-padding: 2.5rem;
  }
  
  h1{
    color: var(--text-color);
    font-weight: bold;
    font-size: 3em;
  };

  h2{
    color: var(--text-color);
    font-weight: bold;
    font-size: 1.5em;
  };

  p, span{
    color: var(--text-color);
    font-weight: normal;
    font-size: 1em;
  }

 
  h1 , h2 , p {
    margin: 0;
  };
`;
