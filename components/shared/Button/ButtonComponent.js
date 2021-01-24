import React from 'react';
import { View, TouchableNativeFeedback, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TextComponent from '../Text/TextComponent';
import { CommonStyles } from '../../../styles/Common.styles';
import { selectApiCallLoading } from '../../../redux-sagas/user/user.selector';

const ButtonComponent = ({
  disableButton, onPressButton, loading, title
}) => {
  return (
    <View style={{ alignItems: 'center', borderRadius: 5, width: '100%' }}>
      <TouchableNativeFeedback
        foreground
        disabled={disableButton}
        onPress={onPressButton}
      >
        <View
          style={
            disableButton
              ? CommonStyles.Login_Button
              : CommonStyles.Login_Button_Disable
          }
        >
          {loading ? (
            <ActivityIndicator size='small' color='#fff' animating />
          ) : (
            <TextComponent color='white' style={CommonStyles.Button}>
              {title}
            </TextComponent>
          )}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectApiCallLoading,
});

export default connect(mapStateToProps)(ButtonComponent);
