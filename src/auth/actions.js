import {
    LOGIN,
    LOGOUT,
    SET_ALL_ORG,
    SET_ORG_ID,
    SET_ORG_DETAILS,
    SET_USER,
    SET_ORG,
    SET_ORG_USER_DEATILS,
    SET_USER_DETAILS,
    HANDLEDRAWER,
    SETMOBILE,
    CLEAR_LOGIN,
    SET_ALL_DATA,
    SET_ORG_USER_DETAILS,
} from "./constant";
import UNIVERSAL from "../config/config";
import { setLoader, unsetLoader } from "../common/loader/action";
import { set_snack_bar } from "../common/snackbar/action";
import 'firebase/storage';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export function googleLogin() {
    return (dispatch) => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        // firebase
        // .auth()
        signInWithPopup(auth, provider)
            .then((res) => {
                // console.log(res);
                let payload = {
                    name: res.user.displayName,
                    email: res.user.email,
                    mobile: res.user.phoneNumber,
                    profile_pic: res.user.photoURL
                };
                dispatch(social_login(payload));
                // console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export function facebookLogin() {
    return (dispatch) => {
        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        // firebase
        //   .auth()
        signInWithPopup(auth, provider)
            .then((res) => {
                // var credential = res.credential;

                // The signed-in user info.
                var user = res.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                // var accessToken = credential.accessToken;
                let payload = {
                    name: user.displayName,
                    email: user.email,
                    mobile: user.phoneNumber,
                    profile_pic: user.photoURL

                };
                dispatch(social_login(payload));
                // console.log(user);
                // console.log("true")

            })
            .catch((error) => {
                console.log(error);
                if (error.email != null || error.email !== "") {
                    let payload = {
                        // name: user.displayName,
                        email: error.email,
                        // contact_no: user.phoneNumber,
                        // profile_pic:user.photoURL

                    };
                    // dispatch(social_login(payload));
                }

                // console.log("error")
            });
    };
}

export function social_login(login) {
    // console.log("social_login", login);
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "social_login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: login.email,
                name: login.name,
                mobile: login.mobile,
                profile_pic: login.profile_pic,
                //   type: "U",
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //   console.log("asilllllllllllllllllllllllllllll",responseJson);
                if (responseJson.status) {
                    dispatch(setAdminLogin(responseJson.result));
                    dispatch(set_snack_bar(true, responseJson.message));
                    // }
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

export function phone_login(mobile) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "phone_login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mobile: mobile,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    // console.log(responseJson.result);
                    dispatch({ type: SETMOBILE, payload: responseJson.result.mobile });
                    dispatch(set_snack_bar(true, responseJson.message));
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

// export function setUserDetails(payload) {
//   return {
//     type: SETMOBILE,
//     payload: payload,
//   };
// }

export function verify_otp(mobile, otp) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "verify_otp", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mobile: mobile,
                otp: otp,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {
                    // if (responseJson.result.type === "A" || responseJson.result.type === "SA") {
                    dispatch(setAdminLogin(responseJson.result));
                    // dispatch({ type: SETLOGINORG, payload: responseJson.org });


                    // dispatch(closeLoginModal());
                    // } else {
                    dispatch(set_snack_bar(true, responseJson.message));
                    // dispatch(setcontactforotp(contact_num));
                    // console.log(contact_num);
                    // }
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

// export function super_login(org_id, email, password) {
//   return (dispatch) => {
//     dispatch(setLoader());
//     // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
//     return fetch(UNIVERSAL.BASEURL + "login", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         org_id: org_id,
//         email: email,
//         password: password,
//         // type: type
//       }),
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         // console.log(responseJson)
//         if (responseJson.status) {
//           // <redirect to="/"/>
//           // console.log(responseJson)
//           dispatch(setAdminLogin(responseJson.result));
//           // dispatch(setOrgId(responseJson.result.org_id));
//           // console.log("login",responseJson.result.org_id);
//           // console.log(responseJson.result);
//           dispatch(set_snack_bar(responseJson.status, "Login  Successfully"));
//           dispatch(unsetLoader());
//         } else {
//           dispatch(set_snack_bar(responseJson.status, "Invalid User"));
//         }
//         dispatch(unsetLoader());
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
// }

export function clear_login() {
    return {
        type: CLEAR_LOGIN,
    };
}


export function setAdminLogin(payload) {
    // console.log(payload.user_name)
    localStorage.setItem("user_id", payload._id);
    localStorage.setItem("mobile", payload.mobile);
    localStorage.setItem("email", payload.email);
    localStorage.setItem("name", payload.user_name);
    localStorage.setItem("type", payload.type);

    return {
        type: LOGIN,
        payload: payload,
    };
}


export function handleDrawerToggle(mobileOpen) {
    mobileOpen = !mobileOpen;
    return {
        type: HANDLEDRAWER,
        payload: mobileOpen,
    };
}
export function onLogout() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("org_id");
    return {
        type: LOGOUT,
    };
}

// export function update_image(newphoto,user_id) {
//     return (dispatch) => {
//         // dispatch(setLoader());
//         return fetch(UNIVERSAL.BASEURL + "image_upload", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 // "Content-Type": "application/json",
//             },
//             body: newphoto,
//             user_id:user_id,
//             file: {
//                 photo: newphoto
//             }
//         }).then((response) => response.json())
//             .then((responseJson) => {
//                 console.log(responseJson)
//                 if (responseJson.status) {
//                     dispatch(send_otp(false))
//                     dispatch(successfull(true))
//                     // dispatch(set_snack_bar(responseJson.status, "Password Changed Successfully"));
//                 } else {
//                     dispatch(set_snack_bar(responseJson.status, responseJson.message));
//                 }
//                 dispatch(unsetLoader());
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }
// }
export function viewAllOrgbyMobile(mobile) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_org_by_mobile", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mobile: mobile,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {
                    // console.log(responseJson);
                    // dispatch(setuser(responseJson.result));
                    dispatch({ type: SET_ALL_ORG, payload: responseJson.result });
                    // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: SET_ALL_ORG, payload: [] })
                    // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                dispatch(unsetLoader());
                console.error(error);
            });
    };
}
// export function viewAllOrg() {
//     return (dispatch) => {
//         dispatch(setLoader());
//         return fetch(UNIVERSAL.BASEURL + "view_all_organization", {
//             method: "GET",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//         })
//             .then((response) => response.json())
//             .then((responseJson) => {

