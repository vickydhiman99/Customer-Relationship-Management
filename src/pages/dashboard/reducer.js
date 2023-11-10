import {
  // SET_BATTERY,
  // SET_BATTERY_DETAILS
} from "./constant";
const initial_state = {
  // all_battery: [],
  // battery_details: []
};
export default function reducer(state = initial_state, action) {
  switch (action.type) {

    // case SET_BATTERY:
    //   return state = { ...state, all_battery: action.payload };
    // case SET_BATTERY_DETAILS:
    //   return state = { ...state, battery_details: action.payload };

    default:
      return state;
  }
}