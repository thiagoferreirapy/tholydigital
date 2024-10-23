import styled, { keyframes } from "styled-components";

export const FooterContainer = styled.header`
  width: 100%;
  padding: 50px 100px 0px 100px;
  margin-top: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.blackPrimary};
  flex-wrap: wrap;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 1100px) {
    padding: 50px 50px 0px 50px;
  }
  @media (max-width: 700px) {
    padding: 50px 30px 0px 30px;
  }

  @media (max-width: 750px) {
    height: auto;
    padding-top: 100px;
    margin-top: 0;
  }
  @media (max-width: 590px) {
    height: auto;
    padding: 100px 20px;
  }
`;

export const Title = styled.h2`
  font-family: "Karla";
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  text-align: left;
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
  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
  }
`;
export const SubTitle = styled.h4`
  font-family: "Karla";
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  text-align: left;
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
  @media (max-width: 850px) {
    width: 100%;
    text-align: center;
  }
`;
export const TitleBox = styled.h5`
  font-family: "Karla";
  font-size: 20px;
  font-weight: 700;
  line-height: 50px;
  text-align: left;
  color: ${(props) => props.theme.colors.whitePrimary};

  span {
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};
  }
  @media (max-width: 850px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  width: 85%;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  color: ${(props) => props.theme.colors.whitePrimary};

  span {
    color: ${(props) => props.theme.colors.secondary};
  }
  @media (max-width: 850px) {
    text-align: center;
  }
`;

export const ContentFooter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 50px 0px 110px 0px;
  @media (max-width: 1300px) {
   flex-wrap: wrap;
    gap: 50px;
  }
  @media (max-width: 850px) {
    align-items: center;
    justify-content: center;
  }
`;
export const BoxInofrmatioFooter = styled.div`
width: 270px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 850px) {
    align-items: center;
    justify-content: center;
  }
`;
export const ContentTerms = styled.div`
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  p{
    color: #ffff;
    font-size: 14px;
  }

  @media (max-width: 850px) {
    height: 100px;
    padding: 0 20px;
  }

  
`;
