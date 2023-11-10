import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const CLEAR_LOGIN = "CLEAR_LOGIN";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_ADMIN_ID = "SET_ADMIN_ID";
export const HANDLEDRAWER = "HANDLEDRAWER";
export const SETMOBILE = "SETMOBILE";
export const SET_ALL_ORG = "SET_ALL_ORG";
export const SET_USER_DETAILS = "SET_USER_DETAILS";
export const SET_ORG_DETAILS = "SET_ORG_DETAILS";
export const SET_ORG_USER_DEATILS = "SET_ORG_USER_DEATILS";
export const SET_ORG_ID = "SET_ORG_ID";
export const SET_ALL_DATA = "SET_ALL_DATA";
export const SET_USER = "SET_USER";
export const SET_ORG = "SET_ORG";
export const SETLOGINORG = "SETLOGINORG";
export const SET_ORG_USER_DETAILS = "SET_ORG_USER_DETAILS";

const firebaseConfig = {
  apiKey: "AIzaSyCqCwtn9zkiktoB-NvCXfWxWevmSdZO0UI",
  authDomain: "tbcrm-f734a.firebaseapp.com",
  projectId: "tbcrm-f734a",
  storageBucket: "tbcrm-f734a.appspot.com",
  messagingSenderId: "3514349987",
  appId: "1:3514349987:web:35c62d3bc53dd0ff0c4216",
  measurementId: "G-WL8EWGC73B"
};
export const app = initializeApp(firebaseConfig);
// export const fb = firebase.initializeApp(firebaseConfig);