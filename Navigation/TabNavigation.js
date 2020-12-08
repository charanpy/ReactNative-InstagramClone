import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import MainContainer from '../screens/MainContainer';
import { selectBackground } from '../redux-sagas/theme/theme.selector';

const TabNavigation = ({ background }) => {
  const theme = background === 'black' ? 'dark' : 'light';

  return (
    <MainContainer>
      <Navigation theme={theme} />
    </MainContainer>
  );
};

TabNavigation.propTypes = {
  background: PropTypes.string.isRequired
};
const mapStateToProps = createStructuredSelector({
  background: selectBackground,
});

export default connect(mapStateToProps)(TabNavigation);
