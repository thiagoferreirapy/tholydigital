import styled, { keyframes } from "styled-components";

export const ContainerAbout = styled.section`
  width: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  background-color: ${(props) => props.theme.colors.blackPrimary};;

  @media (max-width: 1100px) {
    padding: 100px 50px;
  }
  
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    padding: 100px 30px;
    margin-top: 0;
  }
  @media (max-width: 590px) {
    flex-direction: column;
    height: auto;
    padding: 100px 20px;
  }
`;

export const Title = styled.h2`
  font-family: "Karla";
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  text-align: center;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.whitePrimary};

  span {
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 900px) {
    font-size: 35px;
    line-height: 40px;
  }
  @media (max-width: 680px) {
    width: 100%;
    text-align: center;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Text = styled.p`
  width: 85%;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
  color: ${(props) => props.theme.colors.whitePrimary};

  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ContentQuantinty = styled.div`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 750px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
