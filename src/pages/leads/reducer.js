import {
  SET_CLIENTS,
  SET_CLIENTS_FOLLOWUP,
  SET_CLIENT_ID,
  SET_ALL_CLIENT_DETAILS,
  SET_FILTERED_ALL_CLIENT_DETAILS,
  SET_CLIENT_NAME,
  SET_NEW_CLIENT,
  SET_CONF_CLIENT,
  SET_RTO_REG,
  SET_NUM_PLATE
} from "./constant";
const initial_state = {
  clients_details: [],
  clients_followup: [],
  client_id:"",
  all_client_details:[],
  client_name:"",
  filtered_lead:[],
  new_leads: [],
  conf_leads: [],  
  rto_reg: [],
  num_plate: []
};
export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_CLIENTS:
      return state = { ...state, clients_details: action.payload };
    case SET_CLIENTS_FOLLOWUP:
      return state = { ...state, clients_followup: action.payload };
    case SET_CLIENT_ID:
      return state = { ...state, client_id: action.payload };
    case SET_ALL_CLIENT_DETAILS:
      return state = { ...state, all_client_details: action.payload,filtered_lead: action.payload };
    case SET_CLIENT_NAME:
      return state = { ...state, client_name: action.payload };
    case SET_FILTERED_ALL_CLIENT_DETAILS:
      return state = { ...state, filtered_lead: action.payload };
    case SET_NEW_CLIENT:
      return state = { ...state, new_leads: action.payload };
      case SET_CONF_CLIENT:
      return state = { ...state, conf_leads: action.payload };
    case SET_RTO_REG:
      return state = { ...state, rto_reg: action.payload };
    case SET_NUM_PLATE:
      return state = { ...state, num_plate: action.payload };
    default:
      return state;
  }
}
