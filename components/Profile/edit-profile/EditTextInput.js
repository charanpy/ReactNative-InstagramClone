import React from 'react';
import { TextInput, Pressable } from 'react-native';
import TextComponent from '../../shared/Text/TextComponent';

const EditTextInput = ({
  defaultInputValue,
  textInputColor,
  textInputBorderColor,
  fieldName,
  isEditable,
  fieldColor,
  onFocus,
  value = '',
  handleChange = () => { }
}) => {
  return (
    <Pressable
      style={{ marginBottom: '4%' }}
      onPress={() => onFocus(fieldName, defaultInputValue || '')}
    >
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
        onFocus={onFocus}
        value={value || defaultInputValue}
        onChangeText={handleChange}
      />
    </Pressable>
  );
};

export default EditTextInput;
