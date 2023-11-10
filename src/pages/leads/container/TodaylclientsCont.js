import React, { Component } from "react";
import { connect } from "react-redux";
import TodayClient from "../component/Todayclients";
import {
  close_snack_bar
} from "../../../common/snackbar/action";

import {
  viewAllClients,
  addLeadClient,
  viewClientsFollowup,
  updateNewFollowup,
  updateClient,
  setClientId
} from "../action";
// import {
//   viewModel,
// } from "../../model/action";


export class Controller extends Component {
  render() {
    return (
      <TodayClient {...this.props} />
    );
  }
};

export const mapStateToProps = store => {
  return {
    lead: store.lead,
    login: store.login,
    snackbar: store.snackbar,
    all_model: store.all_model,
  };
};
export const mapDispatchToProps = dispatch => {
  return {

    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    viewAllClients: (admin_id,org_id) => {
      dispatch(viewAllClients(admin_id,org_id))
    },
    // viewModel: (org_id) => {
    //   dispatch(viewModel(org_id))
    // },
    viewClientsFollowup: (client_id) => {
      dispatch(viewClientsFollowup(client_id))
    },
    updateClient: (client_id,model_id,name, company, phone, email, location, source,admin_id) => {
      dispatch(updateClient(client_id,model_id,name, company, phone, email, location, source,admin_id))
    },
    setClientId: (client_id) => {
      dispatch(setClientId(client_id))
    },
    addLeadClient: (admin_id,org_id,name, company, phone, email, location, source, type, status, message) => {
      dispatch(addLeadClient(admin_id,org_id,name, company, phone, email, location, source, type, status, message))
    },
    updateNewFollowup: (client_id, follow_up_date, type, status, message,admin_id,org_id) => {
      dispatch(updateNewFollowup(client_id, follow_up_date, type, status, message,admin_id,org_id))
    },
   

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);