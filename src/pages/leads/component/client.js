import React, { Component } from "react";
import {
  Grid,
  // Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Icon,
  TextField,
  DialogActions,
  Avatar,
  Tooltip
} from "@mui/material";
// import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import DateTimePicker from "react-datetime-picker";

// import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Navigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import NoCrashOutlinedIcon from '@mui/icons-material/NoCrashOutlined';
// import CloseIcon from "@mui/icons-material/Close";
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import Dialog from "@mui/material/Dialog";
import LoaderCon from "../../../../common/loader/containers/loader_cont";
import Snackbar from "../../../../common/snackbar/components/snackbar";
import CloseIcon from '@mui/icons-material/Close';
import "../../style/order.css";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { DatePicker, Space } from 'antd';
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import es from 'date-fns/locale/en-GB';


import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

registerLocale('en-GB', es)
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));





export default class color extends Component {
  constructor(props) {


    super(props);
    this.state = {
      edit: false,
      view: false,
      add: false,
      modify: false,
      type: "",
      status: "",
      imageUrl: null,
      imageAlt: null,
      name: "",
      company: "",
      phone: " ",
      email: "",
      location: "",
      source: "",
      type: "",
      status: "",
      model_id: "",
      cust_aadhar: "",
      cust_pan: "",
      cust_gst_cert: "",
      other_doc1: "",
      other_doc2: "",
      cust_gst_no: "",
      follow_up_date: new Date(),
      today: new Date()
      // startDate: new Date()
    }
    // this.state = { follow_up_date: new };
    // this.dateChanged = this.dateChanged.bind(this);

    // this.handleChange = this.handleChange.bind(this);
    // this.onFormSubmit = this.onFormSubmit.bind(this);  

    this.handleChange = this.handleChange.bind(this);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  handleChange(date) {
    this.setState({
      follow_up_date: date
    })
  }

  // onFormSubmit(e) {
  //   e.preventDefault();
  //   console.log(this.state.startDate)
  // }


  // handleChange(date) {
  //   this.setState({
  //     follow_up_date: date
  //   })
  // }


  // datechange(today) {
  //   // var today = new Date();
  //   var dd = today.getDate();

  //   var mm = today.getMonth() + 1;
  //   var yyyy = today.getFullYear();
  //   if (dd < 10) {
  //     dd = '0' + dd;
  //   }

  //   if (mm < 10) {
  //     mm = '0' + mm;
  //   }
  //   today = dd + '/' + mm + '/' + yyyy;
  //   this.setState({ follow_up_date: today })
  // }

  // dateChanged(newdate) {
  //   this.setState({ follow_up_date: newdate });
  // }

  //   TableDatePicker() {
  //  const [date, setDate] = useState(new Date());
  //   }

  // onFormSubmit(e) {  
  //   e.preventDefault();  
  //   console.log(this.state.startDate)  
  // }  
  componentDidMount() {
    this.props.viewAlltheClients(this.props.login.user_id,this.props.login.org._id);
    // this.props.viewModel(this.props.login.org._id);
  }




  render() {
    const {
      lead,
      snackbar,
      all_model,
      login,
      close_snack_bar
    } = this.props;

    // const [startDate, setStartDate] = useState(new Date());


    // const onChange = (date, dateString) => {
    //   console.log(date, dateString);
    // };
    // const { imageUrl, imageAlt } = this.state;
    if (this.state.redirect === true) {
      return <Navigate to="/" />;
    }
    return (
      <Grid>
        <Grid style={{ display: "flex", justifyContent: "space-between" }}>
          <Box className="ordername">
            <center>
              <Button style={{ color: "white ", textAlign: "center" }}>
                All Leads
              </Button>
            </center>
          </Box>
          <Box className="ordernames">
            <center>
              <Button style={{ color: "white ", textAlign: "center" }}>
                Total Leads:-{lead.filtered_lead.length}
              </Button>
            </center>
          </Box>

          {/* <center style={{ borderRadius: 0 }}>
            <Link to = "/todayslead" style={{textDecoration:"none"}}>
            <Button
              className="orderadd"
              style={{ color: "white ", textAlign: "center",textDecoration:"none" }}
              onClick={() => {
                this.setState({
                  // add: true,
                });
              }}
            >
              Todays's Clients
            </Button></Link>
          </center> */}
          <center style={{ borderRadius: 0 }}>
            <Button
              className="orderadd"
              style={{ color: "white ", textAlign: "center" }}
              onClick={() => {
                this.setState({
                  add: true,
                });
              }}
            >
              Add Lead
            </Button>
          </center>
        </Grid>

        <Grid container direction="row" justifyContent="space-between"
          style={{ paddingLeft: 48, paddingRight: 64 }}>
          <Grid item lg={4}>
            <Search
              style={{
                backgroundColor: "#DCE4E5",
                height: 32,
                marginRight: 19,
                marginTop: 52,
                width: "300px",
                border: "2px solid #000000"
              }}
              direction="row"
            >
              <SearchIconWrapper>
                <SearchIcon style={{ color: "black" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Lead "
                color="black"
                inputProps={{ "aria-label": "search" }}
                style={{ textAlign: "center", justifyItems: "center", marginTop: -4 }}
                // onChange={handleChange}
                onChange={(e) => this.props.searchNAME(lead.all_client_details, e)}

              />
            </Search>
          </Grid>
          <Grid class="register-form-custom-select" style={{ marginTop: 5, }} >
            <select
              // style={{ width: "200px", marginLeft: "30px" }}
              style={{
                backgroundColor: "#DCE4E5",
                height: 32,
                marginRight: 19,
                marginTop: 48,
                width: "200px",
                border: "2px solid #000000"
              }}
              name=""
              // value={this.state.eventName}
              select
              onChange={(e) => { this.props.filter_status(lead.all_client_details, e.target.value) }}

            // onChange={handleChangeDepartment}
            >

              <option value="">Status</option>
              <option value="confirmed">confirmed</option>
              <option value="infollowup">infollowup</option>
              <option value="rejected">rejected</option>
            </select>
            <select
              // style={{ width: "200px", marginLeft: "10px" }}
              style={{
                backgroundColor: "#DCE4E5",
                height: 32,
                marginRight: 19,
                marginTop: 48,
                width: "200px",
                border: "2px solid #000000"
              }}
              name="participant type"
              // value={this.state.eventName}
              // onChange={handleChangeEvent}
              onChange={(e) => { this.props.filter_type(lead.all_client_details, e.target.value) }}
            >

              <option value="">Type</option>
              <option value="bad">Bad</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>


          </Grid>
        </Grid>

        <CardContent style={{ marginLeft: "40px", marginRight: "65px" }}>
          <TableContainer component={Paper}>
            <Table
              style={{ minWidth: 600 }}
              size="small"
              aria-label="a dense table"
              ref={this.tableRef}
            >
              <TableHead className="orderhead">
                <TableRow>
                  <TableCell>Sl No.</TableCell>
                  <TableCell>Name</TableCell>
                  {/* <TableCell>Model</TableCell> */}
                  <TableCell>Phone</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Source</TableCell>
                  {/* <TableCell>Type</TableCell>
                  <TableCell>Status</TableCell> */}
                  {/* <TableCell>Date</TableCell> */}
                  {/* <TableCell>Last Message</TableCell> */}
                  <TableCell style={{ marginLeft: "0px", textAlign: "center" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="orderbody">
                {lead.filtered_lead.map((c,index) => {
                  return (
                    <TableRow
                      // key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell >{index+1}</TableCell>
                      <TableCell >{c.name}</TableCell>
                      {/* <TableCell >{c.model_details}</TableCell> */}
                      <TableCell >{c.phone}</TableCell>
                      <TableCell >{c.email}</TableCell>
                      <TableCell >{c.location}</TableCell>
                      <TableCell >{c.source}</TableCell>
                      {/* <TableCell >{c.type}</TableCell>
                      <TableCell >{c.status}</TableCell> */}
                      {/* <TableCell >{c.follow_up_date}</TableCell> */}
                      {/* <TableCell>{c.followup_result.message}</TableCell>  */}


                      <TableCell style={{ alignItems: "center" }}>

                        <IconButton
                          // style={{marginLeft:"60px"}}
                          onClick={() => {
                            this.setState({
                              modify: true,
                              id: c._id,
                              type: c.type,
                              status: c.status
                            });
                          }}
                        >
                          <Icon style={{ color: "violet" }}>edit_calendar
                          </Icon>
                          {/* <EventIcon style={{ color: "violet" }} /> */}



                        </IconButton>

                        <IconButton
                          // style={{marginLeft:"60px"}}
                          onClick={() => {
                            this.props.viewClientsFollowup(c._id);
                            this.setState({
                              view: true,
                              id: c._id,
                              name: c.name,
                              company: c.company,
                              phone: c.phone,
                              email: c.email,
                              location: c.location,
                              source: c.source,
                              model_id: c.model_id,
                              type: c.type,
                              status: c.status

                            });
                          }}
                        >
                          {/* <Icon style={{ color: "black" }}>view</Icon> */}
                          <RemoveRedEyeOutlinedIcon style={{ color: 'blue' }} />

                        </IconButton>


                        <IconButton
                          onClick={() => {
                            this.setState({
                              edit: true,
                              id: c._id,
                              name: c.name,
                              company: c.company,
                              phone: c.phone,
                              email: c.email,
                              location: c.location,
                              source: c.source,
                              model_id: c.model_id


                            });
                          }}
                        >
                          {/* <Icon style={{ color: "green" }}>edit</Icon>  */}
                          <EditOutlinedIcon style={{ color: 'green' }} />
                        </IconButton>
                        <Link to="/addorder" style={{ textDecoration: "none", }}>
                          <Tooltip title="Add Order">
                            <IconButton
                              // disabled={c.name === "" || c.phone === "" || c.email === ""|| c.location === "" }
                              onClick={() => {
                                  // this.props.createCustomer(this.props.login.user_id,this.props.login.org._id,c.name, c.phone, c.email, c.location, (''), (''), (''), (''), (''), (''), (''));
                                }}
                             >
                              {/* <Icon style={{ color: "green" }}>edit</Icon>  */}
                              <AddShoppingCartIcon style={{ color: 'skyblue', fontWeight: "800" }} />
                            </IconButton>
                          </Tooltip>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>

        <Dialog
          open={this.state.modify}
          onClose={() => {
            this.setState({ modify: false });
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          style={{ width: "100%", height: "100%" }}
        >
          <Grid className="">


            <Grid  className='detail'style={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <center>

                  <Button style={{ color: "white ", textAlign: 'center', marginLeft: "0px", fontSize: 16 }}>Followup Details</Button>
                </center>
              </Box>






              <IconButton
                // color=""
                style={{ marginLeft: "0%", marginTop: '5px' }}
                onClick={() => {
                  this.setState({
                    modify: false,
                  })
                }}
              >
                <CloseIcon style={{ color: 'black', fontSize: 48 }}
                />
              </IconButton>

            </Grid>


          </Grid>
          <label style={{ marginTop: 10, marginLeft: 5, }}>Next FollowUp Date</label>


          <Box style={{ display: "flex" }}>


            {/* <input
            
              type="date"
              // name="begin"
              // placeholder="Current Fiscal Year - 01 April 2022"
              value={this.state.follow_up_date}
              
              // min="1997/01/01"
              // max="2030/12/31"
              
              style={{
                height: "25px",
                width: "50%",
                marginLeft: ".5%",
                marginTop: "2%",
              }}
              onChange={(e)=>this.setState({
                follow_up_date:e.target.value
}
    )}
            /> */}
          </Box>


          {/* <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}date
      shouldCloseOnSelect={false}
    /> */}

          {/* <DatePicker
            selected={this.state.follow_up_date}
            onChange={this.datechange} /> */}

          <DatePicker
            selected={this.state.follow_up_date}
            onChange={this.handleChange}
            value={this.state.follow_up_date}
            name="startDate"
            // locale="es"
            dateFormat="dd/MM/yyyy"

          />










          {/* 
          <DatePicker
            selected={this.state.follow_up_date}
            onChange={this.handleChange}
            // name="startDate"
            dateFormat="MM/dd/yyyy"
            // onChange={(e) => this.setState({ startDate: e.target.value})}

          /> */}




          <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <InputLabel id="demo-multiple-chip-label">Type</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              input={<OutlinedInput id="select-multiple-chip" label="Type" />}
              value={this.state.type}
              // fullWidth={true}
              onChange={(e) => { this.setState({ type: e.target.value }) }}
            // inputProps={{ 'aria-label': 'Without label' }}
            >

              <MenuItem value="Bad">
                <em>Bad</em>
              </MenuItem>
              <MenuItem value="Modrate">
                <em>Modrate</em>
              </MenuItem>
              <MenuItem value="High">
                <em>High</em>
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <InputLabel id="demo-multiple-chip-label">Status</InputLabel>
            <Select
              // style={{
              //     width: "100%"
              //   }}
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              input={<OutlinedInput id="select-multiple-chip" label="Status" />}
              value={this.state.status}
              // fullWidth={true}
              onChange={(e) => { this.setState({ status: e.target.value }) }}
            // inputProps={{ 'aria-label': 'Without label' }}
            >

              <MenuItem value="Confirmed">
                <em>Confirmed</em>
              </MenuItem>
              <MenuItem value="Infollowup">
                <em>Infollowup</em>
              </MenuItem>
              <MenuItem value="Rejected">
                <em>Rejected</em>
              </MenuItem>
            </Select>
          </FormControl>


          <Typography marginLeft={1} marginTop={2}>
            <TextField
              required
              id="outlined-required"
              label="Message"
              InputLabelProps={{ shrink: true, required: true }}
              // style={{ height: "60px", width: "280px" }}
              value={this.state.message}
              fullWidth={true}
              onChange={(e) => { this.setState({ message: e.target.value }) }}
            />

          </Typography>

          <DialogActions style={{ marginTop: "15px", marginRight: "0px" }}>
            <Button className="delete" variant="contained"
              style={{}}
              onClick={() => {
                this.setState({ modify: false });
              }}
            >Cancel
            </Button>
            <Button
              className="delete"
              variant="contained"
              onClick={() => {
                this.props.updateNewFollowup(this.state.id, this.state.follow_up_date, this.state.type, this.state.status, this.state.message,this.props.login.user_id,this.props.login.org._id);
                this.setState({ modify: false })
              }}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>


        <Dialog
          open={this.state.view}
          // onClose={() => { this.setState({ view: false }) }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"

          style={
            {
              // top: "50%",
              // left: "10%",
              // right: "auto",
              // bottom: "auto",
              // marginRight: "-50%",
              // transform: "translate(-50%, -50%)",
              width: "100%",
              marginLeft: "0%",
              // paddingTop: "40px",
              // paddingLeft: "25px",
              // paddingRight: "25px",
              // borderRadius: "0px",
              height: "700px",
              // zIndex: "200",
              // backgroundColor: "#fff"
            }}
        >
          {/* <DialogTitle id="alert-dialog-title">
            Vechicle Details


          </DialogTitle> */}


          <Grid className="view">


            <Grid style={{ display: "flex", justifyContent: "space-between" }}>
              <Box className='details'>
                <center>

                  <Button style={{ color: "white ", textAlign: 'center', marginLeft: "0px", fontSize: 16 }}>Followup Details</Button>
                </center>
              </Box>






              <IconButton
                // color=""
                style={{ marginLeft: "0%", marginTop: "-0%" }}
                onClick={() => {
                  this.setState({
                    view: false,
                    // _id: c._id,
                    // color_name: c.color_name,
                    // color_code: c.color_code,
                  })
                }}
              // size={18}
              >
                <CloseIcon style={{ color: 'black', fontSize: 48 }}
                />
              </IconButton>

              {/* </Grid> */}


            </Grid>
            {lead.clients_followup.map((c) => {
              return (
                <Grid item style={{ display: "flex", }} >
                  <Grid item style={{ display: "flex", width: 250, marginTop: "30px", marginLeft: "50px" }} >
                    <Typography style={{ fontWeight: 600, fontSize: 15, marginLeft: -20 }}>Follow Up Date:</Typography>
                    <Typography style={{ fontWeight: 400, fontSize: 14, marginTop: 2, width: 100 }}>&nbsp;&nbsp;&nbsp;&nbsp;{c.follow_up_date}</Typography>
                  </Grid>
                  <Grid item style={{ display: "flex", width: 300, marginTop: "30px", marginLeft: "100px" }} >
                    <Typography style={{ fontWeight: 600, fontSize: 15, }}>Message:</Typography>
                    <Typography style={{ fontWeight: 400, fontSize: 14, marginTop: 2, }}>&nbsp;&nbsp;&nbsp;{c.message}</Typography>
                  </Grid>
                </Grid>

              )
            })}

            <Grid item style={{ display: "flex", }} >
              <Grid item style={{ display: "flex", width: 250, marginTop: "30px", marginLeft: "50px" }} >
                <Typography style={{ fontWeight: 600, fontSize: 15, marginLeft: -20 }}>Company:</Typography>
                <Typography style={{ fontWeight: 400, fontSize: 14, marginTop: 2, width: 100 }}>&nbsp;&nbsp;&nbsp;&nbsp;{this.state.company}</Typography>
              </Grid>
              <Grid item style={{ display: "flex", width: 300, marginTop: "30px", marginLeft: "100px" }} >
                <Typography style={{ fontWeight: 600, fontSize: 15, }}>Type:</Typography>
                <Typography style={{ fontWeight: 400, fontSize: 14, marginTop: 2, }}>&nbsp;&nbsp;&nbsp;{this.state.type}</Typography>
              </Grid>
            </Grid>
            <Grid item style={{ display: "flex", }} >
              <Grid item style={{ display: "flex", width: 250, marginTop: "30px", marginLeft: "50px" }} >
                <Typography style={{ fontWeight: 600, fontSize: 15, marginLeft: -20 }}>Status:</Typography>
                <Typography style={{ fontWeight: 400, fontSize: 14, marginTop: 2, width: 100 }}>&nbsp;&nbsp;&nbsp;&nbsp;{this.state.status}</Typography>
              </Grid>
              {/* <Grid item style={{ display: "flex", width: 300, marginTop: "30px", marginLeft: "100px" }} >
                <Typography style={{ fontWeight: 600, fontSize: 15, }}>Message:</Typography>
                <Typography style={{ fontWeight: 400, fontSize: 14, marginTop: 2, }}>&nbsp;&nbsp;&nbsp;{this.state.type}</Typography>
              </Grid> */}
            </Grid>


          </Grid>

        </Dialog>


        <Dialog
          open={this.state.edit}
          // onClose={() => {
          //     this.setState({ add: false });
          // }}
          // style={{wi}}
          style={
            {
              // top: "50%",
              // left: "10%",
              // right: "auto",
              // bottom: "auto",
              // marginRight: "-50%",
              // transform: "translate(-50%, -50%)",
              // width: "1000px",
              // marginLeft: "500px",
              // paddingTop: "40px",
              // paddingLeft: "25px",
              // paddingRight: "25px",
              // borderRadius: "0px",
              height: "700px",
              // zIndex: "200",
              // backgroundColor: "#fff"
            }}
        >
          <Box borderRadius={5} sx={{
            width: 500,
            height: 500,
            backgroundColor: 'white',

          }}>
            <Typography textAlign="center" marginTop={2}>

            </Typography>
            <Grid style={{ display: "flex", justifyContent: "space-between" }}>
              <Box className='details'>
                <center>
                  <Button style={{ color: "white ", textAlign: 'center', marginLeft: "0px", fontSize: 16 }}>Edit Client</Button>
                </center>
              </Box>

              <IconButton
                // color=""
                style={{ marginLeft: "0%", marginTop: "-0%", marginRight: '15%' }}
                onClick={() => {
                  this.setState({
                    edit: false,
                  })
                }}
              // size={18}
              >
                <CloseIcon style={{ color: 'black', fontSize: 48 }}
                />
              </IconButton>

              {/* </Grid> */}


            </Grid>
            <Typography marginLeft={1} marginTop={2}>
              <TextField
                required
                fullWidth={true}
                id="outlined-required"
                label="Name"
                InputLabelProps={{ shrink: true, required: true }}
                style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                value={this.state.name}
                onChange={(e) => { this.setState({ name: e.target.value }) }}
              />
            </Typography>
            <Typography marginLeft={1} marginTop={2}>
              <TextField
                required
                id="outlined-required"
                label="Company Name"
                InputLabelProps={{ shrink: true, required: true }}
                style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                fullWidth={true}
                value={this.state.company}
                onChange={(e) => { this.setState({ company: e.target.value }) }}
              />
            </Typography>
            <Typography marginLeft={1} marginTop={2}>
              <TextField
                required
                id="outlined-required"
                type='tel'
                label="Phone Number"
                InputLabelProps={{ shrink: true, required: true }}
                style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                fullWidth={true}
                value={this.state.phone}
                // disabled={this.state.phone === "" || this.state.phone.length > 11 ? true : false}
                onChange={(e) => { this.setState({ phone: e.target.value }) }}
              />
            </Typography>
            <Typography marginLeft={1} marginTop={2}>
              <TextField
                required
                id="outlined-required"
                type='email'
                label="Email_Id"
                InputLabelProps={{ shrink: true, required: true }}
                style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                fullWidth={true}
                value={this.state.email}
                onChange={(e) => { this.setState({ email: e.target.value }) }}
              />
            </Typography>
            <Typography marginLeft={1} marginTop={2}>
              <TextField
                required
                id="outlined-required"
                label="Location"
                InputLabelProps={{ shrink: true, required: true }}
                style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                fullWidth={true}
                value={this.state.location}
                onChange={(e) => { this.setState({ location: e.target.value }) }}
              />

            </Typography>
            <Typography marginLeft={1} marginTop={2}>
              <TextField
                required
                id="outlined-required"
                label="Source"
                InputLabelProps={{ shrink: true, required: true }}
                style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                fullWidth={true}
                value={this.state.source}
                onChange={(e) => { this.setState({ source: e.target.value }) }}
              />

            </Typography>
            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
              {/* <InputLabel id="demo-multiple-chip-label" sx={{ marginLeft: '30px' }}>Model</InputLabel> */}

              <select
                // labelId="demo-multiple-chip-label"
                // id="demo-multiple-chip"
                input={<OutlinedInput id="select-multiple-chip" label="Status" />}
                value={this.state.model_id}
                style={{ height: "50px", width: "380px", marginLeft: '30px' }}

                // select
                required={true}
                defaultValue={this.state.model_id}
                onChange={(e) => {
                  this.setState({ model_id: e.target.value });

                }}
              >



                <option value="Select Model" >

                  {/* <SearchIconWrapper>
                                    <SearchIcon style={{ color: "black" }} />
                                </SearchIconWrapper> */}
                  SELECT MODEL

                </option>

                {all_model.all_model.map((e) => (
                  <>
                    <option value={e._id}>{e.model_name}</option>
                  </>
                ))}

              </select>
            </FormControl>







            {/* <Typography marginLeft={1} marginTop={2}>
              <TextField
                required
                id="outlined-required"
                label="Status"
                InputLabelProps={{ shrink: true, required: true }}
                // style={{ height: "60px", width: "280px" }}
                fullWidth={true}
                value={this.state.status}
                onChange={(e) => { this.setState({ status: e.target.value }) }}
              />

            </Typography> */}


            <Button className='details'
              // disabled={this.state.phone === "" || this.state.phone.length >= 11 ? true : false}

              onClick={() => {
                // this.props.updatecategory(this.state._id, this.state.category_name);

                this.props.updateClient(this.state.id, this.state.model_id, this.state.name, this.state.company, this.state.phone, this.state.email, this.state.location, this.state.source, this.props.login.user_id);
                this.setState({ edit: false });
              }} style={{ color: "white", textAlign: 'center', marginLeft: "50px", marginTop: "20px", marginBottom: "15px", fontSize: 16 }}>SAVE</Button>
            <Button className='details' onClick={() => {
              this.setState({ edit: false });
            }} style={{ color: "white", textAlign: 'center', marginLeft: "60px", marginTop: "20px", marginBottom: "15px", fontSize: 16 }}>Close</Button>
          </Box>
        </Dialog>

        <Dialog
          open={this.state.add}
          // onClose={() => {
          //     this.setState({ add: false });
          // }}
          // style={{wi}}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          // style={
          //   {
          //     // top: "50%",
          //     // left: "10%",
          //     // right: "auto",
          //     // bottom: "auto",
          //     // marginRight: "-50%",
          //     // transform: "translate(-50%, -50%)",
          //     // width: "1000px",
          //     // marginLeft: "500px",
          //     // paddingTop: "40px",
          //     // paddingLeft: "25px",
          //     // paddingRight: "25px",
          //     // borderRadius: "0px",
          //     height: "700px",
          //     // zIndex: "200",
          //     // backgroundColor: "#fff"
          //   }}
            style={{ marginLeft: "0%", width: "100%" }}
        >
          <Grid className="views" >
            <Grid style={{ display: "flex", justifyContent: "space-between" }}>
              <Box className='details'>
                <center>
                  <Button style={{ color: "white ", textAlign: 'center', marginLeft: "0px", fontSize: 16 }}>Add Client</Button>
                </center>
              </Box>

              <IconButton
                // color=""
                style={{ marginLeft: "0%", marginTop: "-0%", marginRight: '15%' }}
                onClick={() => {
                  this.setState({
                    add: false,
                  })
                }}
              // size={18}
              >
                <CloseIcon style={{ color: 'black', fontSize: 48 }}
                />
              </IconButton>

              {/* </Grid> */}


            </Grid>

            <Box borderRadius={5} sx={{
              width: 500,
              height: 500,
              backgroundColor: 'white',

            }}>
              <Typography textAlign="center" marginTop={2}>

              </Typography>
              <Typography marginLeft={1} marginTop={2}>

                <TextField
                  required
                  fullWidth={true}
                  id="outlined-required"
                  label="Name"
                  style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                  InputLabelProps={{ shrink: true, required: true }}
                  onChange={(e) => { this.setState({ name: e.target.value }) }}
                  size="small"
                />
              </Typography>
              <Typography marginLeft={1} marginTop={2}>
                <TextField
                  required
                  id="outlined-required"
                  label="Company Name"
                  InputLabelProps={{ shrink: true, required: true }}
                  style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                  // fullWidth={true}
                  onChange={(e) => { this.setState({ company: e.target.value }) }}
                  size="small"
                />
              </Typography>
              <Typography marginLeft={1} marginTop={2}>
                <TextField
                  required
                  type="number"
                  id="outlined-required"
                  label="phone number"
                  InputLabelProps={{ shrink: true, required: true }}
                  style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                  size="small"
                  // fullWidth={true}
                  onChange={(e) => { this.setState({ phone: e.target.value }) }}
                />
              </Typography>
              <Typography marginLeft={1} marginTop={2}>
                <TextField
                  required
                  id="outlined-required"
                  label="Email Id"
                  InputLabelProps={{ shrink: true, required: true }}
                  style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                  size="small"
                  // fullWidth={true}
                  onChange={(e) => { this.setState({ email: e.target.value }) }}
                />
              </Typography>
              <Typography marginLeft={1} marginTop={2}>
                <TextField
                  required
                  id="outlined-required"
                  label="Location"
                  InputLabelProps={{ shrink: true, required: true }}
                  size="small"
                  style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                  // fullWidth={true}
                  onChange={(e) => { this.setState({ location: e.target.value }) }}
                />

              </Typography>
              <Typography marginLeft={1} marginTop={2}>
                <TextField
                  required
                  id="outlined-required"
                  label="Source"
                  size="small"
                  InputLabelProps={{ shrink: true, required: true }}
                  style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                  // fullWidth={true}
                  onChange={(e) => { this.setState({ source: e.target.value }) }}
                />

              </Typography>
              {/* <Typography marginLeft={1} marginTop={2}>
                <TextField
                  required
                  id="outlined-required"
                  label="Type"
                  InputLabelProps={{ shrink: true, required: true }}
                  // style={{ height: "60px", width: "280px" }}
                  fullWidth={true}
                  onChange={(e) => { this.setState({ type: e.target.value }) }}
                />

              </Typography> */}

              <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                <InputLabel id="demo-multiple-chip-label" sx={{ marginLeft: '30px' }}>Type</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  input={<OutlinedInput id="select-multiple-chip" label="Type" />}
                  size="small"
                  // value={this.state.type}
                  style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                  // fullWidth={true}
                  onChange={(e) => { this.setState({ type: e.target.value }) }}
                // inputProps={{ 'aria-label': 'Without label' }}
                >

                  <MenuItem value="Bad">
                    Bad
                  </MenuItem>
                  <MenuItem value="Modrate">
                    Modrate
                  </MenuItem>
                  <MenuItem value="High">
                    High
                  </MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                <InputLabel id="demo-multiple-chip-label" sx={{ marginLeft: '30px' }}>Status</InputLabel>
                <Select
                  // style={{
                  //     width: "100%"
                  //   }}
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  size="small"
                  input={<OutlinedInput id="select-multiple-chip" label="Status" />}
                  // value={this.state.status}
                  style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                  // fullWidth={true}
                  onChange={(e) => { this.setState({ status: e.target.value }) }}
                // inputProps={{ 'aria-label': 'Without label' }}
                >

                  <MenuItem value="Confirmed">
                    Confirmed
                  </MenuItem>
                  <MenuItem value="Infollowup">
                    Infollowup
                  </MenuItem>
                  <MenuItem value="Rejected">
                    Rejected
                  </MenuItem>
                </Select>
              </FormControl>


              <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                {/* <InputLabel id="demo-multiple-chip-label" sx={{ marginLeft: '30px' }}>Model</InputLabel> */}

                <select
                  // labelId="demo-multiple-chip-label"
                  // id="demo-multiple-chip"
                  input={<OutlinedInput id="select-multiple-chip" label="Status" />}
                  value={this.state.model_id}
                  style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                  size="small"
                  // select
                  required={true}
                  onChange={(e) => {
                    this.setState({ model_id: e.target.value });

                  }}
                >



                  <option value="Select Model" >

                    {/* <SearchIconWrapper>
                                    <SearchIcon style={{ color: "black" }} />
                                </SearchIconWrapper> */}
                    SELECT MODEL

                  </option>

                  {all_model.all_model.map((e) => (
                    <>
                      <option value={e._id}>{e.model_name}</option>
                    </>
                  ))}

                </select>
              </FormControl>

              {/* </Grid> */}


              <Typography marginLeft={1} marginTop={2}>
                <TextField
                  required
                  id="outlined-required"
                  label="Message"
                  InputLabelProps={{ shrink: true, required: true }}
                  size="small"
                  style={{ height: "50px", width: "380px", marginLeft: '30px' }}
                  // fullWidth={true}
                  onChange={(e) => { this.setState({ message: e.target.value }) }}
                />

              </Typography>

              <FormControl sx={{ m: 1, width: 300, mt: 1, marginLeft: "40px" }}>

              <label style={{ marginTop: 1, marginLeft: 5, }}>Next FollowUp Date</label>


                <DatePicker
                  selected={this.state.follow_up_date}
                  onChange={this.handleChange}
                  value={this.state.follow_up_date}
                  name="startDate"
                  // locale="es"
                  dateFormat="dd/MM/yyyy"

                />

              </FormControl>

               <Button className='details' onClick={() => {
                this.setState({ add: false });
              }} style={{ color: "white", textAlign: 'center', marginLeft: "40px", marginTop: "10px", marginBottom: "15px", fontSize: 16 }}>Close</Button>
               <Button
                disabled={this.state.name === "" || this.state.company === "" || this.state.phone === "" || this.state.email === "" || this.state.location === "" || this.state.source === "" || this.state.type === "" || this.state.status === ""||this.state.follow_up_date ===""}
                className='details' onClick={() => {
                  this.props.addLeadClient(this.props.login.user_id,this.props.login.org._id, this.state.name, this.state.company, this.state.phone, this.state.email, this.state.location, this.state.source, this.state.type, this.state.status, this.state.message, this.state.model_id,this.state.follow_up_date);
                  this.setState({ add: false });

                }} style={{ color: "white", textAlign: 'center', marginLeft: "60px", marginTop: "10px", marginBottom: "15px", fontSize: 16 }}>Add</Button>
            
            </Box>
          </Grid>
        </Dialog>
        <LoaderCon />
        <Snackbar
          open={snackbar.response_received}
          close_snack_bar={close_snack_bar}
          message={snackbar.message}
        />
      </Grid>

    )
  }
}
