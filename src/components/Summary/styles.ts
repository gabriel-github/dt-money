import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 1rem;
`;

export const Card = styled.div`
  width: 100%;
  background-color: var(--shape);

  border-radius: 0.25rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 2rem 1rem 2rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    padding-left: 2rem;
    padding-bottom: 1rem;
  }

  &.total {
    background-color: var(--green);
    color: #fff;
  }
`;
