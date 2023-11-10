import {
    //LEAD ACTION CONSTANT
    VIEW_ALL_NEW_LEADS,
    VIEW_ALL_FOLLOW_UPS_LEADS,
    VIEW_ALL_LEAD_BY_ID,
    VIEW_ALL_OLD_LEADS,
    //lead search constant
    SEARCH_NEW_LEAD,
    SEARCH_OLD_LEAD,
    // lead setter constant
    SET_NEW_LEAD_NAME,
    SET_NEW_LEAD_EMAIL,
    SET_NEW_LEAD_PHONE,
    SET_NEW_LEAD_EMPLOYEE_ID,
    SET_NEW_LEAD_SOURCE,
    SET_NEW_LEAD_STATUS,
    SET_NEW_LEAD_CATEGORY,

    //PAYMENT ACTION CONSTANT
    VIEW_ALL_PAYMENT_BY_LEAD_ID,
    //payment search action
    SEARCH_PAYMENT_LEADS,
    //payment setter action
    SET_LEAD_ID,
    SET_PAYMENT_MODE,
    SET_PAID_BY,
    SET_AMOUNT,
    SET_DATE_TIME,

    //EMAIL ACTION CONSTANT
    VIEW_ALL_EMAIL_BY_LEAD_ID,
    //email search function
    SEARCH_EMAIL_LEADS,
    //email setter action
    SET_FILE2,
    SET_SEND_TO,
    SET_SUBJECT,
    SET_TEXT,
    SET_FILE,

   //DEAL ACTION SETTER
    VIEW_ALL_DEAL_BY_ID,
    // deal setter action
    SET_DEAL_STATUS,
    
    //FOLLOW UP ACTION CONSTANT
    VIEW_LAST_FOLLOW_UP,
    //follow up search constant
    SEARCH_FOLLOW_UPS_LEADS,
    // follow up setter action
    SET_DESCRIPTION,
    SET_REMINDER,
    SET_CALL_PURPOSE,
    SET_NEXT_FOLLOW_UP_DATE,
    SET_DATE,
    SET_TIME,
    SET_DEAL_ID,

    //NOTE ACTION CONSTANT
    VIEW_ALL_NOTES_BY_LEAD_ID,
   //note serach action 
    SEARCH_NOTE_DESCRIPTION,
   // note setter action 
    SET_NOTE_DESCRIPTION,

    
} from "./constant";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";
import { set_snack_bar } from "../../common/snackbar/action";
import 'firebase/storage';

