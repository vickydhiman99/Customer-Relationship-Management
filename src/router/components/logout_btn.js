import React from "react";
// import Icon from "@mui/material/Icon";
import {
  // Link,
  Navigate,
} from "react-router-dom";
// import IconButton from "@mui/material/IconButton";
import "../../common/navbar/index.css";
// import { NavLink } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import {
  Button, Typography, DialogActions,
  DialogTitle, Grid
} from "@mui/material";
import "../styles/drawer.css";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
export default class LG extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      view: false
    };
  }

  render() {
    const { login } = this.props;

    if (this.state.redirect === true) {
      return <Navigate to="/" />;
    }
    return (
      <Grid>
        {/* <IconButton */}
        {/* //   onClick={() => {
      //     localStorage.removeItem("qubi7_type");
      //     localStorage.removeItem("qubi7_name");
      //     localStorage.removeItem("qubi7_profile_pic");
      //     localStorage.removeItem("qubi7_user_id");
      //     localStorage.removeItem("qubi7_company_id");
      //     // localStorage.removeItem("taxopliance_organization_id");
      //     this.setState({redirect:true})
      //     this.props.onLogout()
      //   }}>
      //   <Icon style={{ color: "white" }}>power_settings_new</Icon>
      // </IconButton>

      // <Link> */}

        <Button
          // className="logout-button1"
          style={{ textDecoration: "none", gap:"20px",marginBottom: "10px", color: 'white' }}
          // color="error"

          // variant="outlined"
          onClick={() => {
            // localStorage.removeItem("mio_mobile");
            // localStorage.removeItem("sre_name");
            // localStorage.removeItem("qubi7_profile_pic");
            // localStorage.removeItem("sre_user_id");
            // localStorage.removeItem("qubi7_company_id");
            // localStorage.removeItem("taxopliance_organization_id");

            this.setState({ view: true });

          }}

        // style={{
        //   position:"relative",
        //      height:"30px",
        //      width:"80px",
        //      border:"1px solid",
        //      borderRadius:"5px",
        //     background:"#fadde1",
        //     fontSize:"15px",
        //     left:"-100px"
        //     }}
        >
          {/* {" "} */}
          <LogoutIcon style={{ color: "white" }} />
          <Typography style={{ color: "white" ,textTransform:"capitalize" }}>

            Log Out
          </Typography>

        </Button>
        <Dialog
          open={this.state.view}
          onClose={() => {
            this.setState({ view: false });
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          style={{ width: "100%", height: "100%" }}
        >
          <Grid
            style={{
              backgroundColor: "#EBF0FF",
              height: "160px",
              minWidth: "280px",
              scrollBehavior: "smooth",
              overflow: "revert-layer",
              alignSelf: "center",
              overflowX: "hidden",
              flexDirection: "row",
              display: "flex",
              overflowY: "hidden",
            }}
          >

              <Grid>
                <DialogTitle
                  style={{
                    textAlign: "center",
                    fontSize: "24px",
                  }}
                >
                  Are You Sure you want to Logout?
                </DialogTitle>

                <DialogActions
                  style={{ marginTop: "12px"}}
                >
                  <center>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#00A913",
                      marginRight: "20px",
                      marginLeft: "-170%"
                    }}
                    onClick={() => {
                      // this.props.deleteModel(this.props.login.org._id, this.state.id);
                      this.setState({ delete: false });
                      this.props.onLogout();
                    }}
                  >
                    Yes
                  </Button>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#D82726", fontSize: "15px" }}
                    onClick={() => {
                      this.setState({ view: false });
                    }}
                  >
                    No
                  </Button>
                  </center>
                </DialogActions>
              </Grid>
          </Grid>
        </Dialog>
      </Grid>




    );
  }
}
