import React, { Component } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Customize from "./customize_loder";
export default class LoaderEm extends Component {
  render() {
    const { loader } = this.props;
    return (
      <div>
        {loader.open ? <Customize /> : ""}
      </div>
    );
  }
}