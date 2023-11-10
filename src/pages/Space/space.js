import React, { Component } from 'react';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import DoneIcon from '@mui/icons-material/Done';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { TextField, FormControl, MenuItem, Menu, Select, DialogTitle, Link } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddIcon from '@mui/icons-material/Add';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Backgroundtask from "../../pages/image/BackgroundTaskplay 1.png";

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import profilePic from "../../pages/image/Ellipse 4.svg";
import profilePic2 from "../../pages/image/ellipse-boy.svg";
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

class space extends Component {
    constructor(props) {
        super(props);

        this.state = {
            createSpace: false,
            copied: false,
            spacedate: [

                {
                    spacename: "UI /UX Design",
                    description: "Our creative UI/UX experts, armed with top design tools, craft user-centric experiences, enhancing usability and aesthetics.",
                    email: "abc@technoboot.co",
                },
                {
                    spacename: "UI /UX Design",
                    description: "Our creative UI/UX experts, armed with top design tools, craft user-centric experiences, enhancing usability and aesthetics.",
                    email: "abc@technoboot.co",
                },
                {
                    spacename: "UI /UX Design",
                    description: "Our creative UI/UX experts, armed with top design tools, craft user-centric experiences, enhancing usability and aesthetics.",
                    email: "abc@technoboot.co",
                },

            ]

        }
    }

