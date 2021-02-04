import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import fetchAllFonts from './helper/Font';

import store from './redux-sagas/store';
import AlertComponent from './components/shared/Alert/AlertComponent';
import { loadUserStart } from './redux-sagas/user/user.action';
import { getData } from './helper/utils/token';
import TabNavigation from './Navigation/TabNavigation';

getData().then((res) => {
  console.log('app', res);
});

enableScreens();

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    store.dispatch(loadUserStart());
  }, []);

  // Font-Loading
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchAllFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.warn(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AlertComponent />
      <TabNavigation />
    </Provider>
  );
}

export default App;
