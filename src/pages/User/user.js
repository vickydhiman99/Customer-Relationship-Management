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
import { TextField, FormControl, MenuItem, Menu, Select, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Backgroundtask from "../../pages/image/BackgroundTaskplay 1.png";
import Style from "../../pages/User/user.css";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import profilePic from "../../pages/image/Ellipse 4.svg";
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

class user extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inviteUser: false,
            copied: false,
            userdata: [

                {
                    username: "Nibedita Rana",
                    nickname: "TB230404009",
                    email: "abc@technoboot.co",
                },
                {
                    username: "Swetalin Pradhan",
                    nickname: "TB230404008",
                    email: "abc@technoboot.co",
                },
                {
                    username: "Subhashree Sahu",
                    nickname: "TB230404007",
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

                                <Box style={{ display: "flex", padding: "10px",background: "#1C352D",borderRadius:"4px", color: "white", cursor: "pointer" }} 
                                onClick={() => { this.setState({ inviteUser: true }); }}
                                >
                                <PermIdentityOutlinedIcon style={{color:"white"}} /> 
                                        <Typography  >Invite Users</Typography>
                                    </Box>


                                
                            </Grid>

                            <Grid>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">

                                        <TableHead style={{ background: "#B5E4D5" }}>
                                            <TableRow >
                                                <TableCell></TableCell>
                                                <TableCell>User Name</TableCell>
                                                <TableCell>Nick Name</TableCell>
                                                <TableCell>Email</TableCell>
                                                <TableCell>Action</TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.state.userdata.map((item, index) => {
                                                return (

                                                    <TableRow>
                                                        <TableCell><img src={profilePic} /></TableCell>
                                                        <TableCell> {item.username}</TableCell>
                                                        <TableCell>{item.nickname}</TableCell>
                                                        <TableCell>{item.email}</TableCell>
                                                        <TableCell>
                                                            <NoteAltOutlinedIcon />
                                                            <DeleteOutlineOutlinedIcon />
                                                        </TableCell>
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
                        open={this.state.inviteUser} style={{}}>
                        <Grid style={{ width: "500px", marginBottom: "2%", padding: "10px" }}>


                            <Grid style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%", marginBottom: "3%" }}>


                                <Grid style={{ display: "flex", justifyContent: "space-between", paddingBottom: "3%" }}>
                                    <span></span>
                                    <CloseOutlinedIcon
                                        onClick={() => {
                                            this.setState({ inviteUser: false });
                                        }}

                                        className="eventcross-icon"

                                    />
                                </Grid>

                                <Grid >
                                    <Typography style={{ fontSize: "17px", fontWeight: "500", paddingBottom: "10px" }}>
                                        Invite to Workspaces
                                    </Typography>
                                    <TextField id="standard-basic" variant="standard" placeholder='Enter email address or name' style={{ width: "100%" }} />
                                </Grid>

                                <Grid style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "3%", paddingBottom: "3%" }}>
                                    <Typography>Invite someone to this Workspace with a link:</Typography>
                                    <Box style={{ display: "flex", padding: "10px", background: "#DCDEDC", color: "#2F5247", cursor: "pointer" }}>
                                        <ContentCopyOutlinedIcon />
                                        <Typography onClick={() => {
                                            this.setState({ copied: true });
                                        }}>Copy Link</Typography>
                                    </Box>
                                </Grid>




                            </Grid>

                        </Grid>
                    </Dialog>

                    {/* -------------------------Link copied------------------------------ */}

                    <Dialog
                        // onClose={()=>this.setState({ editcat: false })}
                        open={this.state.copied} style={{}}>
                        <Grid style={{}}>

                            <Typography style={{ border: "1.4px solid green", color: "green", background: "lightgreen", opacity: "1" }}
                                onClick={() => {
                                    this.setState({ copied: false });
                                }}
                            ><DoneIcon style={{ color: "green" }} />Link to copied</Typography>


                        </Grid>
                    </Dialog>
                </div>
            </>
        );
    }
}

export default user;