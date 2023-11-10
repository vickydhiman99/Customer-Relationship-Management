import React, { Component } from 'react';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Textarea from '@mui/joy/Textarea';
import DialogContent from '@mui/material/DialogContent';
// import PIC1 from "../../../image/PIC1.png";
// import PIC2 from "../../../image/PIC2.png"
// import PIC3 from "../../../image/PIC3.png";
import LoaderCon from "../../../common/loader/containers/loader_cont";
import Snackbar from "../../../common/snackbar/components/snackbar";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import validator from 'validator';
// import { ExportToExcel } from 'react-table-export';
// import { saveAs } from 'file-saver';
// import * as XLSX from 'xlsx';


import {

  CardContent,

  Grid,
  DialogTitle,
  Dialog,
  DialogActions,
  TextField,
  Tooltip


} from "@mui/material";
// import { display } from 'html2canvas/dist/types/css/property-descriptors/display';




export default class Leadss extends Component {


  constructor(props) {


    super(props);
    this.state = {
      value: 0,
      addcustomer: false,
      view: false,
      name: "",
      company: "",
      phone: "",
      status: "",
      type: "",
      model_id: "",
      location: "",
      email: "",
      message: "",
      source: "",
      follow_up_date: new Date().toISOString().split('T')[0],
      edit: "",
      id: "",
      columns: ["Name", "Contact", "Source", "Status"],
      data: "",

    }
  }

  //   exportToExcel = () => {
  //     const { data, columns } = this.state;
  // console.log(data)
  //     // Convert data to worksheet
  //     const worksheet = XLSX.utils.json_to_sheet(data, { header: columns.map((column) => column) });

  //     // Create workbook and add the worksheet
  //     const workbook = XLSX.utils.book_new();
  //     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');

  //     // Generate Excel file
  //     const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  //     const excelData = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  //     saveAs(excelData, 'data.xlsx');
  //   };

  validateEmail = () => {
    const { email } = this.state;
    const isValid = validator.isEmail(email);
    this.setState({ isEmail: isValid });
    console.log(this.state.isEmail)
  };

  handlename = (event) => {
    const { value } = event.target;
    if (/^[A-Za-z]*$/.test(value)) {
      this.setState({
        value: value,
        name: value
      });
    }
  };

