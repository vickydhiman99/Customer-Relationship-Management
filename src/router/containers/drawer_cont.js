import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import DrawerOptions from "../components/Drawer2";

import { handleDrawerToggle,onLogout} from "../../auth/actions";

export class Drawer_option_con extends Component {

  render() {
    return (
      <DrawerOptions {...this.props} />
    );
  }
};

export const mapStateToProps = store => {
  return {
   
   login: store.login
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    
    handleDrawerToggle: (mobileOpen) => {
      dispatch(handleDrawerToggle(mobileOpen));
    },
    onLogout: () => {
      dispatch(onLogout());
    },
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Drawer_option_con);