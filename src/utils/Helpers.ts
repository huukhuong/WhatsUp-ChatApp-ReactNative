import { Constants } from "./Constants";
import auth from "@react-native-firebase/auth";

const timestampToHour = (timestamp: number) => {
  const date = new Date(timestamp);
  const h = date.getHours();
  const m = date.getMinutes();
  const h_out = h < 10 ? `0${h}` : `${h}`;
  const m_out = m < 10 ? `0${m}` : `${m}`;
  return h_out + ":" + m_out;
};

const getCurrentTimestamp = () => {
  return Date.now();
};

const setStatusToOnline = () => {
  if (auth().currentUser?.uid != undefined) {
    console.log("Online");
    Constants.database
      .ref("/users/" + auth().currentUser?.uid)
      .update({
        isOnline: true,
      })
      .catch(e => {
        console.log(e);
      });
  }
};

const setStatusToOffline = () => {
  if (auth().currentUser?.uid != undefined) {
    console.log("Offline");
    Constants.database
      .ref("/users/" + auth().currentUser?.uid)
      .update({
        isOnline: false,
      })
      .catch(e => {
        console.log(e);
      });
  }
};

export const Helpers = {
  timestampToHour,
  getCurrentTimestamp,
  setStatusToOffline,
  setStatusToOnline,
};
