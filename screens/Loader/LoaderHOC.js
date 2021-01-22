import React from 'react';
import Spinner from './Spinner';

const LoaderHOC = (WrappedComponent) => ({ isLoading, ...OtherProps }) => {
  return <>{isLoading ? <Spinner /> : <WrappedComponent {...OtherProps} />}</>;
};

export default LoaderHOC;
