import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 50px;
  height: 80px;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.whiteSecondary};
  flex-wrap: wrap;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
`;

export const Navigation = styled.nav`
  display: flex;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 35px;
  }
`;

export const NavLink = styled.a`
  text-decoration: none; 
  font-family: "Karla";
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.blackSecondary};

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.secondary};
    text-decoration-thickness: 2px; 
    text-underline-offset: 5px;
    font-weight: 600;
  }
`;
