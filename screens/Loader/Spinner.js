import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import MainContainer from '../MainContainer';

const Spinner = () => {
  return (
    <MainContainer style={styles.spinner}>
      <ActivityIndicator size='large' color='#0275d8' />
    </MainContainer>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  spinner: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
