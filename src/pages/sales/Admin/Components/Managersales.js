import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../../Admin/Components/sales.css";
// import TableBody from '@mui/material/TableBody';
// import { TextField, FormControl, MenuItem, Menu, Select, DialogTitle, Link } from "@mui/material";
import { Button, Table, Grid } from "@mui/material";
// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";

import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CanvasJSReact from '@canvasjs/react-charts';
import Stockimage from "../../../../pages/image/stockimage.png"


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Managersales extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createSpace: false,
      isHidden: true,
      showTime: false,
      copied: false,
      salesdate: [
        {
         
          taskname: "",
          productname: "Plastic Drink Bottles ",

          Product_id: "#1224",
          Transaction_id: "#458963210257001",
          Payment_Mode: "UPI",
        },
        {
         
          taskname: "",
          productname: "Plastic Drink Bottles ",

          Product_id: "#1224",
          Transaction_id: "#458963210257001",
          Payment_Mode: "UPI",
        },

        {
          
          taskname: "",
          productname: "Plastic Drink Bottles ",

          Product_id: "#1224",
          Transaction_id: "#458963210257001",
          Payment_Mode: "UPI",
        },
      ],
      orgdata: [
        {
          productname: "Bottle",
          qty: "Qty - 300",         
        },
        {
          productname: "Bottle",
          qty: "Qty - 300",         
        },
        {
          productname: "Bottle",
          qty: "Qty - 300",         
        },
        {
          productname: "Bottle",
          qty: "Qty - 300",         
        },
        {
          productname: "Bottle",
          qty: "Qty - 300",         
        },

      ],



      paymentdata: [
        {         
          productname: "Plastic Drink Bottles ",
          Product_id: "#1224",
          Pquntity: "1000",
          Productprice: "25/pcs",
        },
        {         
          productname: "Plastic Drink Bottles ",
          Product_id: "#1224",
          Pquntity: "1000",
          Productprice: "25/pcs",
        },

        {         
          productname: "Plastic Drink Bottles ",
          Product_id: "#1224",
          Pquntity: "1000",
          Productprice: "25/pcs",
        },
      ],

    };
  }
  render() {

    const options = {
			title: {
				text: "Basic Column Chart"
			},
      height:200,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Cash",  y: 30,color:"#CCCCCC"  },
					{ label: "UPI", y: 35,color:"#B8E8D7"  },
					{ label: "Net Banking", y:27,color:"#FFB29A"  },
				
				]
			}
			],
      axisY: {
      gridThickness: 0,
      lineThickness: 0,
      tickLength: 0,
      labelFormatter: function() {
        return ""; // Set the labelFormatter to return an empty string to remove y-axis values
      }
    },
    // axisX: {
    //   gridDashType: "dot", // Set to "dot" for dotted lines, or "dash" for dashed lines
    //   gridThickness: 2,
    // }
		}
    return (
    
   <>
        <Tabs style={{marginTop:"80px"}}>

          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              // justifyContent: "Space-between",
         
            }}  >
             <TabList className="sales" style={{ display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",marginLeft:"4%",marginRight:"7%" }}>
              


              <Grid>
               <Tab>Stock Sold</Tab>
               <Tab style={{marginLeft:"20px"}}>Payments</Tab>
               </Grid>

           

               <input type="date" className="date" style={{width:"140px",height:"39px",}}
               //  className="date-usr filter-date-usr"

               />
     
            
           </TabList>
            </Grid>
            
        
           
     






          <TabPanel>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "Space-evenly",
              }}
            >
              <Grid>
                <TableContainer style={{ width: "900px" }} component={Paper}>
                  <Table aria-label="customized table">
                    <TableHead style={{ background: "#E3E3E3" }}>
                      <TableRow>
                        <TableCell>
                          {" "}
                          <Checkbox />
                        </TableCell>

                        <TableCell>Sl. No.</TableCell>
                        {/* <TableCell>Date</TableCell> */}
                        <TableCell> Product Name</TableCell>
                        <TableCell style={{ whiteSpace: "nowrap" }}>
                          Product ID
                        </TableCell>
                        <TableCell>Product Quantity</TableCell>
                        <TableCell>Product Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.salesdate.map((item, index) => {
                        return (
                          <TableRow>
                            {/* <Link to="/user" className="table-row" style={{ display: "contents", textDecoration: "none" }}> */}
                            <TableCell></TableCell>

                            <TableCell> {index + 1}</TableCell>
                            {/* <TableCell> {item.Date}</TableCell> */}
                            <TableCell> {item.productname}</TableCell>
                            <TableCell> {item.Product_id}</TableCell>
                            <TableCell> {item.Pquntity}</TableCell>
                            <TableCell> {item.Productprice}</TableCell>

                            {/* </Link> */}
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid>
                <Card
                  style={{
                    width: "240px",
                    height: "auto",
                    boxShadow: "2px 2px 15px rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                  }}
                >
                  <Grid style={{ backgroundColor: "#E3E3E3", }}>
                    <center>
                      <Typography
                        className="Top"
                      >
                        Top 5 Sold Product
                      </Typography>
                    </center>
                  </Grid>

                  <CardContent>
                    <Box>
                      <Card style={{ boxShadow: "none" }}>
                        {/* maxHeight: "300", overflowY: "scroll" */}

                        {this.state.orgdata.map((orgdata, index) => (
                          <>
                            <Box
                              style={{
                                display: "flex",
                                // marginLeft: "30px",
                                // marginTop: "12px",
                                margin:20
                              }}
                            >
                              <img style={{height:50,width:50}} src={Stockimage}/>

                              <Grid>

                              <Typography
                                style={{
                                  color: "black",
                                  display: "flex",
                                  fontSize: "15px",
                                  marginTop: "3px",
                                  marginLeft: "20px",
                                  fontWeight: 400,
                                }}
                              >
                                {orgdata.productname}
                              </Typography>

                              <Typography
                                style={{
                                  color: "black",
                                  display: "flex",
                                  fontSize: "15px",
                                  // marginTop: "3px",
                                  marginLeft: "20px",
                                  fontWeight: 400,
                                  marginTop:"4x%"
                                }}
                              >
                                {orgdata.qty}
                              </Typography>
</Grid>

                            </Box>
                           


                          </>
                        ))}
                      </Card>
                    </Box>


                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>





          <TabPanel>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "Space-evenly",
              }}
            >
              <Grid>
                <TableContainer style={{ width: "900px" }} component={Paper}>
                  <Table aria-label="customized table">
                    <TableHead style={{ background: "#E3E3E3" }}>
                      <TableRow>
                        <TableCell>
                          {" "}
                          <Checkbox />
                        </TableCell>

                        <TableCell>Sr. No.</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell> Product Name</TableCell>
                        <TableCell style={{ whiteSpace: "nowrap" }}>
                          Product ID
                        </TableCell>
                        <TableCell>Transaction Id</TableCell>
                        <TableCell>Payment Mode</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.paymentdata.map((item, index) => {
                        return (
                          <TableRow>
                            {/* <Link to="/user" className="table-row" style={{ display: "contents", textDecoration: "none" }}> */}
                            <TableCell></TableCell>

                            <TableCell> {index + 1}</TableCell>
                            <TableCell> {item.Date}</TableCell>
                            <TableCell> {item.productname}</TableCell>
                            <TableCell> {item.Product_id}</TableCell>
                            <TableCell> {item.Transaction_id}</TableCell>
                            <TableCell> {item.Payment_Mode}</TableCell>

                            {/* </Link> */}
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

              <Grid>
                <Card
                  style={{
                    width: "240px",
                    height: "auto",
                    boxShadow: "2px 2px 15px rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                  }}
                >
                  <Grid style={{ backgroundColor: "#E3E3E3", }}>
                    <center>
                      <Typography
                        className="Top"
                      >
                        Mode of Payment
                      </Typography>
                    </center>
                  </Grid>

                  <CardContent>
                    <Box>
                      <Card style={{ boxShadow: "none" }}>
                        {/* maxHeight: "300", overflowY: "scroll" */}

                        
                          <>
                            <Box
                              style={{
                                display: "flex",
                                marginLeft: "30px",

                              }}
                            >
                             

<CanvasJSChart options = {options}/>

                            </Box>


                          </>
                      
                      </Card>
                    </Box>


                  </CardContent>
                </Card>
              </Grid>
              
            </Grid>
          </TabPanel>
        </Tabs>
        </>
    );
  }
}