    render() {
        return (
            <>
                <div className='bg'>
                    <Grid style={{ marginTop: "6%", display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <Grid style={{ marginTop: "10%", padding: "30px", width: "80%", height: "auto", background: "white" }}>


                            <Grid style={{ display: "flex", justifyContent: "space-between", marginBottom: "2%" }}>
                                <Grid style={{ display: "flex", justifyContent: "space-around", alignItems: "center", gap: "20px" }}>
                                    <Typography>User</Typography>
                                    <Paper
                                        component="form"
                                        className='search-bar'
                                    >
                                        <IconButton type="button" style={{ p: "15px" }} aria-label="search">
                                            <SearchIcon style={{ fontSize: "25px" }} />
                                        </IconButton>
                                        <InputBase
                                            style={{ ml: 5, flex: 1, fontSize: "19px" }}
                                            placeholder="Search User"
                                            inputProps={{ "aria-label": "Search User" }}

                                        />
                                    </Paper>

                                </Grid>
                                <Box style={{ display: "flex", padding: "10px", borderRadius: "4px", background: "#1C352D", color: "white", cursor: "pointer" }}
                                    onClick={() => { this.setState({ createSpace: true }); }}
                                >
                                    <AddIcon style={{ color: "white" }} />
                                    <Typography  >Create Spaces</Typography>
                                </Box>
                            </Grid>

                            <Grid>
                                <TableContainer component={Paper}>
                                    <Table aria-label="customized table">

                                        <TableHead style={{ background: "#B5E4D5" }}>
                                            <TableRow >

                                                <TableCell>Space Name</TableCell>
                                                <TableCell> Description</TableCell>
                                                <TableCell>Team Members</TableCell>
                                                <TableCell>Action</TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.state.spacedate.map((item, index) => {
                                                return (


                                                    <TableRow>
                                                        <Link to="/user" className="table-row" style={{ display: "contents", textDecoration: "none" }}>
                                                            <TableCell> {item.spacename}</TableCell>
                                                            <TableCell>{item.description}</TableCell>
                                                            <TableCell>

                                                                <AvatarGroup max={4}>
                                                                    <Avatar src={profilePic} />
                                                                    <Avatar src={profilePic2} />
                                                                    <Avatar src={profilePic} />
                                                                    <Avatar src={profilePic2} />
                                                                    <Avatar src={profilePic} />
                                                                </AvatarGroup>


                                                            </TableCell>
                                                            <TableCell>

                                                                <DeleteOutlineOutlinedIcon onClick={() => {
                                                                    this.setState({ copied: true });
                                                                }} />
                                                            </TableCell>
                                                        </Link>
                                                    </TableRow>


                                                )
                                            })}

                                        </TableBody>

                                    </Table>

                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* --------------------user invite------------------ */}
                    <Dialog
                        // onClose={()=>this.setState({ editcat: false })}
                        open={this.state.createSpace} style={{}}>
                        <Grid style={{ width: "500px", marginBottom: "2%", padding: "10px" }}>


                            <Grid style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%", marginBottom: "3%" }}>


                                <Grid style={{ display: "flex", justifyContent: "space-between", paddingBottom: "3%" }}>
                                    <span></span>
                                    <CloseOutlinedIcon
                                        onClick={() => {
                                            this.setState({ createSpace: false });
                                        }}



                                    />
                                </Grid>

                                <Grid >
                                    <Typography style={{ fontSize: "20px", fontWeight: "500", paddingBottom: "10px" }}>
                                        Create Spaces
                                    </Typography>

                                </Grid>

                                <TextField id="standard-basic" variant="standard" placeholder='Space Name' style={{ width: "100%" }} />
                                <Grid style={{ marginTop: "3%" }}>
                                    <Typography style={{ fontSize: "17px", fontWeight: "400", paddingBottom: "10px" }}>
                                        Description
                                    </Typography>
                                    <TextField id="standard-basic" variant="standard" style={{ width: "100%" }} />
                                </Grid>


                                <Grid style={{ marginTop: "3%" }}>

                                    <TextField id="standard-basic" variant="standard" placeholder='Add Member' style={{ width: "100%" }} />
                                </Grid>

                                <Grid style={{ display: "flex", justifyContent: "space-between", marginTop: "4%" }}>
                                    <span></span>
                                    <button
                                        style={{ background: "#1C352D", color: 'white', padding: '10px', border: "none", outline: "none", borderRadius: "4px", cursor: "pointer" }}
                                        onClick={() => {
                                            this.setState({ createSpace: false });
                                        }}
                                    >Create</button>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Dialog>

                    {/* -------------------------Link copied------------------------------ */}

                    {/* <Dialog
                    
                        open={this.state.copied} style={{}}>
                        <Grid style={{}}>

                            <Typography style={{ border: "1.4px solid green", color: "green", background: "lightgreen", opacity: "1" }}
                                onClick={() => {
                                    this.setState({ copied: false });
                                }}
                            ><DoneIcon style={{ color: "green" }} />Link to copied</Typography>


                        </Grid>
                    </Dialog> */}




                    {/* delete */}


                    {/* <Dialog
                        
                        open={this.state.copied} style={{}}>
                        <Grid style={{ width: "400px", borderRadius: "4px", padding: "10px", border: "1px solid red" }}>


                            <Grid style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%", marginBottom: "3%" }}>


                                <Grid style={{ display: "flex", justifyContent: "space-between" }}>
                                 
                                    <span></span>
                                    <CloseOutlinedIcon
                                        onClick={() => {
                                            this.setState({ copied: false });
                                        }}

                                        className="eventcross-icon"

                                    />
                                </Grid>
                                <Grid style={{ fontSize: "16px", fontWeight: "500", marginTop: "3%", display: "flex", justifyContent: "center", paddingBottom: "10px", }}>Are you sure you want to delete this Task?</Grid>


                                <Grid style={{ marginTop: "8%", display: "flex", gap: "20px", justifyContent: "center" }}>
                                    <Button
                                        onClick={() => { this.setState({ copied: false }); }}
                                        variant='outlined' style={{ color: "black", }}>No, Cancel it</Button>
                                    <Button
                                        onClick={() => { this.setState({ copied: false }); }}
                                        variant='contained' style={{ background: "maroon", borderRadius: "4px", color: "white", padding: "7px 15px", cursor: "pointer", border: "none", outline: "none" }}>Yes Sure</Button>
                                </Grid>


                            </Grid>

                        </Grid>
                    </Dialog> */}



                    {/* right slide */}

                    <Dialog
                        
                        open={this.state.copied} style={{marginLeft:"-10px"}}>
                        <Grid style={{ width: "300px",height:"100vh",borderRadius: "4px", padding: "10px", border: "1px solid red" }}>


                            <Grid style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%", marginBottom: "3%" }}>


                                <Grid style={{ display: "flex", justifyContent: "space-between" }}>
                                 
                                   
                                    <CloseOutlinedIcon
                                        onClick={() => {
                                            this.setState({ copied: false });
                                        }}

                                        className="eventcross-icon"

                                    />
                                     <span></span>
                                </Grid>
                                <Grid style={{ fontSize: "16px", fontWeight: "500", marginTop: "3%", display: "flex", justifyContent: "center", paddingBottom: "10px", }}>Are you sure you want to delete this Task?</Grid>


                                <Grid style={{ marginTop: "8%", display: "flex", gap: "20px", justifyContent: "center" }}>
                                    <Button
                                        onClick={() => { this.setState({ copied: false }); }}
                                        variant='outlined' style={{ color: "black", }}>No, Cancel it</Button>
                                    <Button
                                        onClick={() => { this.setState({ copied: false }); }}
                                        variant='contained' style={{ background: "maroon", borderRadius: "4px", color: "white", padding: "7px 15px", cursor: "pointer", border: "none", outline: "none" }}>Yes Sure</Button>
                                </Grid>


                            </Grid>

                        </Grid>
                    </Dialog>
                </div>
            </>
        );
    }
}

export default space;