import React, { Component } from "react";
import { connect } from "react-redux";
import Vieworg from "../components/vieworg";
import {
  close_snack_bar
} from "../../common/snackbar/action";
import {
  clear_login,
  viewAllOrgbyMobile,
  viewUserOrgDetails,
  setOrgId
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
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    clear_login: () => {
      dispatch(clear_login())
    },
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    viewAllOrgbyMobile: (mobile) => {
      dispatch(viewAllOrgbyMobile(mobile));
    },
    viewUserOrgDetails: (user_id, org_id) => {
      dispatch(viewUserOrgDetails(user_id, org_id));
    },
    setOrgId: (org_id) => {
      dispatch(setOrgId(org_id));
    },
     
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);