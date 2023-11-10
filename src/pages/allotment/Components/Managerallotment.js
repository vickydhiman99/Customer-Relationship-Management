import { Button, Dialog, Divider, Grid, Typography, Box, Card } from '@mui/material'
import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CircularProgress from '@mui/material/CircularProgress';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Calendar from 'react-calendar';
import InputAdornment from '@mui/material/InputAdornment';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import OutlinedInput from '@mui/material/OutlinedInput';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Multiselect from 'multiselect-react-dropdown';
import Profimgm from "../../../pages/image/profimgm.png";
import TextArea from 'antd/es/input/TextArea';
import "../../../pages/allotment/Components/allotment.css";
import Drawer from '@mui/material/Drawer';
import Meta from "../../../pages/image/meta.png";
import { Close } from '@mui/icons-material';
import EditOutlined from '@mui/icons-material/EditOutlined';
import Email from "../../../pages/image/email.png";
import Call from "../../../pages/image/call.png";
import Whatsapp from "../../../pages/image/whatsapp.png";
import Message from "../../../pages/image/message.png";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';



export default class Managerallotment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allotmentm: '',
            value: new Date(),
            calandericon: false,
            calandericon1: false,
            createallot: false,
            deleteallot: false,
            editallot: false,
            options: [
                { name: 'Option 1️', id: 1 },
                { name: 'Option 2️', id: 2 }
            ],
            selectedValue: [],
            allotmentdata: [
                {
                    empname: "Manish Kathura",
                    emptask: "Service call with New Leads",
                    emplead: "40 Leads",
                    emppriority: "High",
                    empstatus: "In Progress",
                    empdue: "12-05-23",
                },
                {
                    empname: "Manish Kathura",
                    emptask: "Service call with New Leads",
                    emplead: "40 Leads",
                    emppriority: "High",
                    empstatus: "In Progress",
                    empdue: "12-05-23",
                },
                {
                    empname: "Manish Kathura",
                    emptask: "Service call with New Leads",
                    emplead: "40 Leads",
                    emppriority: "High",
                    empstatus: "In Progress",
                    empdue: "12-05-23",
                },
                {
                    empname: "Manish Kathura",
                    emptask: "Service call with New Leads",
                    emplead: "40 Leads",
                    emppriority: "High",
                    empstatus: "In Progress",
                    empdue: "12-05-23",
                },
            ],
            age: '',
            deletedash: false,
            right: false,
            allotmodal: [
                {
                    cname: "SK Dey",
                    cemail: "abc@mail.com , 9123432232",
                    cimg: Meta,
                    ctag: "meta",
                },
                {
                    cname: "SK Dey",
                    cemail: "abc@mail.com , 9123432232",
                    cimg: Meta,
                    ctag: "meta",
                },
                {
                    cname: "SK Dey",
                    cemail: "abc@mail.com , 9123432232",
                    cimg: Meta,
                    ctag: "meta",
                },
            ]

        };
        this.toggleDrawer = (open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }
            console.log("hello")
            this.setState({ ...this.state, right: open });
        };
        this.list = () => (
            <div style={{ width: "500px", padding: "15px" }}>




                <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2%" }}>
                    <Typography style={{ fontWeight: "500", fontSize: "20px" }}>Allotments Details</Typography>
                    <Close
                        onClick={() => {
                            this.setState({ right: false });
                        }}

                        style={{ fontSize: 25, marginLeft: "30px", cursor: "pointer" }}
                    />
                </Box>

                <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                    <Box style={{ marginTop: "3%" }}>
                        <Typography style={{ fontWeight: "500", fontSize: "15px" }}>Service call with New Leads</Typography>
                        <Typography style={{ color: "gray", fontSize: "10px", display: "flex" }}>Last Activity:
                            <div>22March at 10AM</div>
                        </Typography>
                    </Box>

                    <Box
                        onClick={() => { this.setState({ editallot: true }); }}
                        style={{ padding: "5px", background: "none", border: "1px solid lightgray ", borderRadius: "4px", display: "flex", alignItems: "center", width: "18%", cursor: "pointer" }}>
                        <EditOutlined />


                        <Typography style={{ fontWeight: "500", fontSize: "13px" }}> Edit</Typography>
                    </Box>
                </Box>

                <Grid style={{ display: "flex", flexDirection: "row", gap: "10px", marginTop: "2%" }}>
                    <Typography style={{ fontSize: "15px", fontWeight: "600" }}>Manish Kathura</Typography>
                    <Typography>Employee ID: XXXXXXXXXX68</Typography>
                </Grid>

                <Grid style={{ display: "flex", flexDirection: "row", gap: "10px", marginTop: "4%" }}>
                    <img style={{ height: 25, width: 25 }} src={Whatsapp} />
                    <img style={{ height: 25, width: 25 }} src={Email} />
                    <img style={{ height: 25, width: 25 }} src={Call} />
                    <img style={{ height: 25, width: 25 }} src={Message} />
                </Grid>


                <Grid style={{ width: "100%", border: "0.5px solid gray", height: "20%", borderRadius: 5, marginTop: "7%", padding: "20px", display: "flex", flexDirection: "row" }}>
                    <Grid>
                        <Typography style={{ fontSize: 12 }}>Priority</Typography>
                        <Grid style={{ display: "flex", alignItems: "center", marginTop: "1%" }}>
                            <FiberManualRecordIcon style={{ color: "green", fontSize: 12, }} />
                            <Typography style={{ color: "green", fontSize: 12 }}> High </Typography>
                        </Grid>
                    </Grid>
                    <hr style={{ backgroundColor: "gray", height: 30, width: 2 }} />
                    <Grid>
                        <Typography style={{ fontSize: 12 }}>Due Date</Typography>
                        <Typography style={{ fontSize: 12, marginTop: "1%" }}>10-05-23</Typography>
                    </Grid>
                    <hr style={{ backgroundColor: "gray", height: 30, width: 2 }} />
                    <Grid>
                        <Typography style={{ fontSize: 12 }}>Priority</Typography>
                        <Grid style={{ display: "flex", alignItems: "center", marginTop: "1%" }}>
                            <CircularProgress variant="determinate" value={75} style={{
                                color: "green",
                                width: "17px",
                                height: "17px",
                                fontSize: "8px",

                            }}
                                thickness={5}
                            />
                            <Typography style={{ fontSize: 12 }}>  In Progress</Typography>
                        </Grid>
                    </Grid>
                    <hr style={{ backgroundColor: "gray", height: 30, width: 2 }} />
                    <Grid>
                        <Typography style={{ fontSize: 12 }}>Task Assigned by</Typography>
                        <Typography style={{ fontSize: 12, marginTop: "1%" }}>10-05-23</Typography>

                    </Grid>
                </Grid>

                <Grid style={{ marginTop: "3%", padding: 10 }}>
                    <Typography style={{ fontSize: 14 }}><b>Allotment:</b>Service call with New Leads</Typography>
                    <Typography style={{ fontSize: 14, marginTop: "2%" }}><b>Allotment Description:</b>Lorem ipsum dolor sit amet. Cum perferendis voluptas ex minima architecto qui </Typography>
                    <Typography style={{ fontSize: 14, marginTop: "2%" }}><b>Leads:</b>40 Leads</Typography>
                </Grid>

                <Grid className='hidescroll' style={{ height: "100px", overflowY: "scroll" }} >
                    {this.state.allotmodal.map((item) => {
                        return (
                            <TableRow

                            >
                                <TableCell><Typography style={{ fontSize: 12 }}>{item.cname}</Typography></TableCell>
                                <TableCell><Typography style={{ fontSize: 12 }}>{item.cemail}</Typography></TableCell>
                                <TableCell><img style={{ height: 20, width: 20 }} src={item.cimg} /></TableCell>
                                <TableCell><Typography style={{ fontSize: 12 }}>{item.ctag}</Typography></TableCell>
                                <TableCell><ArrowCircleRightIcon /></TableCell>


                            </TableRow>
                        );
                    })}
                </Grid>

            </div>
        )
    }



    onSelect = (selectedList, selectedItem) => {

    }

    onRemove = (selectedList, removedItem) => {

    }

    handleChange = (event) => {
        this.setState({ allotmentm: event.target.value });
    };

    handleChangeCal = (calvalue) => {
        console.log(calvalue);
        this.setState({ calandericon: false });
        const formattedDate = calvalue.toISOString().split('T')[0];
        this.setState({ calvalue: formattedDate });
    };
    handleChangeCal1 = (calvalue1) => {
        console.log(calvalue1);
        this.setState({ calandericon1: false });
        const formattedDate = calvalue1.toISOString().split('T')[0];
        this.setState({ calvalue1: formattedDate });
    };
    render() {
        const { allotmentm } = this.state;
        const { calvalue,calvalue1 } = this.state;
        return (
            <Grid style={{ marginTop: "10%" }}>
                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

                    <FormControl style={{ width: "20%", marginLeft: "2%" }}>
                        <InputLabel id="demo-simple-select-label">All Allotment</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={allotmentm}
                            label="All Allotment"
                            onChange={this.handleChange}


                        >
                            <MenuItem value={1}>option</MenuItem>
                            <MenuItem value={2}>option</MenuItem>
                            <MenuItem value={3}>option</MenuItem>
                        </Select>
                    </FormControl>



                    <Grid style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: "3%" }}>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            {/* <InputLabel htmlFor="outlined-adornment-password">Date</InputLabel> */}
                            <OutlinedInput
                                id="outlined-adornment-password"
                                value={calvalue}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <CalendarMonthOutlinedIcon
                                            style={{ cursor: "pointer" }}
                                            onClick={() => { this.setState({ calandericon: true }); }}
                                        />
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <AddBoxIcon
                            onClick={() => { this.setState({ createallot: true }); }}
                            style={{ color: "gray", fontSize: 30 }} />
                    </Grid>





                </Grid>

                {/* -------------drawer---------- */}
                <Box >

                    <Drawer
                        anchor="right"
                        role="presentation"
                        open={this.state.right}
                        onClose={() => this.toggleDrawer(false)}
                    >
                        {this.list()}
                    </Drawer>


                </Box>

                <Grid style={{ marginTop: "2%" }}>
                    <Table>
                        <TableHead style={{ background: "lightgray" }}>
                            <TableRow>
                                <TableCell style={{ color: "black" }}>Employee Name </TableCell>
                                <TableCell style={{ color: "black" }}>Task</TableCell>
                                <TableCell style={{ color: "black" }}>Leads Assigned</TableCell>
                                <TableCell style={{ color: "black" }}>Priority</TableCell>
                                <TableCell style={{ color: "black" }}>Status</TableCell>
                                <TableCell style={{ color: "black" }}>Due Date</TableCell>
                                <TableCell style={{ color: "black" }}>Action</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>


                            {this.state.allotmentdata.map((item) => {
                                return (
                                    <TableRow

                                    >
                                        <TableCell>{item.empname}</TableCell>
                                        <TableCell>{item.emptask} </TableCell>
                                        <TableCell >{item.emplead}</TableCell>
                                        <TableCell >
                                            <Grid style={{ display: "flex", alignItems: "center" }}>
                                                <FiberManualRecordIcon style={{ color: "green", fontSize: 12, }} />
                                                <Typography style={{ color: "green" }}> {item.emppriority} </Typography>
                                            </Grid>
                                        </TableCell>
                                        <TableCell>
                                            <Grid style={{ display: "flex", alignItems: "center" }}>
                                                <CircularProgress variant="determinate" value={75} style={{
                                                    color: "green",
                                                    width: "15px",
                                                    height: "15px",
                                                    fontSize: "8px",

                                                }}
                                                    thickness={6}
                                                />
                                                <Typography>  {item.emppriority}</Typography>
                                            </Grid>
                                        </TableCell>
                                        <TableCell>{item.empdue}</TableCell>
                                        <TableCell>
                                            <Grid style={{ display: "flex", alignItems: "center" }}>
                                                < VisibilityOutlinedIcon
                                                    onClick={this.toggleDrawer(true)}
                                                    style={{ color: "#A76D42", cursor: "pointer" }} />
                                                <DeleteOutlineOutlinedIcon
                                                    onClick={() => { this.setState({ deleteallot: true }); }}
                                                    style={{ color: "#C43232", cursor: "pointer" }} />
                                            </Grid>
                                        </TableCell>


                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>

                </Grid>

                {/* -------calender ----------- */}

                <Dialog
                    open={this.state.calandericon}
                >
                    <Calendar
                        onChange={this.handleChangeCal} value={calvalue} />
                </Dialog>


                <Dialog
                    open={this.state.calandericon1}
                >
                    <Calendar
                        onChange={this.handleChangeCal1} value={calvalue1} />
                </Dialog>


                {/* ---------add----------- */}

                <Dialog open={this.state.createallot}>
                    <Grid style={{ height: "auto", width: "600px" }}>
                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, backgroundColor: "lightgray" }}>
                            <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Create task</Typography>
                            <CloseOutlinedIcon
                                onClick={() => { this.setState({ createallot: false }); }}
                                style={{ fontSize: 20, color: "#000", cursor: "pointer" }} />
                        </Grid>

                        <Grid style={{ padding: 20 }}>

                            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                    <Typography style={{ whiteSpace: "nowrap" }}>Assign To:</Typography>
                                    <FormControl style={{ width: '20ch', marginLeft: "2%" }}>
                                        <InputLabel id="demo-simple-select-label">Select Executives</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                            label="Select Executives"
                                            onChange={this.handleChange}

                                        >
                                            <MenuItem value={1}>
                                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                                    <img src={Profimgm} />
                                                    <Typography>options</Typography>
                                                </Grid>
                                            </MenuItem>
                                            <MenuItem value={2}>
                                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                                    <img src={Profimgm} />
                                                    <Typography>options</Typography>
                                                </Grid>
                                            </MenuItem>
                                            <MenuItem value={3}>
                                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                                    <img src={Profimgm} />
                                                    <Typography>options</Typography>
                                                </Grid>
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                    <Typography>Due Date:</Typography>
                                    <FormControl sx={{ m: 1, width: '20ch' }} variant="outlined">
                                        {/* <InputLabel htmlFor="outlined-adornment-password">Date</InputLabel> */}
                                        <OutlinedInput
                                            placeholder='Select Date'
                                            id="outlined-adornment-password"
                                            value={calvalue1}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <CalendarMonthOutlinedIcon
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => { this.setState({ calandericon1: true }); }}
                                                    />
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Grid style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "2%" }}>
                                <Typography>Leads :</Typography>
                                <Grid
                                    style={{ width: "70%", marginLeft: "5%", display: "flex", flexDirection: "row", }}

                                >
                                    <Multiselect
                                        options={this.state.options}
                                        selectedValues={this.state.selectedValue}
                                        onSelect={this.onSelect}
                                        onRemove={this.onRemove}
                                        displayValue="name"
                                    />
                                    <Typography>40 Leads selected</Typography>
                                </Grid>

                            </Grid>

                            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "3%" }}>
                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                    <Typography style={{ whiteSpace: "nowrap" }}>Allotment:</Typography>
                                    <FormControl style={{ width: '20ch', marginLeft: "2%" }}>
                                        <InputLabel id="demo-simple-select-label">Follow up on purposeal</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                            label="Select Executives"
                                            onChange={this.handleChange}

                                        >
                                            <MenuItem value={1}>Service call with new leads</MenuItem>
                                            <MenuItem value={2}>Service call with new leads</MenuItem>
                                            <MenuItem value={3}>Service call with new leads</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid style={{ display: "flex", alignItems: "center", marginRight: "2%" }}>
                                    <Typography>Priority:</Typography>
                                    <FormControl style={{ width: '20ch', marginLeft: "2%" }}>
                                        {/* <InputLabel id="demo-simple-select-label">Select Executives</InputLabel> */}
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                            label="Select Executives"
                                            onChange={this.handleChange}

                                        >
                                            <MenuItem value={1}>
                                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                                    <FiberManualRecordIcon style={{ color: "green", fontSize: 12, }} />
                                                    <Typography style={{ color: "green" }}>High </Typography>
                                                </Grid>
                                            </MenuItem>
                                            <MenuItem value={2}>
                                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                                    <FiberManualRecordIcon style={{ color: "red", fontSize: 12, }} />
                                                    <Typography style={{ color: "#000" }}>Low </Typography>
                                                </Grid>
                                            </MenuItem>
                                            <MenuItem value={3}>
                                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                                    <FiberManualRecordIcon style={{ color: "yellow", fontSize: 12, }} />
                                                    <Typography style={{ color: "#000" }}>Moderate </Typography>
                                                </Grid>
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Grid style={{ marginTop: "3%" }}>
                                <Typography>Allotment Description:</Typography>
                                <TextArea
                                    placeholder='Lorem ipsum dolor sit amet. Cum perferendis voluptas ex minima architecto qui '
                                    style={{ width: "100%", backgroundColor: "lightgray", borderRadius: 5 }} />
                            </Grid>

                            <Grid style={{ display: "flex", flexDirection: "row",gap:"20px",marginLeft:"70%", alignSelf: "flex-end", marginTop: "4%" }}>
                                <Button
                                    onClick={() => { this.setState({ createallot: false }); }}
                                    variant='outlined' style={{ borderColor: "gray", color: "gray" }}>Cancel</Button>
                                <Button
                                    onClick={() => { this.setState({ createallot: false }); }}
                                    variant='contained' style={{ backgroundColor: "gray", color: "#fff", marginRight: "4%" }} className='create-btn'>Add Task</Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Dialog>

                {/* ----------edit--------------- */}
                <Dialog open={this.state.editallot}>
                    <Grid style={{ height: "auto", width: "600px" }}>
                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, backgroundColor: "lightgray" }}>
                            <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Create Allotment</Typography>
                            <CloseOutlinedIcon
                                onClick={() => { this.setState({ editallot: false }); }}
                                style={{ fontSize: 20, color: "#000", cursor: "pointer" }} />
                        </Grid>

                        <Grid style={{ padding: 20 }}>

                            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                    <Typography style={{ whiteSpace: "nowrap" }}>Assign To:</Typography>
                                    <FormControl style={{ width: '20ch', marginLeft: "2%" }}>
                                        <InputLabel id="demo-simple-select-label">Select Executives</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                            label="Select Executives"
                                            onChange={this.handleChange}

                                        >
                                            <MenuItem value={1}>
                                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                                    <img src={Profimgm} />
                                                    <Typography>options</Typography>
                                                </Grid>
                                            </MenuItem>
                                            <MenuItem value={2}>
                                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                                    <img src={Profimgm} />
                                                    <Typography>options</Typography>
                                                </Grid>
                                            </MenuItem>
                                            <MenuItem value={3}>
                                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                                    <img src={Profimgm} />
                                                    <Typography>options</Typography>
                                                </Grid>
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                    <Typography>Due Date:</Typography>
                                    <FormControl sx={{ m: 1, width: '20ch' }} variant="outlined">
                                        {/* <InputLabel htmlFor="outlined-adornment-password">Date</InputLabel> */}
                                        <OutlinedInput
                                            placeholder='Select Date'
                                            id="outlined-adornment-password"
                                            value={calvalue}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <CalendarMonthOutlinedIcon
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => { this.setState({ calandericon: true }); }}
                                                    />
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Grid style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "2%" }}>
                                <Typography>Leads :</Typography>
                                <Grid
                                    style={{ width: "70%", marginLeft: "5%", display: "flex", flexDirection: "row", }}

                                >
                                    <Multiselect
                                        options={this.state.options}
                                        selectedValues={this.state.selectedValue}
                                        onSelect={this.onSelect}
                                        onRemove={this.onRemove}
                                        displayValue="name"
                                    />
                                    <Typography>40 Leads selected</Typography>
                                </Grid>

                            </Grid>

                            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "3%" }}>
                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                    <Typography style={{ whiteSpace: "nowrap" }}>Allotment:</Typography>
                                    <FormControl style={{ width: '20ch', marginLeft: "2%" }}>
                                        <InputLabel id="demo-simple-select-label">Follow up on purposeal</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                            label="Select Executives"
                                            onChange={this.handleChange}

                                        >
                                            <MenuItem value={1}>Service call with new leads</MenuItem>
                                            <MenuItem value={2}>Service call with new leads</MenuItem>
                                            <MenuItem value={3}>Service call with new leads</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid style={{ display: "flex", alignItems: "center", marginRight: "2%" }}>
                                    <Typography>Priority:</Typography>
                                    <FormControl style={{ width: '20ch', marginLeft: "2%" }}>
                                        {/* <InputLabel id="demo-simple-select-label">Select Executives</InputLabel> */}
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                            label="Select Executives"
                                            onChange={this.handleChange}

                                        >
                                            <MenuItem value={1}>
                                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                                    <FiberManualRecordIcon style={{ color: "green", fontSize: 12, }} />
                                                    <Typography style={{ color: "green" }}>High </Typography>
                                                </Grid>
                                            </MenuItem>
                                            <MenuItem value={2}>
                                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                                    <FiberManualRecordIcon style={{ color: "red", fontSize: 12, }} />
                                                    <Typography style={{ color: "#000" }}>Low </Typography>
                                                </Grid>
                                            </MenuItem>
                                            <MenuItem value={3}>
                                                <Grid style={{ display: "flex", alignItems: "center" }}>
                                                    <FiberManualRecordIcon style={{ color: "yellow", fontSize: 12, }} />
                                                    <Typography style={{ color: "#000" }}>Moderate </Typography>
                                                </Grid>
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Grid style={{ marginTop: "3%" }}>
                                <Typography>Allotment Description:</Typography>
                                <TextArea
                                    placeholder='Lorem ipsum dolor sit amet. Cum perferendis voluptas ex minima architecto qui '
                                    style={{ width: "100%", backgroundColor: "lightgray", borderRadius: 5 }} />
                            </Grid>

                            <Grid style={{ display: "flex", flexDirection: "row-reverse", alignSelf: "flex-end", marginTop: "4%" }}>
                                <Button
                                    onClick={() => { this.setState({ editallot: false }); }}
                                    variant='outlined' style={{ borderColor: "gray", color: "gray" }}>Cancel</Button>
                                <Button
                                    onClick={() => { this.setState({ editallot: false }); }}
                                    variant='contained' style={{ backgroundColor: "gray", color: "#fff", marginRight: "4%" }} className='create-btn'>Add Task</Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Dialog>


                <Dialog open={this.state.deleteallot}>
                    {/* <Grid style={{ height: "200px", width: "300px" }}>

                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, }}>
                            <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Delete</Typography>
                            <CloseOutlinedIcon
                                onClick={() => { this.setState({ deleteallot: false }); }}
                                style={{ fontSize: 20, color: "#000", cursor: "pointer" }} />
                        </Grid>
                        <Divider style={{ height: "1px", color: "#000" }} />

                        <Typography style={{ textAlign: "center", marginTop: "5%", color: "#000" }}>Are you sure you want to delete ?</Typography>

                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "8%", gap: "10px" }}>
                            <Button
                                onClick={() => { this.setState({ deleteallot: false }); }}
                                variant='outlined' style={{ borderColor: "gray", color: "gray" }}>Cancel</Button>
                            <Button
                                onClick={() => { this.setState({ deleteallot: false }); }}
                                variant='contained' style={{ backgroundColor: "gray", color: "#fff", marginRight: "4%" }}>Add Task</Button>
                        </Grid>


                    </Grid> */}
                    <Grid style={{ height: "210px", width: "300px" }}>

                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, }}>
                            {/* <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Delete</Typography> */}
                            <CloseOutlinedIcon
                                onClick={() => { this.setState({ deleteallot: false }); }}
                                style={{ fontSize: 20, color: "#000", cursor: "pointer", marginLeft: "250px", marginTop: "3%", }} />
                        </Grid>
                        {/* <Divider style={{ height: "1px", color: "#000" }} /> */}

                        <Typography style={{ textAlign: "center", marginTop: "5%", color: "#000", fontWeight: 600 }}>Are you sure you want to delete ?</Typography>

                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "10%", gap: "10px" }}>
                            <Button
                                onClick={() => { this.setState({ deleteallot: true }); }}

                                variant='outlined' style={{ borderColor: "gray", color: "gray" }}>Cancel</Button>
                            <Button
                                onClick={() => { this.setState({ deleteallot: false }); }}

                                variant='contained' style={{ backgroundColor: "gray", color: "#fff", marginRight: "4%" }} className='create-btn' >Add Task</Button>
                        </Grid>


                    </Grid>
                </Dialog>
            </Grid>
        )
    }
}
