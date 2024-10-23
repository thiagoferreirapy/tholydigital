import styled, { keyframes } from 'styled-components';


const expandHeight = keyframes`
  0% {
    height: 5%;
    opacity: 0;
  }
  100% {
    height: 30%;
    opacity: 1;
  }
`;

export const MenuWrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: black;
  z-index: 100;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  top: 20px; 
  right: 20px;
  z-index: 20;
`;

export const MenuContent = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.whitePrimary};
  border-radius: 0 0 10px 10px;
  animation: ${expandHeight} 0.5s ease forwards; 
  box-shadow: 0px 2px 2px rgba(0,0,0, 0.10);
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 20px 50px;
  overflow: hidden;
  opacity: 0; 
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

export const MenuItem = styled.li`
  margin: 20px 0;
  font-size: 20px;
  text-align: left;
  
  a {
    text-decoration: none;
    color: #171717;
    font-weight: 400;
  }

  a:hover {
    color: gray;
  }
`;