//LEAD ACTION
export function addNewLead(org_id, name,email,phone,employee_id,source,status, category) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_new_lead", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                name:name,
                email:email,
                phone:phone,
                address:address,
                employee_id:employee_id,
                source:source,
                status:status,
                category:category,
             

            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {

                    dispatch(viewAllNewLeads(org_id));
                    dispatch(viewAllFollowupsLeads(org_id));
                    dispatch(viewAllOldLeads(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));

                } else {
                    dispatch(viewAllNewLeads(org_id));
                    dispatch(viewAllFollowupsLeads(org_id));
                    dispatch(viewAllOldLeads(org_id));
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
export function viewAllNewLeads(org_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_new_leads", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id : org_id
            },
          
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_ALL_NEW_LEADS, payload: responseJson.result });

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
export function viewAllFollowupsLeads(org_id) {
    return (dispatch) => {
       dispatch(unsetLoader());

        return fetch(UNIVERSAL.BASEURL + "view_all_followups_leads", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "Application/json",
                org_id: org_id
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {

                    dispatch({ type: VIEW_ALL_FOLLOW_UPS_LEADS, payload: responseJson.result });

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
export function viewLeadById(lead_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_lead_by_id", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                lead_id: lead_id
            },
           
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_ALL_LEAD_BY_ID, payload: responseJson.result });
                    dispatch(SetNewLeadName(responseJson.result.set_new_lead_name));
                    dispatch(SetNewLeadEmail(responseJson.result.set_new_lead_email));
                    dispatch(SetNewLeadPhone(responseJson.result.set_new_lead_phone));
                    dispatch(SetNewLeadAddress(responseJson.result.set_new_lead_address));
                    dispatch(SetNewLeadEmployeeId(responseJson.result.set_new_lead_employee_id));
                    dispatch(SetNewLeadSource(responseJson.result.set_new_lead_source));
                    dispatch(SetNewLeadStatus(responseJson.result.set_new_lead_status));
                    dispatch(SetNewLeadCategory(responseJson.result.set_new_lead_category));

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
export function viewAllOldLeads(org_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_old_leads", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_ALL_OLD_LEADS, payload: responseJson.result });

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
export function updateLeadStatus(lead_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_lead_status", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                lead_id: lead_id
            },
           
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllNewLeads(org_id));
                    dispatch(viewAllFollowupsLeads(org_id));
                    dispatch(viewAllOldLeads(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));

                } else {
                    dispatch(viewAllNewLeads(org_id));
                    dispatch(viewAllFollowupsLeads(org_id));
                    dispatch(viewAllOldLeads(org_id));
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
export function updateLeadType(lead_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_lead_type", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                lead_id: lead_id
            },
           
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllNewLeads(org_id));
                    dispatch(viewAllFollowupsLeads(org_id));
                    dispatch(viewAllOldLeads(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));


                } else {
                    dispatch(viewAllNewLeads(org_id));
                    dispatch(viewAllFollowupsLeads(org_id));
                    dispatch(viewAllOldLeads(org_id));
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
//lead search function 
 export function search_new_lead(viewNewlead, e) {
    return (dispatch) => {
        // console.log(employee)
        // dispatch(setLoader());
        if (e === "") {
            dispatch({ type: SEARCH_NEW_LEAD, payload: viewNewlead });
            // dispatch(unsetLoader());

            // this.setState({ filterValue: this.props.all_model.all_model })
            //   setFilter(model.all_model);
        }
        else {
            const newArray = p.filter((el) => {
                // console.log(el.first_name)
                return (el.name.toLowerCase().includes(e.toLowerCase()));
            })
            // const array = report.fil
            dispatch({ type: SEARCH_NEW_LEAD, payload: newArray })
            // dispatch(unsetLoader());

            //   setFilter(newArray)
            // this.setState({ filterValue: newArray })
        }
    };
}
export function search_old_lead(viewAllOldlead, e) {
    return (dispatch) => {
        // console.log(employee)
        // dispatch(setLoader());
        if (e === "") {
            dispatch({ type: SEARCH_OLD_LEAD, payload: viewAllOldlead });
            // dispatch(unsetLoader());

            // this.setState({ filterValue: this.props.all_model.all_model })
            //   setFilter(model.all_model);
        }
        else {
            const newArray = p.filter((el) => {
                // console.log(el.first_name)
                return (el.name.toLowerCase().includes(e.toLowerCase()));
            })
            // const array = report.fil
            dispatch({ type: SEARCH_OLD_LEAD, payload: newArray })
            // dispatch(unsetLoader());

            //   setFilter(newArray)
            // this.setState({ filterValue: newArray })
        }
    };
}
// lead setter     
    export function SetNewLeadName(payload) {
        return {
            type: SET_NEW_LEAD_NAME,
            payload: payload,
        };
    }
    export function SetNewLeadEmail(payload) {
        return {
            type: SET_NEW_LEAD_EMAIL,
            payload: payload,
        };
    }
    export function SetNewLeadPhone(payload) {
        return {
            type: SET_NEW_LEAD_PHONE,
            payload: payload,
        };
    }
    export function SetNewLeadEmployeeId(payload) {
        return {
            type: SET_NEW_LEAD_EMPLOYEE_ID,
            payload: payload,
        };
    }
    export function SetNewLeadSource(payload) {
        return {
            type: SET_NEW_LEAD_SOURCE,
            payload: payload,
        };
    }
    export function SetNewLeadStatus(payload) {
        return {
            type: SET_NEW_LEAD_STATUS,
            payload: payload,
        };
    }
    export function SetNewLeadCategory(payload) {
        return {
            type: SET_NEW_LEAD_CATEGORY,
            payload: payload,
        };
    }
      
    
//PAYMENT ACTION
export function addLeadPayment(lead_id,admin_id,payment_mode,paid_by,amount,date_time){

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_lead_payment", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                lead_id: lead_id
            },
            body: JSON.stringify({
                admin_id:admin_id,
                payment_mode:payment_mode,     
                paid_by:paid_by,
                amount:amount,
                date_time:date_time
             

            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewLeadById(lead_id) );
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));

                } else {
                    dispatch(viewLeadById(lead_id) );
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
export function viewAllPaymentByLeadId(lead_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_payment_by_lead_id", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                lead_id: lead_id
            },
           
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_ALL_PAYMENT_BY_LEAD_ID, payload: responseJson.result });

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
//payment search function
export function search_payment_lead(viewAllPaymentbyleadId, e) {
    return (dispatch) => {
        if (e === "") {
            dispatch({ type: SEARCH_PAYMENT_LEADS, payload: viewAllPaymentbyleadId });
        } else {
            const newArray = viewAllPaymentbyleadId.filter((em) => {
                return (em.manager_name.toLowerCase().includes(e.toLowerCase()));
            });
            dispatch({ type: SEARCH_PAYMENT_LEADS, payload: newArray });

        }
    };
}
//payment setter 
export function setLeadId(payload) {
    return {
        type: SET_LEAD_ID,
        payload: payload,
    };
}
export function setPaymentMode(payload) {
    return {
        type: SET_PAYMENT_MODE,
        payload: payload,
    };
}
export function setPaidBy(payload) {
    return {
        type: SET_PAID_BY,
        payload: payload,
    };
}
export function setAmount(payload) {
    return {
        type: SET_AMOUNT,
        payload: payload,
    };
}
export function setDateTime(payload) {
    return {
        type: SET_DATE_TIME,
        payload: payload,
    };
}


