import { Card, Grid, Typography,Button,Box } from '@mui/material'
import React, { Component } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Dp from "../../../../pages/image/dp.png";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import SettingDrawer from "../../../../pages/settings/Admin/Components/SettingDrawer";
import Dialog from "@mui/material/Dialog";
import TextField from '@mui/material/TextField';

export default class businesssetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorginfo: false,
            addorgmodal: false,
        };
    }
    render() {
        return (
            <Grid style={{ marginTop: "10%", display: "flex", flexDirection: "row", gap: 30 }}>

                <Grid>
                    <SettingDrawer />
                </Grid>
                <Grid>

                    <Grid style={{ display: "flex", flexDirection: "row", marginLeft: "3%", alignItems: "center" }}>
                        <Typography style={{ fontSize: "18px", fontWeight: "500" }}>Account Setting</Typography>
                        <ArrowForwardIosIcon style={{ fontSize: "15px", fontWeight: "500" }} />
                        <Typography style={{ fontSize: "15px", marginLeft: "2%" }}>Organisation Details</Typography>
                    </Grid>


                    <Grid style={{ width: "540px", marginLeft: "3%", marginTop: "6%" }}>
                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                            <Typography>Organisation Details</Typography>
                            <AddBoxIcon
                                onClick={() => {
                                    this.setState({ addorgmodal: true });
                                }}
                                style={{ color: "#525050",cursor:"pointer" }} />
                        </Grid>

                        <Card style={{ width: "540px", marginTop: "2%" }}>
                            <Grid style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%", marginBottom: "3%" }}>
                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <img src={Dp} style={{ marginLeft: "5%" }} />
                                    <BorderColorOutlinedIcon
                                        onClick={() => {
                                            this.setState({ editorginfo: true });
                                        }}
                                        style={{ color: "#525050" ,cursor:"pointer" }} />
                                </Grid>

                                <Grid style={{ display: "flex", flexDirection: "row", marginTop: "3%" }}>

                                    <Grid style={{ width: "270px" }}>
                                        <Typography>Name</Typography>
                                        <Typography style={{ fontSize: "17px", fontWeight: "600" }}>Cameron Williamson</Typography>
                                    </Grid>

                                    <Grid style={{ width: "270px" }}>
                                        <Typography>Email</Typography>
                                        <Typography style={{ fontSize: "17px", fontWeight: "600" }}>nevaeh.simmons@example.com</Typography>
                                    </Grid>

                                </Grid>

                                <Grid style={{ display: "flex", flexDirection: "row", marginTop: "4%" }}>

                                    <Grid style={{ width: "270px" }}>
                                        <Typography>Phone No</Typography>
                                        <Typography style={{ fontSize: "17px", fontWeight: "600" }}>9876543256</Typography>
                                    </Grid>

                                    <Grid style={{ width: "270px" }}>
                                        <Typography>GSTIN</Typography>
                                        <Typography style={{ fontSize: "17px", fontWeight: "600" }}>05AAACV2037R1Z3</Typography>
                                    </Grid>

                                </Grid>

                                <Grid style={{ marginTop: "4%" }}>
                                    <Typography style={{ color: "gray" }}>Address</Typography>
                                    <Typography style={{ fontSize: "17px", fontWeight: "600" }}>4517 Washington Ave. Manchester, Kentucky 39495</Typography>
                                    <Typography style={{ fontSize: "17px", fontWeight: "600" }}> 4517 Washington Ave. Manchester, Kentucky 39495</Typography>
                                </Grid>
                            </Grid>
                        </Card>

                    </Grid>
                </Grid>


                <Dialog
                onClose={()=>this.setState({ editorginfo: false })}
                    open={this.state.editorginfo} style={{}}>
                    <Grid style={{ width: "550px", marginBottom: "2%" }}>

                    
                            <Grid style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%", marginBottom: "3%" }}>
                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <img src={Dp} style={{ marginLeft: "5%" }} />
                                    <Typography>save</Typography>
                                </Grid>

                                <Grid style={{ display: "flex", flexDirection: "row", marginTop: "3%" }}>

                                    <Grid style={{ width: "270px" }}>
                                        <Typography>Name</Typography>
                                        <Typography style={{ fontSize: "17px", fontWeight: "600" }}>Cameron Williamson</Typography>
                                    </Grid>

                                    <Grid style={{ width: "270px" }}>
                                        <Typography>Email</Typography>
                                        <Typography style={{ fontSize: "17px", fontWeight: "600" }}>nevaeh.simmons@example.com</Typography>
                                    </Grid>

                                </Grid>

                                <Grid style={{ display: "flex", flexDirection: "row", marginTop: "4%" }}>

                                    <Grid style={{ width: "270px" }}>
                                        <Typography>Phone No</Typography>
                                        <Typography style={{ fontSize: "17px", fontWeight: "600" }}>9876543256</Typography>
                                    </Grid>

                                    <Grid style={{ width: "270px" }}>
                                        <Typography>GSTIN</Typography>
                                        <Typography style={{ fontSize: "17px", fontWeight: "600" }}>05AAACV2037R1Z3</Typography>
                                    </Grid>

                                </Grid>

                                <Grid style={{ marginTop: "4%" }}>
                                    <Typography style={{ color: "gray" }}>Address</Typography>
                                    <Typography style={{ fontSize: "17px", fontWeight: "600" }}>4517 Washington Ave. Manchester, Kentucky 39495</Typography>
                                    <Typography style={{ fontSize: "17px", fontWeight: "600" }}> 4517 Washington Ave. Manchester, Kentucky 39495</Typography>
                                </Grid>
                            </Grid>
                       
                    </Grid>
                </Dialog>


                <Dialog

                    onClose={this.handleClose}
                    open={this.state.addorgmodal} style={{}}>
                    <Grid style={{ height: "450px", width: "360px" }}>

                        <Box style={{ textAlign: "center" }}>

                            <Typography style={{ fontSize: "18px", fontWeight: "500", marginTop: "3%" }}>Add Organisation Details</Typography>
                            <img 
                            style={{alignItems:"center",marginTop:"3%"}}
                            src={Dp}/>

                            <Grid style={{ marginTop: "5%", marginLeft: "12%", marginRight: "12%" }}>

                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "7%" }}>
                                    <Typography style={{}}>Name</Typography>
                                    <TextField style={{ marginLeft: "2%", marginTop: "-7px" }} id="standard-basic" variant="standard" />
                                </Grid>
                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "7%" }}>
                                    <Typography>Email</Typography>
                                    <TextField id="standard-basic" variant="standard" style={{ marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "7%" }}>
                                    <Typography>Phone</Typography>
                                    <TextField id="standard-basic" variant="standard" style={{ marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "7%" }}>
                                    <Typography>GSTIN</Typography>
                                    <TextField id="standard-basic" variant="standard" style={{ marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "7%" }}>
                                    <Typography>Address</Typography>
                                    <TextField id="standard-basic" variant="standard" style={{ marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>



                                <Grid style={{ marginTop: "8%", display: "flex", justifyContent: "center" }}>
                                    <Button
                                        onClick={() => { this.setState({ addorgmodal: false }); }}
                                        variant='outlined' style={{ color: "black" }}>cancel</Button>
                                    <Button
                                        onClick={() => { this.setState({ addorgmodal: false }); }}
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

