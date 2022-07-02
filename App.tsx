import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigation from "./src/navigations/RootStackNavigation";
import AuthStackNavigation from "./src/navigations/AuthStackNavigation";
import { useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { AppState } from "react-native";
import { Helpers } from "./src/utils/Helpers";

const App = () => {

  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthChange = (user: FirebaseAuthTypes.User | null) => {
    setTimeout(() => {
      setUser(user);
    }, 1000);

    if (auth().currentUser != null && auth().currentUser != undefined) {
      AppState.addEventListener("change", state => {
        if (state === "active") {
          Helpers.setStatusToOnline();
        } else if (state === "background") {
          Helpers.setStatusToOffline();
        } else if (state === "inactive") {
          Helpers.setStatusToOffline();
        }
      });
    }
  };

  useEffect(() => {
    auth().onAuthStateChanged(user => onAuthChange(user));
  }, []);

  return (
    <NavigationContainer>
      {
        user != null
          ?
          <RootStackNavigation />
          :
          <AuthStackNavigation />
      }
    </NavigationContainer>
  );
};

export default App;
