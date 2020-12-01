import React, { useState } from 'react';
import { AppLoading } from "expo"
import Navigation from "./Navigation/Navigation";

import { fetchAllFonts } from "./helper/Font"


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

    <Navigation />

  );
}

