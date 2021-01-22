import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ProfileSelector from '../../redux-sagas/profile/profile.selector';
import Spinner from './Spinner';

const ProfileLoaderHOC = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return <>{isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />}</>;
};

const mapStateToProps = createStructuredSelector({
  isLoading: ProfileSelector.selectIsLoading,
});

export default compose(connect(mapStateToProps, null), ProfileLoaderHOC);