//                 if (responseJson.status) {
//                     console.log(responseJson.result);
//                     // dispatch(setuser(responseJson.result));
//                     dispatch({ type: SET_ALL_ORG, payload: responseJson.result });
//                     // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
//                     // dispatch(unsetLoader(responseJson.result.item_category));
//                 } else {
//                     dispatch({ type: SET_ALL_ORG, payload: [] })
//                     // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
//                 }
//                 dispatch(unsetLoader());
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };
// }

export function picCreateOrg(logo, mobile, org_name, first_name, last_name, email, gstin_no, type) {

    return dispatch => {
        dispatch(setLoader(true));
        const storageRef = ref(getStorage(), "/Organization/" + mobile+Math.random()+ ".png")
        const uploadTask = uploadBytesResumable(storageRef, logo);
        uploadTask.on(
            "state_changed",
            function (snapshot) {
            },
            function (error) {
                console.log(error)
                //   dispatch(setalert(true, "Image Could Not Be Uploaded"));
                dispatch(setLoader(false));
            },
            function () {
                getDownloadURL(uploadTask.snapshot.ref).then(function (logo) {
                    // console.log(model_pic)
                    dispatch(createOrg(logo, mobile, org_name, first_name, last_name, email, gstin_no, type));
                });
            }
        );
    }
};

export function createOrg(logo, mobile, org_name, first_name, last_name, email, gstin_no, type) {
    return (dispatch) => {
        dispatch(setLoader());

        return fetch(UNIVERSAL.BASEURL + "create_organization", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "Application/json",
            },
            body: JSON.stringify({
                logo: logo,
                mobile: mobile,
                org_name: org_name,
                first_name: first_name,
                last_name: last_name,
                email: email,
                gstin_no: gstin_no,
                type: type,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(unsetLoader());
                    dispatch(viewAllOrgbyMobile(mobile));
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

export function viewUserOrg(user_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_user_organizations", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user_id,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {
                    // dispatch(setuser(responseJson.result));
                    // dispatch(setAdminLogin(responseJson.user));
                    dispatch({ type: SET_USER_DETAILS, payload: responseJson.user });
                    dispatch({ type: SET_ORG_DETAILS, payload: responseJson.result });
                    // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    // dispatch(unsetLoader(responseJson.result.item_category));
                } else {
                    dispatch({ type: SET_USER_DETAILS, payload: [] })
                    dispatch({ type: SET_ORG_DETAILS, payload: [] })
                    // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function viewUserOrgDetails(user_id, org_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_organization_user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user_id,
                org_id: org_id,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log("asilllllllllllllllllllllllllllllllllllllllla", responseJson)
                if (responseJson.status) {
                    // dispatch(setuser(responseJson.result));
                    dispatch(setAdminLogin(responseJson.result.userdetails));
                    dispatch({ type: SET_ORG_USER_DETAILS, payload: responseJson.result });
                    dispatch({ type: SET_USER, payload: responseJson.result.userdetails });
                    dispatch({ type: SET_ORG, payload: responseJson.result.org_result });
                    // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    // dispatch(unsetLoader(responseJson.result.item_category));
                } else {
                    dispatch({ type: SET_ORG_USER_DETAILS, payload: [] })
                    dispatch({ type: SET_USER, payload: [] })
                    dispatch({ type: SET_ORG, payload: [] })
                    // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function viewOrgUserDetails(org_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_organization_user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                org_id: org_id,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {
                    // console.log("lsknksdjbjhdsbjhdbs");
                    dispatch(setAdminLogin(responseJson.result.userdetails));
                    dispatch({ type: SET_ORG_USER_DEATILS, payload: responseJson.result });
                    // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
                    // dispatch(unsetLoader(responseJson.result.item_category));
                } else {
                    dispatch({ type: SET_ORG_USER_DEATILS, payload: [] })
                    // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function setOrgId(org_id) {
    localStorage.setItem("org_id", org_id);
    return {
        type: SET_ORG_ID,
        payload: org_id,
    };
}