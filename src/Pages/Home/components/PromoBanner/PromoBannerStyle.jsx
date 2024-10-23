import styled, { keyframes } from "styled-components";

export const ContainerPromoBanner = styled.section`
  width: 100%;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 100px;

  @media (max-width: 1100px) {
    padding: 0 50px;
    margin-top: 0;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    height: auto;
    padding-top: 100px 30px;
    margin-top: 0;
  }

  @media (max-width: 590px) {
    flex-direction: column;
    height: auto;
    padding: 100px 20px;
  }
`;


export const Title = styled.h1`
  font-family: "Karla";
  font-size: 50px;
  font-weight: 500;
  line-height: 60px;
  text-align: left;
  color: ${(props) => props.theme.colors.blackPrimary};

  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 900px) {
    font-size: 35px;
    line-height: 40px;
  }
`;

export const Text = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  color: ${(props) => props.theme.colors.primary};

  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;