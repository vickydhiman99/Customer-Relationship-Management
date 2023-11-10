import { Box, Grid, Button, Divider, Link } from '@mui/material'
import React, { Component } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Ellipseback from "../../../../pages/image/ellipseback.png";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import { Checkbox } from '@mui/material';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from '@mui/material/Checkbox';
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import Table from "@mui/material/Table";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import "../../../../pages/employee/Admin/Components/employee.css";
// import Modal from '@mui/material/Modal';
import Totalemployee from "../../../../pages/image/TotalEmployee.png";
import Totalmanager from "../../../../pages/image/TotalManagers.png";
import Totalexecutive from "../../../../pages/image/TotalExecutives.png";

import TotalManager from "../../../image/manager.png";
import TotalExecutive from "../../../image/executive.png";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from '@mui/material/TextField';
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Radio from '@mui/material/Radio';
import DeleteIcon from '@mui/icons-material/Delete';
import "../../../../pages/employee/Admin/Components/empdet.css";
import { TypographyContext } from '@mui/joy/Typography/Typography';




const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "50%",
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
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

export default class Employee extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '1',
      checked: false,
      addmodal: false,
      editm: false,
      delem: false,
      deltab: false,
      deltabexe: false,
      delAfter: false,
      visibilitym: false,
      transferData: false,
      category: '',
      selectedValue: 'a',
      transferExeData: false,
      delExeAfter: false,
      addexe: false,
      editexe: false,
      delexe: false,
      visibilityexe: false,
      employeedeatils: false,
      Adminemployeedelete: false,
      empdeletemod: false,

      tdata: [
        {
          empname: "Kristin Watson",
          empid: "EMP123456",
          empmail: "abc@gmail.com",
          empcat: "Order",

        },
        {
          empname: "Kristin Watson",
          empid: "EMP123456",
          empmail: "abc@gmail.com",
          empcat: "Order",

        },
        {
          empname: "Kristin Watson",
          empid: "EMP123456",
          empmail: "abc@gmail.com",
          empcat: "Order",

        },
        {
          empname: "Kristin Watson",
          empid: "EMP123456",
          empmail: "abc@gmail.com",
          empcat: "Order",

        },
        {
          empname: "Kristin Watson",
          empid: "EMP123456",
          empmail: "abc@gmail.com",
          empcat: "Order",
        },
        {
          empname: "Kristin Watson",
          empid: "EMP123456",
          empmail: "abc@gmail.com",
          empcat: "Order",

        },

      ],
      tdataexe: [

        {
          exeempname: "Huisng Watson",
          exeempid: "EMP123456",
          exeempmail: "abc@gmail.com",
          exeempcat: "Order",

        },
        {
          exeempname: "Huisng Watson",
          exeempid: "EMP123456",
          exeempmail: "abc@gmail.com",
          exeempcat: "Order",

        },
        {
          exeempname: "Kristin Watson",
          exeempid: "EMP123456",
          exeempmail: "abc@gmail.com",
          exeempcat: "Order",

        },
      ]
    };
  }


  handleChangecategory = (event) => {
    this.setState({ category: event.target.value });
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  handleChangecheck = (event) => {
    this.setState({ checked: event.target.checked });
  };
  handleChangeradio = (event) => {
    this.setState({
      selectedValue: event.target.value,
    });
  };

  render() {
    const { category, selectedValue } = this.state;
    return (
      <Grid style={{ marginTop: "10%" }}>
        <Grid style={{ display: "flex", justifyContent: "space-between", marginLeft: "5%", marginRight: "5%" }}>
          <div style={{ display: "flex", flexDirection: 'row', }}>


            <Card sx={{ width: "240px", borderRadius: "10px", marginTop: "2%", boxShadow: "2px 2px 8px 0px #66666659" }}>
              <CardActions>
                <img src={TotalManager} style={{ height: "70px", marginLeft: "1%", marginTop: "5%" }} />

                <Typography style={{ marginTop: '4%', fontSize: "16px", color: "#615F5F", marginLeft: "8%" }}>
                  Total Managers<br />
                  <b style={{ color: "#000", marginLeft: "5%" }}>400</b>

                </Typography>
              </CardActions>
            </Card>
            <Card sx={{ width: "240px", borderRadius: "10px", marginTop: "2%", marginLeft: "4%", boxShadow: "2px 2px 8px 0px #66666659" }}>
              <CardActions>
                <img src={TotalExecutive} style={{ height: "70px", marginLeft: "1%", marginTop: "5%" }} />

                <Typography style={{ marginTop: '4%', fontSize: "16px", color: "#615F5F", marginLeft: "8%", }}>
                  Total Executives<br />
                  <b style={{ color: "#000", marginLeft: "5%" }}>400</b>

                </Typography>
              </CardActions>
            </Card>






          </div>
          <Paper className='paper-search-user'
            component="form"
            style={{
              display: "flex",
              height: "40px",
              width: "340px",
              boxShadow: "none",
              padding: "7px",
              marginTop: "3%",
              borderRadius: "100px",
              border: "1px solid var(--grey-colour-g-6, #B4B0B4)",
            }}
          >
            <IconButton type="button" style={{ p: "15px" }} aria-label="search">
              <SearchIcon style={{ fontSize: "25px" }} />
            </IconButton>
            <InputBase
              style={{ ml: 5, flex: 1, fontSize: "19px" }}
              placeholder="Search "
              inputProps={{ "aria-label": "Search " }}
            />
          </Paper>
        </Grid>


        <Box sx={{ width: '100%', typography: 'body1', marginTop: "4%" }}>
          <TabContext value={this.state.value}>
            <Box sx={{}}>
              <TabList onChange={this.handleChange} aria-label="lab API tabs example">
                <Tab className='tab-lii' style={{ marginLeft: "5%", textTransform: "capitalize", fontSize: "20px" }} label="Managers" value="1" />
                <Tab className='tab-lii' style={{ textTransform: "capitalize", fontSize: "20px" }} label="Executives" value="2" />

                {/* <Grid style={{ display: "flex", flexDirection: "row", marginLeft: "55%" }}>
                  <Button style={{ marginLeft: '5%', height: "35px", display: "flex", FlexDirection: "end", marginRight: "10px" }} variant="contained"
                    startIcon={<AddCircleOutlineOutlinedIcon />}
                    onClick={() => {
                      this.setState({ addmodal: true });
                    }}
                  >
                    Add
                  </Button>

                  <Button style={{ marginLeft: '5%', height: "35px", display: "flex", FlexDirection: "end", marginRight: "10px" }} variant="contained"

                    onClick={() => {
                      this.setState({ deltab: true });
                    }}
                  >
                    <DeleteIcon />
                  </Button>

                </Grid> */}

              </TabList>
            </Box>

            <TabPanel value="1">

              <Grid style={{ display: "flex", flexDirection: "row", marginLeft: "82%" }}>
                <Button style={{ marginLeft: '5%', height: "35px", display: "flex", FlexDirection: "end", marginRight: "10px" }} variant="contained"
                  startIcon={<AddCircleOutlineOutlinedIcon />}
                  onClick={() => {
                    this.setState({ addmodal: true });
                  }}
                  className='create-btn'
                >
                  Add
                </Button>

                <Button style={{ marginLeft: '5%', height: "35px", display: "flex", FlexDirection: "end", marginRight: "10px" }} variant="contained"
                  className='create-btn'
                  onClick={() => {
                    this.setState({ Adminemployeedelete: true });
                  }}
                >
                  <DeleteIcon />
                </Button>

              </Grid>


              <TableContainer component={Paper} style={{ marginTop: "2%" }}>
                <Table size="small" aria-label="a dense table">

                  <TableHead style={{ background: "lightgray" }} >
                    <TableRow style={{ height: "0px" }}>

                      <TableCell><Checkbox /></TableCell>

                      <TableCell style={{ textAlign: "center", color: "black", fontSize: "16px", color: "#525D79", alignItems: "center" }}>

                        Employee Name</TableCell>
                      <TableCell style={{ textAlign: "center", color: "black", fontSize: "16px", color: "#525D79" }}>Employee ID</TableCell>
                      <TableCell style={{ textAlign: "center", color: "black", fontSize: "16px", color: "#525D79" }}>Email ID</TableCell>
                      <TableCell style={{ textAlign: "center", color: "black", fontSize: "16px", color: "#525D79" }}> Category</TableCell>
                      <TableCell style={{ textAlign: "center", color: "black", fontSize: "18px", color: "#525D79" }}>Action</TableCell>

                    </TableRow>
                  </TableHead>

                  {this.state.tdata.map((item) => {
                    return (
                      <TableBody className="tablebody" >


                        <TableRow>

                          <a href="/Employeedetail" className='table-row' style={{ display: "contents", textDecoration: "none", cursor: "pointer" }}>

                            <TableCell></TableCell>

                            <TableCell style={{ textAlign: "center", fontSize: "14px" }}>
                              <Typography style={{ fontSize: "15px" }}>{item.empname}</Typography>
                            </TableCell>

                            <TableCell style={{ textAlign: "center", fontSize: "14px" }}>
                              <Typography style={{ fontSize: "15px" }}>{item.empid}</Typography>
                            </TableCell>

                            <TableCell style={{ textAlign: "center", fontSize: "18px" }}>
                              <Typography style={{ fontSize: "16px" }}>{item.empmail}</Typography>
                            </TableCell>

                            <TableCell style={{ textAlign: "center", fontSize: "18px" }}>
                              <Typography style={{ fontSize: "16px" }}>{item.empcat}</Typography>
                            </TableCell>
                          </a>
                          <TableCell style={{ alignItems: "center" }}>
                            <Grid style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
                              <BorderColorOutlinedIcon styled={{ color: "blue" }}
                                onClick={() => {
                                  this.setState({ editm: true });
                                }}
                              />
                              <VisibilityOutlinedIcon styled={{ color: "blue" }}
                                onClick={() => {
                                  this.setState({ visibilitym: true });
                                }}
                              />
                              <DeleteOutlineOutlinedIcon styled={{ color: "blue" }}
                                onClick={() => {
                                  this.setState({ deletemanagertable: true });
                                }}
                              />
                            </Grid>
                            {/* <Typography style={{ fontSize: "16px", color: "#03BB15" }}>{item.empprog}</Typography> */}
                          </TableCell>


                        </TableRow>




                      </TableBody>
                    );
                  })}

                </Table>
              </TableContainer>






            </TabPanel>
            <TabPanel value="2">
              <Grid style={{ display: "flex", flexDirection: "row", marginLeft: "82%" }}>
                <Button style={{ marginLeft: '5%', height: "35px", display: "flex", FlexDirection: "end", marginRight: "10px" }} variant="contained"
                  startIcon={<AddCircleOutlineOutlinedIcon />}
                  onClick={() => {
                    this.setState({ addexe: true });
                  }}
                >
                  Add
                </Button>

                <Button style={{ marginLeft: '5%', height: "35px", display: "flex", FlexDirection: "end", marginRight: "10px" }} variant="contained"

                  onClick={() => {
                    this.setState({ delExeAfter: true });
                  }}
                >
                  <DeleteIcon />
                </Button>

              </Grid>


              <TableContainer component={Paper} style={{ marginTop: "2%" }}>
                <Table size="small" aria-label="a dense table">

                  <TableHead style={{ background: "lightgray" }}>
                    <TableRow style={{ height: "0px" }}>
                      <TableCell><Checkbox /></TableCell>
                      <TableCell style={{ textAlign: "center", color: "black", fontSize: "16px", color: "#525D79" }}> Employee Name</TableCell>
                      <TableCell style={{ textAlign: "center", color: "black", fontSize: "16px", color: "#525D79" }}>Employee ID</TableCell>
                      <TableCell style={{ textAlign: "center", color: "black", fontSize: "16px", color: "#525D79" }}>Email ID</TableCell>
                      <TableCell style={{ textAlign: "center", color: "black", fontSize: "16px", color: "#525D79" }}> Category</TableCell>
                      <TableCell style={{ textAlign: "center", color: "black", fontSize: "18px", color: "#525D79" }}>Action</TableCell>

                    </TableRow>
                  </TableHead>

                  {this.state.tdataexe.map((item) => {
                    return (
                      <TableBody className="tablebody" >


                        <TableRow >
                          <Link to="/Employeedetail" style={{ display: "contents", textDecoration: "none", cursor: "pointer" }}>

                            <TableCell></TableCell>

                            <TableCell style={{ textAlign: "center", fontSize: "14px" }}>
                              <Typography style={{ fontSize: "15px" }}>{item.exeempname}</Typography>
                            </TableCell>

                            <TableCell style={{ textAlign: "center", fontSize: "14px" }}>
                              <Typography style={{ fontSize: "15px" }}>{item.exeempid}</Typography>
                            </TableCell>

                            <TableCell style={{ textAlign: "center", fontSize: "18px" }}>
                              <Typography style={{ fontSize: "16px" }}>{item.exeempmail}</Typography>
                            </TableCell>

                            <TableCell style={{ textAlign: "center", fontSize: "18px" }}>
                              <Typography style={{ fontSize: "16px" }}>{item.exeempcat}</Typography>
                            </TableCell>

                            <TableCell style={{ textAlign: "center", }}>

                              <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "10px" }}>
                                <BorderColorOutlinedIcon styled={{ color: "blue"  ,cursor:"pointer"}}
                                  onClick={() => {
                                    this.setState({ editm: true });
                                  }}
                                />
                                <VisibilityOutlinedIcon styled={{ color: "blue" ,cursor:"pointer"}}
                                  onClick={() => {
                                    this.setState({ visibilitym: true });
                                  }}
                                />
                                <DeleteOutlineOutlinedIcon styled={{ color: "blue" ,cursor:"pointer" }}
                                  onClick={() => {
                                    this.setState({ delexe: true });
                                  }}
                                />
                              </Grid>
                            </TableCell>

                          </Link>
                        </TableRow>

                      </TableBody>
                    );
                  })}

                </Table>
              </TableContainer>

            </TabPanel>

          </TabContext>
        </Box>


        {/* Manager tab dialogue box */}

        {/* --------------------add------------------ */}
        <Dialog
          open={this.state.addmodal} style={{}}>
          <Grid style={{ height: "370px", width: "450px" }}>

            <Box style={{ textAlign: "center" }}>

              <Typography style={{ fontSize: "18px", fontWeight: "500", marginTop: "3%" }}>Details of Manager</Typography>


              <Grid style={{ marginTop: "5%" }}>

                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography style={{}}>User Name-</Typography>
                  <TextField style={{ marginLeft: "2%", width: "300px" }} id="standard-basic" variant="standard" />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Email id-</Typography>
                  <TextField id="standard-basic" variant="standard" style={{ width: "300px", marginLeft: "25px", marginTop: "-7px" }} />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Phone No-</Typography>
                  <TextField id="standard-basic" variant="standard" style={{ marginLeft: "17px", marginTop: "-7px", width: "300px" }} />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Employee id-</Typography>
                  <TextField id="standard-basic" variant="standard" style={{ marginLeft: "10px", marginTop: "-7px", width: "300px" }} />
                </Grid>

                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Category -</Typography>
                  <FormControl variant="standard" sx={{ m: 1, width: "300px" }}>

                    <Select>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid style={{ marginTop: "6%", display: "flex", flexDirection: "row", justifyContent: "center" }}>

                  <Button
                    onClick={() => { this.setState({ addmodal: false }); }}
                    variant='outlined' style={{ border: "1px solid gray" ,color:"gray" }}>cancel</Button>
                  <Button
                    onClick={() => { this.setState({ addmodal: false }); }}
                    variant='contained' style={{ marginLeft: "20px", borderColor: "1px solid gray" }} className='create-btn'>save</Button>
                </Grid>

              </Grid>




            </Box>

          </Grid>
        </Dialog>

        {/* --------------------edit------------------ */}
        <Dialog
          open={this.state.editm} style={{}}>
          <Grid style={{ height: "400px", width: "450px" }}>

            <Box style={{ textAlign: "center" }}>

              <Typography style={{ fontSize: "18px", fontWeight: "500", marginTop: "3%" }}> Edit Details of Manager</Typography>


              <Grid style={{ marginTop: "5%" }}>

                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography style={{}}>User Name-</Typography>
                  <TextField style={{ marginLeft: "2%", width: "300px" }} id="standard-basic" variant="standard" />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Email id-</Typography>
                  <TextField id="standard-basic" variant="standard" style={{ width: "300px", marginLeft: "25px", marginTop: "-7px" }} />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Phone No-</Typography>
                  <TextField id="standard-basic" variant="standard" style={{ marginLeft: "17px", marginTop: "-7px", width: "300px" }} />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Employee id-</Typography>
                  <TextField id="standard-basic" variant="standard" style={{ marginLeft: "10px", marginTop: "-7px", width: "300px" }} />
                </Grid>

                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Category -</Typography>
                  <FormControl variant="standard" sx={{ m: 1, width: "310px" }}>

                    <Select>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid style={{ marginTop: "3%", display: "flex", flexDirection: "row", justifyContent: "center" }}>

                  <Button
                    onClick={() => { this.setState({ editm: false }); }}
                    variant='outlined' style={{ border: "1px solid gray" ,color:"gray" }}>cancel</Button>
                  <Button
                    onClick={() => { this.setState({ editm: false }); }}
                    variant='contained' style={{ marginLeft: "20px", borderColor: "1px solid gray" }} className='create-btn'>Save Changes</Button>
                </Grid>

              </Grid>




            </Box>

          </Grid>
        </Dialog>





        {/* --------------------visivilityeye------------------ */}

        <Dialog
          open={this.state.visibilitym} style={{}}>
          <Grid style={{ height: "400px", width: "450px" }}>

            <Box style={{ textAlign: "center" }}>

              <Typography style={{ fontSize: "18px", fontWeight: "500", marginTop: "3%" }}>Details of Manager</Typography>


              <Grid style={{ marginTop: "5%" }}>

                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography style={{}}>User Name-</Typography>
                  <TextField disabled placeholder=" Punchual duos" style={{ marginLeft: "2%", width: "300px" }} id="standard-basic" variant="standard" />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Email id-</Typography>
                  <TextField disabled placeholder="s@gmail.com" id="standard-basic" variant="standard" style={{ width: "300px", marginLeft: "25px", marginTop: "-7px" }} />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Phone No-</Typography>
                  <TextField disabled placeholder="9178888606" id="standard-basic" variant="standard" style={{ marginLeft: "17px", marginTop: "-7px", width: "300px" }} />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Employee id-</Typography>
                  <TextField disabled placeholder="435gjh" id="standard-basic" variant="standard" style={{ marginLeft: "10px", marginTop: "-7px", width: "300px" }} />
                </Grid>

                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Category -</Typography>
                  <FormControl disabled placeholder="jkjlk" variant="standard" sx={{ m: 1, width: "310px" }}>

                    <Select  >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid style={{ marginTop: "3%", display: "flex", flexDirection: "row", justifyContent: "center" }}>

                  {/* <Button
        onClick={() => { this.setState({ visibilitym: false }); }}
        variant='outlined' style={{ borderColor: "1px solid gray" }}>cancel</Button> */}
                  <Button
                    onClick={() => { this.setState({ visibilitym: false }); }}
                    variant='contained' style={{ marginLeft: "20px", borderColor: "1px solid gray" }}>Okay</Button>
                </Grid>

              </Grid>




            </Box>

          </Grid>


        </Dialog>

        {/* -----------delete tab----------- */}



        <Dialog open={this.state.empdeletemod}>
          <Grid style={{ height: "210px", width: "300px" }}>

            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, }}>
              {/* <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Delete</Typography> */}
              <CloseOutlinedIcon
                onClick={() => { this.setState({ empdeletemod: false }); }}
                style={{ fontSize: 20, color: "#000", cursor: "pointer", marginLeft: "250px", marginTop: "3%", }} />
            </Grid>
            {/* <Divider style={{ height: "1px", color: "#000" }} /> */}

            <Typography style={{ textAlign: "center", marginTop: "5%", color: "#000", fontWeight: 600 }}>Are you sure you want to delete ?</Typography>

            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "10%", gap: "10px" }}>
              <Button
                onClick={() => { this.setState({ empdeletemod: false }); }}
                variant='outlined' style={{ borderColor: "gray", color: "gray" }}>Yes</Button>
              <Button
                onClick={() => { this.setState({ empdeletemod: false }); }}
                variant='contained' style={{ backgroundColor: "gray", color: "#fff", marginRight: "4%" }}>No</Button>
            </Grid>


          </Grid>
        </Dialog>

        {/* --------------------deleterowwwwww------------------ */}
        <Dialog open={this.state.Adminemployeedelete}>
          <Grid style={{ height: "210px", width: "300px" }}>

            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, }}>
              {/* <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Delete</Typography> */}
              <CloseOutlinedIcon
                onClick={() => { this.setState({ Adminemployeedelete: false }); }}
                style={{ fontSize: 20, color: "#000", cursor: "pointer", marginLeft: "250px", marginTop: "3%", }} />
            </Grid>
            {/* <Divider style={{ height: "1px", color: "#000" }} /> */}

            <Typography style={{ textAlign: "center", marginTop: "5%", color: "#000", fontWeight: 600 }}>Are you sure you want to delete ?</Typography>

            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "10%", gap: "10px" }}>
              <Button
                onClick={() => { this.setState({ Adminemployeedelete: false }); }}
                variant='outlined' style={{ borderColor: "gray", color: "gray" }}>Yes</Button>
              <Button
                onClick={() => { this.setState({ Adminemployeedelete: false }); }}
                variant='contained' style={{ backgroundColor: "gray", color: "#fff", marginRight: "4%" }}>No</Button>
            </Grid>


          </Grid>
        </Dialog>


        {/* transfer dialog */}

        <Dialog
          open={this.state.transferData} style={{}}>
          <Grid style={{ height: "400px", width: "500px", paddingTop: "40px", paddingLeft: "40px", paddingRight: "40px" }}>


            <CancelOutlinedIcon
              onClick={() => { this.setState({ transferData: false }); }}
              style={{ marginLeft: "82%", marginTop: "1%" }} />

            <Grid style={{ gap: "88px", display: "flex", justifyContent: "space-between", flexDirection: "column", alignItems: "center", textAlign: "center" }}>


              <Grid style={{ display: "flex", marginBottom: "3%", flexDirection: "column", justifyContent: "center", alignItems: "baseline", marginTop: "2%" }}>
                <Typography>Assign leads to</Typography>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 280 }}>
                  {/* <InputLabel id="demo-simple-select-standard-label"> </InputLabel> */}
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={category}
                    onChange={this.handleChangecategory}
                    label="Category"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Hawkings Devi</MenuItem>
                    <MenuItem value={20}>Charles babage</MenuItem>
                    <MenuItem value={30}>Johns Hum</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <button
                variant='contained'
                style={{ fontSize: "20px", cursor: "pointer", bottom: "0", border: "none", borderRadius: "4px", width: "30%", outline: "none", padding: "14px", color: "white", background: "#441000", marginTop: "9%" }}
                onClick={() => { this.setState({ delAfter: true }); }}
              >
                Assign
              </button>
            </Grid>
          </Grid>
        </Dialog>



        {/* after transfer delete dialog box */}

        <Dialog
          open={this.state.delAfter} style={{}}>
          <Grid style={{ height: "200px", width: "320px" }}>

            <Typography style={{ fontSize: "18px", fontWeight: "600", marginLeft: "5%", marginTop: "5%", marginBottom: "5%" }}>Delete</Typography>
            <Divider />
            <Box style={{ textAlign: "center", marginTop: "5%" }}>

              <Typography>Are you sure want to delete?</Typography>





            </Box>

            <Grid style={{ marginTop: "10%", display: "flex", justifyContent: "space-around" }}>
              <Button
                onClick={() => { this.setState({ delAfter: false }); }}
                variant='outlined' style={{ color: "black", borderColor: "gray" }}>cancel</Button>
              <button
                onClick={() => { this.setState({ delAfter: false }); }}
                variant='contained' style={{ cursor: "pointer", bottom: "0", border: "none", borderRadius: "4px", width: "30%", outline: "none", padding: "14px", color: "white", background: "#441000" }}>Okay</button>
            </Grid>

          </Grid>
        </Dialog>


        {/* ////This process will manager................................................................... */}
        <Dialog
          open={this.state.deletemanagertable} style={{}}>
          <Grid style={{ height: "250px", width: "520px", padding: '12px' }}>

            <CancelOutlinedIcon
              onClick={() => { this.setState({ deletemanagertable: false }); }}
              style={{ marginLeft: "82%", marginTop: "2%" }} />

            <Box style={{ textAlign: "center" }}>




              <Grid style={{ marginTop: "5%" }}>

                <Typography style={{ fontSize: "18px", fontWeight: "500" }}>This process will lead to loss in lead so </Typography>

                <Grid style={{ marginTop: "7%", display: "flex", gap: "20px", alignItems: "center", justifyContent: "center" }}>

                  {/* <Radio
                    checked={selectedValue === 'a'}
                    onChange={this.handleChangeradio}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}


                   
                  /> */}
                  <Box style={{ display: "flex", gap: "10px" }}>
                    <Box
                      style={{ cursor: "pointer", height: "20px", width: "20px", border: "2px solid gray", borderRadius: "100px" }}
                      onClick={() => { this.setState({ transferdatamanager: true }); }}
                    ></Box>
                    Transfer data
                  </Box>
                  <Box style={{ display: "flex", gap: "10px" }}>
                    <Box
                      style={{ cursor: "pointer", height: "20px", width: "20px", border: "2px solid gray", borderRadius: "100px" }}
                      onClick={() => { this.setState({ donttransferdelete: true }); }}
                    ></Box>
                    Don't Transfer data
                  </Box>

                </Grid>
              </Grid>




            </Box>

          </Grid>
        </Dialog>



        {/* donttransferdeletemanager.................................................................................. */}




        <Dialog
          open={this.state.donttransferdelete} style={{}}>
          <Grid style={{ height: "210px", width: "300px" }}>

            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, }}>
              {/* <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Delete</Typography> */}
              <CloseOutlinedIcon
                onClick={() => { this.setState({ donttransferdelete: false }); }}
                style={{ fontSize: 20, color: "#000", cursor: "pointer", marginLeft: "250px", marginTop: "3%", }} />
            </Grid>
            {/* <Divider style={{ height: "1px", color: "#000" }} /> */}

            <Typography style={{ textAlign: "center", marginTop: "5%", color: "#000", fontWeight: 600 }}>Are you sure you want to delete ?</Typography>

            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "10%", gap: "10px" }}>
              <Button
                onClick={() => { this.setState({ donttransferdelete: false }); }}
                variant='outlined' style={{ borderColor: "gray", color: "gray" }}>Yes</Button>
              <Button
                onClick={() => { this.setState({ donttransferdelete: false }); }}
                variant='contained' style={{ backgroundColor: "gray", color: "#fff", marginRight: "4%" }}>No</Button>
            </Grid>


          </Grid>
        </Dialog>


        {/* //transferdatamanager..................................................................................... */}



        <Dialog
          open={this.state.transferdatamanager} style={{}}>
          <Grid style={{ height: "400px", width: "500px", paddingTop: "40px", paddingLeft: "40px", paddingRight: "40px" }}>


            <CancelOutlinedIcon
              onClick={() => { this.setState({ transferdatamanager: false }); }}
              style={{ marginLeft: "82%", marginTop: "1%" }} />

            <Grid style={{ gap: "88px", display: "flex", justifyContent: "space-between", flexDirection: "column", alignItems: "center", textAlign: "center" }}>


              <Grid style={{ display: "flex", marginBottom: "3%", flexDirection: "column", justifyContent: "center", alignItems: "baseline", marginTop: "2%" }}>
                <Typography>Assign leads to</Typography>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 280 }}>
                  {/* <InputLabel id="demo-simple-select-standard-label"> </InputLabel> */}
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={category}
                    onChange={this.handleChangecategory}
                    label="Category"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Hawkings Devi</MenuItem>
                    <MenuItem value={20}>Charles babage</MenuItem>
                    <MenuItem value={30}>Johns Hum</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <button
                variant='contained'
                style={{ fontSize: "20px", cursor: "pointer", bottom: "0", border: "none", borderRadius: "4px", width: "30%", outline: "none", padding: "14px", color: "white", background: "#441000", marginTop: "9%" }}
                onClick={() => { this.setState({ transferdatamanager: false }); }}
              >
                Assign
              </button>
            </Grid>
          </Grid>
        </Dialog>





































        {/* Executive tab dialogue box */}


        {/* --------------------add------------------ */}
        <Dialog
          open={this.state.addexe} style={{}}>
          <Grid style={{ height: "400px", width: "450px" }}>

            <Box style={{ textAlign: "center" }}>

              <Typography style={{ fontSize: "18px", fontWeight: "500", marginTop: "3%" }}>Details of Manager</Typography>


              <Grid style={{ marginTop: "5%" }}>

                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography style={{}}>User Name-</Typography>
                  <TextField style={{ marginLeft: "2%", width: "300px" }} id="standard-basic" variant="standard" />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Email id-</Typography>
                  <TextField id="standard-basic" variant="standard" style={{ width: "300px", marginLeft: "25px", marginTop: "-7px" }} />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Phone No-</Typography>
                  <TextField id="standard-basic" variant="standard" style={{ marginLeft: "17px", marginTop: "-7px", width: "300px" }} />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Employee id-</Typography>
                  <TextField id="standard-basic" variant="standard" style={{ marginLeft: "10px", marginTop: "-7px", width: "300px" }} />
                </Grid>

                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Category -</Typography>
                  <FormControl variant="standard" sx={{ m: 1, width: "310px" }}>

                    <Select>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid style={{ marginTop: "3%", display: "flex", flexDirection: "row", justifyContent: "center" }}>

                  <Button
                    onClick={() => { this.setState({ addexe: false }); }}
                    variant='outlined' style={{ borderColor: "1px solid gray" }}>cancel</Button>
                  <Button
                    onClick={() => { this.setState({ addexe: false }); }}
                    variant='contained' style={{ marginLeft: "20px", borderColor: "1px solid gray" }}>save</Button>
                </Grid>

              </Grid>




            </Box>

          </Grid>
        </Dialog>

        {/* --------------------edit------------------ */}
        <Dialog
          open={this.state.editexe} style={{}}>
          <Grid style={{ height: "400px", width: "450px" }}>

            <Box style={{ textAlign: "center" }}>

              <Typography style={{ fontSize: "18px", fontWeight: "500", marginTop: "3%" }}> Edit Details of Manager</Typography>


              <Grid style={{ marginTop: "5%" }}>

                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography style={{}}>User Name-</Typography>
                  <TextField style={{ marginLeft: "2%", width: "300px" }} id="standard-basic" variant="standard" />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Email id-</Typography>
                  <TextField id="standard-basic" variant="standard" style={{ width: "300px", marginLeft: "25px", marginTop: "-7px" }} />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Phone No-</Typography>
                  <TextField id="standard-basic" variant="standard" style={{ marginLeft: "17px", marginTop: "-7px", width: "300px" }} />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Employee id-</Typography>
                  <TextField id="standard-basic" variant="standard" style={{ marginLeft: "10px", marginTop: "-7px", width: "300px" }} />
                </Grid>

                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Category -</Typography>
                  <FormControl variant="standard" sx={{ m: 1, width: "310px" }}>

                    <Select>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid style={{ marginTop: "3%", display: "flex", flexDirection: "row", justifyContent: "center" }}>

                  <Button
                    onClick={() => { this.setState({ editexe: false }); }}
                    variant='outlined' style={{ borderColor: "1px solid gray" }}>cancel</Button>
                  <Button
                    onClick={() => { this.setState({ editexe: false }); }}
                    variant='contained' style={{ marginLeft: "20px", borderColor: "1px solid gray" }}>Update</Button>
                </Grid>

              </Grid>




            </Box>

          </Grid>
        </Dialog>


        {/* --------------------delete------------------ */}
        <Dialog
          open={this.state.delexe} style={{}}>
          <Grid style={{ height: "250px", width: "520px", padding: '12px' }}>

            <CancelOutlinedIcon
              onClick={() => { this.setState({ delexe: false }); }}
              style={{ marginLeft: "82%", marginTop: "2%" }} />

            <Box style={{ textAlign: "center" }}>




              <Grid style={{ marginTop: "5%" }}>

                <Typography style={{ fontSize: "18px", fontWeight: "500" }}>This process will lead to loss in lead so </Typography>

                <Grid style={{ marginTop: "7%", display: "flex", gap: "20px", alignItems: "center", justifyContent: "center" }}>

                  {/* <Radio
                    checked={selectedValue === 'a'}
                    onChange={this.handleChangeradio}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}


                   
                  /> */}
                  <Box style={{ display: "flex", gap: "10px" }}>
                    <Box
                      style={{ cursor: "pointer", height: "20px", width: "20px", border: "2px solid gray", borderRadius: "100px" }}
                      onClick={() => { this.setState({ transferExeData: true }); }}
                    ></Box>
                    Transfer data
                  </Box>
                  <Box style={{ display: "flex", gap: "10px" }}>
                    <Box
                      style={{ cursor: "pointer", height: "20px", width: "20px", border: "2px solid gray", borderRadius: "100px" }}
                      onClick={() => { this.setState({ delExeAfter: true }); }}
                    ></Box>
                    Don't Transfer data
                  </Box>

                </Grid>
              </Grid>




            </Box>

          </Grid>
        </Dialog>



        {/* transfer dialog */}

        <Dialog
          open={this.state.transferExeData} style={{}}>
          <Grid style={{ height: "400px", width: "500px", paddingTop: "40px", paddingLeft: "40px", paddingRight: "40px" }}>


            <CancelOutlinedIcon
              onClick={() => { this.setState({ transferExeData: false }); }}
              style={{ marginLeft: "82%", marginTop: "1%" }} />

            <Grid style={{ gap: "88px", display: "flex", justifyContent: "space-between", flexDirection: "column", alignItems: "center", textAlign: "center" }}>


              <Grid style={{ display: "flex", marginBottom: "3%", flexDirection: "column", justifyContent: "center", alignItems: "baseline", marginTop: "2%" }}>
                <Typography>Assign leads to</Typography>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 280 }}>
                  {/* <InputLabel id="demo-simple-select-standard-label"> </InputLabel> */}
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={category}
                    onChange={this.handleChangecategory}
                    label="Category"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Hawkings Devi</MenuItem>
                    <MenuItem value={20}>Charles babage</MenuItem>
                    <MenuItem value={30}>Johns Hum</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <button
                variant='contained'
                style={{ fontSize: "20px", cursor: "pointer", bottom: "0", border: "none", borderRadius: "4px", width: "30%", outline: "none", padding: "14px", color: "white", background: "#441000", marginTop: "9%" }}
                onClick={() => { this.setState({ transferExeData: true }); }}
              >
                Assign
              </button>
            </Grid>
          </Grid>
        </Dialog>



        {/* after transfer delete dialog box */}

        <Dialog
          open={this.state.delExeAfter} style={{}}>
          <Grid style={{ height: "210px", width: "300px" }}>

            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, }}>
              {/* <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Delete</Typography> */}
              <CloseOutlinedIcon
                onClick={() => { this.setState({ delExeAfter: false }); }}
                style={{ fontSize: 20, color: "#000", cursor: "pointer", marginLeft: "250px", marginTop: "3%", }} />
            </Grid>
            {/* <Divider style={{ height: "1px", color: "#000" }} /> */}

            <Typography style={{ textAlign: "center", marginTop: "5%", color: "#000", fontWeight: 600 }}>Are you sure you want to delete ?</Typography>

            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "10%", gap: "10px" }}>
              <Button
                onClick={() => { this.setState({ delExeAfter: false }); }}
                variant='outlined' style={{ borderColor: "gray", color: "gray" }}>Yes</Button>
              <Button
                onClick={() => { this.setState({ delExeAfter: false }); }}
                variant='contained' style={{ backgroundColor: "gray", color: "#fff", marginRight: "4%" }}>No</Button>
            </Grid>


          </Grid>
        </Dialog>




        {/* --------------------visivilityeye------------------ */}
        <Dialog
          open={this.state.visibilityexe} style={{}}>
          <Grid style={{ height: "400px", width: "450px" }}>

            <Box style={{ textAlign: "center" }}>

              <Typography style={{ fontSize: "18px", fontWeight: "500", marginTop: "3%" }}>Details of Executive</Typography>


              <Grid style={{ marginTop: "5%" }}>

                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography style={{}}>User Name-</Typography>
                  <TextField disabled placeholder=" Punchual duos" style={{ marginLeft: "2%", width: "300px" }} id="standard-basic" variant="standard" />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Email id-</Typography>
                  <TextField disabled placeholder="s@gmail.com" id="standard-basic" variant="standard" style={{ width: "300px", marginLeft: "25px", marginTop: "-7px" }} />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Phone No-</Typography>
                  <TextField disabled placeholder="9178888606" id="standard-basic" variant="standard" style={{ marginLeft: "17px", marginTop: "-7px", width: "300px" }} />
                </Grid>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Employee id-</Typography>
                  <TextField disabled placeholder="435gjh" id="standard-basic" variant="standard" style={{ marginLeft: "10px", marginTop: "-7px", width: "300px" }} />
                </Grid>

                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "4%" }}>
                  <Typography>Category -</Typography>
                  <FormControl disabled placeholder="jkjlk" variant="standard" sx={{ m: 1, width: "310px" }}>

                    <Select  >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid style={{ marginTop: "3%", display: "flex", flexDirection: "row", justifyContent: "center" }}>

                  {/* <Button
        onClick={() => { this.setState({ visibilitym: false }); }}
        variant='outlined' style={{ borderColor: "1px solid gray" }}>cancel</Button> */}
                  <Button
                    onClick={() => { this.setState({ visibilityexe: false }); }}
                    variant='contained' style={{ marginLeft: "20px", borderColor: "1px solid gray" }}>Okay</Button>
                </Grid>

              </Grid>




            </Box>

          </Grid>
        </Dialog>

      </Grid>

    )
  }
}
