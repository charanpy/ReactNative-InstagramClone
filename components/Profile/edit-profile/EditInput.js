import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import PropTypes from 'prop-types';
import selectProfile from '../../../redux-sagas/profile/profile.selector';
import { selectBackground } from '../../../redux-sagas/theme/theme.selector';
import EditTextInput from './EditTextInput';
import ProfileModel from './ProfileModel';

const EditInput = ({
  userProfile,
  background,
  navigation,
  editIndividual = false,
  individualField = null,
  value = '',
  handleChange = () => { }
}) => {
  console.log(background);
  const textInputBorderColor = background !== 'black' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)';
  const fieldColor = background !== 'black' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)';
  const navigateTo = (param, val) => navigation.navigate('EditField', { label: param, defaultValue: val });
  return (
    <View style={styles.Input}>
      {editIndividual ? (
        <EditTextInput
          isEditable
          fieldName={individualField.header}
          defaultInputValue={individualField.defaultVal}
          textInputColor={background === 'dark' ? 'black' : 'white'}
          textInputBorderColor={textInputBorderColor}
          fieldColor={fieldColor}
          value={value}
          handleChange={handleChange}
        />
      ) : (
          // eslint-disable-next-line
          ProfileModel.map((model) => (
            <EditTextInput
              isEditable={false}
              fieldName={model.fieldName}
              key={model.id}
              defaultInputValue={userProfile[model.fieldName.toLowerCase()] || ''}
              textInputColor={background !== 'black' ? 'black' : 'white'}
              textInputBorderColor={textInputBorderColor}
              fieldColor={fieldColor}
              onFocus={navigateTo}
            />
          ))
        )}
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  userProfile: selectProfile.selectUserProfile,
  background: selectBackground,
});

export default connect(mapStateToProps)(EditInput);

const styles = StyleSheet.create({
  Input: {
    marginTop: '6%',
    paddingHorizontal: 15,
  },
});
