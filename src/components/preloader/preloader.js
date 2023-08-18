import React, { Component } from 'react';
import PreloaderWrapper from './preloaderWrapper';
import SpinnerWrap from './spinnerWrap';
import Spinner from './spinner';

class Preloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1200);
  }

  render() {
    const { loaded } = this.state;

    return (
      <PreloaderWrapper loaded={loaded}>
        <SpinnerWrap>
          <Spinner />
        </SpinnerWrap>
      </PreloaderWrapper>
    );
  }
}

export default Preloader;
