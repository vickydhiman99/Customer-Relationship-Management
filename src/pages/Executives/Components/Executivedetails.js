import React, { Component } from 'react';
import { TextField, Dialog, Box, Grid, Button, Divider, Typography, Card, TableContainer, TableHead, TableCell, TableRow, TableBody } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Message from "../../../pages/image/message.png";
import Whatsapp from "../../../pages/image/whatsapp.png";
import Call from "../../../pages/image/call.png";
import Mail from "../../../pages/image/email.png";
import ChangeHistoryTwoToneIcon from '@mui/icons-material/ChangeHistoryTwoTone';
import { Table } from 'antd';
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import "../../sales/Admin/Components/sales.css";
import meta from "../../../pages/image/meta.png";
import { Link } from "react-router-dom";

export default class Executivedetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewData: false,
            Executivedetailsdata: [
                {

                    name: "Subh",
                    source: "meta",
                    lead: "old",
                    project: "CRM",
                    fullname: "Subhasmita Karna",
                    id: "#EMP400620",
                    email: "subh@gmail.com",
                },
                {

                    name: "Subh",
                    source: "meta",
                    lead: "old",
                    project: "CRM",
                    fullname: "Subhasmita Karna",
                    id: "#EMP400620",
                    email: "subh@gmail.com",
                },

            ]
        };
    }
    render() {
        return (
            <Grid style={{ marginTop: "10%" }}>
                <a href='/Executives' style={{ textDecoration: 'none', color: 'black' }}>
                    <Grid style={{ display: "flex", flexDirection: "row" }}>
                        <KeyboardArrowLeftIcon />
                        Back to Executives
                    </Grid>
                </a>

                <Grid style={{ display: "flex", flexDirection: "row", marginLeft: "6%", marginTop: "2%", gap: 36 }}>
                    <Grid>
                        <Card style={{ width: "300px", boxShadow: "2px 2px 8px 0px #66666633" }}>
                            <Box sx={{ textAlign: "center", marginTop: "7%", marginBottom: "7%" }}>
                                <Typography className='manish'>Manish Kathura</Typography>
                                <Typography>Employee ID: XXXXXXXXXX68</Typography>
                                <Divider style={{ marginBottom: "7%", marginTop: "7%" }} />

                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                   
                                    <img src={Whatsapp} style={{}} />
                                    <img src={Mail} style={{ marginLeft: "4%" }} />
                                    <img src={Call} style={{ marginLeft: "4%" }} />
                                    <img src={Message} style={{ width: "24px", height: "27px", marginTop: "5px", marginLeft: "4%" }} />
                                </Grid>
                            </Box>
                        </Card>


                        <Card style={{ width: "300px", marginTop: "10%", boxShadow: "2px 2px 8px 0px #66666633" }}>
                            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "7%", marginBottom: "7%" }}>
                                <Grid>
                                    <Typography style={{ fontSize: "25px", fontWeight: "500" }}>500</Typography>
                                    <Typography style={{ marginTop: "10%" }}>Leads</Typography>
                                </Grid>
                                <Grid style={{ marginLeft: "10%" }}>
                                    <Grid style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                        <ChangeHistoryTwoToneIcon style={{ color: "#20C130", fontSize: 40 }} />
                                        <Typography style={{ fontSize: "25px", fontWeight: "500" }}>450</Typography>
                                    </Grid>
                                    <Typography>Converted</Typography>
                                </Grid>
                            </Grid>
                        </Card>

                    </Grid>




                    <Card style={{
                        width: "800px", boxShadow: "2px 2px 8px 0px #66666633"
                    }}>
                        <Box style={{display:"flex",justifyContent:"space-between"}}>
                        <Typography className="Executives" style={{ marginLeft: "2%", marginTop: "2%" }}>Executive</Typography>
                        <input type="date" className="date" style={{width:"140px",height:"39px",marginTop: "2%",marginRight: "2%"}}
               //  className="date-usr filter-date-usr"

               />
                 </Box>    
                        <Box sx={{ height: "250px", width: "100%", marginLeft: "2%", marginRight: "2%", marginTop: "2%" }}>


                            <Grid>
                                <Typography>Date: 29/06/2023</Typography>
                                <Divider style={{ marginBottom: "2%" }} />





                                {this.state.Executivedetailsdata.map((item) => {
                                    return (
                                        <Link to="/Managerdetailsnext" style={{textDecoration:"none"}}>
                                            <TableBody>
                                                <TableRow>

                                                    <TableCell   >{item.name}</TableCell>
                                                    <TableCell  >{item.email}</TableCell>
                                                    <TableCell>
                                                        <Grid style={{ display: "flex", flexDirection: "row", width: "30%" }}>
                                                            <Grid>
                                                                <img style={{ height: "15px", width: "18px", marginTop: "3px" }} src={meta}
                                                                /></Grid>
                                                            <Grid style={{ marginLeft: "10px", }}>
                                                                {item.source}</Grid>
                                                        </Grid>
                                                    </TableCell>
                                                    <TableCell style={{ width: "30%" }}>{item.lead}</TableCell>
                                                    <TableCell style={{ width: "30%" }}>{item.project}</TableCell>

                                                    <TableCell style={{ width: "30%" }}>{item.fullname}</TableCell>
                                                </TableRow>



                                            </TableBody>
                                        </Link>
                                    );
                                })}



                            </Grid>
                        </Box>

                    </Card>
                </Grid>











                {/* view dialog */}

                <Dialog
                    open={this.state.viewData} style={{}}>
                    <Grid style={{ width: "400px", padding: "20px", justifyContent: "center", alignItems: "center" }}>


                        <Grid style={{ display: "flex", justifyContent: "space-between", }}>
                            <Typography style={{ fontWeight: "600" }}>Add Product</Typography>
                            <CloseOutlinedIcon
                                onClick={() => {
                                    this.setState({ viewData: false });
                                }}

                                className="eventcross-icon"

                            />
                        </Grid>

                        <Grid style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                            <Grid style={{ marginTop: "2%" }}>
                                <Typography>User Name-</Typography>
                                <TextField id="standard-basic" placeholder='Punchul Duos' disabled variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" }} />
                            </Grid>
                            <Grid>
                                <Typography>Email ID-</Typography>
                                <TextField id="standard-basic" placeholder='abc@gmail.com' disabled variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" }} />
                            </Grid>
                            <Grid>
                                <Typography>Phone No-</Typography>
                                <TextField id="standard-basic" placeholder='1234567890' disabled variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" }} />
                            </Grid>
                            <Grid>
                                <Typography>Employee ID-</Typography>
                                <TextField id="standard-basic" placeholder='EMP1234567' disabled variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" }} />
                            </Grid>

                            <button
                                onClick={() => {
                                    this.setState({ viewData: false });
                                }}
                                style={{ border: "none", borderRadius: "2px", outline: "none", color: "white", background: "#441000", padding: "10px", width: "30%", borderRadius: "2px", marginTop: "2%" }}>
                                Okay
                            </button>

                        </Grid>
                    </Grid>
                </Dialog>

            </Grid>
        )
    }
}
