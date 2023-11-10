import {
    
    //bank action constant
    VIEW_ALL_BANK,
    VIEW_ALL_BANK_BY_ID,
    //BANK SETTER CONSTANT
    SET_BANK_NAME,
    SET_ACCOUNT_NUMBER,
    SET_ACCOUNT_HOLDER_NAME,
    SET_BRANCH,
    SET_IFSC_CODE,
    SET_BANK_ID,

    //upi action constant
    VIEW_ALL_UPI,
    VIEW_ALL_UPI_BY_ID,
    //upi setter constant   
    SET_UPI_ID,
    SET_QR_ID,

    //Category
    CATEGORY,
    //category setter
    SET_CATEGORY_ID,
    SET_CATEGORY_NAME,
    //Templet
    VIEW_ALL_WHATSAPP_TEMPLET,
    //Templete setter
    SET_TEMP_LINK,
    SET_TEMP_NAME,
    SET_TEMP_DESC,
    //Details
    VIEW_ALL_PERSONAL_DETAILS,
    //Details setter
    SET_DETAILS_LINK,
    SET_DETAILS_NAME,
    SET_DETAILS_DESC,
    //SMS
    VIEW_ALL_SMS,
    //SMS setter
    SET_SMS_LINK,
    SET_SMS_NAME,
    SET_SMS_DESC


} from "./constant";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";
import { set_snack_bar } from "../../common/snackbar/action";
import 'firebase/storage';
// import { set_snack_bar } from "../../../common/snackbar/action";
import { viewUserOrgDetails } from "../../auth/actions"

// import { set_snack_bar } from "../../common/snackbar/action";
// import { getStorage,ref,uploadBytesResumable,getDownloadURL   } from "firebase/storage";
// import 'firebase/storage';
// import firebase from 'firebase/app'

export function uploadAdminImage(org_id, name, admin_id, img, email, phone) {
    return dispatch => {
        dispatch(unsetLoader());
        if (admin_img !== "") {
            const storageRef = ref(getStorage(), "/admin_img/" + admin_id + ".png")
            const uploadAdminImage = uploadBytesResumable(storageRef, admin_img);
            uploadAdminImage.on(
                "state_changed",
                function (snapshot) {
                },
                function (error) {
                    console.log(error)
                    dispatch(set_snack_bar(true, "Image Could Not Be Uploaded"));
                },
                function () {
                    getDownloadURL(uploadProductImg.snapshot.ref).then(function (admin_img) {
                        console.log(admin_img)
                        if (getDownloadURL(uploadProductImg.snapshot.ref) !== null) {
                            console.log("Adsdsad")
                            dispatch(adminEdit(org_id, name, admin_id, img, email, phone));
                            // dispatch(set_snack_bar(true, "Image Uploaded"))
                        }
                        else {
                            dispatch(set_snack_bar(true, "Image not Uploaded"));
                        }
                    });
                });
        }
        dispatch(adminEdit(org_id, name, admin_id, img, email, phone));
    }
}
export function uploadOrgEdit(org_id, name, img, email, phone, gstin_no) {
    return dispatch => {
        dispatch(unsetLoader());
        if (org_img !== "") {
            const storageRef = ref(getStorage(), "/org_img/" + org_id + ".png")
            const uploadOrgEdit = uploadBytesResumable(storageRef, org_img);
            uploadOrgEdit.on(
                "state_changed",
                function (snapshot) {
                },
                function (error) {
                    console.log(error)
                    dispatch(set_snack_bar(true, "Image Could Not Be Uploaded"));
                },
                function () {
                    getDownloadURL(uploadProductImg.snapshot.ref).then(function (org_img) {
                        console.log(org_img)
                        if (getDownloadURL(uploadProductImg.snapshot.ref) !== null) {
                            console.log("Adsdsad")
                            dispatch(orgEdit(org_id, name, img, email, phone, gstin_no));
                            // dispatch(set_snack_bar(true, "Image Uploaded"))
                        }
                        else {
                            dispatch(set_snack_bar(true, "Image not Uploaded"));
                        }
                    });
                });
        }
        dispatch(orgEdit(org_id, name, img, email, phone, gstin_no));
    }
}

