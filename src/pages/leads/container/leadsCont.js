import React, { Component } from "react";
import { connect } from "react-redux";
import Client from "../../leads/component/leadss";
import {
  close_snack_bar
} from "../../../common/snackbar/action";

import {
  viewAlltheClients,
  addLeadClient,
  viewClientsFollowup,
  viewAllClients,
  updateNewFollowup,
  updateClient,
  setClientId,
  searchNAME,
  filter_status,
  filter_type,
  viewNewClients,
  viewTotalConverted,
  viewAllRtoReg,
  viewAllNumPlate
} from "../action";


export class Controller extends Component {
  render() {
    return (
      <Client {...this.props} />
    );
  }
};

export const mapStateToProps = store => {
  return {
    lead: store.lead,
    login: store.login,
    snackbar: store.snackbar,
    all_category: store.all_category,
    all_model: store.all_model,
  };
};
export const mapDispatchToProps = dispatch => {
  return {

    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    viewAlltheClients: (admin_id,org_id) => {
      dispatch(viewAlltheClients(admin_id,org_id))
    },
    viewNewClients: (admin_id,org_id) => {
      dispatch(viewNewClients(admin_id,org_id))
    },
    viewAllClients: (admin_id,org_id) => {
      dispatch(viewAllClients(admin_id,org_id))
    },
    viewClientsFollowup: (client_id) => {
      dispatch(viewClientsFollowup(client_id))
    },
    searchNAME: (all_client_details,e) => {
      dispatch(searchNAME(all_client_details,e))
    },
    filter_status: (all_client_details,status) => {
      dispatch(filter_status(all_client_details,status))
    },
    filter_type: (all_client_details,type) => {
      dispatch(filter_type(all_client_details,type))
    },
    updateClient: (client_id,model_id,name, company, phone, email, location, source,admin_id) => {
      dispatch(updateClient(client_id,model_id,name, company, phone, email, location, source,admin_id))
    },
    setClientId: (client_id) => {
      dispatch(setClientId(client_id))
    },
    addLeadClient: (admin_id,org_id, name, company, phone, email, location, source, type, status, message,model_id,follow_up_date) => {
      dispatch(addLeadClient(admin_id,org_id, name, company, phone, email, location, source, type, status, message,model_id,follow_up_date))
    },
    updateNewFollowup: (client_id, follow_up_date, type, status, message,admin_id,org_id) => {
      dispatch(updateNewFollowup(client_id, follow_up_date, type, status, message,admin_id,org_id))
    },
   
   
    viewTotalConverted: (admin_id,org_id) => {
      dispatch(viewTotalConverted(admin_id, org_id))
    },
    viewAllRtoReg: (admin_id,org_id) => {
      dispatch(viewAllRtoReg(admin_id,org_id))
    },
    viewAllNumPlate: (admin_id,org_id) => {
      dispatch(viewAllNumPlate(admin_id,org_id))
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);