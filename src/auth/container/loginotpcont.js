import React, { Component } from "react";
import { connect } from "react-redux";
import LoginOtp from "../components/loginotp";
import {
  close_snack_bar
} from "../../common/snackbar/action";
import {
  clear_login,
  verify_otp,
  phone_login
} from "../actions";
export class Controller extends Component {
  render() {
    return (
      <LoginOtp {...this.props} />
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
    verify_otp: (mobile,otp) => {
      dispatch(verify_otp(mobile,otp));
    },
    phone_login: (mobile) => {
      dispatch(phone_login(mobile));
    },
     
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);