export function adminEdit(org_id, name, admin_id, img, email, phone) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "admin_edit", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                name: name,
                admin_id: admin_id,
                img: img,
                email: email,
                phone: phone,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewUserOrgDetails(user_id, org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewUserOrgDetails(user_id, org_id));
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

export function orgEdit(org_id, name, img, email, phone, gstin_no) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "org_edit", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                name: name,
                gstin_no: gstin_no,
                img: img,
                email: email,
                phone: phone,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewUserOrgDetails(user_id, org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewUserOrgDetails(user_id, org_id));
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


//Bank details

export function addBank(org_id,bank_name,account_number,account_holder_name,branch,ifsc_code) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "add_bank", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                bank_name: bank_name,
                account_number:account_number,
                account_holder_name: account_holder_name,
                branch: branch,
                ifsc_code: ifsc_code,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch( viewAllBank(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch( viewAllBank(org_id));
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

export function viewAllBank(org_id){

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_bank", {
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
                dispatch({ type: VIEW_ALL_BANK, payload: responseJson.result });
                dispatch(unsetLoader());
            } else {
                dispatch({ type: VIEW_ALL_BANK, payload: [] })
            }
            dispatch(unsetLoader());
        })
        .catch((error) => {
            dispatch(unsetLoader());
            dispatch(set_snack_bar(true, "Check Your Internet Connection"));
            console.error(error);
            });
    };
}

export function viewAllBankById(bank_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_bank_by_id", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                bank_id: bank_id
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_ALL_BANK_BY_ID, payload: responseJson.result });

                } else {
                    dispatch({ type: VIEW_ALL_BANK_BY_ID, payload: [] });
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

export function updateBank(org_id,bank_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_bank", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                bank_id: bank_id
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch( viewAllBank(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));


                } else {
                    dispatch( viewAllBank(org_id));
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

export function deleteBank(org_id,bank_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_bank", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                bank_id: bank_id
            },

        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.status) {
                dispatch( viewAllBank(org_id));
                dispatch(unsetLoader());
                dispatch(set_snack_bar(responseJson.status, responseJson.message));
            } else {
                dispatch( viewAllBank(org_id));
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

export function bulkDeleteBank(org_id, bank_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "bulk_delete_bank", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                bank_id: bank_id
            },

        }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.status) {
                dispatch( viewAllBank(org_id));
                dispatch(unsetLoader());
                dispatch(set_snack_bar(responseJson.status, responseJson.message));
            } else {
                dispatch( viewAllBank(org_id));
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



// BANK SETTER
export function setBankName(payload) {
    return {
        type: SET_BANK_NAME,
        payload: payload,
    };
}
export function setAccountNumber(payload) {
    return {
        type: SET_ACCOUNT_NUMBER,
        payload: payload,
    };
}
export function setAccountHolderName(payload) {
    return {
        type: SET_ACCOUNT_HOLDER_NAME,
        payload: payload,
    };
}
export function setBranch(payload) {
    return {
        type: SET_BRANCH,
        payload: payload,
    };
}
export function setIfscCode(payload) {
    return {
        type: SET_IFSC_CODE,
        payload: payload,
    };
}
export function setBankId(payload) {
    return {
        type: SET_BANK_ID,
        payload: payload,
    };
}



//upi details
export function addUuploadUpi(org_id, upi_id, qr_id) {
    return dispatch => {
        // console.log(id)
        dispatch(setLoader());
        const storageRef = ref(getStorage(), "/QRCode/" + upi_id + ".png")
        const uploadUpi = uploadBytesResumable(storageRef, qr_id);
        uploadUpi.on(
            "state_changed",
            function (snapshot) {
            },
            function (error) {
                console.log(error)
                dispatch(set_snack_bar(true, "Image Could Not Be Uploaded"));
                // dispatch(setLoader(false));
            },
            function () {
                getDownloadURL(uploadUpi.snapshot.ref).then(function (qr_id) {
                    console.log(qr_id)
                    if (getDownloadURL(uploadUpi.snapshot.ref) !== null) {
                        console.log("Adsdsad")
                        dispatch(add_upi_details(org_id, upi_id, qr_id));
                        dispatch(set_snack_bar(true, "Image Uploaded"))
                    }
                    else {
                        dispatch(set_snack_bar(true, "Image not Uploaded"));
                    }
                });
            });
    }

}
export function addUPI(org_id,upi_id,qr_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "add_upi", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                upi_id:upi_id,
                qr_id:qr_id

            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllUpi(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewAllUpi(org_id));
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

export function updateUpi(org_id,upi_id,qr_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_upi", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                upi_id: upi_id
            },
            body: JSON.stringify({
                qr_id:qr_id

            }),

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllUpi(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));


                } else {
                    dispatch(viewAllUpi(org_id));
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

export function viewAllUpi(org_id){

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_upi", {
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
                dispatch({ type: VIEW_ALL_UPI, payload: responseJson.result });
                dispatch(unsetLoader());
            } else {
                dispatch({ type: VIEW_ALL_UPI, payload: [] })
            }
            dispatch(unsetLoader());
        })
        .catch((error) => {
            dispatch(unsetLoader());
            dispatch(set_snack_bar(true, "Check Your Internet Connection"));
            console.error(error);
            });
    };
}

