import {
  // NEWIMAGE_UPLOAD,
  LOGIN,
  LOGOUT,
  SET_ALL_ORG,
  SETMOBILE,
  SET_USER_DETAILS,
  SET_ORG_USER_DEATILS,
  SET_ORG_DETAILS,
  SET_ORG_ID,
  SET_USER,
  SETLOGINORG,
  SET_ALL_DATA,
  SET_ORG,
  SET_ORG_USER_DETAILS
} from "./constant";
const initial_state = {
  // admin_id: "",
  user_id: "",
  name: "",
  type: "M",
  email: "",
  mobile: "",
  otpmobile: "",
  // type: "",
  isHome: false,
  orgHome: true,
  mobileOpen: false,
  loginModal: false,
  successfull: false,
  otpmodal: false,
  active: false,
  organizations: [],
  org_user_details: [],
  user_details: {},
  org_details: [],
  alldata: [],
  org_id: "",
  org_name: "",
  orglogin: false,
  user: {},
  org: {},
  org_user: [],
  // userdetails:[]
  useremail:"",
  usermobile:"",
  usertype:"",
  username:"",

};
export default function reducer(state = initial_state, action) {
  switch (action.type) {

    case LOGIN:
      return state = {
        ...state,
        isHome: false,
        user_id: action.payload._id,
        type: action.payload.type,
        mobile: action.payload.mobile,
        name: action.payload.user_name,
        email: action.payload.email,
      };

    case LOGOUT:
      return state = {
        ...state,
        isHome: true,
        user_id: "",
        type: "",
        mobile: "",
        name: "",
        email: "",
        orgHome: false
      };

    case SET_ALL_ORG:
      return state = { ...state, organizations: action.payload };
    case SET_ORG_USER_DETAILS:
      return state = { 
        ...state, 
        org_user: action.payload,
        // user_type: action.payload.type
       };

    case SET_USER_DETAILS:
      return state = { ...state, user_details: action.payload };
    case SET_ALL_DATA:
      return state = { ...state, alldata: action.payload };
    case SET_ORG_DETAILS:
      return state = { ...state, org_details: action.payload };
    case SET_ORG_USER_DEATILS:
      return state = { ...state, org_user_details: action.payload };
    case SET_ORG_ID:
      return state = { ...state, org_id: action.payload };
    case SETLOGINORG:
      return state = { ...state, orglogin: action.payload };
    case SETMOBILE:
      return state = { ...state, otpmobile: action.payload };
    case SET_USER:
      return state = {
        ...state,
        useremail: action.payload.email,
        usermobile: action.payload.mobile,
        usertype: action.payload.type,
        username: action.payload.user_name,

      };
    case SET_ORG:
      return state = {
        ...state,
        org: action.payload,
        org_name:action.payload.org_name,
        orgHome: true
      };
    default:
      return state;
  }
}
