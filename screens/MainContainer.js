import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAlertMessage } from '../redux-sagas/alert/alert.selector';
import { selectBackground } from '../redux-sagas/theme/theme.selector';

const MainContainer = ({
  children, background, alert, style, modal
}) => {
  const [backgroundColor, setBackgroundColor] = useState(background);
  useEffect(() => {
    if (backgroundColor === background) return;
    setBackgroundColor(background);
  }, [background, backgroundColor]);

  let AppTheme;
  if (alert.length > 0) {
    if (background === 'black') {
      AppTheme = 'rgba(0,0,0,0.8)';
    } else {
      AppTheme = 'rgba(0,0,0,0.6)';
    }
  } else {
    AppTheme = backgroundColor;
  }
  const modalColor = background === 'black' ? '#333' : 'white';
  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <StatusBar backgroundColor={AppTheme} />
      <View
        style={{
          position: 'relative',
          backgroundColor: modal ? modalColor : AppTheme,
          flex: 1,
          ...style,
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = createStructuredSelector({
  alert: selectAlertMessage,
  background: selectBackground,
});

export default connect(mapStateToProps)(MainContainer);