export function viewAllUpiById(upi_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_upi_by_id", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                upi_id: upi_id
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_ALL_UPI_BY_ID, payload: responseJson.result });

                } else {
                    dispatch({ type: VIEW_ALL_UPI_BY_ID, payload: [] });
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

export function deleteUpi(org_id,upi_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_upi", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                upi_id: upi_id
            },

        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.status) {
                dispatch(  viewAllUpi(org_id));
                dispatch(unsetLoader());
                dispatch(set_snack_bar(responseJson.status, responseJson.message));
            } else {
                dispatch(viewAllUpi(org_id));
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

export function bulkDeleteUpi(org_id, upi_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "bulk_delete_upi", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                upi_id: upi_id
            },

        }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.status) {
                dispatch( viewAllUpi(org_id));
                dispatch(unsetLoader());
                dispatch(set_snack_bar(responseJson.status, responseJson.message));
            } else {
                dispatch(viewAllUpi(org_id));
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
//upi setter
export function setUpiId(payload) {
    return {
        type: SET_UPI_ID,
        payload: payload,
    };
}
export function setQrId(payload) {
    return {
        type: SET_QR_ID,
        payload: payload,
    };
}

//Category

export function addCategory(org_id, category_name) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_category", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                category_name: category_name
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllCategory(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));

                } else {
                    dispatch(viewAllCategory(org_id));
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

export function updateCategory(org_id, category_id, category_name) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_category", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                category_id: category_id,
                category_name: category_name
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllCategory(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(viewAllCategory(org_id));
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

export function viewAllCategory(org_id) {
    return (dispatch) => {
       dispatch(unsetLoader());

        return fetch(UNIVERSAL.BASEURL + "view_all_product", {
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
                    dispatch({ type: CATEGORY, payload: responseJson.result });
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: CATEGORY, payload: responseJson.result });
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

export function deleteCategory(org_id, category_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_category", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                category_id: category_id
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(deleteCategory(category_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(deleteCategory(category_id));
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

//Category setter

export function setCategoryId(payload) {
    return {
        type: SET_CATEGORY_ID,
        payload: payload,
    };
}

export function setCategoryName(payload) {
    return {
        type: SET_CATEGORY_NAME,
        payload: payload,
    };
}

//Templete
export function image_upload_templete(org_id,image_upload,link,templet_name,category,desc) {
    return dispatch => {
        dispatch(unsetLoader());
        if (tem_img !== "") {
            const storageRef = ref(getStorage(), "/admin_img/" + templete_id + ".png")
            const uploadImage = uploadBytesResumable(storageRef, tem_img);
            uploadImage.on(
                "state_changed",
                function (snapshot) {
                },
                function (error) {
                    console.log(error)
                    dispatch(set_snack_bar(true, "Image Could Not Be Uploaded"));
                },
                function () {
                    getDownloadURL(uploadImage.snapshot.ref).then(function (tem_img) {
                        console.log(tem_img)
                        if (getDownloadURL(uploadImage.snapshot.ref) !== null) {
                            console.log("Adsdsad")
                            dispatch(addWhatsappTemplet(org_id,image_upload,link,templet_name,category,desc));
                            // dispatch(set_snack_bar(true, "Image Uploaded"))
                        }
                        else {
                            dispatch(set_snack_bar(true, "Image not Uploaded"));
                        }
                    });
                });
        }
        dispatch(addWhatsappTemplet(org_id,image_upload,link,templet_name,category,desc));
    }
}
export function addWhatsappTemplet(org_id,image_upload,link,templet_name,category,desc) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "add_whatsapp_templet", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                image_upload:image_upload,
                link:link,
                templet_name:templet_name,
                category:category,
                desc:desc
               
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch( viewAllWhatsappTemplte(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewAllWhatsappTemplte(org_id));
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
export function updateWhatsappTemplet(org_id,templete_id,image_upload,link,templet_name,category,desc) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_whatsapp_templet", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                _id:templete_id,
                image_upload:image_upload,
                link:link,
                templet_name:templet_name,
                category:category,
                desc:desc
               
            }),

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllWhatsappTemplte(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));


                } else {
                    dispatch(viewAllWhatsappTemplte(org_id));
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
export function viewAllWhatsappTemplte(org_id){

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_whatsapp_templet", {
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
                dispatch({ type: VIEW_ALL_WHATSAPP_TEMPLET, payload: responseJson.result });
                dispatch(unsetLoader());
            } else {
                dispatch({ type: VIEW_ALL_WHATSAPP_TEMPLET, payload: [] })
            }
            dispatch(unsetLoader());
        })
        .catch((error) => {
            dispatch(unsetLoader());
            dispatch(set_snack_bar(true, "Check Your Internet Connection"));
            console.error(error);
            });
    };
}
export function deleteWhatsappTemplet(org_id,templete_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_whatsapp_templet", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                    "Content-Type": "application/json",
                    org_id:org_id,
            },
            body: JSON.stringify({
                _id:templete_id,
            }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.status) {
                dispatch( viewAllWhatsappTemplte(org_id));
                dispatch(unsetLoader());
                dispatch(set_snack_bar(responseJson.status, responseJson.message));
            } else {
                dispatch(viewAllWhatsappTemplte(org_id));
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
export function bulkDeleteWhatsappTemplet(org_id, templete_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "bulk_delete_whatsapp_templet", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
               org_id: org_id
            },
            body: JSON.stringify({
                _id:templete_id,    
            }),

        }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.status) {
                dispatch( viewAllWhatsappTemplte(org_id));
                dispatch(unsetLoader());
                dispatch(set_snack_bar(responseJson.status, responseJson.message));
            } else {
                dispatch( viewAllWhatsappTemplte(org_id));
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

//Templete setter
export function set_temp_link(payload) {
    return {
        type: SET_TEMP_LINK,
        payload: payload,
    };
}
export function set_temp_name(payload) {
    return {
        type: SET_TEMP_NAME,
        payload: payload,
    };
}
export function set_temp_desc(payload) {
    return {
        type: SET_TEMP_DESC,
        payload: payload,
    };
}

//Details
export function addPersonalDetails(org_id,link,templet_name,desc) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "add_personal_details", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                 link:link,
                 templet_name:templet_name,
                 desc:desc,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch( viewAllPersonalDetails(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewAllPersonalDetails(org_id));
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
export function updatePersonalDetails(org_id,personal_id,link,templet_name,desc) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_personal_details", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                bank_id: bank_id
            },
            body: JSON.stringify({
                _id:personal_id,
                link:link,
                templet_name:templet_name,
               desc:desc
            }),

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch( viewAllPersonalDetails(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));


                } else {
                    dispatch( viewAllPersonalDetails(org_id));
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
export function viewAllPersonalDetails(org_id){

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_personal_details", {
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
                dispatch({ type: VIEW_ALL_PERSONAL_DETAILS, payload: responseJson.result });
                dispatch(unsetLoader());
            } else {
                dispatch({ type: VIEW_ALL_PERSONAL_DETAILS, payload: [] })
            }
            dispatch(unsetLoader());
        })
        .catch((error) => {
            dispatch(unsetLoader());
            dispatch(set_snack_bar(true, "Check Your Internet Connection"));
            console.error(error);
            });
    };
}

