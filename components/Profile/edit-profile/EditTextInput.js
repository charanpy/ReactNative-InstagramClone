import React from 'react';
import { TextInput, View } from 'react-native';
import TextComponent from '../../TextComponent';

const EditTextInput = ({
  defaultInputValue,
  textInputColor,
  textInputBorderColor,
  fieldName,
  isEditable,
  fieldColor,
}) => {
  return (
    <View style={{ marginBottom: '4%' }}>
      <TextComponent style={{ marginBottom: '2%', color: fieldColor }}>
        {fieldName}
      </TextComponent>
      <TextInput
        defaultValue={defaultInputValue}
        style={{
          color: textInputColor,
          borderBottomWidth: 0.4,
          borderBottomColor: textInputBorderColor,
        }}
        editable={isEditable}
      />
    </View>
  );
};

export default EditTextInput;
