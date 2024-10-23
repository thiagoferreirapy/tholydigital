import styled, { keyframes } from "styled-components";

export const ContainerInformationQuantity = styled.section`
  width: 100%;
  height: 600px;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  background-color: ${(props) => props.theme.colors.primary};

  @media (max-width: 1100px) {
    height: auto;
    padding: 100px 50px;
    flex-direction: column;
    gap: 40px;
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

export const Title = styled.h2`
  width: 550px;
  font-family: "Karla";
  font-size: 50px;
  font-weight: 400;
  line-height: 65px;
  text-align: left;
  color: ${(props) => props.theme.colors.whitePrimary};

  span {
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 1100px) {
    font-size: 45px;
    width: 100%;
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
  width: 630px;
  font-size: 50px;
  font-weight: 700;
  text-align: left;
  color: ${(props) => props.theme.colors.secondary};

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
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  line-height: 33px;
  text-align: left;
  color: ${(props) => props.theme.colors.whitePrimary};

  span {
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

export const ContentQuantinty = styled.div`
  width: 530px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 1300px) {
    width: 400px;
    margin-left: 50px;
  }
  @media (max-width: 1100px) {
    width: 100%;
    margin-left: 0px;
  }
  @media (max-width: 680px) {
    width: 100%;
    height: auto;
    align-items: center;
    margin-top: 30px;
  }
`;
