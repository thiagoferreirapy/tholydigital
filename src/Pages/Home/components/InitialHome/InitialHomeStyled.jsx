import styled, { keyframes } from "styled-components";

export const ContainerInitialHome = styled.section`
  width: 100%;
  height: 580px;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 1100px) {
    padding: 0 50px;
  }
  @media (max-width: 700px) {
    padding: 0 30px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    height: auto;
    padding-top: 100px;
  }
  @media (max-width: 590px) {
    flex-direction: column;
    height: auto;
    padding: 100px 20px;
  }
`;


export const Title = styled.h1`
  font-family: "Karla";
  font-size: 70px;
  font-weight: 500;
  line-height: 70px;
  color: ${(props) => props.theme.colors.blackPrimary};
  span {
    font-size: 73px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 1024px) {
    font-size: 50px;
    line-height: 55px;
    span {
    font-size: 53px;
  }
  }
  @media (max-width: 900px) {
    font-size: 50px;
    line-height: 55px;
    span {
    font-size: 53px;
  }
  }
  @media (max-width: 680px) {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;

    font-size: 40px;
    line-height: 45px;
    span {
    font-size: 43px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};
  }
  }
`;

export const Text = styled.p`
  width: 60%;
  font-size: 25px;
  font-weight: 300;
  line-height: 33px;
  color: ${(props) => props.theme.colors.primary};

  span {
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 750px) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 680px) {
    text-align: center;
  }
`;