  componentDidMount() {
    this.props.viewAlltheClients(this.props.login.user_id, this.props.login.org._id);
    // this.props.viewModel(this.props.login.org._id);
    this.props.viewNewClients(this.props.login.user_id, this.props.login.org._id);
    this.props.viewTotalConverted(this.props.login.user_id, this.props.login.org._id);
    this.props.viewAllClients(this.props.login.user_id, this.props.login.org._id);

    // console.log(this.props.lead.new_leads.length)

  }


  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
    if (newValue === 0) {
      this.setState({ data: this.props.leads.all_client_details })
    }
  };
  render() {
    const { value } = this.state;
    const {
      lead,
      all_body,
      all_varient,
      all_category,
      all_model,
      all_battery,
      snackbar,
      all_model_variant,
      close_snack_bar,
      login,
      setFilter,
    } = this.props;

    const { phone } = this.state;
    const error = phone.length < 10 ? "!" : " ";

    return (



      <div
        style={{
          marginLeft: "5%",
          marginRight: "5%",
          marginTop:"10%"
        }}
      >

        {/* <Box style={{ display: "flex", width: "35%", marginLeft: "4%", }}>
          <Paper
            component="form"
            style={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "405px",

              height: "31px",
              marginLeft: "2%",
              border: "1px solid black",
              borderRadius: "20px"
            }}
          >

            <InputBase
              style={{ ml: 5, flex: 1, fontSize: "13px", marginLeft: "4%" }}
              placeholder="Search "
              inputProps={{ "aria-label": "Search " }}
            />
            <IconButton
              type="button"
              style={{ p: "17px" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box> */}
        <div style={{ display: "flex", flexDirection: 'row' }}>

          <Card sx={{ width: "250px", height: "13vh", borderRadius: "10px", marginTop: "2%", marginLeft: "4%", }}>
            <CardActions>
              {/* <img src={PIC1} style={{ height: "50px", marginLeft: "1%", marginTop: "5%" }} /> */}

              <Typography style={{ marginTop: '4%', fontSize: "16px", color: "#615F5F", marginLeft: "8%" }}>
                Total New Leads<br />
                {Array.isArray(this.props.lead.new_leads) && this.props.lead.new_leads.length}
              </Typography>
            </CardActions>
          </Card>
          <Card sx={{ width: "250px", height: "13vh", borderRadius: "10px", marginTop: "2%", marginLeft: "4%", }}>
            <CardActions>
              {/* <img src={PIC2} style={{ height: "50px", marginLeft: "1%", marginTop: "5%" }} /> */}
              <Typography style={{ marginTop: '4%', fontSize: "16px", color: "#615F5F", marginLeft: "8%" }}>
                Total Leads<br />
                {Array.isArray(this.props.lead.all_client_details) && this.props.lead.all_client_details.length}
              </Typography>
            </CardActions>
          </Card>
          <Card sx={{ width: "250px", height: "13vh", borderRadius: "10px", marginTop: "2%", marginLeft: "4%", }}>
            <CardActions>
              {/* <img src={PIC3} style={{ height: "50px", marginLeft: "1%", marginTop: "5%" }} /> */}
              <Typography style={{ marginTop: '4%', fontSize: "16px", color: "#615F5F", marginLeft: "8%", }}>
                Total Converted<br />
                {Array.isArray(lead.conf_leads) && lead.conf_leads.length}
              </Typography>
            </CardActions>
          </Card>
        </div>



        <Box sx={{ width: '100%', typography: 'body1', marginTop: "3%" }}>
          <Box >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={this.handleChange} aria-label="basic tabs example">
                <Tab style={{ fontSize: '16px' }} label="Lead" />
                <Tab style={{ fontSize: '16px' }} label="New" />
                <Tab style={{ fontSize: '16px' }} label="Converted" />
                <Tab style={{ fontSize: '16px' }} label="Today's Lead" />
                {/* <Button style={{ fontSize: "16px", marginLeft: "20%", display: "flex", FlexDirection: "end", marginTop: "1%" }}
                 onClick={this.exportToExcel}
                >
                  <LoginIcon />Import
                </Button>
                <Typography style={{ fontSize: "16px", marginLeft: "4%", display: "flex", FlexDirection: "end", marginTop: "1%" }}>
                  < LogoutIcon />   Export
                </Typography> */}
                <Button onClick={() => {
                  this.setState({
                    addcustomer: true,

                  });

                }} style={{ marginLeft: '40%', height: "35px", display: "flex", FlexDirection: "end", marginRight: "10px" }} variant="contained">

                  Add
                </Button>
              </Tabs>
            </Box>

            {value === 0 && (
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
                      {lead.all_client_details.map((e) => {
                        return (
                          <TableRow >
                            {/* <TableCell style={{ textAlign: "center", fontSize: "18px" }}>   <Checkbox /> </TableCell>
                          <TableCell style={{ textAlign: "center", fontSize: "18px", color: "#525D79" }}>
                            <Avatar

                              sx={{ width: 28, height: 28 }}
                            />

                          </TableCell> */}
                            <TableCell style={{ textAlign: "center", fontSize: "14px" }}> <Typography style={{ fontSize: "15px" }}>
                              {e.name} </Typography>
                              <Typography style={{ fontSize: "12px", color: "#525D79" }}>
                                <AccessTimeIcon style={{ fontSize: "10px" }} />  {e.created_date.split('T')[0]} at {e.created_date.split('T')[1]}   </Typography>
                            </TableCell>
                            <TableCell style={{ textAlign: "center", fontSize: "14px" }}>
                              <Typography style={{ fontSize: "15px" }}>
                                <EmailIcon style={{ fontSize: "13px" }} />  {e.email}  </Typography>
                              <Typography style={{ fontSize: "12px", color: "#525D79" }}>
                                <CallIcon style={{ fontSize: "13px", marginLeft: "-30%" }} />  {e.phone} </Typography>


                            </TableCell>
                            <TableCell style={{ textAlign: "center", fontSize: "18px" }}>
                              <Typography style={{ fontSize: "16px" }}>
                                {e.source} </Typography>

                            </TableCell>
                            <TableCell style={{ textAlign: "center", fontSize: "18px" }}> <Button style={{ backgroundColor: e.status === 'Confirmed' ? 'green' : e.status === 'Infollowup' ? 'orange' : 'red', borderRadius: '10px', height: "25px" }} variant="contained"
                              onClick={() => {
                                this.setState({
                                  edit: true,
                                  id: e._id,
                                  type: e.type,
                                  status: e.status,
                                  // follow_up_date:new Date(e.follow_up_date)
                                });
                              }}
                            >
                              {e.status}
                            </Button></TableCell>
                            {/* <TableCell style={{ textAlign: "center", fontSize: "18px" }}>Not Assigned</TableCell> */}
                            <TableCell style={{ textAlign: "center", fontSize: "18px" }}>
                              <Link to="/orderbooking"><Tooltip title="Add Order">
                                <IconButton
                                  // disabled={c.name === "" || c.phone === "" || c.email === ""|| c.location === "" }
                                  onClick={() => {
                                    this.props.createCustomer(this.props.login.user_id, this.props.login.org._id, "", "", "", e.name, e.phone, "", e.email, e.location);
                                  }}
                                >
                                  {/* <Icon style={{ color: "green" }}>edit</Icon>  */}
                                  <AddShoppingCartIcon style={{ color: 'blue', fontWeight: "800" }} />
                                </IconButton>
                              </Tooltip>
                              </Link>
                            </TableCell>
                          </TableRow>
                        )
                      })}
                      {/* </TableBody> */}

                    </Table>
                  </TableContainer>

                </CardContent>

              </div>
            )}
            {value === 1 && (
              <div role="tabpanel" id="simple-tabpanel-1" aria-labelledby="simple-tab-1">

                <CardContent>
                  <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                      <TableHead >
                        <TableRow >
                          {/* <TableCell style={{ textAlign: "center", fontSize: "18px" }}>  </TableCell> */}
                          {/* <TableCell style={{ textAlign: "center", fontSize: "18px", color: "#525D79" }}> </TableCell> */}
                          <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}> Name</TableCell>
                          <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}>Contact</TableCell>
                          <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}>Source</TableCell>
                          <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}> Status</TableCell>
                          {/* <TableCell style={{ textAlign: "center", fontSize: "18px", color: "#525D79" }}>Assignee</TableCell> */}
                          <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}></TableCell>
                        </TableRow>
                        {lead.new_leads.map((e) => {
                          return (
                            <TableRow >
                              {/* <TableCell style={{ textAlign: "center", fontSize: "18px" }}>   <Checkbox /> </TableCell>
                          <TableCell style={{ textAlign: "center", fontSize: "18px", color: "#525D79" }}>
                            <Avatar

                              sx={{ width: 28, height: 28 }}
                            />

                          </TableCell> */}
                              <TableCell style={{ textAlign: "center", fontSize: "14px" }}> <Typography style={{ fontSize: "15px" }}>
                                {e.name} </Typography>
                                <Typography style={{ fontSize: "12px", color: "#525D79" }}>
                                  <AccessTimeIcon style={{ fontSize: "10px" }} />  {e.created_date.split('T')[0]} at {e.created_date.split('T')[1]}   </Typography>
                              </TableCell>
                              <TableCell style={{ textAlign: "center", fontSize: "14px" }}>
                                <Typography style={{ fontSize: "15px" }}>
                                  <EmailIcon style={{ fontSize: "13px" }} />  {e.email}  </Typography>
                                <Typography style={{ fontSize: "12px", color: "#525D79" }}>
                                  <CallIcon style={{ fontSize: "13px", marginLeft: "-30%" }} />  {e.phone} </Typography>


                              </TableCell>
                              <TableCell style={{ textAlign: "center", fontSize: "18px" }}>
                                <Typography style={{ fontSize: "16px" }}>
                                  {e.source} </Typography>

                              </TableCell>
                              <TableCell style={{ textAlign: "center", fontSize: "18px" }}> <Button style={{ backgroundColor: e.status === 'Confirmed' ? 'green' : e.status === 'Infollowup' ? 'orange' : 'red', borderRadius: '10px', height: "25px" }} variant="contained"
                                onClick={() => {
                                  this.setState({
                                    edit: true,
                                    id: e._id,
                                    type: e.type,
                                    status: e.status,
                                    // follow_up_date:new Date(e.follow_up_date)
                                  });
                                }}
                              >
                                {e.status}
                              </Button></TableCell>
                              {/* <TableCell style={{ textAlign: "center", fontSize: "18px" }}>Not Assigned</TableCell> */}
                              <TableCell style={{ textAlign: "center", fontSize: "18px" }}>
                                <Link to="/orderbooking"><Tooltip title="Add Order">
                                  <IconButton
                                    // disabled={c.name === "" || c.phone === "" || c.email === ""|| c.location === "" }
                                    onClick={() => {
                                      this.props.createCustomer(this.props.login.user_id, this.props.login.org._id, "", "", "", e.name, e.phone, "", e.email, e.location);
                                    }}
                                  >
                                    {/* <Icon style={{ color: "green" }}>edit</Icon>  */}
                                    <AddShoppingCartIcon style={{ color: 'blue', fontWeight: "800" }} />
                                  </IconButton>
                                </Tooltip>
                                </Link>
                              </TableCell>
                            </TableRow>
                          )
                        })}
                      </TableHead>
                    </Table>
                  </TableContainer>
                  {/* <ExportToExcel
                    table="table-to-xls" // ID of the table element
                    filename="data" // Name of the Excel file
                    sheet="sheet 1" // Name of the sheet within the Excel file
                    buttonText="Export to Excel"
                  /> */}

                </CardContent>


              </div>
            )}
            {value === 2 && (
              <div role="tabpanel" id="simple-tabpanel-2" aria-labelledby="simple-tab-2">



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
                          <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}> </TableCell>
                          {/* <TableCell style={{ textAlign: "center", fontSize: "18px", color: "#525D79" }}>Assignee</TableCell> */}
                          <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}></TableCell>
                        </TableRow>
                        {lead.conf_leads.map((e) => {
                          return (
                            <TableRow >
                              {/* <TableCell style={{ textAlign: "center", fontSize: "18px" }}>   <Checkbox /> </TableCell>
                          <TableCell style={{ textAlign: "center", fontSize: "18px", color: "#525D79" }}>
                            <Avatar

                              sx={{ width: 28, height: 28 }}
                            />

                          </TableCell> */}
                              <TableCell style={{ textAlign: "center", fontSize: "14px" }}> <Typography style={{ fontSize: "15px" }}>
                                {e.name}  </Typography>
                                <Typography style={{ fontSize: "12px", color: "#525D79" }}>
                                  <AccessTimeIcon style={{ fontSize: "10px" }} />  {e.created_date.split('T')[0]} at {e.created_date.split('T')[1]}   </Typography>
                              </TableCell>
                              <TableCell style={{ textAlign: "center", fontSize: "14px" }}>
                                <Typography style={{ fontSize: "15px" }}>
                                  <EmailIcon style={{ fontSize: "13px" }} />  {e.email}  </Typography>
                                <Typography style={{ fontSize: "12px", color: "#525D79" }}>
                                  <CallIcon style={{ fontSize: "13px", marginLeft: "-30%" }} /> {e.phone} </Typography>


                              </TableCell>
                              <TableCell style={{ textAlign: "center", fontSize: "18px" }}>
                                <Typography style={{ fontSize: "16px" }}>
                                  {e.source} </Typography>

                              </TableCell>
                              <TableCell style={{ textAlign: "center", fontSize: "18px" }}> <Button style={{ borderRadius: '10px', backgroundColor: "green", height: "25px" }} variant="contained"
                                onClick={() => {
                                  this.setState({
                                    edit: true,
                                    id: e._id,
                                    type: e.type,
                                    status: e.status,
                                    // follow_up_date:new Date(e.follow_up_date)
                                  });
                                }}
                              >
                                {e.status}
                              </Button></TableCell>
                              {/* <TableCell style={{ textAlign: "center", fontSize: "18px" }}>   <Avatar

                            sx={{ width: 28, height: 28 }}
                          />
                          </TableCell>


                          <TableCell style={{ textAlign: "center", fontSize: "18px" }}>
                            <Typography style={{ fontSize: "18px" }}>
                              R.K Mohanty </Typography>
                          </TableCell> */}



                              <TableCell style={{ textAlign: "center", fontSize: "18px" }}>

                                <Link to="/orderbooking"><Tooltip title="Add Order">
                                  <IconButton
                                    // disabled={c.name === "" || c.phone === "" || c.email === ""|| c.location === "" }
                                    onClick={() => {
                                      this.props.createCustomer(this.props.login.user_id, this.props.login.org._id, "", "", "", e.name, e.phone, "", e.email, e.location);
                                    }}
                                  >
                                    {/* <Icon style={{ color: "green" }}>edit</Icon>  */}
                                    <AddShoppingCartIcon style={{ color: 'blue', fontWeight: "800" }} />
                                  </IconButton>
                                </Tooltip>
                                </Link>
                              </TableCell>
                            </TableRow>
                          )
                        })}
                      </TableHead>
                    </Table>
                  </TableContainer>

                </CardContent>


              </div>
            )}
            {value === 3 && (
              <div role="tabpanel" id="simple-tabpanel-2" aria-labelledby="simple-tab-2">



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
                          <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}> </TableCell>
                          {/* <TableCell style={{ textAlign: "center", fontSize: "18px", color: "#525D79" }}>Assignee</TableCell> */}
                          <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}></TableCell>
                        </TableRow>
                        {lead.clients_details.map((e) => {
                          return (
                            <TableRow >
                              {/* <TableCell style={{ textAlign: "center", fontSize: "18px" }}>   <Checkbox /> </TableCell>
                          <TableCell style={{ textAlign: "center", fontSize: "18px", color: "#525D79" }}>
                            <Avatar

                              sx={{ width: 28, height: 28 }}
                            />

                          </TableCell> */}
                              <TableCell style={{ textAlign: "center", fontSize: "14px" }}> <Typography style={{ fontSize: "15px" }}>
                                {e.name}  </Typography>
                                <Typography style={{ fontSize: "12px", color: "#525D79" }}>
                                  <AccessTimeIcon style={{ fontSize: "10px" }} />  {e.created_date.split('T')[0]} at {e.created_date.split('T')[1]}   </Typography>
                              </TableCell>
                              <TableCell style={{ textAlign: "center", fontSize: "14px" }}>
                                <Typography style={{ fontSize: "15px" }}>
                                  <EmailIcon style={{ fontSize: "13px" }} />  {e.email}  </Typography>
                                <Typography style={{ fontSize: "12px", color: "#525D79" }}>
                                  <CallIcon style={{ fontSize: "13px", marginLeft: "-30%" }} /> {e.phone} </Typography>


                              </TableCell>
                              <TableCell style={{ textAlign: "center", fontSize: "18px" }}>
                                <Typography style={{ fontSize: "16px" }}>
                                  {e.source} </Typography>

                              </TableCell>
                              <TableCell style={{ textAlign: "center", fontSize: "18px" }}> <Button style={{ borderRadius: '10px', backgroundColor: e.status === 'Confirmed' ? 'green' : e.status === 'Infollowup' ? 'orange' : 'red', height: "25px" }} variant="contained"
                                onClick={() => {
                                  this.setState({
                                    edit: true,
                                    id: e._id,
                                    type: e.type,
                                    status: e.status,
                                    // follow_up_date:new Date(e.follow_up_date)
                                  });
                                }}
                              >
                                {e.status}
                              </Button></TableCell>
                              {/* <TableCell style={{ textAlign: "center", fontSize: "18px" }}>   <Avatar

                            sx={{ width: 28, height: 28 }}
                          />
                          </TableCell>


                          <TableCell style={{ textAlign: "center", fontSize: "18px" }}>
                            <Typography style={{ fontSize: "18px" }}>
                              R.K Mohanty </Typography>
                          </TableCell> */}



                              <TableCell style={{ textAlign: "center", fontSize: "18px" }}>
                                <Link to="/orderbooking"><Tooltip title="Add Order">
                                  <IconButton
                                    // disabled={c.name === "" || c.phone === "" || c.email === ""|| c.location === "" }
                                    onClick={() => {
                                      this.props.createCustomer(this.props.login.user_id, this.props.login.org._id, "", "", "", e.name, e.phone, "", e.email, e.location);
                                    }}
                                  >
                                    {/* <Icon style={{ color: "green" }}>edit</Icon>  */}
                                    <AddShoppingCartIcon style={{ color: 'blue', fontWeight: "800" }} />
                                  </IconButton>
                                </Tooltip>
                                </Link>
                              </TableCell>
                            </TableRow>
                          )
                        })}
                      </TableHead>
                    </Table>
                  </TableContainer>

                </CardContent>


              </div>
            )}
          </Box>





          <Dialog
            open={this.state.addcustomer}
            onClose={() => {
              this.setState({ addcustomer: false });
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            style={{ width: "100%", height: "100%" }}
          >

            <Grid>
              <Grid style={{ width: "380px" }}>
                <Box onClick={() => {
                  this.setState({ addcustomer: false });
                }}>
                  <CloseOutlinedIcon style={{ marginLeft: "350px", marginTop: "5%", }} />
                </Box>



                <DialogTitle style={{ fontSize: "18px", marginLeft: "4%", }}>Add New  Leads :</DialogTitle>
                <DialogContent>

                  <center><TextField type="text" style={{ height: "42px", width: "300px" }} variant="outlined" placeholder="Enter Name"
                    onChange={(e) => { this.handlename(e) }} />
                  </center>

                  <TextField
                    type="text"
                    style={{ marginLeft: "6%", height: "42px", width: "300px", marginTop: "5%" }}
                    variant="outlined"
                    placeholder="Company Name"
                    onChange={(e) => { this.setState({ company: e.target.value }) }} />

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <TextField
                      type="number"
                      onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                      }}
                      style={{ marginLeft: "6%", height: "42px", width: "300px", marginTop: "5%" }}
                      variant="outlined"
                      placeholder="Phone Number"
                      onChange={(e) => { this.setState({ phone: e.target.value }) }} />
                    <div style={{ marginTop: "35px", marginLeft: "1%", color: "red" }}>{error}</div>
                  </div>

                  <TextField
                    style={{ marginLeft: "6%", height: "42px", width: "300px", marginTop: "5%" }}
                    variant="outlined"
                    placeholder="Email Address"
                    onChange={(e) => {
                      this.setState({ email: e.target.value })
                      this.validateEmail()
                    }} />

                  <TextField
                    style={{ marginLeft: "6%", height: "42px", width: "300px", marginTop: "5%" }}
                    variant="outlined"
                    placeholder="Location"
                    onChange={(e) => {
                      this.setState({ location: e.target.value })
                      if (!this.state.isEmail) {
                        alert("Invalid Email. Please enter a valid email.");
                      }
                    }} />
                  {/* <TextField style={{ marginLeft: "6%", height: "42px", width: "300px", marginTop: "5%" }} variant="outlined" placeholder="Source" onChange={(e) => { this.setState({ source: e.target.value }) }} /> */}



                  <form >

                    <select style={{ marginLeft: "6%", height: "55px", width: "300px", marginTop: "5%" }} name="Source" id="Source"
                      onChange={(e) => { this.setState({ source: e.target.value }) }}>
                      <option value="Type">Source</option>
                      <option value="Bad">a</option>
                      <option value="Moderate">b</option>
                      <option value="High">c</option>
                    </select>

                  </form>

                  <form >

                    <select style={{ marginLeft: "6%", height: "55px", width: "300px", marginTop: "5%" }} name="Type" id="Type"
                      onChange={(e) => { this.setState({ type: e.target.value }) }}>
                      <option value="Type">Type</option>
                      <option value="Bad">Bad</option>
                      <option value="Moderate">Moderate</option>
                      <option value="High">High</option>
                    </select>

                  </form>
                  <form >

                    <select defaultValue="status" style={{ marginLeft: "6%", height: "55px", width: "300px", marginTop: "3%" }} name="Type" id="Type"
                      onChange={(e) => { this.setState({ status: e.target.value }) }} >
                      <option value="Status">Status</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Infollowup">Infollowup</option>
                      <option value="Rejected">Rejected</option>
                    </select>

                  </form>
                  <form >

                    {/* <select defaultValue="Model" style={{ marginLeft: "6%", height: "55px", width: "300px", marginTop: "3%" }} name="Type" id="Type"
                      onChange={(e) => {
                        this.setState({ model_id: e.target.value })
                      }}
                    >
                      <option >Select Model</option>
                      {all_model.all_model.map((e) => (
                        <option value={e._id}>{e.model_name}</option>
                      ))}
                    </select> */}
                    {/* <Select 
                      style={{ width: "100%", marginLeft: "10px", marginBottom: "3%" }}
                      value={this.state.model_id}
                      onChange={(e) => {
                        this.setState({
                          model_id: e.target.value,
                        })
                      }}
                    >
                      {all_model.all_model.map((e) => (
                        <MenuItem value={e._id}>{e.model_name}</MenuItem>
                      ))}
                    </Select> */}
                  </form>
                  <Textarea placeholder="Message" style={{ marginLeft: "6%", height: "65px", width: "300px", marginTop: "3%" }}
                    onChange={(e) => { this.setState({ message: e.target.value }) }}
                  />
                  <Typography style={{ fontSize: "15px", marginLeft: "6%", marginTop: "2%" }}>
                    Next FollowUp Date </Typography>



                  <input type="date" name="begin"

                    min="1997-01-01" max="2030-12-31" style={{ border: "1px solid rgba(0, 0, 0, 0.3)", height: "55px", width: "300px", marginLeft: "6%", marginTop: "2%" }}
                    onChange={(e) => {
                      this.setState({ follow_up_date: e.target.value })
                      console.log(this.state.model_id)
                    }}
                  />




                </DialogContent>

                <div style={{ marginTop: "2%" }}>
                  <center>

                    <Button variant="contained"
                      disabled={this.state.name === "" && this.state.company === "" && this.state.phone === "" && this.state.company === ""}
                      onClick={() => {
                        this.props.addLeadClient(this.props.login.user_id, this.props.login.org._id, this.state.name, this.state.company, this.state.phone, this.state.email, this.state.location, this.state.source, this.state.type, this.state.status, this.state.message, this.state.model_id, this.state.follow_up_date);
                        this.setState({ addcustomer: false });
                      }}
                    >
                      Add
                    </Button>

                  </center>
                </div>

                <div style={{ paddingTop: "5%" }}>

                </div>

              </Grid>
            </Grid>

          </Dialog>
          <Dialog
            open={this.state.edit}
          >
            <Grid
              style={{
                backgroundColor: "#EBF0FF",
                // height: "310px",
                // minWidth: "520px",
                scrollBehavior: "smooth",
                overflow: "revert-layer",
                alignSelf: "center",
                // overflowX: "hidden",
                flexDirection: "row",
                display: "flex",
                // overflowY: "hidden",
              }}
            >
              <Grid>
                <Box onClick={() => {
                  this.setState({ edit: false });
                }}>
                  <CloseOutlinedIcon style={{ marginLeft: "540px", marginTop: "20px", marginRight: "15px" }} />
                </Box>
                <Typography style={{ fontSize: "20px", fontWeight: "600", marginLeft: "5%", marginTop: "-2%" }}>
                  FollowUp Deatils
                </Typography>

                <div
                  class="input-group mb-3"
                  style={{ marginTop: "4%", display: 'flex', flexDirection: "row", }}>
                  <Typography style={{ width: "180px", fontSize: "18px", fontWeight: "400", marginLeft: "5%", marginTop: "-2%" }}>
                    Next FollowUp Date
                  </Typography>
                  <input type="date" name="begin" min="1997-01-01" max="2030-12-31" style={{ width: "250px", marginTop: "-2%", height: "30px" }}
                    // onChange={this.setState({follow_up_date:e.target.value})}
                    onChange={(e) => {
                      // this.props.addLeadClient(this.props.login.user_id, this.props.login.org._id, this.state.name, this.state.company, this.state.phone, this.state.email, this.state.location, this.state.source, this.state.type, this.state.status, this.state.message, this.state.model_id, this.state.follow_up_date);
                      this.setState({ follow_up_date: e.target.value });
                      console.log(this.state.follow_up_date)
                    }}
                    defaultValue={this.state.follow_up_date}
                    // ={this.state.follow_up_date}
                    value={this.state.follow_up_date}
                  />
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>

                    <DatePicker label="Basic date picker" />

                  </LocalizationProvider> */}
                </div>

                <div
                  class="input-group mb-3"
                  style={{ marginLeft: "30px", marginTop: "2%", display: 'flex', flexDirection: "row", }}
                >
                  {/* <Box style={{ display: 'flex' }}> */}
                  <Typography
                    style={{ width: "60px", fontWeight: 400, fontSize: "18px", marginTop: "13px" }}>
                    Type :-
                  </Typography>
                  <Select variant="standard"
                    style={{ width: "90px", marginLeft: "10px" }}
                    value={this.state.type}
                    onChange={(e) => { this.setState({ type: e.target.value }) }}
                  >

                    {/* <MenuItem value={"Type"}>Type</MenuItem> */}
                    <MenuItem value={"Bad"}>Bad</MenuItem>
                    <MenuItem value={"Moderate"}>Moderate</MenuItem>
                    <MenuItem value={"High"}>High</MenuItem>
                  </Select>
                  <Typography
                    style={{
                      width: "60px",
                      fontWeight: 400,
                      fontSize: "18px",
                      marginLeft: "40px",
                      marginTop: "12px"
                    }}
                  >
                    Status:-
                  </Typography>
                  <Select variant="standard"
                    style={{ width: "90px", marginLeft: "10px" }}
                    value={this.state.status}
                    onChange={(e) => { this.setState({ status: e.target.value }) }}
                  >

                    {/* <MenuItem value={"Status"}>Status</MenuItem> */}
                    <MenuItem value={"Confirmed"}>Confirmed</MenuItem>
                    <MenuItem value={"Infollowup"}>Infollowup</MenuItem>
                    <MenuItem value={"Rejected"}>Rejected</MenuItem>
                  </Select>

                </div>
                <div
                  class="input-group mb-3"
                  style={{
                    marginLeft: "30px",
                    marginTop: "4%",
                    flexDirection: "column",
                    display: "flex",
                  }}
                >
                  {/* <Box style={{ display: 'flex' }}> */}
                  <Typography
                    style={{
                      width: "100px",
                      fontWeight: 400,
                      fontSize: "18px",
                    }}
                  >
                    Comment :-
                  </Typography>


                  <Box style={{}}>
                    <Textarea style={{ height: "75px", width: "500px" }}
                      onChange={(e) => { this.setState({ message: e.target.value }) }}
                    />
                  </Box>
                </div>


                <center>
                  <Button
                    className="btns"
                    onClick={() => {
                      this.props.updateNewFollowup(this.state.id, this.state.follow_up_date, this.state.type, this.state.status, this.state.message, this.props.login.user_id, this.props.login.org._id);

                      this.setState({ edit: false });
                    }}
                    style={{
                      marginBottom: "30px",
                      marginTop: "30px",
                      color: "white",
                    }}
                  >
                    Save
                  </Button>
                </center>
              </Grid>
            </Grid>
          </Dialog>
          {/* <LoaderCon /> */}
          <Snackbar
            open={snackbar.response_received}
            close_snack_bar={close_snack_bar}
            message={snackbar.message}
          />
        </Box>

      </div>
    )
  }
}
