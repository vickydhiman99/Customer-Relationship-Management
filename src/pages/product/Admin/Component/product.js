import React, { Component } from 'react';
import {
    Grid,
    CardContent,
    Box,
    IconButton,
    Button,
    Typography,
    Icon, DialogActions,
    DialogTitle,
    Tooltip

} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import Paper from "@mui/material/Paper";
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import Dialog from "@mui/material/Dialog";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Addico from "../../../image/Add circle outline.svg";
import Deleteico from "../../../image/trash.svg";
import Pagination from "@mui/material/Pagination";
import ProductImage from "../../../image/pr-image.png";
import viewImg from "../../../image/viewimg.png";
import DeleteAct from "../../../image/t-delete.png";

import EditAct from "../../../image/t-edit.png";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { ModeEditOutlineOutlined } from '@mui/icons-material';


class product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deletetag: false,
            anchorEl: null,
            open: false,
            productdelete: false,
            productwholedelete: false,

            addData: false,
            viewData: false,
           editData: false,

            data: [
                {
                    ProductImage: "",
                    ProductName: "CRM",
                    ProductID: "#123455",
                    ProductPrice: "₹500,000",
                    ProductStock: "20000",

                },
                {
                    ProductImage: "",
                    ProductName: "CRM",
                    ProductID: "#123455",
                    ProductPrice: "₹500,000",
                    ProductStock: "20000",

                },
                {
                    ProductImage: "",
                    ProductName: "CRM",
                    ProductID: "#123455",
                    ProductPrice: "₹500,000",
                    ProductStock: "20000",

                },
            ]

        }
    }




    render() {
        return (
            <div>
                <Grid style={{ marginTop: "10%", padding: "20px" }}>

                    <Grid style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3%" }}>

                        <Typography style={{ fontSize: "25px", fontWeight: "500" }}>Products</Typography>
                        <Grid style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
                            <Box style={{ borderRadius: "6px",cursor:"pointer" }}>
                                <img src={Addico}
                                    style={{ background: "#AA3F1D", padding: "10px", borderRadius: "4px" }}
                                    onClick={() => { this.setState({ addData: true }); }} />
                            </Box>
                            <Box style={{cursor:"pointer"}}>
                                <img src={Deleteico}
                                    style={{ background: "#AA3F1D", padding: "10px", borderRadius: "4px" }}
                                    onClick={() => { this.setState({ productwholedelete: true }); }}
                                />
                            </Box>

                        </Grid>



                    </Grid>




                    <Grid   >
                        <Table>
                            <TableHead style={{ background: "lightgray" }}>
                                <TableRow>
                                    <TableCell>    <Checkbox /></TableCell>
                                    <TableCell style={{ color: "black" }}>SL No.</TableCell>
                                    <TableCell style={{ color: "black" }}>Product Image</TableCell>
                                    <TableCell style={{ color: "black" }}>Product Name</TableCell>
                                    <TableCell style={{ color: "black" }}>Product ID</TableCell>
                                    <TableCell style={{ color: "black" }}>Product Price</TableCell>
                                    <TableCell style={{ color: "black" }}>Product Stock</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {this.state.data.map((item, index) => {
                                    return (
                                        <TableRow style={{cursor:"pointer"}} >
                                           
                                            <TableCell  onClick={() => { this.setState({ viewData: true })}}></TableCell>
                                            <TableCell onClick={() => { this.setState({ viewData: true })}}> {index +1}</TableCell>
                                            <TableCell onClick={() => { this.setState({ viewData: true })}} ><img src={ProductImage} style={{ height: "50px" }} /> </TableCell>
                                            <TableCell onClick={() => { this.setState({ viewData: true })}}>{item.ProductName}</TableCell>
                                            <TableCell onClick={() => { this.setState({ viewData: true })}}>{item.ProductID}</TableCell>
                                            <TableCell onClick={() => { this.setState({ viewData: true })}}> {item.ProductPrice}</TableCell>
                                            <TableCell onClick={() => { this.setState({ viewData: true })}}> {item.ProductStock}</TableCell>
                                            
                                            <TableCell style={{ gap: "10px", display: "flex", paddingTop: "40px", paddingBottom: "20px" }}>
                                                <DeleteOutlineOutlinedIcon
                                                style={{ color: "red", border: "1px solid red", borderRadius: "50px", padding: "5px", fontSize: "30px" }}
                                                onClick={() => { this.setState({ productdelete: true }); }} />
                                                {/* <img src={EditAct} /> */}
                                                <ModeEditOutlineOutlined
                                                    style={{ color: "green", border: "1px solid green", borderRadius: "50px", padding: "5px", fontSize: "30px" }}
                                                    onClick={() => { this.setState({ editData: true }); }} />
                                            </TableCell>


                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>


                        <Grid style={{ display: "flex", marginLeft: "78%", marginTop: "2%" }}>
                            <Pagination
                                count={10}
                                siblingCount={0}
                                size="small"
                                className='pagination'
                            />
                        </Grid>
                    </Grid>




                    {/* add dialog */}


                    <Dialog
                        open={this.state.addData} style={{}}>
                        <Grid style={{ width: "400px", padding: "20px", justifyContent: "center", alignItems: "center" }}>


                            <Grid style={{ display: "flex", justifyContent: "space-between", }}>
                                <Typography style={{ fontWeight: "600" }}>Add Product</Typography>
                                <CloseOutlinedIcon
                                style={{cursor:"pointer"}}
                                    onClick={() => {
                                        this.setState({ addData: false });
                                    }}

                                    className="eventcross-icon"

                                />
                            </Grid>

                            <Grid style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Box
                                    style={{ border: "1px solid lightgray", width: "250px", height: "100px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}
                                >




                                            <input style={{ display: "none",cursor:"pointer" }} type="file" id="file"  />
                                            <label htmlFor="file"><CreateNewFolderOutlinedIcon style={{ fontSize: "60px",cursor:"pointer" }}  /></label>
                                       
                                   
                                    <label
                                        htmlFor="file"
                                        className='label-mentor'
                                    >

                                        <Typography className="upload-file-two" style={{cursor:"pointer"}}>
                                            {" "}
                                            Product image Add{" "}
                                        </Typography>
                                    </label>
                                    <input style={{ display: "none", }} type="file" id="file"
                                        onChange={(e) => { this.setState({ image: e.target.files[0] }) }}
                                    />
                                </Box>

                                <Grid style={{ marginTop: "2%" }}>
                                    <Typography>Product Name</Typography>
                                    <TextField id="standard-basic" variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" ,cursor:"pointer"}} />
                                </Grid>
                                <Grid>
                                    <Typography>Product ID</Typography>
                                    <TextField id="standard-basic" variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px",cursor:"pointer" }} />
                                </Grid>
                                <Grid>
                                    <Typography>Product Price</Typography>
                                    <TextField id="standard-basic" variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" ,cursor:"pointer"}} />
                                </Grid>
                                <Grid>
                                    <Typography>Product Stock</Typography>
                                    <TextField id="standard-basic" variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" ,cursor:"pointer"}} />
                                </Grid>
                                <Grid>
                                    <Typography>Product Type</Typography>
                                    <TextField id="standard-basic" variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" ,cursor:"pointer"}} />
                                </Grid>
                                <Grid>
                                    <Typography>Description</Typography>
                                    <textarea rows="4" cols="30" style={{ border: "none", outline: " 1px solid lightgray", resize: "none",cursor:"pointer" }}></textarea>
                                </Grid>
                                <button
                                    onClick={() => {
                                        this.setState({ addData: false });
                                    }}
                                    style={{ border: "none", borderRadius: "2px", outline: "none", color: "white", background: "#441000", padding: "10px", width: "30%", borderRadius: "2px", marginTop: "2%" ,cursor:"pointer"}}>
                                    Save
                                </button>

                            </Grid>
                        </Grid>
                    </Dialog>


                    {/* view dialog*/}


                    <Dialog
                        open={this.state.viewData} style={{}}>
                        <Grid style={{ width: "400px", padding: "20px", justifyContent: "center", alignItems: "center" }}>


                            <Grid style={{ display: "flex", justifyContent: "space-between", }}>
                                <Typography style={{ fontWeight: "600" }}>View Product</Typography>
                                <CloseOutlinedIcon
                                    onClick={() => {
                                        this.setState({ viewData: false });
                                    }}

                                    className="eventcross-icon"

                                />
                            </Grid>

                            <Grid style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Box
                                    style={{ width: "250px", height: "100px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                                >
                                    <img src={viewImg} style={{ width: "209px", height: "109px" }} />
                                </Box>

                                <Grid style={{ marginTop: "2%" }}>
                                    <Typography>Product Name</Typography>
                                    <TextField id="standard-basic" placeholder='CRM' disabled variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid>
                                    <Typography>Product ID</Typography>
                                    <TextField id="standard-basic" placeholder='1234567890' disabled variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid>
                                    <Typography>Product Price</Typography>
                                    <TextField id="standard-basic" placeholder='20,000' disabled variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid>
                                    <Typography>Product Stock</Typography>
                                    <TextField id="standard-basic" placeholder='200' disabled variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid>
                                    <Typography>Product Type</Typography>
                                    <TextField id="standard-basic" variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid>
                                    <Typography>Description</Typography>
                                    <textarea rows="4" cols="30"
                                        disabled
                                        style={{ color: "gray", border: "none", outline: " 1px solid lightgray", resize: "none" }}>
                                        I apologize for the confusion, but as a text-based AI model, I'm unable to access
                                    </textarea>
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



                     {/* edit dialog*/}


                     <Dialog
                        open={this.state.editData} style={{}}>
                        <Grid style={{ width: "400px", padding: "20px", justifyContent: "center", alignItems: "center" }}>


                            <Grid style={{ display: "flex", justifyContent: "space-between", }}>
                                <Typography style={{ fontWeight: "600" }}>Edit Product</Typography>
                                <CloseOutlinedIcon
                                    onClick={() => {
                                        this.setState({ editData: false });
                                    }}

                                    className="eventcross-icon"

                                />
                            </Grid>

                            <Grid style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <Box
                                    style={{ border: "1px solid lightgray", width: "250px", height: "100px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                                >




                                            <input style={{ display: "none" }} type="file" id="file"  />
                                            <label htmlFor="file"><CreateNewFolderOutlinedIcon style={{ fontSize: "60px" }}  /></label>
                                       
                                   
                                    <label
                                        htmlFor="file"
                                        className='label-mentor'
                                    >

                                        <Typography className="upload-file-two">
                                            {" "}
                                           Edit  Product image {" "}
                                        </Typography>
                                    </label>
                                    <input style={{ display: "none" }} type="file" id="file"
                                        onChange={(e) => { this.setState({ image: e.target.files[0] }) }}
                                    />
                                </Box>

                                <Grid style={{ marginTop: "2%" }}>
                                    <Typography>Product Name</Typography>
                                    <TextField id="standard-basic" placeholder='CRM'  variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid>
                                    <Typography>Product ID</Typography>
                                    <TextField id="standard-basic" placeholder='1234567890'  variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid>
                                    <Typography>Product Price</Typography>
                                    <TextField id="standard-basic" placeholder='20,000'  variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid>
                                    <Typography>Product Stock</Typography>
                                    <TextField id="standard-basic" placeholder='200'  variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid>
                                    <Typography>Product Type</Typography>
                                    <TextField id="standard-basic" variant="standard" style={{ width: "250px", marginLeft: "2%", marginTop: "-7px" }} />
                                </Grid>
                                <Grid>
                                    <Typography>Description</Typography>
                                    <textarea rows="4" cols="30"
                                        
                                        style={{ color: "gray", border: "none", outline: " 1px solid lightgray", resize: "none" }}>
                                        I apologize for the confusion, but as a text-based AI model, I'm unable to access
                                    </textarea>
                                </Grid>
                                <button
                                    onClick={() => {
                                        this.setState({ editData: false });
                                    }}
                                    style={{ border: "none", borderRadius: "2px", outline: "none", color: "white", background: "#441000", padding: "10px", width: "30%", borderRadius: "2px", marginTop: "2%" }}>
                                    Okay
                                </button>

                            </Grid>
                        </Grid>
                    </Dialog>





                    {/* delete dialog*/}

                    <Dialog open={this.state.productwholedelete}>
                    <Grid style={{ height: "210px", width: "300px" }}>

                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, }}>
                            {/* <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Delete</Typography> */}
                            <CloseOutlinedIcon
                                onClick={() => { this.setState({ productwholedelete: false }); }}
                                style={{ fontSize: 20, color: "#000", cursor: "pointer",marginLeft:"250px" ,marginTop: "3%",}} />
                        </Grid>
                        {/* <Divider style={{ height: "1px", color: "#000" }} /> */}

                        <Typography style={{ textAlign: "center", marginTop: "5%", color: "#000",fontWeight:600 }}>Are you sure you want to delete ?</Typography>

                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "10%", gap: "10px" }}>
                            <Button
                                onClick={() => { this.setState({ productwholedelete: false }); }}
                                variant='outlined' style={{ borderColor: "gray", color: "gray" }}>Yes</Button>
                            <Button
                                onClick={() => { this.setState({ productwholedelete: false }); }}
                                variant='contained' style={{ backgroundColor: "gray", color: "#fff", marginRight: "4%" }}>No</Button>
                        </Grid>


                    </Grid>
                </Dialog>

                    {/* delete row data */}
                    <Dialog open={this.state.productdelete}>
                    <Grid style={{ height: "210px", width: "300px" }}>

                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, }}>
                            {/* <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Delete</Typography> */}
                            <CloseOutlinedIcon
                                onClick={() => { this.setState({ productdelete: false }); }}
                                style={{ fontSize: 20, color: "#000", cursor: "pointer",marginLeft:"250px" ,marginTop: "3%",}} />
                        </Grid>
                        {/* <Divider style={{ height: "1px", color: "#000" }} /> */}

                        <Typography style={{ textAlign: "center", marginTop: "5%", color: "#000",fontWeight:600 }}>Are you sure you want to delete ?</Typography>

                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "10%", gap: "10px" }}>
                            <Button
                                onClick={() => { this.setState({ productdelete: false }); }}
                                variant='outlined' style={{ borderColor: "gray", color: "gray" }}>Yes</Button>
                            <Button
                                onClick={() => { this.setState({ productdelete: false }); }}
                                variant='contained' style={{ backgroundColor: "gray", color: "#fff", marginRight: "4%" }}>No</Button>
                        </Grid>


                    </Grid>
                </Dialog>
                </Grid>
            </div>
        );
    }
}

export default product;