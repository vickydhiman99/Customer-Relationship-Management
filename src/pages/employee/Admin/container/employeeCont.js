import React, { Component } from "react";
import { connect } from "react-redux";
// import Vieworg from "../components/vieworg";
import {
  close_snack_bar
} from "../../../../common/snackbar/action";
import {

  addManager,
  updateManager,
  viewAllManager,
  viewManagerById,
  bulkDeleteManager,
  deleteManager,
 
  addExecutive,
  updateExecutive,
  viewAllExecutive,
  viewExecutiveById,
  bulkDeleteExecutive,
  deleteExecutive,

  viewAllLeadsByExecutive,

  viewAllExecutiveByManager,

  setManagerName,
  SetManagerEmailId,
  SetManagerContactNumber,
  SetManagerEmpShortId,
  SetManagerCatagoryId,
  setManagerId,
  setExecutiveName,
  setExecutiveId,

  search_manager,
  search_executive,
  filter_executive,
  filter_leads,

  SetExecutiveEmailId,
  SetExecutiveContactNumber,
  SetExecutiveEmpShortId
} from "../../actions";
export class Controller extends Component {
  render() {
    return (
      <Vieworg {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    addManager : (org_id, manager_name, email_id, contact_number,emp_shortId, category_id) => {
      dispatch(addManager(org_id, manager_name, email_id, contact_number,emp_shortId, category_id))
    },
    updateManager:(org_id, manager_id, manager_name, email_id, contact_number,emp_shortId, category_id) => {
      dispatch(updateManager(org_id, manager_id, manager_name, email_id, contact_number,emp_shortId, category_id));
    },
    viewAllManager:(org_id) => {
      dispatch(viewAllManager(org_id));
    },
    viewManagerById:(manager_id) => {
      dispatch(viewManagerById(manager_id) ); 
    },
    bulkDeleteManager:(org_id,manager_id)=> {
      dispatch(bulkDeleteManager(org_id,manager_id));
    },
    deleteManager:(org_id,_id) => {
      dispatch(deleteManager(org_id,_id));
    },
    
    addExecutive:(org_id)  => {
      dispatch(addExecutive(org_id) ); 
    },
    updateExecutive:(org_id) => {
      dispatch(updateExecutive(org_id)); 
    },
    viewAllExecutive:(org_id) => {
      dispatch(viewAllExecutive(org_id)); 
    },
    viewExecutiveById:(executive_id) => {
      dispatch(viewExecutiveById(executive_id)); 
    },
    bulkDeleteExecutive:(org_id,executive_id) => {
      dispatch(bulkDeleteExecutive(org_id,executive_id)); 
    },
    deleteExecutive:(org_id,executive_id)=> {
      dispatch(deleteExecutive(org_id,executive_id)); 
    },

    viewAllLeadsByExecutive:(org_id,executive_id)=> {
      dispatch(viewAllLeadsByExecutive(org_id,executive_id)); 
    },    

    viewAllExecutiveByManager:(org_id,manager_id)=> {
      dispatch(viewAllExecutiveByManager(org_id,manager_id)); 
    },

    setManagerName:(payload)=> {
      dispatch(setManagerName(payload)); 
    },
    SetManagerEmailId:(payload)=> {
      dispatch(SetManagerEmailId(payload)); 
    },
    SetManagerContactNumber:(payload)=> {
      dispatch(SetManagerContactNumber(payload)); 
    },
    SetManagerEmpShortId:(payload)=> {
      dispatch(SetManagerEmpShortId(payload)); 
    },
    SetManagerCatagoryId:(payload)=> {
      dispatch( SetManagerCatagoryId(payload)); 
    },
    setManagerId:(payload)=> {
      dispatch(setManagerId(payload)); 
    },
    setExecutiveName:(payload)=> {
      dispatch( setExecutiveName(payload)); 
    },
    setExecutiveId:(payload)=> {
      dispatch(setExecutiveId(payload)); 
    },


    search_manager: (viewAllManager, e) => {
      dispatch( search_manager(viewAllManager, e) ); 
    },
    search_executive: (viewAllExecutive, e) => {
      dispatch( search_executive(viewAllExecutive, e) ); 
    },


    filter_executive: (viewAllManagerById, e) => {
      dispatch(filter_executive(viewAllManagerById, e)); 
    },

    filter_leads: (viewAllExecutiveById, e) => {
      dispatch(filter_leads(viewAllExecutiveById, e)); 
    },


    SetExecutiveEmailId:(payload)=> {
      dispatch(SetExecutiveEmailId(payload)); 
    },
    SetExecutiveContactNumber:(payload)=> {
      dispatch(SetExecutiveContactNumber(payload)); 
    },
    SetExecutiveEmpShortId:(payload) => {
      dispatch(SetExecutiveEmpShortId(payload) ); 
    },
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);