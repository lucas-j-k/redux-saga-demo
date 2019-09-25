import React from 'react';

import {connect} from 'react-redux';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from '../../themes';

import Gallery from '../Gallery';
import HeaderBar from '../HeaderBar';
import AlertBox from '../../components/AlertBox';
import Introduction from '../../components/Introduction';

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.svg_bg_color};
  background-image: ${props => props.theme.svg_bg_image};
`;

function App(props) {

  const galleryContent = props.showGallery ? <Gallery /> : null;
  const introContent = props.appStarted ? null : <Introduction />;
  const loadingBarContent = props.loading ? <AlertBox blink>Loading</AlertBox> : null;
  const errorContent = props.error ? <AlertBox>Error Loading Gallery - Please try again</AlertBox> : null;
  
  let theme;
  if(props.theme === 'light'){
    theme = lightTheme;
  } else if(props.theme === 'dark'){
    theme = darkTheme
  };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <HeaderBar />
        {introContent}
        {galleryContent}
        {loadingBarContent}
        {errorContent}
      </AppWrapper>
    </ThemeProvider>
  );
}

const mapStateToProps = state => (
  {
    loading: state.loading,
    showGallery: state.showGallery,
    error: state.error,
    appStarted: state.appStarted,
    theme: state.theme
  }
)

export default connect(mapStateToProps)(App);
