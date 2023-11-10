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

export default class Executivesproducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deletetag: false,
            anchorEl: null,
            open: false,
            deleterow: false,
            deletedata: false,

            addData: false,
            viewData: false,
            showImage: false,
            imageURL: 'viewimg',

            datamanager: [
                {
                    ProductImagemanager: ProductImage,
                    ProductNamemanager: "CRM",
                    ProductIDmanager: "#123455",
                    ProductPricemanager: "₹500,000",
                    ProductStockmanager: "20000",

                },
                {
                    ProductImagemanager: ProductImage,
                    ProductNamemanager: "CRM",
                    ProductIDmanager: "#123455",
                    ProductPricemanager: "₹500,000",
                    ProductStockmanager: "20000",

                },
                {
                    ProductImagemanager: ProductImage,
                    ProductNamemanager: "CRM",
                    ProductIDmanager: "#123455",
                    ProductPricemanager: "₹500,000",
                    ProductStockmanager: "20000",

                },
            ]

        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
          showImage: !prevState.showImage,
        }));
      };
    
      changeImage = () => {
        this.setState({
          imageURL: 'new_image_url.jpg',
        });
      };


    render() {
        return (
            <div>
                <Grid style={{ marginTop: "10%", padding: "20px" }}>

                    <Grid style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3%" }}>

                        <Typography style={{ fontSize: "25px", fontWeight: "500" }}>Products</Typography>
                       



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


                                {this.state.datamanager.map((item, index) => {
                                    return (
                                        <TableRow 
                                        onClick={()=>{this.setState({viewData:true})}}
                                        >
                                            <TableCell></TableCell>
                                            <TableCell> {index + 1}</TableCell>
                                            <TableCell ><img src={item.ProductImagemanager} style={{ height: "40px" }} /> </TableCell>
                                            <TableCell>{item.ProductNamemanager}</TableCell>
                                            <TableCell>{item.ProductIDmanager}</TableCell>
                                            <TableCell> {item.ProductPricemanager}</TableCell>
                                            <TableCell> {item.ProductStockmanager}</TableCell>
                                            {/* <TableCell style={{ gap: "10px", display: "flex", paddingTop: "10px", paddingBottom: "10px" }}>
                                                <img src={DeleteAct} onClick={() => { this.setState({ deleterow: true }); }} />
                                                <img src={EditAct} />
                                                <VisibilityOutlinedIcon
                                                    style={{ color: "lightgreen", border: "1px solid lightgreen", borderRadius: "50px", padding: "5px", fontSize: "30px" }}
                                                    onClick={() => { this.setState({ viewData: true }); }} />
                                            </TableCell> */}


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
                                    style={{ border: "1px solid lightgray", width: "250px", height: "100px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                                >
                                    <img src={viewImg} style={{ width: "100%", height: "100%" }} />
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
                                    style={{ border: "none", borderRadius: "2px", outline: "none", color: "white", background: "#441000", padding: "10px", width: "40%", borderRadius: "2px", marginTop: "2%" }}>
                                    Okay
                                </button>

                            </Grid>
                        </Grid>
                    </Dialog>




                    
                </Grid>
            </div>
        )
    }
}
