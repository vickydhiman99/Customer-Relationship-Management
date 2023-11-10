import {
  //Employee Action
  VIEW_ALL_MANAGER,
  VIEW_ALL_EXECUTIVE,
  VIEW_ALL_EXECUTIVE_BY_ID,
  VIEW_ALL_MANAGER_BY_ID,

  //Employee search action
  SEARCH_EMPLOYEE,
  SEARCH_FILTERED_EXECUTIVE,
  SEARCH_FILTERED_LEADS,

  //Employee setter 
  SET_MANAGER_NAME,
  SET_MANAGER_EMAIL_ID,
  SET_MANAGER_CONTACT_NUMBER,
  SET_MANAGER_EMP_SHORT_ID,
  SET_CATAGORY_ID,
  SET_MANAGER_ID,
  SET_EXECUTIVE_NAME,
  SET_EXECUTIVE_ID,
  SET_EXECUTIVE_EMP_SHORT_ID,
  SET_EXECUTIVE_EMAIL_ID,
  SET_EXECUTIVE_CONTACT_NUMBER,
 
} from "./constant";
const initial_state = {

  viewAllManager: [],
  viewAllExecutive: [],
  viewAllExecutiveById: [],
  viewAllManagerById: [],
  search_employee: [],

  set_manager_name: "",
  SetManagerEmailId: "",
  SetManagerContactNumber: "",
  SetManagerEmpShortId: "",
  SetCatagoryId: "",
  setManagerId: "",
  setExecutiveName: "",
  setExecutiveId: "",
  SetExecutiveEmailId: "",
  SetExecutiveContactNumber: "",
  SetExecutiveEmpShortId: "",

};
export default function reducer(state = initial_state, action) {
  switch (action.type) {

    case VIEW_ALL_MANAGER:
      return state = { ...state, viewAllManager: action.payload, search_employee: action.payload };

    case VIEW_ALL_EXECUTIVE:
      return state = { ...state, viewAllExecutive: action.payload, search_employee: action.payload };

    case VIEW_ALL_EXECUTIVE_BY_ID:
      return state = { ...state, viewAllExecutiveById: action.payload, filtered_leads: action.payload };

    case VIEW_ALL_MANAGER_BY_ID:
      return state = { ...state, viewAllManagerById: action.payload, filtered_executive: action.payload };
    case SET_MANAGER_EMAIL_ID:
      return state = { ...state, SetManagerEmailId: action.payload };
    case SET_MANAGER_CONTACT_NUMBER:
      return state = { ...state, SetManagerContactNumber: action.payload };
    case SET_MANAGER_EMP_SHORT_ID:
      return state = { ...state, set_emp_short_id: action.payload };
    case SET_CATAGORY_ID:
      return state = { ...state, SetCatagoryId: action.payload };
    case SET_MANAGER_NAME:
      return state = { ...state, setManagerName: action.payload };
    case SET_MANAGER_ID:
      return state = { ...state, setManagerId: action.payload };
    case SET_EXECUTIVE_NAME:
      return state = { ...state, setExecutiveName: action.payload };
    case SET_EXECUTIVE_ID:
      return state = { ...state, setExecutiveId: action.payload };

    case SEARCH_EMPLOYEE:
      return state = { ...state, search_employee: action.payload };

    case SEARCH_FILTERED_EXECUTIVE:
      return state = { ...state, filtered_executive: action.payload };
    case SEARCH_FILTERED_LEADS:
      return state = { ...state, filtered_leads: action.payload };

    case SET_EXECUTIVE_EMAIL_ID:
      return state = { ...state, SetExecutiveEmailId: action.payload };
    case SET_EXECUTIVE_CONTACT_NUMBER:
      return state = { ...state, SetExecutiveContactNumber: action.payload };
    case SET_EXECUTIVE_EMP_SHORT_ID:
      return state = { ...state, SetExecutiveEmpShortId: action.payload };
    default:
      return state;
  }
}
