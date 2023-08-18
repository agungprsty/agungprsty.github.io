import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateplane = keyframes`
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`;

const StyledSpinner = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  animation: ${rotateplane} 1.2s infinite ease-in-out;
`;

function Spinner() {
  return <StyledSpinner />;
}

export default Spinner;
