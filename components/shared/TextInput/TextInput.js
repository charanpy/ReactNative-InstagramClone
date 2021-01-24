import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const TextInputComponent = (props) => {
  const { handleChange, value, ...OtherProps } = props;
  return (
    <View style={styles.Input_Center}>
      <TextInput
        {...OtherProps}
        style={styles.Text_Input}
        onChangeText={handleChange}
        value={value}
      />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  Input_Center: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  Text_Input: {
    padding: 10,
    borderColor: 'rgba(0,0,0,0.6)',
    borderWidth: 0.5,
    backgroundColor: 'rgba(255,255,255,0.95)',
    width: '80%',
    borderRadius: 5,
    fontFamily: 'Roboto-Light',
  },
});