// EMAIL ACTION
export function addUploadFile(lead_id,file2,admin_id,send_to,subject,text,file,date_time) {
    return dispatch => {
        dispatch(unsetLoader());
        if (file2 !== "") {
            const storageRef = ref(getStorage(), "/Email/" + lead_id + ".png")
            const uploadFile = uploadBytesResumable(storageRef, file2);
            uploadFile.on(
                "state_changed",
                function (snapshot) {
                },
                function (error) {
                    console.log(error)
                    dispatch(set_snack_bar(true, "Image Could Not Be Uploaded"));
                },
                function () {
                    getDownloadURL(uploadFile.snapshot.ref).then(function (file2) {
                        console.log(file2)
                        if (getDownloadURL(uploadFile.snapshot.ref) !== null) {
                            console.log("Adsdsad")
                            dispatch(addLeadEmail(lead_id,admin_id,send_to,subject,text,file,date_time));
                            dispatch(set_snack_bar(true, "Image Uploaded"))
                        }
                        else {
                            dispatch(set_snack_bar(true, "Image not Uploaded"));
                        }
                    });
                });
        }
        dispatch(addLeadEmail(lead_id,admin_id,send_to,subject,text,file,date_time));
    }
}
export function addLeadEmail(lead_id,admin_id,send_to,subject,text,file,date_time) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_lead_email", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                lead_id: lead_id
            },
            body: JSON.stringify({
                admin_id:admin_id,
                send_to:send_to,
                subject:subject,
                text:text,
                file:file,
                date_time:date_time,
             

            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {

                    dispatch(viewAllEmailByLeadId(lead_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));

                } else {
                    dispatch(viewAllEmailByLeadId(lead_id));
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
export function viewAllEmailByLeadId(lead_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_email_by_lead_id", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                lead_id: lead_id
            },
           
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_ALL_EMAIL_BY_LEAD_ID, payload: responseJson.result });

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
// email search function
export function search_email_lead(viewemailLead, e) {
    return (dispatch) => {
        if (e === "") {
            dispatch({ type: SEARCH_EMAIL_LEADS, payload: viewemailLead });
        } else {
            const newArray = viewemailLead.filter((em) => {
                return (em.manager_name.toLowerCase().includes(e.toLowerCase()));
            });
            dispatch({ type: SEARCH_EMAIL_LEADS, payload: newArray });

        }
    };
}
//email setter 
export function setFile2(payload) {
    return {
        type: SET_FILE2,
        payload: payload,
    };
}
export function setSendTo(payload) {
    return {
        type: SET_SEND_TO,
        payload: payload,
    };
}
export function setSubject(payload) {
    return {
        type: SET_SUBJECT,
        payload: payload,
    };
}
export function setText(payload) {
    return {
        type: SET_TEXT,
        payload: payload,
    };
}
export function setFile(payload) {
    return {
        type: SET_FILE,
        payload: payload,
    };
}


//DEAL ACTION
export function createLeadDeal(lead_id,product_name, admin_id, product_price, deal_status) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "create_lead_deal", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                lead_id: lead_id
            },
            body: JSON.stringify({
                product_name:product_name,
                admin_id:admin_id,
                product_price:product_price,
                deal_status:deal_status
             

            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {

                    dispatch(viewAllDealsByLeadId(lead_id) );
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));

                } else {
                    dispatch(viewAllDealsByLeadId(lead_id) );
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
export function viewAllDealsByLeadId(lead_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_deals_by_lead_id", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                lead_id: lead_id
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_ALL_DEAL_BY_ID, payload: responseJson.result });

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
//deal setter (product_name and product_price setter already in product page)
export function setDealStatus(payload) {
    return {
        type: SET_DEAL_STATUS,
        payload: payload,
   
    };
}


