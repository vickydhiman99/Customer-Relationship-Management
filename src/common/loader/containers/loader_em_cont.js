import React, { Component } from "react";
import { connect } from "react-redux";
import LoaderEm from "../components/loader_embed";
import {
  set_loader,
  unset_loader
} from "../action";
export class Loader_Em_Con extends Component {
  render() {
    return (
      <LoaderEm {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    loader: store.loader
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    set_loader: () => {
      dispatch(set_loader());
    },
    unset_loader: () => {
      dispatch(unset_loader());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Loader_Em_Con);
