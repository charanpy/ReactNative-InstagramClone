import React from 'react';
import { ActivityIndicator } from 'react-native';
import MainContainer from './MainContainer';

const LoaderHOC = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return (
    <>
      {isLoading ? (
        <MainContainer
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ActivityIndicator size='small' color='#0275d8' />
        </MainContainer>
      ) : (
          <WrappedComponent {...otherProps} />
        )}
    </>
  );
};

export default LoaderHOC;
