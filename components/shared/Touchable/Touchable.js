import React from 'react';
import { View } from 'react-native';
import TextComponent from '../Text/TextComponent';
import Icon from '../Icon/Icon';

const Touchable = ({
  TouchableComponent,
  DisplayText = null,
  TouchableStyle = null,
  ViewStyle = null,
  TextStyle = null,
  ExtraInfo = false,
  IconComponent = false,
  IconName = null,
  IconSize = null,
  IconStyle = null,
}) => (
  <TouchableComponent style={TouchableStyle}>
    <View style={ViewStyle}>
      {DisplayText && <TextComponent style={TextStyle[0]}>{DisplayText[0]}</TextComponent>}
      {ExtraInfo && (
        <TextComponent style={TextStyle[1]}>{DisplayText[1]}</TextComponent>
      )}
      {IconComponent && (
        <View style={DisplayText && IconStyle}>
          <Icon Component={IconComponent} name={IconName} size={IconSize} />
        </View>
      )}
    </View>
  </TouchableComponent>
);

export default Touchable;
