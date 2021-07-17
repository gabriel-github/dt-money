import styled from "styled-components";

interface ColorToast {
  type: "success" | "error";
}

const colors = {
  success: "#33cc95",
  error: "#E62E4D",
};

export const Container = styled.div<ColorToast>`
  position: absolute;
  padding: 1rem 2rem;
  max-width: 250px;

  top: 1.5rem;
  right: 1.5rem;

  border-radius: 0.25rem;
  transition: all 0.2s;

  z-index: 10;

  background-color: ${({ type }) => (type ? colors[type] : "#f5f5f5")};
  color: #fff;
`;
