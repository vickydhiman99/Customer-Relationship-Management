import {
    SET_BATTERY,
    SET_BATTERY_DETAILS
} from "./constant";
// import UNIVERSAL from "../../../config/config";
// import { setLoader, unsetLoader } from "../../../common/loader/action";
// import { set_snack_bar } from "../../../common/snackbar/action";

// import { set_snack_bar } from "../../common/snackbar/action";
// import { getStorage,ref,uploadBytesResumable,getDownloadURL   } from "firebase/storage";
// import 'firebase/storage';
// import firebase from 'firebase/app'
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";
import { set_snack_bar } from "../../common/snackbar/action";
import 'firebase/storage';

// export function createBattery(org_id, battery_model,  fuel_type,power,transmission,price) {
//     return (dispatch) => {
//         dispatch(setLoader());
//         // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
//         return fetch(UNIVERSAL.BASEURL + "add_battery", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 org_id:org_id,
//                 battery_model: battery_model,
//                 fuel_type: fuel_type,
//                 power:power,
//                 transmission:transmission,
//                 price:parseInt(price),
//             })
//         })
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 console.log(price)
//                 if (responseJson.status) {
//                     dispatch(viewAllBattery(org_id));
//                     // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
//                     dispatch(unsetLoader());
//                 } else {
//                     // alert("No Registration Found! Please Register First");
//                     // dispatch({ type: SET_USER, payload: [] })
//                     // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
//                 }
//                 dispatch(unsetLoader());
//                 dispatch(set_snack_bar(true,responseJson.message));
//             })
//             .catch((error) => {
//                 dispatch(unsetLoader());
//                 dispatch(set_snack_bar(true,"Check Your Internet Connection"));
//                 console.error(error);
//             });
//     };
// }

// export function updateBattery(org_id,battery_id,battery_model, fuel_type, power, transmission, price) {
//     return (dispatch) => {
//         dispatch(setLoader());
//         // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
//         return fetch(UNIVERSAL.BASEURL + "update_battery", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 battery_id: battery_id,
//                 battery_model: battery_model,
//                 fuel_type: fuel_type,
//                 power:power,
//                 transmission:transmission,
//                 price:parseInt(price),
//             })
//         })
//             .then((response) => response.json())
//             .then((responseJson) => {

//                 if (responseJson.status) {
//                     dispatch(viewAllBattery(org_id));
//                     // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
//                     dispatch(unsetLoader());
//                 } else {
//                     // alert("No Registration Found! Please Register First");
//                     // dispatch({ type: SET_USER, payload: [] })
//                     // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
//                 }
//                 dispatch(unsetLoader());
//                 dispatch(set_snack_bar(true,responseJson.message));

//             })
//             .catch((error) => {
//                 dispatch(unsetLoader());
//                 dispatch(set_snack_bar(true,"Check Your Internet Connection"));
//                 console.error(error);
//             });
//     };
// }

// export function deleteBattery(_id,org_id) {
//     return (dispatch) => {
//         dispatch(setLoader());
//         // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
//         return fetch(UNIVERSAL.BASEURL + "delete_battery", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 battery_id: _id,
//             })
//         })
//             .then((response) => response.json())
//             .then((responseJson) => {

//                 if (responseJson.status) {
//                     dispatch(viewAllBattery(org_id));
//                     // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
//                     dispatch(unsetLoader());
//                 } else {
//                     // alert("No Registration Found! Please Register First");
//                     // dispatch({ type: SET_USER, payload: [] })
//                     // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
//                 }
//                 dispatch(unsetLoader());
//                 dispatch(set_snack_bar(true,responseJson.message));

//             })
//             .catch((error) => {
//                 dispatch(unsetLoader());
//                 dispatch(set_snack_bar(true,"Check Your Internet Connection"));
//                 console.error(error);
//             });
//     };
// }

// export function viewAllBattery(org_id) {
//     return (dispatch) => {
//         dispatch(setLoader());
//         return fetch(UNIVERSAL.BASEURL + "view_all_battery", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 org_id: org_id,
//             })

//         })
//             .then((response) => response.json())
//             .then((responseJson) => {

//                 if (responseJson.status) {
//                     // dispatch(setuser(responseJson.result));
//                     dispatch({ type: SET_BATTERY, payload: responseJson.result });
//                     // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
//                     dispatch(unsetLoader());
//                 } else {
//                     // alert("No Registration Found! Please Register First");
//                     dispatch({ type: SET_BATTERY, payload: [] })
//                     // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
//                 }
//                 dispatch(unsetLoader());
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };
// }

// export function viewBatteryByid(_id) {
//     return (dispatch) => {
//         dispatch(setLoader());
//         return fetch(UNIVERSAL.BASEURL + "view_battery_id", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 battery_id: _id,
//             })

//         })
//             .then((response) => response.json())
//             .then((responseJson) => {

//                 if (responseJson.status) {
//                     // dispatch(setuser(responseJson.result));
//                     dispatch({ type: SET_BATTERY_DETAILS, payload: responseJson.result });
//                     // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
//                     dispatch(unsetLoader());
//                 } else {
//                     // alert("No Registration Found! Please Register First");
//                     dispatch({ type: SET_BATTERY_DETAILS, payload: [] })
//                     // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
//                 }
//                 dispatch(unsetLoader());
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };
// }