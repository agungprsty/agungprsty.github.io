import React from 'react';
import styled from 'styled-components';

const currentYear = new Date().getFullYear();

const FooterContainer = styled.footer`
  padding: 15px;
  color: #f4f6fd;
  font-size: 14px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 9999;
  background: #040b14;

  @media (max-width: 1199px) {
    position: static;
    width: auto;
    padding-right: 20px 15px;
  }
`;

const CopyrightContainer = styled.div`
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightContainer>
        Copyright &copy; {currentYear} <strong>agungprasetyo.github.io</strong>
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
