import React, { Component } from 'react';
import {TextField,Dialog, Box, Grid, Button, Divider,Typography, Card, TableContainer, TableHead, TableCell, TableRow, TableBody } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Message from "../../../../pages/image/message.png";
import Whatsapp from "../../../../pages/image/whatsapp.png";
import Call from "../../../../pages/image/call.png";
import Mail from "../../../../pages/image/email.png";
import ChangeHistoryTwoToneIcon from '@mui/icons-material/ChangeHistoryTwoTone';
import { Table } from 'antd';
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';

export default class Employeedetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewData:false,
      tabledata:[

      ]
    };
  }
  render() {
    return (
      <Grid style={{marginTop:"10%"}}>
        <a href='/Employee' style={{textDecoration:'none', color:'black'}}>
        <Grid style={{display:"flex",flexDirection:"row"}}>
        <KeyboardArrowLeftIcon /> 
        Back to employee
        </Grid>
        </a>

        <Grid style={{display:"flex",flexDirection:"row",marginLeft:"6%",marginTop:"2%",gap:36}}>
          <Grid>
          <Card style={{width:"300px",boxShadow: "2px 2px 8px 0px #66666633"}}>
            <Box sx={{textAlign:"center",marginTop:"7%",marginBottom:"7%"}}>
              <Typography>Manish Kathura</Typography>
              <Typography>Employee ID: XXXXXXXXXX68</Typography>
              <Divider style={{marginBottom:"7%",marginTop:"7%"}}/>

              <Grid style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
              <img src={Whatsapp} style={{}} />
                                  
              <img src={Mail} style={{ marginLeft: "4%" }} />
                                    <img src={Call} style={{ marginLeft: "4%" }} />
                                    <img src={Message} style={{ width: "24px", height: "27px", marginTop: "5px", marginLeft: "4%" }} />
              </Grid>
            </Box>
          </Card>


          <Card style={{width:"300px",marginTop:"10%",boxShadow: "2px 2px 8px 0px #66666633"}}>
            <Grid style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"7%",marginBottom:"7%"}}>
              <Grid>
                <Typography style={{fontSize:"25px",fontWeight:"600"}}>500</Typography>
                <Typography style={{marginTop:"10%"}}>Leads</Typography>
              </Grid>
              <Grid style={{marginLeft:"10%"}}>
                <Grid style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <ChangeHistoryTwoToneIcon style={{color:"#20C130",fontSize:40}}/>
                <Typography style={{fontSize:"25px",fontWeight:"600"}}>450</Typography>
                </Grid>
                <Typography>Converted</Typography>
              </Grid>
            </Grid>
          </Card>

          </Grid>




          <Card  style={{width:"700px",boxShadow: "2px 2px 8px 0px #66666633"
}}>
            <Typography style={{color:"#AA3F1D",fontSize:"20px",marginLeft:"2%",marginTop:"2%"}}>Executive</Typography>
            <Box sx={{height:"250px",width:"100%",marginLeft:"2%",marginRight:"2%",marginTop:"2%"}}>

            {/* {this.state.tabledata.map(()=>{
  return( */}
              <Grid>
                <Typography>Date: 29/06/2023</Typography>
                <Divider style={{marginBottom:"2%"}}/>


                <TableContainer style={{width:"100%"}}  >
                  <TableHead  style={{width:"100%",backgroundColor:"#E0E0E0"}}>
                    <TableRow>
                    <TableCell style={{width:"30%"}}>Executive Name</TableCell>
                    <TableCell style={{width:"30%"}}>Executive ID</TableCell>
                    <TableCell style={{width:"30%"}}></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow>
                    <TableCell style={{width:"30%"}}>Kathryn Murphy</TableCell>
                    <TableCell style={{width:"30%"}}>EMP400620</TableCell>
                    <TableCell style={{width:"30%"}}><ErrorOutlinedIcon 
                    onClick={() => {
                                    this.setState({ viewData: true});
                                }}/></TableCell>
                    </TableRow>

                    <TableRow>
                    <TableCell style={{width:"30%"}}>Kathryn Murphy</TableCell>
                    <TableCell style={{width:"30%"}}>EMP400620</TableCell>
                    <TableCell style={{width:"30%"}}><ErrorOutlinedIcon/></TableCell>
                    </TableRow>

                    
                  </TableBody>
                </TableContainer>
                {/* )})} */}

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

                            <Grid style={{ display:"flex",flexDirection:"column",alignItems: "center", justifyContent: "center" }}>
                               
                                <Grid style={{marginTop:"2%"}}>
                                    <Typography>User Name-</Typography>
                                    <TextField id="standard-basic" placeholder='Punchul Duos' disabled variant="standard" style={{ width:"250px",marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid>
                                    <Typography>Email ID-</Typography>
                                    <TextField id="standard-basic" placeholder='abc@gmail.com' disabled  variant="standard" style={{ width:"250px",marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid>
                                    <Typography>Phone No-</Typography>
                                    <TextField id="standard-basic" placeholder='1234567890' disabled variant="standard" style={{ width:"250px",marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid>
                                    <Typography>Employee ID-</Typography>
                                    <TextField id="standard-basic" placeholder='EMP1234567' disabled variant="standard" style={{ width:"250px",marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                               
                                <button 
                                 onClick={() => {
                                    this.setState({ viewData: false });
                                }}
                                style={{ border: "none",borderRadius:"2px", outline: "none", color: "white", background: "#441000", padding: "10px", width: "30%", borderRadius: "2px", marginTop: "2%" }}>
                                    Okay
                                </button>

                            </Grid>
                        </Grid>
                    </Dialog>
      
      </Grid>
    )
  }
}
