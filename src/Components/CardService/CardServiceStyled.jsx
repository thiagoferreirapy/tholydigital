import styled, { keyframes } from "styled-components";

export const ServiceContent = styled.div`
  width: auto;
  height: auto;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #0f1624;
  border: ${(props) => props.theme.borders.borderCardBlue};
`;

export const Title = styled.h3`
    font-family: "Karla";
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    line-height: 25px;
    color: ${(props) => props.theme.colors.whitePrimary};

    span{
        color: ${(props) => props.theme.colors.secondary};
    }

    display: -webkit-box;                
    -webkit-box-orient: vertical;        
    overflow: hidden;                     
    -webkit-line-clamp: 1;             
    max-height: 100%;
`

export const Text = styled.p`
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    line-height: 23px;
    color: ${(props) => props.theme.colors.blackPrimary};

    span{
        font-weight: bold;
    }

    display: -webkit-box;                
    -webkit-box-orient: vertical;       
    overflow: hidden;                     
    -webkit-line-clamp: 5;               
    max-height: 100%;  
`
