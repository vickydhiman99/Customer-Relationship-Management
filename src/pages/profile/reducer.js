import {
  SET_USER_DETAILS,
  SET_NAME,
  SET_EMAIL_ID,
  SET_PHONE,
  SET_TYPE,
  SET_ORG_DETAILS2,

} from "./constant";
const initial_state = {

  set_user_details: "",
  set_user_details2: "",
  setName: "",
  setEmail: "",
  setPhone: "",
  setType: ""
};
export default function reducer(state = initial_state, action) {
  switch (action.type) {

    case SET_USER_DETAILS:
      return state = { ...state, set_user_details: action.payload };
    case SET_ORG_DETAILS2:
      return state = { ...state, set_user_details2: action.payload };
    case SET_NAME:
      return state = { ...state, setName: action.payload };
    case SET_EMAIL_ID:
      return state = { ...state, setEmail: action.payload };
    case SET_PHONE:
      return state = { ...state, setPhone: action.payload };
    case SET_TYPE:
      return state = { ...state, setType: action.payload };
    default:
      return state;
  }
}
