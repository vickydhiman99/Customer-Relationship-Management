import React, { Component } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import "../../loader/components/cus_loader.css"
import { Grid } from "rsuite";
// import { backgroundImage } from "html2canvas/dist/types/css/property-descriptors/background-image";
// import { JumpCircleLoading } from 'react-loadingg';
export default class Customize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }
  componentDidMount() {
    // Toggle the visibility of the image every 500 milliseconds
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        isVisible: !prevState.isVisible,
      }));
    }, 300);
  }
  
  // componentWillUnmount() {
  //   // Clear the interval when the component is unmounted
  //   clearInterval(this.interval);
  // }
  render() {
    const { loader } = this.props;
    // const { isVisible } = this.state;
    return (
      <Grid className="cusloader">
      {/* {isVisible &&  */}
      <img src='' alt="Blinking Image" style={{width: "150px", padding: "0px"}} />
      {/* } */}
    </Grid>
    );
  }
}