import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { MenuWrapper, MenuContent, ButtonContainer, MenuList, MenuItem } from './style';

export default function MenuMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <MenuWrapper>
      <ButtonContainer onClick={handleClick}>
        <Hamburger toggled={isMenuOpen} toggle={isMenuOpen}/>
      </ButtonContainer>

      {isMenuOpen && (
        <MenuContent>
          <MenuList>
            <MenuItem><a href="/">Home</a></MenuItem>
            <MenuItem><a href="/about">About</a></MenuItem>
            <MenuItem><a href="/services">Services</a></MenuItem>
            <MenuItem><a href="/contact">Contact</a></MenuItem>
          </MenuList>
        </MenuContent>
      )}
    </MenuWrapper>
  );
}