// FOLLOW UP ACTION
export function addFollowUp(lead_id,admin_id,description,reminder,call_purpose,next_followup_date,date,time,deal_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_followup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                lead_id: lead_id
            },
            body: JSON.stringify({
                admin_id: admin_id,
                description: description,
                reminder: reminder,
                call_purpose: call_purpose,
                next_followup_date: next_followup_date,
                date:date,
                time:time,
                deal_id:deal_id

            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {

                    dispatch(viewLastFollowup(lead_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));

                } else {
                    dispatch(viewLastFollowup(lead_id));
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
export function viewLastFollowup(lead_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_last_followup", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                lead_id: lead_id
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_LAST_FOLLOW_UP, payload: responseJson.result });

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
  //follow up search function
export function search_followup_lead(viewFollowUplead, e) {
    return (dispatch) => {
        // console.log(employee)
        // dispatch(setLoader());
        if (e === "") {
            dispatch({ type: SEARCH_FOLLOW_UPS_LEADS, payload: viewFollowUplead });
            // dispatch(unsetLoader());

            // this.setState({ filterValue: this.props.all_model.all_model })
            //   setFilter(model.all_model);
        }
        else {
            const newArray = viewFollowUplead.filter((el) => {
                // console.log(el.first_name)
                return (el.name.toLowerCase().includes(e.toLowerCase()));
            })
            // const array = report.fil
            dispatch({ type: SEARCH_FOLLOW_UPS_LEADS, payload: newArray })
            // dispatch(unsetLoader());

            //   setFilter(newArray)
            // this.setState({ filterValue: newArray })
        }
    };
 }
//follow up setter
export function setDescription(payload) {
    return {
        type: SET_DESCRIPTION,
        payload: payload,
    };
}
export function setReminder(payload) {
    return {
        type: SET_REMINDER,
        payload: payload,
    };
}
export function setCallPurpose(payload) {
    return {
        type: SET_CALL_PURPOSE,
        payload: payload,
    };
}
export function setNextFollowUpDate(payload) {
    return {
        type: SET_NEXT_FOLLOW_UP_DATE,
        payload: payload,
    };
}
export function setDate(payload) {
    return {
        type: SET_DATE,
        payload: payload,
    };
}
export function setTime(payload) {
    return {
        type: SET_TIME,
        payload: payload,
    };
}
export function setDealId(payload) {
    return {
        type: SET_DEAL_ID,
        payload: payload,
    };
}

// NOTE ACTION
export function addLeadNote(lead_id,admin_id,date_time,note_description) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_lead_note", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                lead_id: lead_id
            },
            body: JSON.stringify({
                admin_id:admin_id,
                date_time: date_time,
                note_description:note_description
             

            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {

                    dispatch(viewAllNotesByLeadId(lead_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));

                } else {
                    dispatch(viewAllNotesByLeadId(lead_id));
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
export function viewAllNotesByLeadId(lead_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_notes_by_lead_id", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                lead_id: lead_id
            },
           
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_ALL_NOTES_BY_LEAD_ID, payload: responseJson.result });

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
//note search function
 export function search_note_description(viewAllNotesByLeadId, n) {
    return (dispatch) => {
      if (n==="") {
       
        dispatch({ type:SEARCH_NOTE_DESCRIPTION, payload: viewAllNotesByLeadId});
      } else {
        const newArray = viewAllManager.filter((em) => {
          return (em.note_description.toLowerCase().includes(e.toLowerCase()));
        });
        dispatch({ type:SEARCH_NOTE_DESCRIPTION, payload: newArray });
      }
    };
}
//note setter
export function setNoteDescription(payload) {
    return {
        type: SET_NOTE_DESCRIPTION,
        payload: payload,
    };
}



