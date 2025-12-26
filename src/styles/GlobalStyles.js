import { createGlobalStyle } from 'styled-components';

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
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
  }

  .wrapper {
    max-width: 100%;
    width: 100vw;
    overflow: hidden;
    background-color: #F1F1F1;
  }

  .container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
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
    background-color: #33399b;
  }

  ._hover02:hover, .header__user:hover {
    color: #33399b;
  }
  ._hover02:hover::after, .header__user:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }

  ._hover03:hover {
    background-color: #33399b;
    color: #FFFFFF;
  }
  ._hover03:hover a {
    color: #FFFFFF;
  }

  .pop-user-set:target,
  .pop-exit:target,
  .pop-new-card:target,
  .pop-browse:target {
    display: block;
  }

  ._orange {
    background-color: #FFE4C2;
    color: #FF6D00;
  }

  ._green {
    background-color: #B4FDD1;
    color: #06B16E;
  }

  ._purple {
    background-color: #E9D4FF;
    color: #9A48F1;
  }

  ._gray {
    background: #94A6BE;
    color: #FFFFFF;
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