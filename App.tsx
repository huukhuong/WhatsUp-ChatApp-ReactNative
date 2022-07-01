import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigation from "./src/navigations/RootStackNavigation";
import AuthStackNavigation from "./src/navigations/AuthStackNavigation";
import { useEffect, useLayoutEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { AppState } from "react-native";
import { Constants } from "./src/utils/Constants";

const App = () => {

  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthChange = (user: FirebaseAuthTypes.User | null) => {
    setTimeout(() => {
      setUser(user);
    }, 1000);
  };

  useEffect(() => {
    auth().onAuthStateChanged(user => onAuthChange(user));

    if (auth().currentUser != null) {
      AppState.addEventListener("change", state => {
        if (state === "active") {
          setStatusToOnline();
        } else if (state === "background") {
          setStatusToOffline();
        } else if (state === "inactive") {
          setStatusToOffline();
        }
      });
    }
  }, []);

  const setStatusToOnline = () => {
    console.log("Online");
    Constants.database
      .ref("/users/" + auth().currentUser?.uid)
      .update({
        isOnline: true,
      });
  };

  const setStatusToOffline = () => {
    console.log("Offline");
    Constants.database
      .ref("/users/" + auth().currentUser?.uid)
      .update({
        isOnline: false,
      });
  };

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
