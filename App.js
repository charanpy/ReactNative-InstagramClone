import React, { useState } from 'react';
import { AppLoading } from "expo"
import Navigation from "./Navigation/Navigation";
import { fetchAllFonts } from "./helper/Font"

import { Provider } from 'react-redux';
import { store } from './redux-sagas/store'
import AlertComponent from "./components/AlertComponent"
export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)

  //^Font-Loading
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchAllFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.warn(error)}
      />
    )
  }


  return (
    <Provider store={store}>

      <AlertComponent />
      <Navigation />

    </Provider>

  );
}

