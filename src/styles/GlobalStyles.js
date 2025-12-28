import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.textPrimary};
    margin: 0;
    padding: 0;
  }

  .wrapper {
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${theme.colors.bgMain};
    padding: 0;
    margin: 0;
  }

  .container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: ${theme.spacing.container};
    
    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: ${theme.spacing.containerMobile};
    }
  }

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ._hover01:hover {
    background-color: ${theme.colors.primaryHover};
  }

  ._hover02:hover, .header__user:hover {
    color: ${theme.colors.primaryHover};
  }
  ._hover02:hover::after, .header__user:hover::after {
    border-left-color: ${theme.colors.primaryHover};
    border-bottom-color: ${theme.colors.primaryHover};
  }

  ._hover03:hover {
    background-color: ${theme.colors.primaryHover};
    color: ${theme.colors.white};
  }
  ._hover03:hover a {
    color: ${theme.colors.white};
  }

  .pop-user-set:target,
  .pop-exit:target,
  .pop-new-card:target,
  .pop-browse:target {
    display: block;
  }

  ._orange {
    background-color: ${theme.colors.orangeBg};
    color: ${theme.colors.orangeText};
  }

  ._green {
    background-color: ${theme.colors.greenBg};
    color: ${theme.colors.greenText};
  }

  ._purple {
    background-color: ${theme.colors.purpleBg};
    color: ${theme.colors.purpleText};
  }

  ._gray {
    background: ${theme.colors.grayBg};
    color: ${theme.colors.grayText};
  }

  ._active-category {
    opacity: 1 !important;
  }

  ._hide {
    display: none;
  }

  ._dark {
    display: none;
  }
`;