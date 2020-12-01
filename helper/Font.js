import * as Font from 'expo-font';

export const fetchAllFonts = () => {
     return Font.loadAsync({
          "Billabong": require("../assets/fonts/Billabong.ttf"),
          "Proxima-Bold": require("../assets/fonts/ProximaNovaAltBold.otf"),
          "Proxima-Light": require("../assets/fonts/ProximaNovaAltLight.otf"),
          "Proxima-Thin": require("../assets/fonts/ProximaNovaAltThin.otf"),
          "Proxima-Regular": require("../assets/fonts/ProximaNova-Regular.otf"),
          "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
          "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
          "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
          "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
          "Nue-Thin": require("../assets/fonts/HelveticaNeueThin.ttf"),
          "Nue-Regular": require("../assets/fonts/HelveticaNeueMedium.ttf"),
          "Nue-Light": require("../assets/fonts/HelveticaNeueLight.ttf")
     })
}