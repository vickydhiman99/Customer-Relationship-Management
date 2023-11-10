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
    adminEdit,
    orgEdit,
    //bank 
    addBank,
    viewAllBank,
    viewAllBankById,
    updateBank,
    deleteBank,
    bulkDeleteBank,
    // bank setter 
    setBankName,
    setAccountNumber,
    setAccountHolderName,
    setBranch,
    setIfscCode,
    setBankId,
    //UPI 
    addUPI,
    updateUpi,
    viewAllUpi,
    viewAllUpiById,
    deleteUpi,
    bulkDeleteUpi,

    //UPI SETTER  
    setUpiId,
    setQrId,

    //Category
    addCategory,
    updateCategory,
    viewAllCategory,
    deleteCategory,

    //category setter
    setCategoryId,
    setCategoryName,
    //Templet Action
    addWhatsappTemplet,
    updateWhatsappTemplet,
    viewAllWhatsappTemplte,
    deleteWhatsappTemplet,
    bulkDeleteWhatsappTemplet,
    //Details Action
    addPersonalDetails,
    updatePersonalDetails,
    viewAllPersonalDetails,
    //SMS Details
    addSms,
    updateSms,
    viewAllSms,
    deleteSms,
    bulkDeleteSms

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
        setting: store.setting,
        snackbar: store.snackbar,
        login: store.login,

    };
};
export const mapDispatchToProps = dispatch => {
    return {
        adminEdit: (org_id, name, admin_id, img, email, phone) => {
            dispatch(adminEdit(org_id, name, admin_id, img, email, phone))
        },
        orgEdit: (org_id, name, img, email, phone, gstin_no) => {
            dispatch(orgEdit(org_id, name, img, email, phone, gstin_no))
        },
        //BANK CONTAINER
        addBank: (org_id, bank_name, account_number, account_holder_name, branch, ifsc_code) => {
            dispatch(addBank(org_id, bank_name, account_number, account_holder_name, branch, ifsc_code))
        },
        viewAllBank: (org_id) => {
            dispatch(viewAllBank(org_id))
        },

        viewAllBankById: (bank_id) => {
            dispatch(viewAllBankById(bank_id))
        },

        updateBank: (org_id, bank_id) => {
            dispatch(updateBank(org_id, bank_id))
        },

        deleteBank: (org_id, bank_id) => {
            dispatch(deleteBank(org_id, bank_id))
        },
        bulkDeleteBank: (org_id, bank_id) => {
            dispatch(bulkDeleteBank(org_id, bank_id))
        },
        //BANK SETTER CONTAINER
        setBankName: (payload) => {
            dispatch(setBankName(payload))
        },
        setAccountNumber: (payload) => {
            dispatch(setAccountNumber(payload))
        },
        setAccountHolderName: (payload) => {
            dispatch(setAccountHolderName(payload))
        },
        setBranch: (payload) => {
            dispatch(setBranch(payload))
        },
        setIfscCode: (payload) => {
            dispatch(setIfscCode(payload))
        },
        setBankId: (payload) => {
            dispatch(setBankId(payload))
        },

        // UPI CONTAINER
        addUPI: (org_id, upi_id, qr_id) => {
            dispatch(addUPI(org_id, upi_id, qr_id))
        },

        updateUpi: (org_id, upi_id, qr_id) => {
            dispatch(updateUpi(org_id, upi_id, qr_id))
        },

        viewAllUpi: (org_id) => {
            dispatch(viewAllUpi(org_id))
        },

        viewAllUpiById: (upi_id) => {
            dispatch(viewAllUpiById(upi_id))
        },
        deleteUpi: (org_id, upi_id) => {
            dispatch(deleteUpi(org_id, upi_id))
        },
        bulkDeleteUpi: (org_id, upi_id) => {
            dispatch(bulkDeleteUpi(org_id, upi_id))
        },
        // UPI SETTER CONTAINER
        setUpiId: (payload) => {
            dispatch(setUpiId(payload))
        },
        setQrId: (payload) => {
            dispatch(setQrId(payload))
        },

        // Category Container
        addCategory: (org_id, category_name) => {
            dispatch(addCategory(org_id, category_name))
        },

        updateCategory: (org_id, category_id, category_name) => {
            dispatch(updateCategory(org_id, category_id, category_name))
        },

        viewAllCategory: (org_id) => {
            dispatch(viewAllCategory(org_id))
        },

        deleteCategory: (org_id, category_id) => {
            dispatch(deleteCategory(org_id, category_id))
        },

        //category setter container
        setCategoryId: (payload) => {
            dispatch(setCategoryId(payload))
        },
        setCategoryName: (payload) => {
            dispatch(setCategoryName(payload))
        },
        
        //Templet Action container
        addWhatsappTemplet:(org_id,image_upload,link,templet_name,category,desc)=> {
            dispatch(addWhatsappTemplet(org_id,image_upload,link,templet_name,category,desc))
        },
        updateWhatsappTemplet:(org_id,_id,image_upload,link,templet_name,category,desc)=> {
            dispatch(updateWhatsappTemplet(org_id,_id,image_upload,link,templet_name,category,desc))
        },
        viewAllWhatsappTemplte:(org_id)=> {
            dispatch( viewAllWhatsappTemplte(org_id))
        },
        deleteWhatsappTemplet:(org_id,_id)=> {
            dispatch(deleteWhatsappTemplet(org_id,_id))
        },
        bulkDeleteWhatsappTemplet:(org_id, _id)=> {
            dispatch(bulkDeleteWhatsappTemplet(org_id, _id))
        },
        //Details Action Container
        addPersonalDetails:(org_id,link,templet_name,desc) => {
            dispatch( addPersonalDetails(org_id,link,templet_name,desc) )
        },
        updatePersonalDetails:(org_id,_id,link,templet_name,desc) => {
            dispatch(updatePersonalDetails(org_id,_id,link,templet_name,desc))
        },
        viewAllPersonalDetails:(org_id) => {
            dispatch(viewAllPersonalDetails(org_id))
        },
        //SMS Action
        addSms:(org_id,link,templet_name,desc)  => {
            dispatch(addSms(org_id,link,templet_name,desc) )
        },
        updateSms:(org_id,_id,link,templet_name,desc) => {
            dispatch( updateSms(org_id,_id,link,templet_name,desc) )
        },
        viewAllSms:(org_id) => {
            dispatch(viewAllSms(org_id))
        },
        deleteSms:(org_id,_id) => {
            dispatch(deleteSms(org_id,_id) )
        },
        bulkDeleteSms:(org_id, _id)  => {
            dispatch( bulkDeleteSms(org_id, _id))
        },
        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);