//Details setter
export function set_details_link(payload) {
    return {
        type: SET_DETAILS_LINK,
        payload: payload,
    };
}
export function set_details_name(payload) {
    return {
        type: SET_DETAILS_NAME,
        payload: payload,
    };
}
export function set_details_desc(payload) {
    return {
        type: SET_DETAILS_DESC,
        payload: payload,
    };
}

//SMS
export function addSms(org_id,link,templet_name,desc) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "add_sms", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                link:link,
                templet_name:templet_name,
                 desc:desc,  
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllSms(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));
                } else {
                    dispatch(viewAllSms(org_id));
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
export function updateSms(org_id,sms_id,link,templet_name,desc) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_sms", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
               _id:sms_id,
               link:link,
               templet_name:templet_name,
               desc:desc
            }),

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllSms(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));


                } else {
                    dispatch(viewAllSms(org_id));
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
export function viewAllSms(org_id){

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_sms", {
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
                dispatch({ type: VIEW_ALL_SMS, payload: responseJson.result });
                dispatch(unsetLoader());
            } else {
                dispatch({ type: VIEW_ALL_SMS, payload: [] })
            }
            dispatch(unsetLoader());
        })
        .catch((error) => {
            dispatch(unsetLoader());
            dispatch(set_snack_bar(true, "Check Your Internet Connection"));
            console.error(error);
            });
    };
}
export function deleteSms(org_id,sms_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_sms", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                    "Content-Type": "application/json",
                    org_id:org_id
            },
            body: JSON.stringify({
                _id:sms_id,
            }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.status) {
                dispatch(viewAllSms(org_id));
                dispatch(unsetLoader());
                dispatch(set_snack_bar(responseJson.status, responseJson.message));
            } else {
                dispatch(viewAllSms(org_id));
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
export function bulkDeleteSms(org_id, sms_id) {

    return (dispatch) => {
        dispatch(unsetLoader());
        return fetch(UNIVERSAL.BASEURL + "bulk_delete_sms", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
               
            },
            body: JSON.stringify({
                _id:sms_id,    
            }),

        }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.status) {
                dispatch( viewAllSms(org_id));
                dispatch(unsetLoader());
                dispatch(set_snack_bar(responseJson.status, responseJson.message));
            } else {
                dispatch(viewAllSms(org_id));
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

//SMS setter
export function set_sms_link(payload) {
    return {
        type: SET_SMS_LINK,
        payload: payload,
    };
}
export function set_sms_name(payload) {
    return {
        type: SET_SMS_NAME,
        payload: payload,
    };
}
export function set_sms_desc(payload) {
    return {
        type: SET_SMS_DESC,
        payload: payload,
    };
}
