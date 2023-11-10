
import React, { Component } from 'react';
import {

  CardContent,

  Grid,
  DialogTitle,
  Dialog,
  DialogActions,
  TextField,
  Tooltip


} from "@mui/material";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

export default class newdashboard extends Component {
  render() {

    return (
      <Grid style={{marginTop:"10%"}}>
        <div style={{ display: "flex", flexDirection: 'row' }}>

          <Card sx={{ width: "250px", height: "13vh", borderRadius: "10px", marginTop: "2%", marginLeft: "4%", }}>
            <CardActions>
              {/* <img src={PIC1} style={{ height: "50px", marginLeft: "1%", marginTop: "5%" }} /> */}

              <Typography style={{ marginTop: '4%', fontSize: "16px", color: "#615F5F", marginLeft: "8%" }}>
                Total New Categories<br />
                {/* {Array.isArray(this.props.lead.new_leads) && this.props.lead.new_leads.length} */}
              </Typography>
            </CardActions>
          </Card>
          <Card sx={{ width: "250px", height: "13vh", borderRadius: "10px", marginTop: "2%", marginLeft: "4%", }}>
            <CardActions>
              {/* <img src={PIC2} style={{ height: "50px", marginLeft: "1%", marginTop: "5%" }} /> */}
              <Typography style={{ marginTop: '4%', fontSize: "16px", color: "#615F5F", marginLeft: "8%" }}>
                Total Categories<br />
                {/* {Array.isArray(this.props.lead.all_client_details) && this.props.lead.all_client_details.length} */}
              </Typography>
            </CardActions>
          </Card>
          <Card sx={{ width: "250px", height: "13vh", borderRadius: "10px", marginTop: "2%", marginLeft: "4%", }}>
            <CardActions>
              {/* <img src={PIC3} style={{ height: "50px", marginLeft: "1%", marginTop: "5%" }} /> */}
              <Typography style={{ marginTop: '4%', fontSize: "16px", color: "#615F5F", marginLeft: "8%", }}>
                Total Converted<br />
                {/* {Array.isArray(lead.conf_leads) && lead.conf_leads.length} */}
              </Typography>
            </CardActions>
          </Card>
        </div>

        <Box sx={{ width: '100%', typography: 'body1', marginTop: "3%" }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs aria-label="basic tabs example">
              <Tab style={{ fontSize: '16px' }} label="Category" />
              <Tab style={{ fontSize: '16px' }} label="New" />
              <Tab style={{ fontSize: '16px' }} label="Converted" />
              <Tab style={{ fontSize: '16px' }} label="Today's Category" />
             
              <Button onClick={() => {
                this.setState({
                  addcustomer: true,

                });

              }} style={{ marginLeft: '40%', height: "35px", display: "flex", FlexDirection: "end", marginRight: "10px" }} variant="contained">

                Add
              </Button>
            </Tabs>
          </Box>
          <div role="tabpanel" id="simple-tabpanel-0" aria-labelledby="simple-tab-0">

            <CardContent >
              <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableHead >
                    <TableRow >
                      {/* <TableCell style={{ textAlign: "center", fontSize: "18px" }}>  </TableCell>
                          <TableCell style={{ textAlign: "center", fontSize: "18px", color: "#525D79" }}> </TableCell> */}
                      <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}> Name</TableCell>
                      <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}>Contact</TableCell>
                      <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}>Source</TableCell>
                      <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}> Status</TableCell>
                      {/* <TableCell style={{ textAlign: "center", fontSize: "18px", color: "#525D79" }}>Assignee</TableCell> */}
                      <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}></TableCell>
                    </TableRow>
                  </TableHead>
                  {/* <TableBody className="tablebody"> */}
                  {/* {lead.all_client_details.map((e) => {
                    return ( */}
                      <TableRow >
                        {/* <TableCell style={{ textAlign: "center", fontSize: "18px" }}>   <Checkbox /> </TableCell>
                          <TableCell style={{ textAlign: "center", fontSize: "18px", color: "#525D79" }}>
                            <Avatar

                              sx={{ width: 28, height: 28 }}
                            />

                          </TableCell> */}
                        <TableCell style={{ textAlign: "center", fontSize: "14px" }}> <Typography style={{ fontSize: "15px" }}>
                          mnbb </Typography>
                          <Typography style={{ fontSize: "12px", color: "#525D79" }}>
                            <AccessTimeIcon style={{ fontSize: "10px" }} />  nbvnbbv  </Typography>
                        </TableCell>
                        <TableCell style={{ textAlign: "center", fontSize: "14px" }}>
                          <Typography style={{ fontSize: "15px" }}>
                            <EmailIcon style={{ fontSize: "13px" }} />nbvvb  </Typography>
                          <Typography style={{ fontSize: "12px", color: "#525D79" }}>
                            <CallIcon style={{ fontSize: "13px", marginLeft: "-30%" }} />  nvbnvb</Typography>


                        </TableCell>
                        <TableCell style={{ textAlign: "center", fontSize: "18px" }}>
                          <Typography style={{ fontSize: "16px" }}>
                            mnb </Typography>

                        </TableCell>
                        <TableCell style={{ textAlign: "center", fontSize: "18px" }}> <Button style={{  borderRadius: '10px', height: "25px" }} variant="contained"
                          onClick={() => {
                            this.setState({
                              edit: true,
                              
                              // follow_up_date:new Date(e.follow_up_date)
                            });
                          }}
                        >
                         nmbm
                        </Button></TableCell>
                        {/* <TableCell style={{ textAlign: "center", fontSize: "18px" }}>Not Assigned</TableCell> */}
                        <TableCell style={{ textAlign: "center", fontSize: "18px" }}>
                          <Link to="/orderbooking"><Tooltip title="Add Order">
                            <IconButton
                              // disabled={c.name === "" || c.phone === "" || c.email === ""|| c.location === "" }
                             
                            >
                              {/* <Icon style={{ color: "green" }}>edit</Icon>  */}
                              <AddShoppingCartIcon style={{ color: 'blue', fontWeight: "800" }} />
                            </IconButton>
                          </Tooltip>
                          </Link>
                        </TableCell>
                      </TableRow>
                    {/* )
                  })} */}
                  {/* </TableBody> */}

                </Table>
              </TableContainer>

            </CardContent>

          </div>
        </Box>
      </Grid>
    )
  }
}
