import React, { Component } from 'react';
import {
  Grid, Typography, Box, Button, TextField, Tooltip, DialogTitle,
  Dialog,
} from '@mui/material';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Style from "../../../settings/Admin/Components/payment.css";
import SettingDrawer from "../../../../pages/settings/Admin/Components/SettingDrawer";
import AddIcon from '@mui/icons-material/Add';
import QRcode from "../../../image/qr-code 1.png";
import { MoreVertOutlined } from '@mui/icons-material';


export default class payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
     
      isHidden3: true,
      isHidden2: true,
      addDetail: false,
      addUPIDetail: false,
    }
  }
  toggleElement = () => {
    this.setState((prevState) => ({
      isHidden: !prevState.isHidden,
    }));
  };


  toggleElement2= () => {
    this.setState((prevState) =>({
      isHidden2: !prevState.isHidden2,
    }));
    this.setState({addUPIDetail:false})
  }

  toggleElement3= () => {
    this.setState((prevState) =>({
      isHidden3: !prevState.isHidden3,
    }));
    this.setState({addDetail:false})
  }


  render() {
    return (
      <>
        <Grid style={{ marginTop: "10%", display: "flex", gap: 30 }}>


          <Grid>
            <SettingDrawer />
          </Grid>

          <Grid style={{ marginTop: "2%", marginLeft: "2%" }}>
            <Typography style={{ fontSize: "28px", fontWeight: "500" }}>Payment</Typography>
            <Grid className='tab-plus'>

              <Grid style={{ marginTop: "5%" }}>
                <Tabs>
                  <TabList style={{ borderBottom: "none", display: "flex", gap: "28px" }}>
                    <Tab className="pay-tab" onClick={this.toggleElement}>Bank Details</Tab>
                    <Tab className="pay-tab" onClick={this.toggleElement}>UPI Details</Tab>

                    <Grid style={{ marginLeft: "170%" }}>
                      {this.state.isHidden ?
                        <Tooltip title="Add">
                          <AddIcon

                            style={{ background: 'gray', color: "white", borderRadius: "4px" }}

                            onClick={() => {
                              this.setState({ addDetail: true });
                            }}
                          />
                        </Tooltip>
                        :
                        <Tooltip title="Add">
                          <AddIcon

                            style={{ background: 'gray', color: "white", borderRadius: "4px" }}

                            onClick={() => {
                              this.setState({ addUPIDetail: true });
                            }}
                          />
                        </Tooltip>
                      }

                    </Grid>

                  </TabList>
                  <TabPanel style={{ marginTop: "5%" }}>
                    <Typography style={{ fontSize: "13px" }}>Manage your bank accounts for your business</Typography>
                    {this.state.isHidden3?null:
                 <Grid style={{border:"2px dotted gray",textAlign:"left",marginTop:"14%",padding:"12px"}}>
                  <Box style={{display:"flex" , justifyContent:"space-between",marginBottom:"20px"}}>
                    <Typography>Primary </Typography>
                    <MoreVertOutlined style={{color:"blue"}} />
                  </Box>
                  <Box>
                      <Typography>ICICI Bank</Typography>
                      <Typography>Ashutash Panda</Typography>
                      <Typography>12**********678</Typography>
                      <Typography>Pokaritput Branch</Typography>
                      <Typography>ICICI678******</Typography>
                      </Box>
                 </Grid>
  }
                  </TabPanel>
                  <TabPanel style={{ marginTop: "5%" }}>
                    <Typography style={{ fontSize: "13px" }}>
                      Manage your UPI IDs for your business
                    </Typography>
                    {this.state.isHidden2?null:
                    <Grid style={{ marginTop: "14%", display: "flex", justifyContent: "space-around", gap: "17px" }}>
                      <Box >
                        <Typography>UPI ID -</Typography>
                        <TextField id="standard-basic" variant="standard" placeholder='1234567890@ybi' ></TextField>
                      </Box>
                      <Box style={{ border: "1px solid gray" }}>
                        <img src={QRcode} style={{ margin: "7px" }} />
                      </Box>
                    </Grid>
                    }
                  </TabPanel>

                </Tabs>
              </Grid>

              {/* <Grid>
                <Tooltip title="Add">
                  <AddIcon

                    style={{ background: 'gray', color: "white", borderRadius: "4px" }}

                    onClick={() => {
                      this.setState({ addDetail: true });
                    }}
                  />
                </Tooltip>

              </Grid> */}

            </Grid>
          </Grid>




        </Grid>


        {/* bank details  */}
        <Dialog
          open={this.state.addDetail} style={{}}>
          <Grid style={{ height: "370px", width: "300px" }}>

            <Box style={{ textAlign: "center", marginLeft: "15%", paddingTop: "3%" }}>
              <Grid style={{ marginTop: "5%" }}>

                <Grid style={{ textAlign: "left", marginLeft: "4%", marginTop: "1%" }} >
                  <Typography >Bank Name-</Typography>
                  <TextField id="standard-basic" variant="standard" />
                </Grid>
                <Grid style={{ textAlign: "left", marginLeft: "4%", marginTop: "1%" }} >
                  <Typography >Account Holder's Name-</Typography>
                  <TextField id="standard-basic" variant="standard" />
                </Grid>
                <Grid style={{ textAlign: "left", marginLeft: "4%", marginTop: "1%" }} >
                  <Typography >Account Number-</Typography>
                  <TextField id="standard-basic" variant="standard" />
                </Grid>
                <Grid style={{ textAlign: "left", marginLeft: "4%", marginTop: "1%" }} >
                  <Typography >Branch-</Typography>
                  <TextField id="standard-basic" variant="standard" />
                </Grid>
                <Grid style={{ textAlign: "left", marginLeft: "4%", marginTop: "1%" }} >
                  <Typography >IFSC Code-</Typography>
                  <TextField id="standard-basic" variant="standard" />
                </Grid>


                <Grid style={{ marginTop: "3%", textAlign: "center", marginRight: "50px" }}>

                  <button
                    // onClick={() => { this.setState({ addDetail: false }); }}
                    onClick={this.toggleElement3}
                    variant='contained' style={{ background: "gray", color: "white", padding: "7px 15px", cursor: "pointer", border: "none", outline: "none" }}>Add</button>
                </Grid>
              </Grid>




            </Box>

          </Grid>
        </Dialog>

        {/* upi details */}

        <Dialog
          open={this.state.addUPIDetail} style={{}}>
          <Grid style={{ height: "200px", width: "300px" }}>

            <Box style={{ textAlign: "center", marginLeft: "15%", paddingTop: "3%" }}>
              <Grid style={{ marginTop: "5%" }}>

                <Grid style={{ textAlign: "left", marginTop: "1%" }} >
                  <Typography >UPI ID-</Typography>
                  <TextField id="standard-basic" variant="standard" />
                </Grid>


                <Grid style={{ display: "flex", gap: "30px", marginTop: "5%" }}>
                  <Box style={{ textAlign: "left" }}>
                    <Typography style={{ fontSize: "14px" }}>Upload your QR code :</Typography>
                    <Typography style={{ color: "red", fontSize: "9px" }}>Click here to upload </Typography>
                  </Box>
                  <Box
                    style={{ cursor: "pointer", border: "1px solid lightgray", width: "50px", height: "50px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                  >




                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file"></label>


                    <label
                      htmlFor="file"
                      className='label-mentor'
                    >

                      <Typography className="upload-file-two">
                        {" "}
                        . {" "}
                      </Typography>
                    </label>
                    <input style={{ display: "none" }} type="file" id="file"
                      onChange={(e) => { this.setState({ image: e.target.files[0] }) }}
                    />
                  </Box>
                </Grid>



                <Grid style={{ marginTop: "3%", textAlign: "center", marginRight: "50px" }}>

                  <button
             
                    onClick={this.toggleElement2}
                    variant='contained' style={{ background: "gray", color: "white", padding: "7px 15px", cursor: "pointer", border: "none", outline: "none" }}>Add</button>
                </Grid>
              </Grid>




            </Box>

          </Grid>
        </Dialog>


      </>
    )
  }
}
