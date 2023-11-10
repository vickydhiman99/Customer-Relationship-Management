import React, { Component } from "react";
import { connect } from "react-redux";
// import Vieworg from "../components/vieworg";
import {
  close_snack_bar
} from "../../../common/snackbar/action";
import {

//LEAD ACTION
addNewLead,
viewAllNewLeads,
viewAllFollowupsLeads,
viewLeadById,
viewAllOldLeads,
updateLeadStatus,
updateLeadType,
//lead search function 
search_new_lead,
search_old_lead,
// lead setter
SetNewLeadName,
SetNewLeadEmail,
SetNewLeadPhone,
SetNewLeadEmployeeId,
SetNewLeadSource,
SetNewLeadStatus,
SetNewLeadCategory,

     
//PAYMENT ACTION 
addLeadPayment,
viewAllPaymentByLeadId,
//payment search function
search_payment_lead,
//payment setter
setLeadId,
setPaymentMode,
setPaidBy,
setAmount,
setDateTime,

// EMAIL ACTION
addUploadFile,
addLeadEmail,
viewAllEmailByLeadId,
// email search function
search_email_lead,
//email setter
setFile2,
setSendTo,
setSubject,
setText,
setFile,


//DEAL ACTION
createLeadDeal,
viewAllDealsByLeadId,
//deal setter
setDealStatus,

// FOLLOW UP ACTION
addFollowUp,
viewLastFollowup,
//follow up search function
search_followup_lead,
//follow up setter 
setDescription,
setReminder,
setCallPurpose,
setNextFollowUpDate,
setDate,
setTime, 
setDealId, 
  
// NOTE ACTION
addLeadNote,
viewAllNotesByLeadId,
//note search function
search_note_description,
//note setter
setNoteDescription
 
} from "../actions";
export class Controller extends Component {
  render() {
    return (
      <Vieworg {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    lead: store.lead,
    loader: store.loader,
    snackbar: store.snackbar,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
     close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    //LEAD ACTION
    addNewLead:(org_id, name,email,phone,address,employee_id,source,status, category) => {
      dispatch(addNewLead(org_id, name,email,phone,address,employee_id,source,status, category) )
    },
    viewAllNewLeads:(org_id) => {
      dispatch(viewAllNewLeads(org_id));
    },
    viewAllFollowupsLeads:(org_id)=> {
      dispatch(viewAllFollowupsLeads(org_id));
    },
    viewLeadById:(lead_id) => {
      dispatch(viewLeadById(lead_id));
    },
    viewAllOldLeads:(org_id)=> {
      dispatch(viewAllOldLeads(org_id));
    },
    updateLeadStatus:(lead_id) => {
      dispatch(updateLeadStatus(lead_id));
    },
    updateLeadType:(lead_id)=> {
      dispatch(updateLeadType(lead_id));
    },
    //lead search function 
    search_new_lead:(viewNewlead, e)=> {
      dispatch(search_new_lead(viewNewlead, e));
    },
    search_old_lead:(viewAllOldlead, e)=> {
    dispatch(search_old_lead(viewAllOldlead, e));
    },
    // lead setter 
    SetNewLeadName:(payload)=> {
      dispatch(SetNewLeadName(payload));
    },
    SetNewLeadEmail:(payload)=> {
      dispatch(SetNewLeadEmail(payload));
    },
    SetNewLeadPhone:(payload)=> {
      dispatch( SetNewLeadPhone(payload));
    },
    SetNewLeadEmployeeId:(payload)=> {
      dispatch (SetNewLeadEmployeeId(payload));
    },
    SetNewLeadSource:(payload)=> {
      dispatch(SetNewLeadSource(payload));
    },
    SetNewLeadStatus:(payload)=> {
      dispatch(SetNewLeadStatus(payload));
    },
    SetNewLeadCategory:(payload)=> {
      dispatch(SetNewLeadCategory(payload));
    },


    //PAYMENT ACTION
    addLeadPayment:(lead_id,admin_id,payment_mode,paid_by,amount,date_time)=> {
      dispatch(addLeadPayment(lead_id,admin_id,payment_mode,paid_by,amount,date_time));
    },
    viewAllPaymentByLeadId:(lead_id)=> {
      dispatch( viewAllPaymentByLeadId(lead_id));
    },
    //payment search function
     search_payment_lead:(viewAllPaymentByLeadId, e) => {
      dispatch(search_payment_lead(viewAllPaymentByLeadId, e));
    },
    //payment setter 
    setLeadId:(payload)=> {
      dispatch( setLeadId(payload));
    },
    setPaymentMode:(payload)=> {
      dispatch(setPaymentMode(payload));
    },
    setPaidBy:(payload) => {
      dispatch(setPaidBy(payload) );
    },
    setAmount:(payload)=> {
      dispatch( setAmount(payload));
    },
    setDateTime:(payload)=> {
      dispatch(setDateTime(payload));
    },


    // EMAIL ACTION
    addUploadFile:(lead_id,file2,admin_id,send_to,subject,text,file,date_time)=> {
      dispatch(addUploadFile(lead_id,file2,admin_id,send_to,subject,text,file,date_time));
    },
    addLeadEmail:(lead_id,admin_id,send_to,subject,text,file,date_time) => {
      dispatch(addLeadEmail(lead_id,admin_id,send_to,subject,text,file,date_time) );
    },
    viewAllEmailByLeadId:(lead_id) => {
      dispatch(viewAllEmailByLeadId(lead_id) );
    },
    // email search function
     search_email_lead:(viewAllEmailByLeadId, e) => {
      dispatch(search_email_lead(viewAllEmailByLeadId, e) );
    },
    //email setter 
    setFile2:(payload)=> {
      dispatch(setFile2(payload));
    },
    setSendTo:(payload) => {
      dispatch(setSendTo(payload) );
    },
    setSubject:(payload) => {
      dispatch( setSubject(payload) );
    },
    setText:(payload) => {
      dispatch (setText(payload) );
    },
    setFile:(payload) => {
      dispatch(setFile(payload) );
    },


    //DEAL ACTION
    createLeadDeal:(lead_id,product_name, admin_id, product_price, deal_status)=> {
      dispatch( createLeadDeal(lead_id,product_name, admin_id, product_price, deal_status));
    },
    viewAllDealsByLeadId:(lead_id)=> {
      dispatch( viewAllDealsByLeadId(lead_id));
    },
    //deal setter 
     setDealStatus:(payload)=> {
      dispatch (setDealStatus(payload));
    },


    // FOLLOW UP ACTION
    addFollowUp:(lead_id,admin_id,description,reminder,call_purpose,next_followup_date,date,time)=> {
      dispatch(addFollowUp(lead_id,admin_id,description,reminder,call_purpose,next_followup_date,date,time));
    },
    viewLastFollowup:(lead_id)=> {
      dispatch(viewLastFollowup(lead_id));
    },
     //follow up search function  
    search_followup_lead:(viewFollowUplead, e)=> {
      dispatch(search_followup_lead(viewFollowUplead, e));
    },
   //follow up setter
   setDescription:(payload)=> {
      dispatch(setDescription(payload));
    },
    setReminder:(payload) => {
      dispatch(setReminder(payload) );
    },
    setCallPurpose:(payload) => {
      dispatch(setCallPurpose(payload) );
    },
    setNextFollowUpDate:(payload)=> {
      dispatch(setNextFollowUpDate(payload));
    },
    setDate:(payload)=> {
      dispatch(setDate(payload));
    },
    setTime:(payload)=> {
      dispatch(setTime(payload));
    },
    setDealId:(payload)=> {
      dispatch(setDealId(payload));
    },


    // NOTE ACTION
    addLeadNote:(lead_id,admin_id,date_time,note_description)=> {
      dispatch(addLeadNote(lead_id,admin_id,date_time,note_description));
    },
    viewAllNotesByLeadId:(lead_id)=> {
      dispatch(viewAllNotesByLeadId(lead_id));
    },
    //note search function
    search_note_description:(viewAllNotesByLeadId, n)=> {
      dispatch(search_note_description(viewAllNotesByLeadId, n));
    },
    //note setter
    setNoteDescription:(payload) => {
      dispatch(setNoteDescription(payload) );
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);