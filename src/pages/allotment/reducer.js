import {
  VIEW_ALL_TASK,
  VIEW_ALL_TASK_BY_DATE,
  VIEW_ALL_TASK_BY_ID,
  VIEW_EXECUTIVE_BY_MANAGER,
  VIEW_LEADS_BY_EXECUTIVE,
  VIEW_ASSIGNED_BY_LEADS,
  VIEW_NEW_LEADS_BY_EXECUTIVE,
  SET_FILTERED_ALLOTMENT,
  SET_ASSIGN_TO,
  SET_DUE_DATE,
  SET_TASK,
  SET_PRIORITY,
  SET_TASK_DESC


} from "./constant";
const initial_state = {

  task: [],
  view_all_task_by_date: [],
  view_all_task_by_id: [],
  view_executives_by_manager: [],
  view_leads_by_executive: [],
  view_assigned_by_leads: [],
  view_new_leads_by_executive: [],
  filtered_allotment: [],
  set_assign_to: "",
  set_due_date: "",
  set_task: "",
  set_priority: "",
  set_task_desc: "",


};
export default function reducer(state = initial_state, action) {
  switch (action.type) {

    case VIEW_ALL_TASK:
      return state = { ...state, task: action.payload, filtered_allotment: action.payload  };
    case SET_FILTERED_ALLOTMENT:
      return state = { ...state, filtered_allotment: action.payload };
    case VIEW_ALL_TASK_BY_DATE:
      return state = { ...state, view_all_task_by_date: action.payload };
    case VIEW_ALL_TASK_BY_ID:
      return state = { ...state, view_all_task_by_id: action.payload };
    case VIEW_EXECUTIVE_BY_MANAGER:
      return state = { ...state, view_executives_by_manager: action.payload };
    case VIEW_LEADS_BY_EXECUTIVE:
      return state = { ...state, view_leads_by_executive: action.payload };
    case VIEW_ASSIGNED_BY_LEADS:
      return state = { ...state, view_assigned_by_leads: action.payload };
    case VIEW_NEW_LEADS_BY_EXECUTIVE:
      return state = { ...state, view_new_leads_by_executive: action.payload };

    case SET_ASSIGN_TO:
      return state = { ...state, set_assign_to: action.payload };
    case SET_DUE_DATE:
      return state = { ...state, set_due_date: action.payload };
    case SET_TASK:
      return state = { ...state, set_task: action.payload };
    case SET_PRIORITY:
      return state = { ...state, set_priority: action.payload };
    case SET_TASK_DESC:
      return state = { ...state, set_task_desc: action.payload };




    default:
      return state;
  }
}
