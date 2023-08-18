import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSpinnerWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 33333;
`;

function SpinnerWrap({ children }) {
  return <StyledSpinnerWrap>{children}</StyledSpinnerWrap>;
}

SpinnerWrap.propTypes = {
  children: PropTypes.node.isRequired
};

export default SpinnerWrap;
