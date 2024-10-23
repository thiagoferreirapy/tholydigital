import styled, { keyframes } from "styled-components";

export const ContainerProjects = styled.section`
  width: 100%;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  @media (max-width: 1100px) {
    padding: 100px 50px;
    margin-top: 0;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    height: auto;
    padding-top: 100px 30px;
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
  color: ${(props) => props.theme.colors.blackPrimary};

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

export const SubTitle = styled.h4`
  width: 60%;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.blackPrimary};

  span {
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 680px) {
    width: 100%;
    text-align: center;
  }
`;

export const Text = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  text-align: justify;
  color: ${(props) => props.theme.colors.blackPrimary};

  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ContentCardsProducts = styled.div`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 750px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const BoxAlign = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
