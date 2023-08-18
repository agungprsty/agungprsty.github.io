import React, { Fragment } from 'react';
import GlobalStyle from './theme/globalStyle';
import Footer from './components/footer/footer';
import Preloader from './components/preloader/preloader';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Footer />
      <Preloader />
    </Fragment>
  );
}

export default App;
