import React, { Component } from "react";
import { connect } from "react-redux";
// import Battery from "../component/battery";
import {
    close_snack_bar
  } from "../../../../common/snackbar/action";
// import {
//   onLogout
// } from "../../../auth/actions";
import {
    SetEditOrgName,
    SetEditOrgEmail,
    SetEditOrgPhone,
    SetEditOrgGstinNo,
    viewUserdetails,
    updateUser,
    add_upload_profile,
    editOrg,
    uploadOrgImage
   
} from "../../action";
export class Controller extends Component {
    render() {
        return (
            <Battery {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {
        // user: store.user
        profile: store.profile,
        snackbar: store.snackbar,
        login: store.login,

    };
};
export const mapDispatchToProps = dispatch => {
    return {

        uploadOrgImage: (org_id, img, name, email,phone,gstin_no,) => {
            dispatch(uploadOrgImage(org_id, img, name, email,phone,gstin_no,))
        },

        editOrg: (org_id, img, name, email,phone,gstin_no) => {
            dispatch(editOrg(org_id, img, name, email,phone,gstin_no))
        },

        add_upload_profile: (img2,org_id,img,name,admin_id,email,phone,type) => {
            dispatch(add_upload_profile(img2,org_id,img,name,admin_id,email,phone,type))
        },

        updateUser: (img,org_id,name,admin_id,email,phone,type) => {
            dispatch(updateUser(img,org_id,name,admin_id,email,phone,type))
        },

        viewUserdetails: (user_id,org_id) => {
            dispatch(viewUserdetails(user_id,org_id))
        },

        SetEditOrgName:(payload)  => {
            dispatch(SetEditOrgName(payload) )
        },
        SetEditOrgEmail:(payload) => {
            dispatch(SetEditOrgEmail(payload))
        },
        SetEditOrgPhone:(payload)=> {
            dispatch(SetEditOrgPhone(payload))
        },
        SetEditOrgGstinNo:(payload) => {
            dispatch(SetEditOrgGstinNo(payload) )
        },
        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);