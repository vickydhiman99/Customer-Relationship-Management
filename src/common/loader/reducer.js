import {
  LOADER,
} from "./constant";
const initial_state = {
  open: false,
};
export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case LOADER:
      return state = { ...state, open: action.payload, };
    default:
      return state;
  }
}
