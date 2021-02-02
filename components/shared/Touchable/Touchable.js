import React from 'react';
import { View } from 'react-native';
import TextComponent from '../Text/TextComponent';

const Touchable = ({
  TouchableComponent,
  DisplayText,
  TouchableStyle = null,
  ViewStyle = null,
  TextStyle = null,
  ExtraInfo = false
}) => (
  <TouchableComponent style={TouchableStyle}>
    <View style={ViewStyle}>
      <TextComponent style={TextStyle[0]}>
        {DisplayText[0]}
      </TextComponent>
      {ExtraInfo
        && <TextComponent style={TextStyle[1]}>{DisplayText[1]}</TextComponent>}
    </View>
  </TouchableComponent>
);

export default Touchable;
