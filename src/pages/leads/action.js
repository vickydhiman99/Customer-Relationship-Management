import {
    SET_CLIENTS,
    SET_CLIENTS_FOLLOWUP,
    SET_CLIENT_ID,
    SET_ALL_CLIENT_DETAILS,
    SET_CLIENT_NAME,
    SET_FILTERED_ALL_CLIENT_DETAILS,
    SET_NEW_CLIENT,
    SET_CONF_CLIENT,
    SET_RTO_REG,
    SET_NUM_PLATE
} from "./constant";
// import { user_id } from "../../../auth/reducer"
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";
// import { set_snack_bar } from "../../../common/snackbar/action"
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import 'firebase/storage';
import { set_snack_bar } from "../../common/snackbar/action";
// import firebase from 'firebase/app'


export function addLeadClient(admin_id, org_id, name, company, phone, email, location, source, type, status, message, model_id, follow_up_date) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_client", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                admin_id: admin_id,
                org_id: org_id,
                name: name,
                company: company,
                phone: phone,
                email: email,
                location: location,
                source: source,
                type: type,
                status: status,
                message: message,
                model_id: model_id,
                follow_up_date: follow_up_date
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {
                    dispatch(viewNewClients(admin_id, org_id));
                    dispatch(viewTotalConverted(admin_id,org_id));
                    dispatch(viewAllClients(admin_id,org_id));
                    dispatch(viewAlltheClients(admin_id,org_id));
                    dispatch(set_snack_bar(responseJson.status, "Lead Added Successfully"));
                    dispatch(unsetLoader());
                } else {
                    // alert("No Registration Found! Please Register First");
                    // dispatch({ type: SET_USER, payload: [] })
                    dispatch(set_snack_bar(responseJson.status, "Number already exists "));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}


