import styled, { keyframes } from "styled-components";

export const ProductsContent = styled.div`
  width: 270px;
  height: 400px;
  border-radius: 10px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #b4b4b4;
  border: ${(props) => props.theme.borders.borderDefault};
`;