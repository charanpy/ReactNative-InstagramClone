import React, { useState } from 'react';
import { connect } from 'react-redux';
import MainContainer from '../../MainContainer';
import PostHeader from '../../../components/shared/PostHeader/PostHeader';
import EditInput from '../../../components/Profile/edit-profile/EditInput';
import { editProfileStart } from '../../../redux-sagas/profile/profile.action';

const EditField = ({ navigation, editProfileStart: editProfile }) => {
  const [value, setValue] = useState('');
  const header = navigation.getParam('label');
  const defaultVal = navigation.getParam('defaultValue');
  const inputInfo = { header, defaultVal };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(1, value);
    editProfile(header, value);
  };
  return (
    <MainContainer style={{ flex: 1 }}>
      <PostHeader
        headerTitle={header}
        navigation={navigation}
        onSuccessClick={handleSubmit}
        route='EditProfile'
        onClick={() => setValue('')}
      />
      <EditInput
        editIndividual
        individualField={inputInfo}
        value={value}
        handleChange={(text) => setValue(text)}
      />
    </MainContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editProfileStart: (label, value) => dispatch(editProfileStart({ label, value }))
});

export default connect(null, mapDispatchToProps)(EditField);
