import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import Routes from "../components/router";

//import { setAffiliates,setEmail, setPhone, setdescription,resetAffiliates,AffiliatesFunc} from "../../actions/affiliates/affiliates_action";

import {  onLogout } from "../../auth/actions";

export class Routes_con extends Component {

  render() {
    return (
      <Routes {...this.props} />
    );
  }
};

export const mapStateToProps = store => { 
  return {
   login: store.login,
   
  };
};

export const mapDispatchToProps = dispatch => {
    return {
      onLogout: () => {
        dispatch(onLogout());
      },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Routes_con );