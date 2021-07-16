import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;

  padding: 2rem 1rem 10rem 1rem;

  button {
    border: 0;
    border-radius: 0.25rem;
    padding: 1rem 2rem;

    background-color: #6933ff;
    color: #fff;

    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
