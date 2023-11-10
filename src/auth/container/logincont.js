import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/login";
import {
  close_snack_bar
} from "../../common/snackbar/action";
import {
   
  clear_login,
  phone_login,
  facebookLogin,
  googleLogin,
  social_login,
} from "../actions";
export class Controller extends Component {
  render() {
    return (
      <Login {...this.props} />
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
    phone_login: (contact_num) => {
      dispatch(phone_login(contact_num));
    },
    facebookLogin: () => {
      dispatch(facebookLogin());
    },
    googleLogin: () => {
      dispatch(googleLogin());
    },
   
    social_login: (login_id, otp) => {
      dispatch(social_login(login_id, otp));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);