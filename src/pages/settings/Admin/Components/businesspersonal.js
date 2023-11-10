
import { Card, Grid, Typography, Box, Button, } from '@mui/material'
import React, { Component } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddBoxIcon from '@mui/icons-material/AddBox';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import SettingDrawer from "../../../../pages/settings/Admin/Components/SettingDrawer";
import Dialog from "@mui/material/Dialog";
import TextField from '@mui/material/TextField';



export default class businesspersonal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editperinfo: false,
            addpermodal: false,
        };
    }

    

    render() {
        const {editperinfo}=this.state
        return (
            <Grid style={{ marginTop: "10%", display: "flex", flexDirection: "row", gap: 30 }}>

                <Grid>
                    <SettingDrawer />
                </Grid>
                <Grid>

                    <Grid style={{ display: "flex", flexDirection: "row", marginLeft: "3%", alignItems: "center" }}>
                        <Typography style={{ fontSize: "18px", fontWeight: "500" }}>Account Setting</Typography>
                        <ArrowForwardIosIcon style={{ fontSize: "15px", fontWeight: "500" }} />
                        <Typography style={{ fontSize: "15px", marginLeft: "2%" }}>Personal Details</Typography>
                    </Grid>


                    <Grid style={{ width: "540px", marginLeft: "3%", marginTop: "6%" }}>
                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                            <Typography>Personal Details</Typography>
                            <AddBoxIcon
                                onClick={() => {
                                    this.setState({ addpermodal: true });
                                }}
                                style={{ color: "#525050" }} />
                        </Grid>

                        <Card style={{ width: "540px", marginTop: "2%" }}>
                            <Grid style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%", marginBottom: "3%" }}>
                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <Typography style={{ color: "gray" }}>Name</Typography>
                                    <BorderColorOutlinedIcon style={{ color: "#525050" }}
                                        onClick={() => {
                                            this.setState({ editperinfo: true });
                                        }}
                                    />
                                </Grid>
                                <Typography style={{ fontSize: "17px", fontWeight: "600" }}>Cameron Williamson</Typography>

                                <Grid style={{ marginTop: "3%" }}>

                                    <Typography>Email</Typography>
                                    <Typography style={{ fontSize: "17px", fontWeight: "600" }}>nevaeh.simmons@example.com</Typography>

                                </Grid>

                                <Grid style={{ marginTop: "4%" }}>


                                    <Typography>Phone No</Typography>
                                    <Typography style={{ fontSize: "17px", fontWeight: "600" }}>9876543256</Typography>



                                </Grid>


                            </Grid>
                        </Card>

                    </Grid>
                </Grid>


                <Dialog
                onClose={()=>this.setState({ editperinfo: false })}
                    open={this.state.editperinfo} style={{}}>
                    <Grid style={{ width: "520px", marginBottom: "2%" }}>

                        <Grid style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%", marginBottom: "3%" }}>
                            <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Typography style={{ color: "gray" }}>Name</Typography>
                                <Typography>Save</Typography>
                            </Grid>
                            <Typography style={{ fontSize: "17px", fontWeight: "600" }}>Cameron Williamson</Typography>

                            <Grid style={{ marginTop: "3%" }}>

                                <Typography>Email</Typography>
                                <Typography style={{ fontSize: "17px", fontWeight: "600" }}>nevaeh.simmons@example.com</Typography>

                            </Grid>

                            <Grid style={{ marginTop: "4%" }}>


                                <Typography>Phone No</Typography>
                                <Typography style={{ fontSize: "17px", fontWeight: "600" }}>9876543256</Typography>



                            </Grid>


                        </Grid>
                    </Grid>
                </Dialog>


                <Dialog

                    
                    open={this.state.addpermodal} style={{}}>
                    <Grid style={{ height: "250px", width: "360px" }}>

                        <Box style={{ textAlign: "center" }}>

                            <Typography style={{ fontSize: "18px", fontWeight: "500", marginTop: "3%" }}>Add Personal Details</Typography>


                            <Grid style={{ marginTop: "5%", marginLeft: "12%", marginRight: "12%" }}>

                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "4%" }}>
                                    <Typography style={{}}>Name</Typography>
                                    <TextField style={{ marginLeft: "2%", marginTop: "-7px" }} id="standard-basic" variant="standard" />
                                </Grid>
                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "4%" }}>
                                    <Typography>Email</Typography>
                                    <TextField id="standard-basic" variant="standard" style={{ marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "4%" }}>
                                    <Typography>Phone</Typography>
                                    <TextField id="standard-basic" variant="standard" style={{ marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>



                                <Grid style={{ marginTop: "8%", display: "flex", justifyContent: "center" }}>
                                    <Button
                                        onClick={() => { this.setState({ addpermodal: false }); }}
                                        variant='outlined' style={{ color: "black" }}>cancel</Button>
                                    <Button
                                        onClick={() => { this.setState({ addpermodal: false }); }}
                                        variant='contained' style={{ marginLeft: "3%" }}>save</Button>
                                </Grid>
                            </Grid>




                        </Box>

                    </Grid>
                </Dialog>

            </Grid>
        )
    }
}
