import React, { Component } from 'react'
import { Grid, Link, Typography,Button } from '@mui/material';
import SettingDrawer from "../../../../pages/settings/Admin/Components/SettingDrawer";
import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,


} from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Dialog from "@mui/material/Dialog";

export default class roleandpermission extends Component {
    constructor(props) {
        super(props);
        this.state = {

            delcarole: false,

        };
    }
    render() {
        return (
            <Grid style={{ marginTop: "10%", display: "flex", flexDirection: "row", gap: 30 }}>
                <Grid>
                    <SettingDrawer />
                </Grid>
                <Grid>
                    <Typography style={{ marginBottom: "4%", fontSize: "20px", fontWeight: "600" }}>Role & Permission</Typography>

                    <TableContainer component={Paper}>
                        <Table style={{ backgroundColor: '#eeecfe' }} sx={{ minWidth: 450 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell >Member Roles</TableCell>
                                    <TableCell >Permission</TableCell>
                                    <TableCell ></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow>
                                    <TableCell >Admin</TableCell>
                                    <Link style={{ textDecoration: "none", cursor: "pointer" }} to="/"> <TableCell style={{ color: "blue" }}>Configuration</TableCell></Link>
                                    <TableCell  >

                                        <DeleteOutlineOutlinedIcon onClick={() => { this.setState({ delrole: true }); }} style={{ color: "red" }} />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell >Manager</TableCell>
                                    <Link style={{ textDecoration: "none", cursor: "pointer" }} to="/"><TableCell style={{ color: "blue" }}>Configuration</TableCell></Link>
                                    <TableCell >
                                        <DeleteOutlineOutlinedIcon onClick={() => { this.setState({ delrole: true }); }} style={{ color: "red" }} />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell >Execiutives</TableCell>
                                    <Link style={{ textDecoration: "none", cursor: "pointer" }} to="/"><TableCell style={{ color: "blue" }} >Configuration</TableCell></Link>
                                    <TableCell >

                                        <DeleteOutlineOutlinedIcon onClick={() => { this.setState({ delrole: true }); }} style={{ color: "red" }} />
                                    </TableCell>

                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                <Dialog
          // onClose={()=>this.setState({ editcat: false })}
          open={this.state.delrole} style={{}}>
          <Grid style={{ width: "500px", marginBottom: "2%" }}>


            <Grid style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%", marginBottom: "3%" }}>

              <Grid style={{ fontSize: "20px", fontWeight: "500", marginTop: "3%", display: "flex", justifyContent: "center" }}>Are you sure?</Grid>


              <Grid style={{ marginTop: "8%", display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={() => { this.setState({ delrole: false }); }}
                  variant='outlined' style={{ color: "black" }}>No, go back</Button>
                <Button
                  onClick={() => { this.setState({ delrole: false }); }}
                  variant='contained' style={{ marginLeft: "3%" }}>Yes, Delete it</Button>
              </Grid>


            </Grid>

          </Grid>
        </Dialog>
            </Grid>
        )
    }
}
