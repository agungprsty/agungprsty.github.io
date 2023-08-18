import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPreloaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  background-color: #6d8796;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: ${({ loaded }) => (loaded ? '0' : '1')};
  visibility: ${({ loaded }) => (loaded ? 'hidden' : 'visible')};
  transition: 1s opacity;
`;

function PreloaderWrapper({ loaded, children }) {
  return <StyledPreloaderWrapper loaded={loaded.toString()}>{children}</StyledPreloaderWrapper>;
}

PreloaderWrapper.propTypes = {
  loaded: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default PreloaderWrapper;
