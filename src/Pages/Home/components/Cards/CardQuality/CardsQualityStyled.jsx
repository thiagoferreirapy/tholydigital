import styled, { keyframes } from "styled-components";

export const ContainerCardsQuality = styled.section`
  width: 100%;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1400px) {
    padding: 0 50px;
  }
  @media (max-width: 750px) {
    padding: 0 20px;
  }
`;

export const ContentCards = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1400px) {
    width: 100%;
  }
  @media (max-width: 1300px) {
    width: 100%;
  }
  @media (max-width: 1100px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 650px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Card = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 30px;
  padding: 40px 15px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) =>
    props.BgTheme ? props.theme.colors.primary : props.theme.colors.secondary};

  @media (max-width: 1200px) {
    width: 250px;
  }

  @media (max-width: 1100px) {
    border-radius: 0px;
    margin-bottom: 20px;
  }

  @media (max-width: 900px) {
    margin-bottom: 20px;
    width: 300px;
  }
  @media (max-width: 650px) {
    width: 100%;
    height: 240px;
    border-radius: 30px;
    justify-content: center;
  }
`;
export const Title = styled.h2`
  font-family: "Karla";
  font-size: 25px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.whitePrimary};
`;
export const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  text-align: center;
  color: ${(props) => props.theme.colors.whitePrimary};
`;
