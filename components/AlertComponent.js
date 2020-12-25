import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Modal, TouchableNativeFeedback
} from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectAlertMessage } from '../redux-sagas/alert/alert.selector';
import { removeAlert } from '../redux-sagas/alert/alert.action';
import { selectBackground } from '../redux-sagas/theme/theme.selector';
import TextComponent from './TextComponent';
// import MainContainer from '../screens/MainContainer'

const AlertComponent = ({ alert, removeAlert: alertRemove, background }) => {
  console.log(100, alert.length);
  const [showAlert, setShowAlert] = useState(alert.length > 0);
  const [backgroundColor, setBackgroundColor] = useState('white');

  useEffect(() => {
    if (background === 'black') {
      setBackgroundColor('#212529');
    }
  }, [background]);

  useEffect(() => {
    if (alert.length > 0) {
      setShowAlert(true);
    }
  }, [alert]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', position: 'absolute' }}>
      <Modal animationType='fade' transparent visible={showAlert}>
        {alert
          && alert.map((err) => (
            <View
              style={[styles.Modal, { backgroundColor }]}
              key={err.id}
            >
              <TextComponent
                style={{ fontSize: 17, fontFamily: 'Proxima-Light' }}
              >
                {err.msg}
              </TextComponent>

              <TouchableNativeFeedback
                onPress={() => {
                  alertRemove(err.id);
                  setShowAlert(!showAlert);
                }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'transparent',
                    borderTopColor: 'rgba(66,133,244,1)',
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    padding: 15,
                    alignItems: 'center',
                  }}
                >
                  <TextComponent
                    style={{
                      marginTop: 10,
                      color: 'rgba(66, 133, 244,1)',
                      fontSize: 15,
                      fontFamily: 'Roboto-Regular',
                    }}
                  >
                    OK
                  </TextComponent>
                </View>
              </TouchableNativeFeedback>
            </View>
          ))}
      </Modal>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  alert: selectAlertMessage,
  background: selectBackground,
});

const mapDispatchToProps = (dispatch) => ({
  removeAlert: (id) => dispatch(removeAlert(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertComponent);

const styles = StyleSheet.create({
  Modal: {
    width: '80%',
    height: 180,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    elevation: 25,
    alignItems: 'center',
    paddingVertical: 20,
    position: 'absolute',
    top: '40%',
    left: '10%',
  },
});
