import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import selectProfile from '../../../redux-sagas/profile/profile.selector';
import { selectBackground } from '../../../redux-sagas/theme/theme.selector';
import EditTextInput from './EditTextInput';
import ProfileModel from './ProfileModel'

const EditInput = ({ userProfile, background }) => {
  const textInputBorderColor = background === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)'
  const fieldColor = background === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)';
  return (
    <View style={styles.Input}>
      {
        ProfileModel.map((model) => (
          <EditTextInput
            isEditable={false}
            fieldName={model.fieldName}
            key={model.id}
            defaultInputValue={userProfile[model.fieldName.toLowerCase()] || ''}
            textInputColor={background === 'dark' ? 'black' : 'white'}
            textInputBorderColor={textInputBorderColor}
            fieldColor={fieldColor}
          />
        ))
      }

    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  userProfile: selectProfile.selectUserProfile,
  background: selectBackground
});

export default connect(mapStateToProps)(EditInput);

const styles = StyleSheet.create({
  Input: {
    marginTop: '6%',
    paddingHorizontal: 15
  }
});
