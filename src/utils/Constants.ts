import { firebase } from "@react-native-firebase/database";

const database =
  firebase.app()
    .database("https://realtimechat-f70d1-default-rtdb.asia-southeast1.firebasedatabase.app/");

export const Constants =
  {
    database,
  };
