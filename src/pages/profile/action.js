import {
    SET_EDIT_ORG_NAME,
    SET_EDIT_ORG_EMAIL,
    SET_EDIT_ORG_PHONE,
    SET_EDIT_ORG_GSTIN_NO,
    SET_USER_DETAILS,
    SET_ORG_DETAILS2,
    SET_NAME,
    SET_EMAIL_ID,
    SET_PHONE,
    SET_TYPE
} from "./constant";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";
import { set_snack_bar } from "../../common/snackbar/action";
import 'firebase/storage';
// import {viewNewOrgDetails} from "../../auth/actions";
import{viewUserOrgDetails} from "../../auth/actions";

// import { set_snack_bar } from "../../common/snackbar/action";
import { getStorage,ref,uploadBytesResumable,getDownloadURL   } from "firebase/storage";
import 'firebase/storage';
// import firebase from 'firebase/app'


export function uploadOrgImage(org_id, img, name, email,phone,gstin_no,org_img2) {
    return dispatch => {
      dispatch(unsetLoader());
  
      if (org_img2 !== "") {
        const storageRef = ref(getStorage(), "/org_img/" + org_id + ".png");
        const uploadOrgImage = uploadBytesResumable(storageRef, org_img2);
  
        uploadOrgImage.on(
          "state_changed",
          function (snapshot) {
            
          },
          function (error) {
            console.log(error);
            dispatch(set_snack_bar(true, "Image Could Not Be Uploaded")); 
          },
          function () {
            getDownloadURL(uploadOrgImage.snapshot.ref).then(function (org_img) {
              console.log(org_img);
              if (getDownloadURL(uploadOrgImage.snapshot.ref) !== null) {
                console.log("Adsdsad");
                dispatch(editOrg( org_id, img, name, email,phone,gstin_no));
                dispatch(set_snack_bar(true, "Image Uploaded")); 
              } else {
                dispatch(set_snack_bar(true, "Image not Uploaded"));
              }
            });
          }
        );
      }
  
      dispatch(editOrg( org_id, img, name, email,phone,gstin_no ));
    };
  }
  

export function editOrg( org_id, user_id,img, name, email,phone,gstin_no ) {
    return (dispatch) => {
        dispatch(setLoader());

        return fetch(UNIVERSAL.BASEURL + "edit_org", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "Application/json",
                org_id:org_id
            },
            body: JSON.stringify({
                img:img,
                name:name,
                email:email,
                phone:phone,
                gstin_no:gstin_no
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(setLoader());
                    dispatch(viewNewOrgDetails(org_id));
                    dispatch(viewUserOrgDetails(user_id, org_id))

                } else {
                    dispatch(viewNewOrgDetails(org_id));
                    dispatch(viewUserOrgDetails(user_id, org_id))
                    dispatch(set_snack_bar(true, responseJson.message));
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

export function add_upload_profile(img2,org_id,img,name,admin_id,email,phone,type) {
    return dispatch => {
        dispatch(setLoader());
        if (img2 !== "") {
            const storageRef = ref(getStorage(), "/User_Profile/" + admin_id + ".png")
            const uploadprofile = uploadBytesResumable(storageRef, img2);
            uploadprofile.on(
                "state_changed",
                function (snapshot) {
                },
                function (error) {
                    console.log(error)
                    dispatch(set_snack_bar(true, "Image Could Not Be Uploaded"));
                },
                function () {
                    getDownloadURL(uploadprofile.snapshot.ref).then(function (img2) {
                        console.log(img2)
                        if (getDownloadURL(uploadprofile.snapshot.ref) !== null) {
                            console.log("Adsdsad")
                            dispatch(updateUser(img,org_id,name,admin_id,email,phone,type));
                            dispatch(unsetLoader());
                            dispatch(set_snack_bar(true, "Image Uploaded"))
                        }
                        else {
                            dispatch(set_snack_bar(true, "Image not Uploaded"));
                            dispatch(unsetLoader());
                        }
                    });
                });
        }
        dispatch(updateUser(img,org_id,name,admin_id,email,phone,type));
        dispatch(unsetLoader());
    }
}

export function updateUser(user_id,img,org_id,name,admin_id,email,phone,type) {
    return (dispatch) => {
        dispatch(setLoader());
        //console.log(mobile)
        // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
        return fetch(UNIVERSAL.BASEURL + "admin_edit", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id : org_id
            },
            body: JSON.stringify({
                name : name,
                admin_id:admin_id,
                email: email,
                phone: phone,
                type:type,
                img:img
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {
                    dispatch(viewUserdetails(user_id,org_id));
                    //  dispatch({ type: SET_UPDATE_STATUS, payload: staus })
                    dispatch(set_snack_bar(responseJson.status, "Profile Updated"));
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    // alert("No Registration Found! Please Register First");
                    // dispatch({ type: SET_USER, payload: [] })
                    dispatch(set_snack_bar(responseJson.status, "Invalid User"));
                    dispatch(set_snack_bar(true, responseJson.message));
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
export function viewUserdetails(user_id,org_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_user_org_by_id", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                user_id: user_id,
                org_id: org_id,
            },
            body: JSON.stringify({
               
            })

        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.status) {
                dispatch({ type: SET_USER_DETAILS, payload: responseJson.user_result });
                dispatch({ type: SET_ORG_DETAILS2, payload: responseJson.result });

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


export function setName(payload) {
    return {
        type: SET_NAME,
        payload: payload,
    };
}



export function setEmail(payload) {
    return {
        type: SET_EMAIL_ID,
        payload: payload,
    };
}

export function setPhone(payload) {
    return {
        type: SET_PHONE,
        payload: payload,
    };
}

export function setType(payload) {
    return {
        type: SET_TYPE,
        payload: payload,
    };
}

export function SetEditOrgName(payload) {
    return {
        type: SET_EDIT_ORG_NAME,
        payload: payload,
    };
}
export function SetEditOrgEmail(payload) {
    return {
        type: SET_EDIT_ORG_EMAIL,
        payload: payload,
    };
}
export function SetEditOrgPhone(payload) {
    return {
        type: SET_EDIT_ORG_PHONE,
        payload: payload,
    };
}
export function SetEditOrgGstinNo(payload) {
    return {
        type: SET_EDIT_ORG_GSTIN_NO,
        payload: payload,
    };
}
