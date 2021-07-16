import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --blue: #5429CC;
    --green: #33cc95;
    --red: #E62E4D;
    --shape: #FFFFFF;
    --title: #363F5F;
    --text: #969CB3;
    --background: #F0F2F5;
  }

  body { 
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea { 
    font: 16px 'Poppins', sans-serif;
  }

  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
