import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ProfileSelector from '../../redux-sagas/profile/profile.selector';
import { selectIsLoading } from '../../redux-sagas/user/user.selector';
import Spinner from './Spinner';

const ProfileLoaderHOC = (WrappedComponent) => ({ isLoading, userLoaded, ...otherProps }) => {
  return <>{(isLoading && userLoaded) ? <Spinner /> : <WrappedComponent {...otherProps} />}</>;
};

const mapStateToProps = createStructuredSelector({
  isLoading: ProfileSelector.selectIsLoading,
  userLoaded: selectIsLoading
});

export default compose(connect(mapStateToProps, null), ProfileLoaderHOC);
