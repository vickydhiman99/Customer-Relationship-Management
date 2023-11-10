import {
    VIEW_ALL_PRODUCT,
    VIEW_PRODUCT_BY_ID,
    SET_PRODUCT_NAME,
    PRODUCT_SHORT_ID,
    PRODUCT_PRICE,
    SET_PRODUCT_ID,
    SEARCH_PRODUCT,
    SET_PRODUCT_STOCK,
    SET_PRODUCT_DESC
} from "./constant";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";
import { set_snack_bar } from "../../common/snackbar/action";
import 'firebase/storage';

export function uploadProductImage(org_id, product_img,product_img2, product_shordId, product_name, product_price,product_stock, product_desc) {
    return dispatch => {
       dispatch(setLoader());
        if (product_img2 !== "") {
            const storageRef = ref(getStorage(), "/product_img/" + product_shordId + ".png")
            const uploadProductImg = uploadBytesResumable(storageRef, product_img2);
            uploadProductImg.on(
                "state_changed",
                function (snapshot) {
                },
                function (error) {
                    console.log(error)
                    dispatch(set_snack_bar(true, "Image Could Not Be Uploaded"));
                },
                function () {
                    getDownloadURL(uploadProductImg.snapshot.ref).then(function (product_img2) {
                        console.log(product_img2)
                        if (getDownloadURL(uploadProductImg.snapshot.ref) !== null) {
                            console.log("Adsdsad")
                            dispatch(addProduct(org_id, product_img, product_shordId, product_name, product_price,product_stock, product_desc,
                                ));
                            dispatch(set_snack_bar(true, "Image Uploaded"))
                        }
                        else {
                            dispatch(set_snack_bar(true, "Image not Uploaded"));
                        }
                    });
                });
        }
        dispatch(addProduct(org_id, product_img, product_shordId, product_name, product_price,product_stock, product_desc,
            ));
    }
}

export function updateProductImage(org_id, product_img,product_id, product_img2, product_shortId, product_name, product_price, product_stock, product_desc) {
    return dispatch => {
       dispatch(unsetLoader());
        if (product_img2 !== "") {
            const storageRef = ref(getStorage(), "/product_img/" + product_id + ".png")
            const uploadProductImg = uploadBytesResumable(storageRef, product_img2);
            uploadProductImg.on(
                "state_changed",
                function (snapshot) {
                },
                function (error) {
                    console.log(error)
                    dispatch(set_snack_bar(true, "Image Could Not Be Uploaded"));
                },
                function () {
                    getDownloadURL(updateProductImage.snapshot.ref).then(function (product_img2) {
                        console.log(product_img2)
                        if (getDownloadURL(updateProductImage.snapshot.ref) !== null) {
                            console.log("Adsdsad")
                            dispatch(updateproduct(org_id,product_img2,product_id, product_img, product_shortId, product_name, product_price, product_stock, product_desc));
                            dispatch(set_snack_bar(true, "Image Uploaded"))
                        }
                        else {
                            dispatch(set_snack_bar(true, "Image not Uploaded"));
                        }
                    });
                });
        }
        dispatch(updateproduct(org_id,product_id, product_img, product_shortId, product_name, product_price, product_stock, product_desc));
    }
}

export function addProduct(org_id, product_img, product_shordId, product_name, product_price,product_stock, product_desc) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_product", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                product_img: product_img,
                product_shordId: product_shordId,
                product_name: product_name,
                product_price: product_price,
                product_stock: product_stock,
                product_desc: product_desc,

            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllProduct(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(responseJson.status, responseJson.message));

                } else {
                    dispatch(viewAllProduct(org_id));
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

export function updateproduct(org_id,product_id, product_img, product_shortId, product_name, product_price, product_stock, product_desc) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_product", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                _id:product_id,
                product_img:product_img,
                product_shortId:product_shortId,
                product_name:product_name,
                product_price:product_price,
                product_stock:product_stock,
                product_desc:product_desc,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllProduct(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(viewAllProduct(org_id));
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

export function viewAllProduct(org_id) {
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
                    dispatch({ type: VIEW_ALL_PRODUCT, payload: responseJson.result });
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: VIEW_ALL_PRODUCT, payload: responseJson.result });
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

export function viewProductById(product_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_product_by_id", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                product_id: product_id
            },
           
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: VIEW_PRODUCT_BY_ID, payload: responseJson.result });
                    dispatch(SetProductName(responseJson.result.product_name));
                    dispatch(SetProductPrice(responseJson.result.product_name));
                    dispatch(SetShortId(responseJson.result.set_product_short_id));
                    dispatch(setProductStock(responseJson.result.set_Product_stock));
                    dispatch(setProductDesc(responseJson.result.set_product_desc));
                    dispatch(SetProductId(responseJson.result.set_product_id ))
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


export function bulkDeleteProduct(org_id, product_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "bulk_delete_product", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                _id: product_id
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllProduct(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(true, responseJson.message));
                } else {
                    dispatch(viewAllProduct(org_id));
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


export function deleteProduct(org_id, product_id) {

    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "delete_product", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                org_id: org_id
            },
            body: JSON.stringify({
                _id: product_id
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllProduct(org_id));
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(true, responseJson.message));

                } else {
                    dispatch(viewAllProduct(org_id));
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

export function search_product(prroduct, e) {
    return (dispatch) => {
        if (e === "") {
            dispatch({ type: SEARCH_PRODUCT, payload: prroduct });
        }
        else {
            const newArray = p.filter((el) => {
                return (el.product_name.toLowerCase().includes(e.toLowerCase()));
            })
            dispatch({ type: SEARCH_PRODUCT, payload: newArray })
        }
    };
}

export function SetProductName(payload) {
    return {
        type: SET_PRODUCT_NAME,
        payload: payload,
    };
}
export function SetShortId(payload) {
    return {
        type: PRODUCT_SHORT_ID,
        payload: payload,
    };
}
export function SetProductPrice(payload) {
    return {
        type: PRODUCT_PRICE,
        payload: payload,
    };
}
export function SetProductId(payload) {
    return {
        type: SET_PRODUCT_ID,
        payload: payload,
    };
}

export function setProductStock(payload) {
    return {
        type: SET_PRODUCT_STOCK,
        payload: payload,
    };
}


export function setProductDesc(payload) {
    return {
        type: SET_PRODUCT_DESC,
        payload: payload,
    };
}