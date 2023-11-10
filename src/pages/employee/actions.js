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
    SET_MANAGER_CATAGORY_ID,
    SET_MANAGER_ID,
    SET_EXECUTIVE_NAME,
    SET_EXECUTIVE_ID,
    SET_EXECUTIVE_EMAIL_ID,
    SET_EXECUTIVE_CONTACT_NUMBER,
    SET_EXECUTIVE_EMP_SHORT_ID,
} from "./constant";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";
import { set_snack_bar } from "../../common/snackbar/action";
import 'firebase/storage';

//Employee Action
export function addManager(org_id, manager_name, email_id, contact_number, emp_shortId, category_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "add_manager", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                manager_name: manager_name,
                email_id: email_id,
                contact_number: contact_number,
                emp_shortId: emp_shortId,
                category_id: category_id
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllManager(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewAllManager(org_id));
                    dispatch(unsetLoader());
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
export function updateManager(org_id, manager_id, manager_name, email_id, contact_number, emp_shortId, category_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "update_manager", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                _id: manager_id,
                manager_name: manager_name,
                email_id: email_id,
                contact_number: contact_number,
                emp_shortId: emp_shortId,
                category_id: category_id
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllManager(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewAllManager(org_id));
                    dispatch(unsetLoader());
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
export function viewAllManager(org_id) {
    return (dispatch) => {
        dispatch(unsetLoader());

        return fetch(UNIVERSAL.BASEURL + "view_all_manager", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "Application/json",
                org_id: org_id
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_ALL_MANAGER, payload: responseJson.result });
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
export function viewManagerById(manager_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "view_manager_by_id", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                manager_id: manager_id
            },
            body: JSON.stringify({

            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_ALL_MANAGER_BY_ID, payload: responseJson.result });
                    dispatch(setManagerName(responseJson.result.set_manager_name));
                    dispatch(SetManagerEmailId(responseJson.result.SetManagerEmailId));
                    dispatch(SetManagerContactNumber(responseJson.result.SetManagerContactNumber));
                    dispatch(SetManagerEmpShortId(responseJson.result.SetManagerEmpShortId));
                    dispatch(SetManagerCatagoryId(responseJson.result.SetManagerCatagoryId));
                    dispatch(setManagerId(responseJson.result.setManagerName));
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
export function bulkDeleteManager(org_id, manager_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "bulk_delete_manager", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                _id: manager_id
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllManager(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewAllManager(org_id));
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
export function deleteManager(org_id, manager_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_manager", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                _id: manager_id
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllManager(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewAllManager(org_id));
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
export function addExecutive(org_id, executive_name, email_id, contact_number, emp_shortId, manager_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "add_executive", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                executive_name: executive_name,
                email_id: email_id,
                contact_number: contact_number,
                emp_shortId: emp_shortId,
                manager_id: manager_id
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllExecutive(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewAllExecutive(org_id));
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
export function updateExecutive(org_id,executive_id,executive_name,email_id,contact_number,emp_shortId,manager_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "update_executive", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                _id: executive_id,
                executive_name: executive_name,
                email_id: email_id,
                contact_number: contact_number,
                emp_shortId: emp_shortId,
                manager_id: manager_id
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllExecutive(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewAllExecutive(org_id));
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
export function viewAllExecutive(org_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_executive", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_ALL_EXECUTIVE, payload: responseJson.result });

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
export function viewExecutiveById(executive_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "view_executive_by_id", {
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
                    dispatch({ type: VIEW_ALL_EXECUTIVE_BY_ID, payload: responseJson.result });
                    dispatch(setExecutiveName(responseJson.result.setExecutiveName));
                    dispatch(setExecutiveId(responseJson.result.setExecutiveId));
                    dispatch(SetExecutiveEmailId(responseJson.result.SetExecutiveEmailId));
                    dispatch(SetExecutiveContactNumber(responseJson.result.SetExecutiveContactNumber));
                    dispatch(SetManagerEmpShortId(responseJson.result.SetManagerEmpShortId));
                    dispatch(SetManagerCatagoryId(responseJson.result.SetManagerCatagoryId));
                    dispatch(setManagerId(responseJson.result.setManagerName));
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
export function bulkDeleteExecutive(org_id, executive_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "bulk_delete_executive", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },

            body: JSON.stringify({
                _id: executive_id
            }),

        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllExecutive(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewAllExecutive(org_id));
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
export function deleteExecutive(org_id, executive_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_executive", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },

            body: JSON.stringify({
                _id: executive_id
            }),

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllExecutive(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewAllExecutive(org_id));
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
export function viewAllLeadsByExecutive(org_id, executive_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_leads_by_executive", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },

            body: JSON.stringify({
                _id: executive_id
            }),

        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllExecutive(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewAllExecutive(org_id));
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
export function viewAllExecutiveByManager(org_id, manager_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_executive_by_manager", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },

            body: JSON.stringify({
                manager_id: manager_id
            }),

        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllExecutive(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewAllExecutive(org_id));
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


//Employee search action 
export function search_manager(viewAllManager, e) {
    return (dispatch) => {
        if (e === "") {
            dispatch({ type: SEARCH_EMPLOYEE, payload: viewAllManager });
        } else {
            const newArray = viewAllManager.filter((em) => {
                return (em.manager_name.toLowerCase().includes(e.toLowerCase()));
            });
            dispatch({ type: SEARCH_EMPLOYEE, payload: newArray });

        }
    };
}
export function search_executive(viewAllExecutive, e) {
    return (dispatch) => {
        if (e === "") {
            dispatch({ type: SEARCH_EMPLOYEE, payload: viewAllExecutive });
        } else {
            const newArray = viewAllExecutive.filter((ex) => {
                return (ex.executive_name.toLowerCase().includes(e.toLowerCase()));
            });
            dispatch({ type: SEARCH_EMPLOYEE, payload: newArray });
        }
    };
}
export function filter_executive(viewAllManagerById, e) {
    return (dispatch) => {
        if (e === "") {
            dispatch({ type: SEARCH_FILTERED_EXECUTIVE, payload: viewAllManagerById });
        }
        else {
            const newArray = viewAllManagerById.filter((el) => {
                return (el.status.toLowerCase().match(e.toLowerCase()));
            })
            dispatch({ type: SEARCH_FILTERED_EXECUTIVE, payload: newArray })
        }
    };
}
export function filter_leads(viewAllExecutiveById, e) {
    return (dispatch) => {
        if (e === "") {
            dispatch({ type: SEARCH_FILTERED_LEADS, payload: viewAllExecutiveById });
        }
        else {
            const newArray = viewAllExecutiveById.filter((el) => {
                return (el.status.toLowerCase().match(e.toLowerCase()));
            })
            dispatch({ type: SEARCH_FILTERED_LEADS, payload: newArray })
        }
    };
}


//Employee setter 
export function setManagerName(payload) {
    return {
        type: SET_MANAGER_NAME,
        payload: payload,
    };
}
export function SetManagerEmailId(payload) {
    return {
        type: SET_MANAGER_EMAIL_ID,
        payload: payload,
    };
}
export function SetManagerContactNumber(payload) {
    return {
        type: SET_MANAGER_CONTACT_NUMBER,
        payload: payload,
    };
}
export function SetManagerEmpShortId(payload) {
    return {
        type: SET_MANAGER_EMP_SHORT_ID,
        payload: payload,
    };
}
export function SetManagerCatagoryId(payload) {
    return {
        type: SET_MANAGER_CATAGORY_ID,
        payload: payload,
    };
}
export function setManagerId(payload) {
    return {
        type: SET_MANAGER_ID,
        payload: payload,
    };
}
export function setExecutiveName(payload) {
    return {
        type: SET_EXECUTIVE_NAME,
        payload: payload,
    };
}
export function setExecutiveId(payload) {
    return {
        type: SET_EXECUTIVE_ID,
        payload: payload,
    };
}
export function SetExecutiveEmailId(payload) {
    return {
        type: SET_EXECUTIVE_EMAIL_ID,
        payload: payload,
    };
}
export function SetExecutiveContactNumber(payload) {
    return {
        type: SET_EXECUTIVE_CONTACT_NUMBER,
        payload: payload,
    };
}
export function SetExecutiveEmpShortId(payload) {
    return {
        type: SET_EXECUTIVE_EMP_SHORT_ID,
        payload: payload,
    };
}