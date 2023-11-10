import React, { Component } from 'react';
import { TextField, Dialog, Box, Grid, Button, Divider, Typography, Card, TextareaAutosize } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Message from "../../../pages/image/message.png";
import Whatsapp from "../../../pages/image/whatsapp.png";
import Call from "../../../pages/image/call.png";
import Mail from "../../../pages/image/email.png";
import ChangeHistoryTwoToneIcon from '@mui/icons-material/ChangeHistoryTwoTone';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import "../../sales/Admin/Components/sales.css";
import meta from "../../../pages/image/meta.png";
import { Link } from "react-router-dom";
import SquareIcon from '@mui/icons-material/Square';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "../../sales/Admin/Components/sales.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextArea from 'antd/es/input/TextArea';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import Profimgm from "../../../pages/image/profimgm.png";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { TypographyContext } from '@mui/joy/Typography/Typography';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ImageIcon from '@mui/icons-material/Image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { MenuItem, Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { Calendar } from 'react-calendar';
// import { Box } from '@mui/system'
import { styled } from '@mui/system';
// import ImageIcon from '@mui/icons-material/Image';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
// import Button from '@mui/material/Button';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import Textarea from '@mui/joy/Textarea';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';


export default class AdminleadDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewData: false,
            createdeal: false,
            emailmodal: false,
            paymentmodal: false,
            download: false,
            downloadDone: false,
            eml: '',
            adminaddnote:false,
            adminfolloup:false,
            calandericonad: false,
            notedata: [
                {
                    notehead1: "Note by ",
                    profilename: "Floyd Miles",
                    noteproimg: Profimgm,
                    notedate: "21-06-23, 10 AM",
                    notedescr: "Lorem ipsum dolor sit amet. Cum perferendis voluptas ex minima architecto qui maiores excepturi aut iure commodi. Nam reprehenderit veritatis nam laborum perferendis rem commodi culpa.",
                },
                {
                    notehead1: "Note by ",
                    profilename: "Floyd Miles",
                    noteproimg: Profimgm,
                    notedate: "21-06-23, 10 AM",
                    notedescr: "Lorem ipsum dolor sit amet. Cum perferendis voluptas ex minima architecto qui maiores excepturi aut iure commodi. Nam reprehenderit veritatis nam laborum perferendis rem commodi culpa.",
                },
            ],
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

            ],
            messages: [
                {
                    date: '21-06-23, 10 AM',
                    text: 'Thank You for Contacting',
                    author: 'Floyd Miles',
                    sender: 'Aman Gupta',
                    message:
                        'Lorem ipsum dolor sit amet. Cum perferendis voluptas ex minima architecto qui Lorem ipsum dolor sit amet. Cum perferendis voluptas ex minima architecto quiqui Lorem ipsum dolor sit amet. Cum perferendis voluptas ex minima architecto qui Lorem ipsum dolor sit amet. Cum perferendis voluptas ex minima architecto qui ',
                },
                // Add more messages as needed
            ],

        };
    }
    handleChangeCalad = (calvaluead) => {
        console.log(calvaluead);
        this.setState({ calandericonad: false });
        const formattedDate = calvaluead.toISOString().split('T')[0];
        this.setState({ calvaluead: formattedDate });
    };
    handleChangeage = (event) => {
        this.setState({
            eml: event.target.value,
        });
    };

    handleClick = (event) => {
        this.setState((prevState) => ({
            anchor: prevState.anchor ? null : event.currentTarget,
        }));
    };
    render() {
        const { eml } = this.state;

        return (
            <Grid style={{ marginTop: "10%" }}>


                <Grid style={{ display: "flex", flexDirection: "row", marginLeft: "1%", gap: 25 }}>
                    <Grid>
                        <Card style={{ width: "300px", boxShadow: "2px 2px 8px 0px #66666633" }}>
                            <a href='/AdminNewLead' style={{ textDecoration: 'none', color: 'black' }}>
                                <Grid style={{ display: "flex", flexDirection: "row", marginTop: "2%", marginLeft: "1%", }}>
                                    <KeyboardArrowLeftIcon />
                                    Back to Leads
                                </Grid>
                            </a>
                            <Box sx={{ textAlign: "center", marginTop: "7%", marginBottom: "7%" }}>
                                <Typography className='subh'>subh Kathura</Typography>
                                <Typography className='Time'>Time Spend</Typography>
                                <Typography className='min'>1hr 20 min</Typography>
                                {/* <Divider style={{ marginBottom: "7%", marginTop: "7%" }} /> */}

                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "6%" }}>

                                    <img src={Whatsapp} style={{}} />

                                    <img src={Mail} style={{ marginLeft: "4%" }} />
                                    <img src={Call} style={{ marginLeft: "4%" }} />
                                    <img src={Message} style={{ width: "24px", height: "27px", marginTop: "5px", marginLeft: "4%" }} />
                                </Grid>
                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "6%" }}>


                                    <Typography className='lastaa'>Last Activity:</Typography>
                                    <Typography className='lastaa'>22March at 10 Am</Typography>
                                </Grid>
                            </Box>



                            <Card style={{
                                width: "240px", marginLeft: "10%", marginTop: "6%",
                                borderRadius: "10px",
                                border: "1px solid var(--primary-colour-g-9, #E0E0E0)",


                            }}>
                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "6%" }}>

                                    <Grid>
                                        <Typography className='lasta'>Status</Typography>
                                        <select className='selectlist'  >
                                            <option style={{ color: "#009E06", fontWeight: 600 }} >Converted</option>
                                            <option style={{ color: "skyblue", fontWeight: 600 }} >In Followup</option>
                                            <option style={{ color: "red", fontWeight: 600 }} >Rejected</option>

                                        </select>


                                    </Grid>
                                    <Grid class="vl"></Grid>
                                    <Grid>
                                        <Typography className='lasta'>Potential Type</Typography>
                                        <select className='selectlist'  >
                                            {/* <Grid style={{display:"flex",flexDirection:"row"}}>
                                         <SquareIcon style={{fontSize:20,color:"red",}}/> */}
                                            <option style={{ color: "#009E06", fontWeight: 600 }} > High</option>

                                            {/* </Grid> */}

                                            <option style={{ color: "red", fontWeight: 600 }} >Low</option>

                                        </select>

                                    </Grid>
                                </Grid>
                            </Card>





                            <Box sx={{ marginTop: "10%", marginLeft: "10%", marginBottom: "20%" }}>
                                <Typography className='Lead'>Lead Information</Typography>
                                <Typography className='Emaillead'>Email:</Typography>
                                <Typography className='Emailid'>subh@gmail.com</Typography>

                                <Typography className='Emaillead'>Phone:</Typography>
                                <Typography className='Emailid'>12345678900</Typography>


                                <Typography className='Emaillead'>Lead Owner:</Typography>
                                <Typography className='Emailid'>Subh gtyuiio</Typography>


                                <Typography className='Emaillead'>Lead Source:</Typography>

                                <Grid style={{ display: "flex", flexDirection: "row", width: "30%" }}>
                                    <Grid>
                                        <img style={{ height: "15px", width: "18px", marginTop: "3px" }} src={meta}
                                        /></Grid>
                                    <Grid style={{ marginLeft: "10px", }}>
                                        <Typography className='Emailid'>Meta</Typography></Grid>
                                </Grid>



                            </Box>
                        </Card>

                    </Grid>



                    {/* -----------middle card----------- */}
                    <Card style={{
                        width: "600px", boxShadow: "2px 2px 8px 0px #66666633"
                    }}>




                        <Tabs style={{}}>

                            <Grid
                                style={{
                                    backgroundColor: "#F2F2F2",
                                    display: "flex",
                                    height: "70px",
                                    flexDirection: "row",
                                    // justifyContent: "Space-between",

                                }}  >
                                <TabList className="sales" style={{ border: "none" ,whiteSpace:"nowrap",width:"600px"}}>




                                    <Tab style={{ marginLeft: "30px", border: "none" }}>Notes</Tab>
                                    <Tab style={{ marginLeft: "30px", border: "none" }}>Call</Tab>
                                    <Tab style={{ marginLeft: "30px", border: "none" }}>Email</Tab>
                                    <Tab style={{ marginLeft: "30px", border: "none" }}>Payment</Tab>





                                </TabList>
                            </Grid>


                            {/* -----------Notes--------------- */}
                            <TabPanel>


                                <Paper
                                    component="form"
                                    style={{
                                        display: "flex",
                                        width: "90%",
                                        height: "42px",
                                        boxShadow: "none",
                                        backgroundColor: "rgba(242, 242, 242, 0.30)",
                                        border: "1px solid var(--grey-colour-g-6, #B4B0B4)",
                                        marginLeft: "5%",
                                        marginTop: "3%"
                                    }}
                                >
                                    <IconButton type="button" style={{ p: "15px" }} aria-label="search">
                                        <SearchIcon style={{ fontSize: "25px" }} />
                                    </IconButton>
                                    <InputBase
                                        className='serach-text'
                                        placeholder="Search "
                                        inputProps={{ "aria-label": "Search " }}


                                    />
                                </Paper>

                                <Grid style={{ padding: 15, marginTop: "3%" }}>
                                    <Typography style={{ fontWeight: "bold" }}>Add New Note</Typography>


                                    <Card style={{ padding: 10, marginTop: "3%" }}>
                                        <Typography style={{ color: "#A3A3A3", fontSize: 12 }}>Note Title</Typography>
                                        <TextField style={{ marginLeft: "5px", width: "420px", borderColor: "#B5E4D5" }} id="standard-basic" variant="standard" />

                                        <Typography style={{ marginTop: "2%", color: "#A3A3A3", fontSize: 12 }}>Note Description</Typography>
                                        <TextArea style={{ border: "none" }}></TextArea>
                                        <Divider />


                                        <Button size='small' onClick={()=>{this.setState({adminaddnote:true});
                                        }} 
                                        style={{ backgroundColor: "#3D3B3B", color: "#fff", marginTop: "2%", marginLeft: "75%", width: "100px" }}>Add Notes</Button>

                                    </Card>

                                    {this.state.notedata.map((item) => {
                                        return (
                                            <Card style={{ padding: 10, marginTop: "3%" }}>

                                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                                    <Grid style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}>
                                                        <Grid style={{ display: "flex", flexDirection: "row", width: "40%" }}>
                                                            <StickyNote2OutlinedIcon style={{ fontSize: 15, }} />
                                                            <Typography style={{ fontSize: 12, whiteSpace: "nowrap", marginLeft: "5px" }}>{item.notehead1} </Typography>
                                                        </Grid>
                                                        <Grid style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}>
                                                            <img style={{ height: 20, width: 20, marginLeft: "10px" }} src={item.noteproimg} />
                                                            <Typography style={{ fontSize: 12, whiteSpace: "nowrap", marginLeft: "10px" }}>{item.profilename}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid style={{ display: "flex", flexDirection: "row", marginLeft: "2%", marginLeft: "10px" }}>
                                                        <DateRangeOutlinedIcon style={{ fontSize: 15 }} />
                                                        <Typography style={{ fontSize: 12 }}>{item.notedate}</Typography>
                                                    </Grid>
                                                </Grid>

                                                <Typography style={{ fontSize: 13, marginTop: "2%", marginBottom: "2%" }}>{item.notedescr}</Typography>

                                            </Card>
                                        );
                                    })}

                                </Grid>

                            </TabPanel>

                            {/* -----------Call--------------- */}
                            <TabPanel>
                                <Grid style={{ padding: 20 }} >
                                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography style={{ fontSize: 18, fontWeight: "600" }}>Call Schedule</Typography>
                                        <Button size='small'
                                        onClick={()=>{this.setState({adminfolloup:true});}}
                                         style={{ backgroundColor: "#3D3B3B", color: "#fff", marginTop: "30px", }}>Next  Followup</Button>
                                    </Grid>


                                    <Card style={{ padding: 10, marginTop: "2%" }}>
                                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                            <Grid style={{ display: "flex", flexDirection: "row" }}>
                                                <CallOutlinedIcon style={{ fontSize: 15 }} />
                                                <Typography style={{ fontSize: 12, whiteSpace: "nowrap", marginLeft: "3%", fontWeight: "500" }}>Call Created by </Typography>
                                                <Typography style={{ fontSize: 12, marginLeft: "3%", whiteSpace: "nowrap" }}>Floyd Miles</Typography>
                                            </Grid>
                                            <Grid style={{ display: "flex", flexDirection: "row" }}>
                                                <DateRangeOutlinedIcon style={{ fontSize: 15 }} />
                                                <Typography style={{ fontSize: 12, marginLeft: "3%", whiteSpace: "nowrap" }}>21-06-23, 10 AM </Typography>
                                                <MoreHorizOutlinedIcon style={{ fontSize: 15, marginLeft: "3%", }} />
                                            </Grid>
                                        </Grid>
                                        <Divider style={{ marginTop: "2%" }} />
                                        <Grid>
                                            <Typography style={{ fontSize: 14, whiteSpace: "nowrap", marginLeft: "3%", fontWeight: "500" }}>Next Follow up</Typography>
                                            <Typography style={{ fontSize: 13, }}>Lorem ipsum dolor sit amet. Cum perferendis voluptas ex minima architecto qui </Typography>
                                        </Grid>

                                        <Grid style={{ width: "100%", border: "0.5px solid lightgray", height: "20%", borderRadius: 5, marginTop: "7%", padding: "20px", display: "flex", flexDirection: "row" }}>

                                            <Grid>
                                                <Typography style={{ fontSize: 12 }}>Reminder</Typography>
                                                <Typography style={{ fontSize: 12, marginTop: "1%" }}>10 min Before</Typography>
                                            </Grid>
                                            <hr style={{ backgroundColor: "lightgray", height: 30, width: 2 }} />
                                            <Grid>
                                                <Typography style={{ fontSize: 12 }}>Call Purpose</Typography>
                                                <Typography style={{ fontSize: 12, marginTop: "1%" }}>Negotiation</Typography>
                                            </Grid>
                                            <hr style={{ backgroundColor: "lightgray", height: 30, width: 2 }} />
                                            <Grid>
                                                <Typography style={{ fontSize: 12 }}>Follow Up</Typography>
                                                <Typography style={{ fontSize: 12, marginTop: "1%" }}>25-06-23, 12 PM</Typography>

                                            </Grid>
                                        </Grid>
                                    </Card>


                                    <Grid style={{ marginTop: "3%" }}>
                                        <Typography style={{ fontSize: "18", fontWeight: "bold" }}>Call History</Typography>
                                        <Grid>
                                            <Typography style={{ fontSize: 13, lineHeight: "35px" }}>10-06-23, 10 AM</Typography>
                                            <Card style={{ padding: 15 }}>
                                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                                    <Grid style={{ display: "flex", flexDirection: "row" }}>
                                                        <CallOutlinedIcon style={{ fontSize: 15 }} />
                                                        <Typography style={{ fontSize: 12, whiteSpace: "nowrap", marginLeft: "3%", fontWeight: "500" }}>Call Created by </Typography>
                                                        <Typography style={{ fontSize: 12, marginLeft: "3%", whiteSpace: "nowrap" }}>Floyd Miles</Typography>
                                                    </Grid>

                                                    <Typography style={{ fontSize: 12, marginLeft: "3%", whiteSpace: "nowrap" }}>10 Min</Typography>


                                                </Grid>

                                            </Card>
                                        </Grid>

                                    </Grid>
                                </Grid>


                            </TabPanel>

                            {/* ------------Email--------- */}
                            <TabPanel>
                                <Paper
                                    component="form"
                                    style={{
                                        display: "flex",
                                        width: "90%",
                                        height: "42px",
                                        boxShadow: "none",
                                        backgroundColor: "rgba(242, 242, 242, 0.30)",
                                        border: "1px solid var(--grey-colour-g-6, #B4B0B4)",
                                        marginLeft: "5%",
                                        marginTop: "3%"
                                    }}
                                >
                                    <IconButton type="button" style={{ p: "15px" }} aria-label="search">
                                        <SearchIcon style={{ fontSize: "25px" }} />
                                    </IconButton>
                                    <InputBase
                                        className='serach-text'
                                        placeholder="Search "
                                        inputProps={{ "aria-label": "Search " }}


                                    />
                                </Paper>


                                <Grid style={{}}>

                                    <Grid style={{ padding: 20 }} >
                                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                            <Typography style={{ fontSize: 18, fontWeight: "600" }}>All Emails</Typography>
                                            <Button
                                                onClick={() => { this.setState({ emailmodal: true }); }}
                                                size='small' style={{ backgroundColor: "#3D3B3B", color: "#fff", marginTop: "2%", }}>Add Email</Button>
                                        </Grid>

                                        <Box sx={{ marginTop: "2%" }}>
                                            {this.state.messages.map((message, index) => (


                                                <Accordion>
                                                    <AccordionSummary
                                                        // expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                    >
                                                        <Grid style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", width: "100%" }} >
                                                            <Grid>
                                                                <Grid style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                                    <KeyboardArrowDownOutlinedIcon />
                                                                    <Typography style={{ fontWeight: "bold" }}>{message.text}</Typography>
                                                                </Grid>

                                                                <Grid style={{ display: 'flex', flexDirection: "row", gap: 5, marginLeft: "15%" }}> <Typography>by</Typography> <Typography>Floyd Miles</Typography></Grid>

                                                            </Grid>
                                                            <Grid style={{ display: 'flex', flexDirection: "row", gap: 5 }}><CalendarMonthIcon style={{ fontSize: 15 }} /><Typography style={{ fontSize: 12 }}>{message.date}</Typography><MoreHorizIcon /></Grid>
                                                        </Grid>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Grid >
                                                            <Grid>
                                                                <ListItem>
                                                                    <ListItemAvatar>
                                                                        <Avatar>
                                                                            <ImageIcon />
                                                                        </Avatar>
                                                                    </ListItemAvatar>
                                                                    <ListItemText primary={message.sender} />
                                                                </ListItem>
                                                            </Grid>

                                                        </Grid>
                                                        <Typography >{message.message}</Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            ))}

                                        </Box>
                                    </Grid>
                                </Grid>
                            </TabPanel>


                            {/* ------------Payment--------- */}
                            <TabPanel>
                                <Paper
                                    component="form"
                                    style={{
                                        display: "flex",
                                        width: "90%",
                                        height: "42px",
                                        boxShadow: "none",
                                        backgroundColor: "rgba(242, 242, 242, 0.30)",
                                        border: "1px solid var(--grey-colour-g-6, #B4B0B4)",
                                        marginLeft: "5%",
                                        marginTop: "3%"
                                    }}
                                >
                                    <IconButton type="button" style={{ p: "15px" }} aria-label="search">
                                        <SearchIcon style={{ fontSize: "25px" }} />
                                    </IconButton>
                                    <InputBase
                                        className='serach-text'
                                        placeholder="Search "
                                        inputProps={{ "aria-label": "Search " }}


                                    />
                                </Paper>
                                <Grid style={{}} >
                                    <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography style={{ fontSize: 18, fontWeight: "600", marginLeft: "2%" }}>Payment</Typography>
                                        <Button onClick={() => this.setState({ paymentmodal: true })} size='small' style={{ backgroundColor: "#3D3B3B", color: "#fff", marginTop: "2%", marginRight: "2%" }}>Create Payment</Button>
                                    </Grid>

                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell><Typography style={{ fontSize: 12, whiteSpace: "nowrap" }}>Payment Invoice</Typography></TableCell>
                                                <TableCell><Typography style={{ fontSize: 12, whiteSpace: "nowrap" }} >Amount</Typography></TableCell>
                                                <TableCell><Typography style={{ fontSize: 12, whiteSpace: "nowrap" }} >Date</Typography></TableCell>
                                                <TableCell><Typography style={{ fontSize: 12, whiteSpace: "nowrap" }}>Payment Mode</Typography></TableCell>
                                                <TableCell><Typography></Typography></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow style={{ backgroundColor: "white", boxShadow: "1px 1px 1px black" }}>
                                                <TableCell><Typography style={{ fontSize: 12, whiteSpace: "nowrap" }}>Invoice03</Typography></TableCell>
                                                <TableCell><Typography style={{ fontSize: 12, whiteSpace: "nowrap" }}>50000</Typography></TableCell>
                                                <TableCell><Typography style={{ fontSize: 12, whiteSpace: "nowrap" }}>12-05-23</Typography></TableCell>
                                                <TableCell><Typography style={{ fontSize: 12, whiteSpace: "nowrap" }}>Net banking</Typography></TableCell>
                                                <TableCell>
                                                    <Grid style={{ display: "flex", flexDirection: "row" }}>
                                                        <FileDownloadOutlinedIcon style={{ color: "blue" }} />
                                                        <Typography onClick={() => this.setState({ download: true })} style={{ color: "blue", fontSize: 12, whiteSpace: "nowrap" }} >Download</Typography>
                                                    </Grid>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Grid>
                            </TabPanel>






                        </Tabs>

                    </Card>


                    <Grid>
                        <Card style={{ width: "270px", boxShadow: "2px 2px 8px 0px #66666633", padding: 20, height: "100%" }}>
                            <Typography style={{ fontSize: 15, fontWeight: "600" }}>Deals  3</Typography>

                            <Button
                                onClick={() => { this.setState({ createdeal: true }); }}
                                size='small' variant='outlined' style={{ borderColor: "black", color: "#fff", marginTop: "10%", marginRight: "2%", color: "black" }}><AddOutlinedIcon />Create New Deal</Button>

                            <Card style={{ padding: 10, marginTop: "5%", border: "2px solid green" }}>
                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "5%", marginBottom: "5%", alignItems: "center" }}>
                                    <Grid>
                                        <Typography style={{ fontSize: 13, fontWeight: "600" }}>Product Name</Typography>
                                        <Typography style={{ fontSize: 11, marginTop: "2%" }}>Price: 50000</Typography>
                                    </Grid>

                                    <button style={{ backgroundColor: "#D6EEFF", color: "#0A376B", border: "none", borderRadius: 15, width: "35%", fontSize: 10, height: "20px" }}><FiberManualRecordIcon style={{ fontSize: 8, color: "#0A376B" }} />Open</button>
                                </Grid>
                            </Card>

                            <Card style={{ padding: 10, marginTop: "5%" }}>
                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "5%", marginBottom: "5%", alignItems: "center" }}>
                                    <Grid>
                                        <Typography style={{ fontSize: 13, fontWeight: "600" }}>Product Name</Typography>
                                        <Typography style={{ fontSize: 11, marginTop: "2%" }}>Price: 50000</Typography>
                                    </Grid>

                                    <button style={{ backgroundColor: "#CC542E33", color: "red", border: "none", borderRadius: 15, width: "35%", fontSize: 10, height: "20px" }}><FiberManualRecordIcon style={{ fontSize: 8, color: "red" }} />Closed</button>
                                </Grid>
                            </Card>



                        </Card>

                    </Grid>


                </Grid>







           {/* ----------add note--------- */}

           <Dialog
                    open={this.state.adminaddnote}
                    onClose={() => this.setState({ adminaddnote: false })}

                >


                    <Grid style={{ height: "30px", width: "200px" }}>
                        <center>
                            <Typography style={{ fontSize: "12px", fontWeight: "400", color: "gray", marginTop: "10%" }}>Notes Added Successfully</Typography>
                        </center>
                    </Grid>








                    {/* </Grid> */}

                </Dialog>


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

                {/* -----------Create Deal------------ */}
                <Dialog
                    open={this.state.createdeal}
                >
                    <Grid style={{ height: "300px", width: "100%" }}>
                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, backgroundColor: "lightgray" }}>
                            <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Create Deal</Typography>
                            <CloseOutlinedIcon
                                onClick={() => { this.setState({ createdeal: false }); }}
                                style={{ fontSize: 20, color: "#000", cursor: "pointer" }} />
                        </Grid>

                        <Grid style={{ padding: 30 }}>
                            <Grid style={{ display: "flex", flexDirection: "row", }}>
                                <Typography>Product Name:</Typography>
                                <select
                                    style={{ borderRadius: 10, marginLeft: "2%" }}

                                >
                                    <option value={1}>Select Product</option>
                                    <option value={2}>Select Product</option>
                                    <option value={3}>Select Product</option>
                                </select>
                            </Grid>
                            <Grid style={{ display: "flex", flexDirection: "row", marginTop: "2%" }}>
                                <Typography style={{ marginTop: "3%" }}>Product Name:</Typography>
                                <TextField id="standard-basic" variant="standard" />
                            </Grid>
                            <Grid style={{ display: "flex", flexDirection: "row", marginTop: "3%" }}>
                                <Typography>Product Name:</Typography>
                                <select
                                    style={{ borderRadius: 10, marginLeft: "2%", border: "none" }}

                                >   <option value={1}><Typography style={{ backgroundColor: "#D6EEFF", color: "#0A376B", border: "none", borderRadius: 15, width: "35%", fontSize: 10, height: "20px" }}><FiberManualRecordIcon style={{ fontSize: 8, color: "#0A376B" }} />Open</Typography></option>
                                    <option value={1}>In follow-up</option>
                                    <option value={2}>Rejected</option>
                                    <option value={3}>Converted</option>
                                </select>
                            </Grid>
                            <Grid style={{ display: "flex", flexDirection: "row-reverse", alignSelf: "flex-end", marginTop: "4%" }}>
                                <Button
                                    onClick={() => { this.setState({ createdeal: false }); }}
                                    variant='outlined' style={{ borderColor: "gray", color: "gray" }}>Cancel</Button>
                                <Button
                                    size='small'
                                    onClick={() => { this.setState({ createdeal: false }); }}
                                    variant='contained' style={{ backgroundColor: "#3D3B3B", color: "#fff", marginRight: "4%" }}>Add</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Dialog>

                {/* ----------email--------- */}
                <Dialog
                    open={this.state.emailmodal}
                >
                    <Grid style={{ height: "auto", width: "600px" }}>



                        <Box style={{ width: "100%" }}>

                            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, backgroundColor: "lightgray" }}>
                                <Typography style={{ fontSize: 16, whiteSpace: "nowrap", fontWeight: 600 }}>Create Email</Typography>
                                <CloseOutlinedIcon
                                    onClick={() => { this.setState({ emailmodal: false }); }}
                                    style={{ fontSize: 20, color: "#000", cursor: "pointer", marginRight: "2%" }} />
                            </Grid>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "15px" }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar style={{ height: 40, width: 40 }}>
                                            <ImageIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Subh" />
                                </ListItem>

                                <FormControl fullWidth>
                                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={eml}
                                        // label="Age"
                                        onChange={this.handleChangeage}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                            </div>



                            <Accordion style={{ width: "600px" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography style={{ marginLeft: "20px" }}>To</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box>


                                        <ListItem style={{ backgroundColor: "#EBEBEB", width: "50%", borderRadius: "27px", marginLeft: "10px", height: "35px" }}>


                                            <ListItemAvatar>
                                                <Avatar style={{ height: 25, width: 25 }}>

                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="karna.subh@technoboot.co" />
                                        </ListItem>
                                    </Box>



                                    <Typography style={{ marginLeft: "20px", marginTop: "10px" }}>Cc</Typography>


                                    <Box>


                                        <ListItem style={{ marginTop: "10px", backgroundColor: "#EBEBEB", width: "50%", borderRadius: "27px", marginLeft: "10px", height: "35px" }}>


                                            <ListItemAvatar>
                                                <Avatar style={{ height: 25, width: 25 }}>

                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="karna.subh@technoboot.co" />
                                        </ListItem>
                                    </Box>

                                    <Typography style={{ marginLeft: "20px", marginTop: "10px" }}>Bcc</Typography>


                                    <Box>


                                        <ListItem style={{ marginTop: "10px", backgroundColor: "#EBEBEB", width: "50%", borderRadius: "27px", marginLeft: "10px", height: "35px" }}>


                                            <ListItemAvatar>
                                                <Avatar style={{ height: 25, width: 25 }}>

                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="karna.subh@technoboot.co" />
                                        </ListItem>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>








                            {/* <Divider /> */}
                            <div style={{ padding: "14px", }}>

                                <Textarea name="Outlined" placeholder="Subject" variant="outlined" style={{ margin: "15px", width: "95%" }} />
                            </div>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "14px", }} >

                                {/* <InsertLinkIcon /> */}
                                <Button
                                    onClick={() => { this.setState({ emailmodal: false }); }}

                                    style={{ backgroundColor: "#3D3B3B", marginLeft: "80%" }} className='create-btn' variant="contained">Send</Button>
                            </div>

                        </Box>
                    </Grid>



                    {/* </Grid> */}

                </Dialog>



                {/* ----------CReate payment--------- */}
                <Dialog open={this.state.paymentmodal}>
                    <Box style={{ width: "560px", height: "346px" }}>

                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, backgroundColor: "lightgray" }}>
                            <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Select mode of Payment</Typography>
                            <CloseOutlinedIcon
                                onClick={() => { this.setState({ paymentmodal: false }); }}
                                style={{ fontSize: 20, color: "#000", cursor: "pointer" }} />
                        </Grid>


                        <Tabs>
                            <TabList style={{ border: "none" }}>
                                <Tab>Cash</Tab>
                                <Tab>Online</Tab>
                            </TabList>

                            <TabPanel>
                                <Box style={{ "marginLeft": "4em", "width": "80%", "gap": "26px", "display": "flex", "flexDirection": "column" }}>
                                    <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }}><Typography variant='h6'>Paid by-</Typography><TextField id="standard-basic" variant="standard" /></Box>
                                    <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }}><Typography variant='h6'>Amount paid-</Typography><TextField id="standard-basic" variant="standard" label="in figure" /></Box>
                                    <TextField id="standard-basic" label="in words" variant="standard" />
                                    <Button style={{ width: "3em", left: "26em", backgroundColor: "grey" }} variant="contained">Submit</Button>
                                </Box>

                            </TabPanel>
                            <TabPanel>
                                <Box style={{ display: "flex", flexDirection: 'row', alignItems: "flex-start", justifyContent: "space-between" }}>
                                    <Tabs style={{ width: "80%" }}>
                                        <TabList style={{ border: "none" }}>
                                            <Tab>Net Banking</Tab>
                                            <Tab>UPI</Tab>
                                            <Tab>Via link</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <Box style={{ "marginLeft": "4em", "width": "80%", "gap": "26px", "display": "flex", "flexDirection": "column" }}>

                                                <h4>Select a bank for payment</h4>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    // value={age}
                                                    label="Age"
                                                // onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </Box>
                                        </TabPanel>
                                        <TabPanel>
                                            <Box style={{ "marginLeft": "4em", "width": "80%", "gap": "26px", "display": "flex", "flexDirection": "column" }}>

                                                <h4>Use the Scanner ror upi id to pay</h4>

                                                <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                                                    <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }}><Typography variant='h6'>UPI id-</Typography><TextField value="786788866@ybl" id="standard-basic" variant="standard" /></Box>

                                                    <Box className="QR code" style={{ height: "30px", width: "30px", backgroundColor: "black" }}></Box>

                                                </Box>
                                            </Box>

                                        </TabPanel>
                                        <TabPanel>
                                            <Box style={{ "marginLeft": "4em", "width": "80%", "gap": "26px", "display": "flex", "flexDirection": "column" }}>

                                                <h4>use the link for payment</h4>

                                                <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                    <Typography variant='h6'>Copy this</Typography>
                                                    <ContentCopyIcon />
                                                </Box>
                                            </Box>
                                        </TabPanel>
                                    </Tabs>
                                    <Button onClick={() => this.setState({ paymentmodal: false })} variant="text">Save</Button></Box>
                            </TabPanel>
                        </Tabs>




                    </Box>
                </Dialog>

                {/* ----------Download--------- */}

                <Dialog open={this.state.download}>
                    <Grid style={{
                        display: "flex", justifyContent: "space-between", padding: "23px",
                        justifyContent: "flexStart"
                    }}>
                        <ArrowBackIosIcon onClick={() => {
                            this.setState({ download: false });
                        }} />
                        <Typography style={{ fontWeight: "600" }}>Preview</Typography>
                        {/* <CloseOutlinedIcon
                                className="eventcross-icon"
                            /> */}
                    </Grid>
                    <Box style={{ width: "433px", display: "flex", flexDirection: 'column', alignItems: "center" }}>

                        <Box style={{
                            width: "362px",
                            height: " 483.684px",
                            flexShrink: 0, backgroundColor: "Gray"
                        }}>
                            d
                        </Box>
                        <Button onClick={() => this.setState({ downloadDone: true })} style={{ backgroundColor: "black", margin: ".6em" }} variant="contained">Download</Button>

                    </Box>




                </Dialog>

                {/* downloadDone */}


                <Dialog open={this.state.downloadDone}>

                    <Box style={{ height: "302px", width: "422px", display: "flex", flexDirection: 'column', alignItems: "center" }}>

                        <Box style={{
                            width: "196.833px",
                            height: "190.62px",
                            flexShrink: 0,
                        }}>
                        </Box>

                        <Typography variant='h5'>Download Successful</Typography>

                        <Button onClick={() => { this.setState({ download: false, downloadDone: false }); }} style={{ backgroundColor: "black", margin: ".6em" }} variant="contained">OK</Button>

                    </Box>




                </Dialog>

                {/* ---------next follow up---------- */}
                <Dialog open={this.state.adminfolloup}>
                    {/* <Box> */}
                    <Grid style={{
                        display: "flex", justifyContent: "space-between", padding: "23px",

                    }}>
                        {/* <ArrowBackIosIcon style={{ cursor: "pointer" }}  /> */}
                        <Typography style={{ fontWeight: "600" }}>Next Followup</Typography>
                        <CloseOutlinedIcon
                            onClick={() => {
                                this.setState({adminfolloup: false });
                            }}
                            className="eventcross-icon"
                        />
                    </Grid>

                    <Box style={{ padding: "1em" }}>
                        <Typography variant='h5'>Description</Typography>

                        <Box style={{
                            // width: "73em",
                            width: "100%",
                            height: "82px",
                            backgroundColor: "#F2F2F2",
                            flexShrink: 0,
                            padding: "1em"
                        }}>
                            <Typography variant='subtitle2'>Lorem ipsum dolor sit amet. Cum perferendis voluptas ex minima architecto qui </Typography>

                        </Box>

                        <Grid style={{ width: "100%", border: "0.5px solid lightgray", height: "20%", borderRadius: 5, marginTop: "7%", padding: "20px", display: "flex", flexDirection: "row" }}>

                            <Grid>
                                <Typography style={{ fontSize: 12 }}>Reminder</Typography>
                                <Box style={{ fontSize: 12, marginTop: "1%" }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">10 min before</InputLabel>
                                        <Select
                                            sx={{ width: "89px" }}

                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.age}
                                            label="10 min before"
                                            onChange={() => this.handleChange()}
                                        >
                                            <MenuItem value={10}>10 min before</MenuItem>
                                            <MenuItem value={20}>15 min before</MenuItem>
                                            <MenuItem value={30}>1 min before</MenuItem>
                                        </Select>
                                    </FormControl></Box>
                            </Grid>
                            <hr style={{ backgroundColor: "lightgray", height: 30, width: 2 }} />
                            <Grid>
                                <Typography style={{ fontSize: 12 }}>Call Purpose</Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Negotiation</InputLabel>
                                    <Select
                                        sx={{ width: "89px" }}

                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={this.state.age}
                                        label="Negotiation"
                                        onChange={() => this.handleChange()}
                                    >
                                        <MenuItem value={10}>Pruduct info</MenuItem>
                                        <MenuItem value={20}>Follow up</MenuItem>
                                        <MenuItem value={30}>Payment</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <hr style={{ backgroundColor: "lightgray", height: 30, width: 2 }} />
                            <Grid>
                                <Typography style={{ fontSize: 12 }}>Follow Up</Typography>
                                <Typography style={{ fontSize: 12, marginTop: "1%" }}>{this.state.calvaluead}<CalendarMonthIcon onClick={() => this.setState({ calandericonad: true })} /></Typography>

                            </Grid>
                        </Grid>


                    </Box>
                    {/* </Box> */}
                    <Dialog
                        open={this.state.calandericon}
                    >
                        <Calendar
                            onChange={this.handleChangeCal} value={this.state.calvalue} />
                    </Dialog>

                    <Button onClick={() => {
                        this.setState({adminfolloup: false });
                    }} style={{ width: "40px", left: "33em", margin: "1em" }} className='create-btn' variant="contained">Save</Button>

                </Dialog>



                {/* ----calander---- */}
                <Dialog
                        open={this.state.calandericonad}
                    >
                        <Calendar
                            onChange={this.handleChangeCalad} value={this.state.calvaluead} />
                    </Dialog>

            </Grid>
        )
    }
}
