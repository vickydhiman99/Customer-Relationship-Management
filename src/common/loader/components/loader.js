import React, { Component } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Customize from "./customize_loder";
import {  createTheme, ThemeProvider } from '@mui/material';
// import { JumpCircleLoading } from 'react-loadingg';
const theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: 'your_color_here',
        },
      },
    },
  },
});
export default class Loader extends Component {
  render() {
    const { loader } = this.props;
    return (
      <ThemeProvider theme={theme}>
      <Dialog
        open={loader.open}
        aria-labelledby="Loading..."

      >
        {/* <DialogTitle id="simple-dialog-title" style={{width: "200px"}}> */}
          {/* <center> */}
          <Customize />
          {/* </center> */}
        {/* </DialogTitle> */}
      </Dialog>
      </ThemeProvider>
    );
  }
}