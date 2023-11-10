
import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CardActions from '@mui/material/CardActions';

import TotalManager from "../../../pages/image/manager.png";
import TotalExecutive from "../../../pages/image/executive.png";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import "../../Admin/Components/sales.css";
// import TableBody from '@mui/material/TableBody';
// import { TextField, FormControl, MenuItem, Menu, Select, DialogTitle, Link } from "@mui/material";
import { Button, Table, Grid } from "@mui/material";
// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
// import LinearProgress, {  } from '@mui/material/LinearProgress';


import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import "../../sales/Admin/Components/sales.css";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: "80%",
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 100 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#EE6C43" : "#EE6C43",
  },
}));

export default class Executives extends Component {
  constructor(props) {
    super(props);

    this.state = {

      createSpace: false,
      isHidden: true,
      showTime: false,
      copied: false,
      empdata: [
        {

          name: "Subh",

          id: "#EMP400620",
          email: "subh@gmail.com",

        },
        {

          name: "Subh",

          id: "#EMP400620",
          email: "subh@gmail.com",

        },
        {

          name: "Subh",

          id: "#EMP400620",
          email: "subh@gmail.com",

        },

      ],
      orgdata: [
        {
          productname: "Bottle",
          qty: "Qty-",

          qtyamt: "300",
        },
        {
          productname: "Bottle",
          qty: "Qty-",

          qtyamt: "300",
        },

      ],



      paymentdata: [
        {
          Date: "10/12/23",
          taskname: "",
          productname: "Plastic Drink Bottles ",

          Product_id: "#1224",
          Transaction_id: "#458963210257001",
          Payment_Mode: "UPI",
        },
        {
          Date: "10/12/23",
          taskname: "",
          productname: "Plastic Drink Bottles ",

          Product_id: "#1224",
          Transaction_id: "#458963210257001",
          Payment_Mode: "UPI",
        },

        {
          Date: "10/12/23",
          taskname: "",
          productname: "Plastic Drink Bottles ",

          Product_id: "#1224",
          Transaction_id: "#458963210257001",
          Payment_Mode: "UPI",
        },
      ],

    };
  }
  render() {
    return (

      <>





        <Grid style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px 20px",marginTop:"8%" }}>
          <div style={{ display: "flex", flexDirection: 'row', marginLeft: "2%" }}>


            <Card sx={{ width: "250px", borderRadius: "10px", marginTop: "2%", boxShadow: "2px 2px 8px 0px #66666659" }}>
              <CardActions>
                <img src={TotalManager} style={{ height: "70px", marginLeft: "1%", marginTop: "5%" }} />

                <Typography style={{ marginTop: '4%', fontSize: "16px", color: "#615F5F", marginLeft: "8%",fontWeight: 400 }}>
                  Total Managers<br />
                  <b style={{ color: "#000", marginLeft: "5%" }}>400</b>

                </Typography>
              </CardActions>
            </Card>
            <Card sx={{ width: "250px", borderRadius: "10px", marginTop: "2%", marginLeft: "4%", boxShadow: "2px 2px 8px 0px #66666659" }}>
              <CardActions>
                <img src={TotalExecutive} style={{ height: "70px", marginLeft: "1%", marginTop: "5%" }} />

                <Typography style={{ marginTop: '4%', fontSize: "16px", color: "#615F5F", marginLeft: "8%",fontWeight: 400  }}>
                  Total Executives<br />
                  <b style={{ color: "#000", marginLeft: "5%" }}>600</b>

                </Typography>
              </CardActions>
            </Card>





          </div>

        </Grid>

        <Typography className="Executives" style={{ marginTop: "3%", marginLeft: "5%" }}>Executives</Typography>

        <TableContainer style={{ width: "90%", marginLeft: "5%", marginTop: "2%", }} component={Paper}>
          <Table aria-label="customized table">
            <TableHead style={{ background: "#E3E3E3", }}>
              <TableRow >


                <TableCell className="Employeetable">Employee Name</TableCell>
                <TableCell className="Employeetable">Employee Id</TableCell>

                <TableCell className="Employeetable" style={{ whiteSpace: "nowrap" }}>
                  Email ID
                </TableCell>
                <TableCell className="Employeetable"> Progress</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
         
              {this.state.empdata.map((item, index) => {
                return (
               
                  <TableRow>
                    <Link to="/Executivedetails" className="table-row" style={{ display: "contents", textDecoration: "none" }}> 

                    <TableCell> {item.name}</TableCell>
                    <TableCell> {item.id}</TableCell>
                    <TableCell> {item.email}</TableCell>

                    <TableCell>

                      <Typography className="Completed">
                        70% Completed
                      </Typography>
                      <BorderLinearProgress variant="determinate" value={70} />

                    </TableCell>


                    </Link>
                  </TableRow>
                
                );
              })}
               
            </TableBody>
          </Table>
        </TableContainer>













      </>
    );
  }
}
