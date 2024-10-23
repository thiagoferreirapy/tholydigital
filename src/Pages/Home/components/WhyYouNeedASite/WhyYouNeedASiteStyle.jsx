import styled, { keyframes } from "styled-components";

export const ContainerWhyYouNeedASite = styled.section`
  width: 100%;
  padding: 60px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  background-color: ${(props) => props.theme.colors.blackPrimary};

  @media (max-width: 1200px) {
    padding: 100px 50px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    height: auto;
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
  font-weight: 600;
  line-height: 50px;
  text-align: left;
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
export const Text = styled.p`
  width: 90%;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
  color: ${(props) => props.theme.colors.whitePrimary};

  span {
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 1120px) {
    width: 100%;
    text-align: center;
  }
`;

export const ContentBenefitsSection = styled.div`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const ContentCardBenefits = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 754px) {
    width: 100%;
  }
`;
export const CardBenefits = styled.div`
  width: 300px;
  height: 350px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border: 3px solid ${(props) => props.theme.colors.secondary};
  border-radius: 30px;
  cursor: pointer;
  transition: 0.5s all ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const TitleCard = styled.h4`
  font-family: "Karla";
  font-size: 30px;
  font-weight: 700;
  text-align: center;
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
`;

export const TextCard = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 23px;
  text-align: center;
  color: ${(props) => props.theme.colors.whitePrimary};

  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