export function updateClient(client_id, model_id, name, company, phone, email, location, source, admin_id) {
    return (dispatch) => {
        dispatch(setLoader());
        // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
        return fetch(UNIVERSAL.BASEURL + "update_client", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                client_id: client_id,
                model_id: model_id,
                name: name,
                company: company,
                phone: phone,
                email: email,
                location: location,
                source: source,


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {
                    dispatch(viewAllClients(admin_id));
                    dispatch(viewAlltheClients(admin_id));
                    // dispatch(viewAllClients(admin_id));
                    // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    dispatch(unsetLoader());
                } else {
                    // alert("No Registration Found! Please Register First");
                    // dispatch({ type: SET_USER, payload: [] })
                    // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
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


//                 }
//                 dispatch(unsetLoader());
//                 dispatch(set_snack_bar(true,responseJson.message));

//             })
//             .catch((error) => {
//                 dispatch(unsetLoader());
//                 dispatch(set_snack_bar(true,"Check Your Internet Connection"));
//                 console.error(error);
//          
//     };
// }

export function updateNewFollowup(client_id, follow_up_date, type, status, message, admin_id, org_id) {
    console.log(follow_up_date);
    return (dispatch) => {
        dispatch(setLoader());
        //     var date=new Date()
        //   console.log(date)

        // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
        return fetch(UNIVERSAL.BASEURL + "update_client_followup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                client_id: client_id,
                follow_up_date: follow_up_date,
                type: type,
                status: status,
                message: message,
                admin_id: admin_id,
                org_id: org_id,
            })
        })

            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {
                    // dispatch(viewClientsFollowup(client_id));
                    dispatch(viewNewClients(admin_id, org_id));
                    dispatch(viewTotalConverted(admin_id,org_id));
                    dispatch(viewAllClients(admin_id,org_id));
                    dispatch(viewAlltheClients(admin_id,org_id));
                    // dispatch(viewAllOrder());
                    console.log(responseJson);
                    dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    dispatch(unsetLoader());
                } else {
                    // alert("No Registration Found! Please Register First");
                    dispatch(set_snack_bar(responseJson.status, "Invalid User"));
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

// export function deleteOrder(_id) {
//     return (dispatch) => {
//         dispatch(setLoader());
//         // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
//         return fetch(UNIVERSAL.BASEURL + "delete_order", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 id: _id,
//             })
//         })
//             .then((response) => response.json())
//             .then((responseJson) => {

//                 if (responseJson.status) {
//                     dispatch(viewAllOrder());
//                     // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
//                     dispatch(unsetLoader());
//                 } else {
//                     // alert("No Registration Found! Please Register First");
//                     // dispatch({ type: SET_USER, payload: [] })
//                     // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
//                 }
//                 dispatch(unsetLoader());
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };
// }

export function viewAllClients(admin_id, org_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_today_client", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                admin_id: admin_id,
                org_id: org_id
            })

        })
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {
                    console.log("1st", responseJson.result);
                    dispatch({ type: SET_CLIENTS, payload: responseJson.result });
                    dispatch(setClientId(responseJson.result._id));
                    dispatch(set_snack_bar(responseJson.status, "View Leads Successfully"));
                    dispatch(unsetLoader());
                } else {
                    // alert("No Registration Found! Please Register First");
                    dispatch({ type: SET_CLIENTS, payload: [] })
                    dispatch(set_snack_bar(responseJson.status, "Lead details not found"));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function setClientId(payload) {
    return {
        type: SET_CLIENT_ID,
        payload: payload
    }
}

export function viewClientsFollowup(client_id,) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_client_followup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                client_id: client_id
            })

        })
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {
                    console.log("2nd", responseJson.result);
                    dispatch({ type: SET_CLIENTS_FOLLOWUP, payload: responseJson.result });
                    dispatch(set_snack_bar(responseJson.status, "View Leads Successfully"));
                    dispatch(unsetLoader());
                } else {
                    // alert("No Registration Found! Please Register First");
                    dispatch({ type: SET_CLIENTS_FOLLOWUP, payload: [] })
                    dispatch(set_snack_bar(responseJson.status, "Lead details not found"));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function viewAlltheClients(admin_id, org_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_client_details", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                admin_id: admin_id,
                org_id: org_id,
            })


        })
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {
                    console.log("23", responseJson);
                    dispatch({ type: SET_ALL_CLIENT_DETAILS, payload: responseJson.result });
                    // dispatch(setClientId(responseJson.result._id));
                    dispatch(set_snack_bar(responseJson.status, "View Leads Successfully"));
                    dispatch(unsetLoader());
                } else {
                    // alert("No Registration Found! Please Register First");
                    dispatch({ type: SET_ALL_CLIENT_DETAILS, payload: [] })
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function viewNewClients(admin_id, org_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_new_leads", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                admin_id: admin_id,
                org_id: org_id,
            })


        })
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {
                        console.log("23", responseJson);
                        dispatch({ type: SET_NEW_CLIENT, payload: responseJson.result })
                    // dispatch(setClientId(responseJson.result._id));
                    dispatch(set_snack_bar(responseJson.status, "Count Leads Successfully"));
                    dispatch(unsetLoader());
                } else {
                    // alert("No Registration Found! Please Register First");
                    dispatch({ type: SET_NEW_CLIENT, payload: [] })
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function viewTotalConverted(admin_id, org_id) {
    return (dispatch) => {
        dispatch(setLoader());
        // console.log("call")
        return fetch(UNIVERSAL.BASEURL + "view_all_convert_client", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                admin_id: admin_id,
                org_id: org_id,
            })


        })
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {
                        dispatch({ type: SET_CONF_CLIENT, payload: responseJson.result });
                    // dispatch(setClientId(responseJson.result._id));
                    dispatch(set_snack_bar(responseJson.status, "Fetch Successfully"));
                    dispatch(unsetLoader());
                } else {
                    // alert("No Registration Found! Please Register First");
                    dispatch({ type: SET_CONF_CLIENT, payload: [] })
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
export function setClientName(payload) {
    return {
        type: SET_CLIENT_NAME,
        payload: payload
    }
}

export function searchNAME(all_client_details, e) {
    return (dispatch) => {
        // dispatch(setLoader());
        if (e.target.value === "") {
            dispatch({ type: SET_FILTERED_ALL_CLIENT_DETAILS, payload: all_client_details });
            // dispatch(unsetLoader());

            // this.setState({ filterValue: this.props.all_model.all_model })

            //   setFilter(model.all_model);
        }
        else {
            const newArray = all_client_details.filter((el) => {
                return (el.name.toLowerCase().includes(e.target.value.toLowerCase()));
            })
            dispatch({ type: SET_FILTERED_ALL_CLIENT_DETAILS, payload: newArray })
            // dispatch(unsetLoader());

            //   setFilter(newArray)
            // this.setState({ filterValue: newArray })
        }
    };
}


export function filter_status(all_client_details, status) {
    return (dispatch) => {
        // dispatch(setLoader());
        if (status === "") {
            dispatch({ type: SET_FILTERED_ALL_CLIENT_DETAILS, payload: all_client_details });
            // dispatch(unsetLoader());

            // this.setState({ filterValue: this.props.all_model.all_model })
            //   setFilter(model.all_model);
        }
        else {
            const newArray = all_client_details.filter((el) => {
                return (el.status.toLowerCase().match(status.toLowerCase()));
            })
            dispatch({ type: SET_FILTERED_ALL_CLIENT_DETAILS, payload: newArray })
            // dispatch(unsetLoader());

            //   setFilter(newArray)
            // this.setState({ filterValue: newArray })
        }
    };
}

export function filter_type(all_client_details, type) {
    return (dispatch) => {
        // dispatch(setLoader());
        if (type === "") {
            dispatch({ type: SET_FILTERED_ALL_CLIENT_DETAILS, payload: all_client_details });
            // dispatch(unsetLoader());

            // this.setState({ filterValue: this.props.all_model.all_model })
            //   setFilter(model.all_model);
        }
        else {
            const newArray = all_client_details.filter((el) => {
                return (el.type.toLowerCase().match(type.toLowerCase()));
            })
            dispatch({ type: SET_FILTERED_ALL_CLIENT_DETAILS, payload: newArray })
            // dispatch(unsetLoader());

            //   setFilter(newArray)
            // this.setState({ filterValue: newArray })
        }
    };
}

export function viewAllRtoReg(admin_id,org_id) {
    return (dispatch) => {
        dispatch(setLoader());
        console.log(admin_id, org_id)
        return fetch(UNIVERSAL.BASEURL + "view_all_rto_book", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                admin_id: admin_id,
                org_id: org_id,

            })

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.status) {
                    // dispatch(setuser(responseJson.result));
                    dispatch({ type: SET_RTO_REG, payload: responseJson.result });
                    // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    dispatch(unsetLoader());
                } else {
                    // alert("No Registration Found! Please Register First");
                    dispatch({ type: SET_RTO_REG, payload: [] })
                dispatch(unsetLoader());

                    // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
                }
                dispatch(unsetLoader());
                // console.log(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function viewAllNumPlate(admin_id,org_id) {
    return (dispatch) => {
        dispatch(setLoader());
        console.log(admin_id, org_id)
        return fetch(UNIVERSAL.BASEURL + "view_all_no_book", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                admin_id: admin_id,
                org_id: org_id,

            })

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.status) {
                    // dispatch(setuser(responseJson.result));
                    dispatch({ type: SET_NUM_PLATE, payload: responseJson.result });
                    // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    dispatch(unsetLoader());
                } else {
                    // alert("No Registration Found! Please Register First");
                    dispatch({ type: SET_NUM_PLATE, payload: [] })
                dispatch(unsetLoader());

                    // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
                }
                dispatch(unsetLoader());
                // console.log(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    };
}



