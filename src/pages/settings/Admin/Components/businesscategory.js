import React, { Component } from 'react';
import { Card, Grid, Typography, Box, Button, } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddBoxIcon from '@mui/icons-material/AddBox';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import SettingDrawer from "../../../../pages/settings/Admin/Components/SettingDrawer";
import Dialog from "@mui/material/Dialog";
import TextField from '@mui/material/TextField';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  

} from "@mui/material"



export default class businesscategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editcat: false,
      delcat: false,
      addcat: false,
    };
  }
  render() {
    return (
      <Grid style={{ marginTop: "10%", display: "flex", flexDirection: "row", gap: 30 }}>

        <Grid>
          <SettingDrawer />
        </Grid>

        <Grid style={{ width: "540px", marginLeft: "3%", marginTop: "3%" }}>
          <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
            <Typography>Category</Typography>
            <AddBoxIcon onClick={() => { this.setState({ addcat: true }); }} />
          </Grid>

          <Card style={{ width: "540px", marginTop: "2%" }}>
            <Grid style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%", marginBottom: "3%" }}>

              <TableContainer component={Paper}>
                <Table style={{ backgroundColor: '#eeecfe' }} sx={{ minWidth: 450 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell >Category</TableCell>
                      <TableCell >Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>

                    <TableRow>
                      <TableCell >Order</TableCell>
                      <TableCell style={{ display: "flex", flexDirection: "row" }} >
                        <EditOutlinedIcon onClick={() => { this.setState({ editcat: true }); }} />
                        <DeleteOutlineOutlinedIcon onClick={() => { this.setState({ delcat: true }); }} style={{ color: "red" }} />
                      </TableCell>

                    </TableRow>
                    <TableRow>
                      <TableCell >Marketing</TableCell>
                      <TableCell style={{ display: "flex", flexDirection: "row" }} >
                        <EditOutlinedIcon onClick={() => { this.setState({ editcat: true }); }} />
                        <DeleteOutlineOutlinedIcon onClick={() => { this.setState({ delcat: true }); }} style={{ color: "red" }} />
                      </TableCell>

                    </TableRow>
                    <TableRow>
                      <TableCell >Management</TableCell>
                      <TableCell style={{ display: "flex", flexDirection: "row" }} >
                        <EditOutlinedIcon onClick={() => { this.setState({ editcat: true }); }} />
                        <DeleteOutlineOutlinedIcon onClick={() => { this.setState({ delcat: true }); }} style={{ color: "red" }} />
                      </TableCell>

                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>






            </Grid>
          </Card>

        </Grid>

        <Dialog
          // onClose={()=>this.setState({ editcat: false })}
          open={this.state.addcat} style={{}}>
          <Grid style={{ width: "450px", marginBottom: "2%", marginTop: "3%" }}>


            <Grid style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%", marginBottom: "3%" }}>

              <Grid style={{ fontSize: "20px", fontWeight: "500", marginTop: "3%", display: "flex", justifyContent: "center" }}>Add Category</Grid>
              <Grid style={{ display: "flex", flexDirection: "row", marginTop: "3%", justifyContent: "center" }}>

                <Typography style={{}}>Category Name</Typography>
                <TextField id="standard-basic" variant="standard" style={{ marginLeft: "2%", marginTop: "-7px" }} />

              </Grid>

              <Grid style={{ marginTop: "8%", display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={() => { this.setState({ addcat: false }); }}
                  variant='outlined' style={{ color: "black" }}>cancel</Button>
                <Button
                  onClick={() => { this.setState({ addcat: false }); }}
                  variant='contained' style={{ marginLeft: "3%" }}>Save</Button>
              </Grid>


            </Grid>

          </Grid>
        </Dialog>


        <Dialog
          // onClose={()=>this.setState({ editcat: false })}
          open={this.state.editcat} style={{}}>
          <Grid style={{ width: "500px", marginBottom: "2%" }}>


            <Grid style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%", marginBottom: "3%" }}>

              <Grid style={{ fontSize: "20px", fontWeight: "500", marginTop: "3%", display: "flex", justifyContent: "center" }}>Edit Category</Grid>
              <Grid style={{ display: "flex", flexDirection: "row", marginTop: "3%", justifyContent: "center" }}>

                <Typography style={{}}>Category Name</Typography>
                <TextField placeholder='Order' id="standard-basic" variant="standard" style={{ marginLeft: "2%", marginTop: "-7px" }} />

              </Grid>

              <Grid style={{ marginTop: "8%", display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={() => { this.setState({ editcat: false }); }}
                  variant='outlined' style={{ color: "black" }}>cancel</Button>
                <Button
                  onClick={() => { this.setState({ editcat: false }); }}
                  variant='contained' style={{ marginLeft: "3%" }}>Save Changes</Button>
              </Grid>


            </Grid>

          </Grid>
        </Dialog>

        <Dialog
          // onClose={()=>this.setState({ editcat: false })}
          open={this.state.delcat} style={{}}>
          <Grid style={{ width: "500px", marginBottom: "2%" }}>


            <Grid style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%", marginBottom: "3%" }}>

              <Grid style={{ fontSize: "20px", fontWeight: "500", marginTop: "3%", display: "flex", justifyContent: "center" }}>Are you sure?</Grid>


              <Grid style={{ marginTop: "8%", display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={() => { this.setState({ delcat: false }); }}
                  variant='outlined' style={{ color: "black" }}>No, go back</Button>
                <Button
                  onClick={() => { this.setState({ delcat: false }); }}
                  variant='contained' style={{ marginLeft: "3%" }}>Yes, Delete it</Button>
              </Grid>


            </Grid>

          </Grid>
        </Dialog>
      </Grid>
    )
  }
}
