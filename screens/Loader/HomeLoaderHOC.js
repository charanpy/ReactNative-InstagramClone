import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectApiCallLoading } from '../../redux-sagas/user/user.selector';
import Spinner from './Spinner';
import { loadUserStart } from '../../redux-sagas/user/user.action';

const HomeLoaderHOC = (WrappedComponent) => ({
  isLoading,
  loadUserStart: loadUser,
  ...otherProps
}) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return <>{isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />}</>;
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectApiCallLoading,
});

const mapDispatchToProps = (dispatch) => ({
  loadUserStart: () => dispatch(loadUserStart()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  HomeLoaderHOC
);
