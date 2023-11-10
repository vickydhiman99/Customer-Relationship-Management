import {
    VIEW_ALL_TASK,
    SET_ASSIGN_TO,
    SET_DUE_DATE,
    SET_TASK,
    SET_PRIORITY,
    SET_TASK_DESC,
    VIEW_ALL_TASK_BY_DATE,
    VIEW_ALL_TASK_BY_ID,
    VIEW_EXECUTIVE_BY_MANAGER,
    VIEW_LEADS_BY_EXECUTIVE,
    VIEW_ASSIGNED_BY_LEADS,
    VIEW_NEW_LEADS_BY_EXECUTIVE,
    SET_FILTERED_ALLOTMENT

} from "./constant";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";
import { set_snack_bar } from "../../common/snackbar/action";
import 'firebase/storage';

export function addTask(org_id,assign_to,due_date,leads,task,priority,task_description) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_task", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                assign_to:assign_to,
                due_date:due_date,
                leads:leads,
                task:task,
                priority:priority,
                task_description:task_description,
               

            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {

                    dispatch( viewAllTask(org_id) );
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));

                } else {
                    dispatch( viewAllTask(org_id) );
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, responseJson.message));

            })
            .catch((error) => {
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, "Check Your Internet Connection"));
                console.error(error);
            });
    };
}


export function viewAllTask(org_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_task", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id : org_id
            },
          
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_ALL_TASK, payload: responseJson.result });

                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, responseJson.message));

            })
            .catch((error) => {
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, "Check Your Internet Connection"));
                console.error(error);
            });
    };
}


export function viewAllTaskByDate(date) {
    return (dispatch) => {
        dispatch(setLoader());

        return fetch(UNIVERSAL.BASEURL + "view_all_task_by_date", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "Application/json",
                date: date
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {

                    dispatch({ type: VIEW_ALL_TASK_BY_DATE, payload: responseJson.result });
                    dispatch(unsetLoader());

                } else {
                    dispatch(set_snack_bar(true, responseJson.message));
                }
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, responseJson.message));

            })
            .catch((error) => {
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, "Check Your Internet Connection"));
                console.error(error);
            });
    };
}

export function viewTaskById(task_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_task_by_id", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                task_id: task_id
            },
           
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_ALL_TASK_BY_ID, payload: responseJson.result });
                    dispatch(set_assign_to(responseJson.result.set_assign_to));
                    dispatch(set_due_date(responseJson.result.set_due_date));
                    dispatch(set_task(responseJson.result.set_task));
                    dispatch(set_priority(responseJson.result.set_priority));
                    dispatch(set_task_desc(responseJson.result.set_task_desc));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, responseJson.message));

            })
            .catch((error) => {
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, "Check Your Internet Connection"));
                console.error(error);
            });
    };
}


export function editTask(task_id,assign_to,due_date,leads,task,priority,task_description) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "edit_task", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                task_id: task_id
            },
            body: JSON.stringify({
                assign_to:assign_to,
                due_date:due_date,
                leads:leads,
                task:task,
                priority:priority,
                task_description:task_description,

            }),
           
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch( viewAllTask(org_id) );
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));

                } else {
                    dispatch( viewAllTask(org_id) );
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, responseJson.message));

            })
            .catch((error) => {
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, "Check Your Internet Connection"));
                console.error(error);
            });
    };
}


export function deleteTask(task_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_task", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                task_id: task_id
            },
           
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch( viewAllTask(org_id) );
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch( viewAllTask(org_id) );
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, responseJson.message));

            })
            .catch((error) => {
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, "Check Your Internet Connection"));
                console.error(error);
            });
    };
}

export function assignExecutiveToManager(org_id, executive_id, manager_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "assign_executive_to_manager", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                executive_id:executive_id,
                manager_id: manager_id

            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {

                    dispatch(viewAllTask(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));

                } else {
                    dispatch(viewAllTask(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, responseJson.message));

            })
            .catch((error) => {
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, "Check Your Internet Connection"));
                console.error(error);
            });
    };
}


export function viewExecutivesByManager(manager_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "View_executives_by_manager", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                manager_id:manager_id
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {

                    dispatch({ type: VIEW_EXECUTIVE_BY_MANAGER, payload: responseJson.result });
                    dispatch(unsetLoader());
                } else {

                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, responseJson.message));

            })
            .catch((error) => {
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, "Check Your Internet Connection"));
                console.error(error);
            });
    };
}

export function viewLeadsByExecutive(executive_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "View_leads_by_executive", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                executive_id:executive_id
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {

                    dispatch({ type: VIEW_LEADS_BY_EXECUTIVE, payload: responseJson.result });
                    dispatch(unsetLoader());
                } else {

                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, responseJson.message));

            })
            .catch((error) => {
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, "Check Your Internet Connection"));
                console.error(error);
            });
    };
}

export function viewAssignedByLeads(user_id, org_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "view_assigned_by_leads", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_id: user_id,
                org_id: org_id,
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {

                    dispatch({ type: VIEW_ASSIGNED_BY_LEADS, payload: responseJson.result });
                    dispatch(unsetLoader());
                } else {

                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, responseJson.message));

            })
            .catch((error) => {
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, "Check Your Internet Connection"));
                console.error(error);
            });
    };
}

export function viewNewLeadsByExecutive(executive_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "view_new_leads_by_executive", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                executive_id: executive_id
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {

                    dispatch({ type: VIEW_NEW_LEADS_BY_EXECUTIVE, payload: responseJson.result });
                    dispatch(unsetLoader());
                } else {

                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, responseJson.message));

            })
            .catch((error) => {
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, "Check Your Internet Connection"));
                console.error(error);
            });
    };
}

export function filter_allotment(task, e) {
    return (dispatch) => {
        if (e === "") {
            dispatch({ type: SET_FILTERED_ALLOTMENT, payload: task });
        }
        else {
            const newArray = task.filter((el) => {
                return (el.status.toLowerCase().match(e.toLowerCase()));
            })
            dispatch({ type: SET_FILTERED_ALLOTMENT, payload: newArray })
        }
    };
}

export function set_assign_to(payload) {
    return {
        type: SET_ASSIGN_TO,
        payload: payload,
    };
}

export function set_due_date(payload) {
    return {
        type: SET_DUE_DATE,
        payload: payload,
    };
}
export function set_task(payload) {
    return {
        type: SET_TASK,
        payload: payload,
    };
}
export function set_priority(payload) {
    return {
        type: SET_PRIORITY,
        payload: payload,
    };
}
export function set_task_desc(payload) {
    return {
        type: SET_TASK_DESC,
        payload: payload,
    };
}


