import React, { Component } from 'react'
import { Tab, TabList, TabPanel, Tabs, } from 'react-tabs';
import { Grid, Box, Button } from '@mui/material';
import Style from "../../../settings/Admin/Components/template.css";
import SettingDrawer2 from "../../../../pages/settings/Admin/Components/SettingDrawer2";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Pagination from '@mui/material/Pagination';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Invoiceimg1 from "../../../image/InvoiceTemplate1.png";
import Invoiceimg2 from "../../../image/InvoiceTemplate2.png";
import Invoiceimg3 from "../../../image/InvoiceTemplate3.png";
import Invoiceimg4 from "../../../image/InvoiceTemplate4.png";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { TextField, FormControl, MenuItem, Menu, Select, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import watchcard from "../../../image/wrist-watches 1.png";
import { Check, CheckBox } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import "../../../../pages/settings/Admin/Components/Managertemplate.css"


const cardContentHeight = {
  expanded: 'auto',
  collapsed: '0',
};


export default class Managertemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      MngcreateTemplate: false,
      delMngTemplate: false,
      isExpanded: false,
      MngCarddata: [
        {
          Mnghead: "Template Name",
          Mngimg: watchcard,
          Mngcont: "These are just a few examples of popular CRM platforms. It's important to evaluate your specific business needs and requirements before selecting a CRM solution. Consider factors such as pricing, scalability✈️✈️,",
          Mngcopy: "Copy",
        },
        {
          Mnghead: "Template Name",
          Mngimg: watchcard,
          Mngcont: "These are just a few examples of popular CRM platforms. It's important to evaluate your specific business needs and requirements before selecting a CRM solution. Consider factors such as pricing, scalability✈️✈️,",
          Mngcopy: "Copy",
        },
        {
          Mnghead: "Template Name",
          Mngimg: watchcard,
          Mngcont: "These are just a few examples of popular CRM platforms. It's important to evaluate your specific business needs and requirements before selecting a CRM solution. Consider factors such as pricing, scalability✈️✈️,",
          Mngcopy: "Copy",
        },
      ]

    };
  }


  handleChange = (event) => {
    this.setState({ checked: event.target.checked });
  };







    render() {
        return (
            <>
        <Grid style={{ marginTop: "10%", display: "flex", gap: 30 }}>

          <Grid>
            <SettingDrawer2 />
          </Grid>

          <Card style={{marginBottom:"3%",width:"70%"}}>
            <Tabs style={{marginLeft:"2%"}}>
              <TabList className="temp-tablist">
                <Tab className="tab-temp">WhatsApp Template</Tab>
                <Tab className="tab-temp">SMS</Tab>
                <Tab className="tab-temp">Invoice</Tab>
              </TabList>

              <TabPanel>
                <Grid style={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", gap: "30px", }}>
                  <Paper className='srch'
                    component="form"
                    style={{ display: "flex", width: "350px", height: "43px",  boxShadow: "none" ,borderBottom:"1px solid black",marginLeft:"2%"}}
                  >
                    <IconButton
                      type="button"
                      style={{ p: "150px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      style={{ ml: 5, flex: 1, fontSize: "15px" }}
                      placeholder="Search"
                      inputProps={{ "aria-label": "Search here" }}
                    />
                  </Paper>


                  <Button 
                  style={{backgroundColor:"#414141",textTransform:"capitalize",whiteSpace:"nowrap"}}
                  className='create-btn'
                   variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => {
                      this.setState({ MngcreateTemplate: true });
                    }}
                  >Create New</Button>
                  <Button 
                  className='create-btn'
                  
                  style={{background:"#414141"}} variant="contained" onClick={() => { this.setState({ delMngTemplate: true }); }}><DeleteOutlineOutlinedIcon /></Button>


                  <Pagination count={3} defaultPage={2} siblingCount={0} />
                </Grid>


                <Grid style={{ display: "flex", flexDirection: "row", gap: 10, marginTop: "3%" ,padding:10}}>
                  {this.state.MngCarddata.map((itm) => {
                    return (
                      <Card sx={{ maxWidth: 250,marginBottom:"15%" }}

                      >
                        <Grid
                          onClick={() => {
                            this.setState({ isExpanded: !this.state.isExpanded })
                          }}
                        >
                          {/* <CardHeader> */}
                          <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}><Checkbox
                            checked={this.state.checked}
                            onChange={this.handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                          />
                            <Typography style={{ fontWeight: "500" }}>{itm.Mnghead}</Typography>
                            <ModeEditOutlineOutlinedIcon />
                          </Grid>
                          {/* </CardHeader> */}




                          <CardMedia
                            component="img"
                            height="100%"
                            image={itm.Mngimg}
                            alt="Paella dish"
                          />
                          <CardContent>
                            <Typography variant="body2" color="text.secondary">
                              {itm.Mngcont}
                            </Typography>
                          </CardContent>



                          {this.state.isExpanded && (
                            <Grid style={{ marginLeft: "8%", marginBottom: "5%" }}>
                              <Typography style={{ color: "blue" }}>http://kjghgfsartytfgh</Typography>
                            </Grid>
                          )}

                          <Grid style={{ backgroundColor: "#8DBBAB", height: "30px" }}><Typography style={{ textAlign: "center", color: "#fff", fontWeight: "500" }}>{itm.Mngcopy}</Typography></Grid>
                        </Grid>
                      </Card>
                    );
                  })}



                </Grid>
              </TabPanel>


              <TabPanel>
                <Grid style={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", gap: "30px" }}>
                <Paper className='srch'
                    component="form"
                    style={{ display: "flex", width: "350px", height: "43px",  boxShadow: "none" ,borderBottom:"1px solid black",marginLeft:"2%"}}
                  >
                    <IconButton
                      type="button"
                      style={{ p: "150px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      style={{ ml: 5, flex: 1, fontSize: "15px" }}
                      placeholder="Search"
                      inputProps={{ "aria-label": "Search here" }}
                    />
                  </Paper>

                  <Button  variant="contained"  className='create-btn'  startIcon={<AddIcon />}>Create New</Button>
                  <Button  variant="contained"  className='create-btn'  ><DeleteOutlineOutlinedIcon /></Button>

                  <Pagination count={3} defaultPage={2} siblingCount={0} />
                </Grid>

                <Grid style={{ display: "flex", flexDirection: "row", gap: 10, marginTop: "3%" }}>
                  {this.state.MngCarddata.map((itm) => {
                    return (
                      <Card sx={{ maxWidth: 250,marginBottom:"15%" }}

                      >
                        <Grid
                          onClick={() => {
                            this.setState({ isExpanded: !this.state.isExpanded })
                          }}
                        >
                          {/* <CardHeader> */}
                          <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}><Checkbox
                            checked={this.state.checked}
                            onChange={this.handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                          />
                            <Typography style={{ fontWeight: "500" }}>{itm.Mnghead}</Typography>
                            <ModeEditOutlineOutlinedIcon />
                          </Grid>
                          {/* </CardHeader> */}




                          <CardMedia
                            component="img"
                            height="100%"
                            image={itm.Mngimg}
                            alt="Paella dish"
                          />
                          <CardContent>
                            <Typography variant="body2" color="text.secondary">
                              {itm.Mngcont}
                            </Typography>
                          </CardContent>



                          {this.state.isExpanded && (
                            <Grid style={{ marginLeft: "8%", marginBottom: "5%" }}>
                              <Typography style={{ color: "blue" }}>http://kjghgfsartytfgh</Typography>
                            </Grid>
                          )}

                          <Grid style={{ backgroundColor: "#8DBBAB", height: "30px" }}><Typography style={{ textAlign: "center", color: "#fff", fontWeight: "500" }}>{itm.Mngcopy}</Typography></Grid>
                        </Grid>
                      </Card>
                    );
                  })}



                </Grid>

              </TabPanel>

              <TabPanel>
              <Paper className='srch'
                    component="form"
                    style={{ display: "flex", width: "367px", height: "43px",  boxShadow: "none" ,borderBottom:"1px solid black",marginLeft:"2%"}}
                  >
                    <IconButton
                      type="button"
                      style={{ p: "150px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      style={{ ml: 5, flex: 1, fontSize: "15px" }}
                      placeholder="Search"
                      inputProps={{ "aria-label": "Search here" }}
                    />
                  </Paper>


                <div class="wrapper" style={{marginBottom:"15%",marginTop:"2%"}}>
                  <div class="card">
                    <img src={Invoiceimg1} />
                    <div class="info">

                      <button>Use</button>
                    </div>
                  </div>
                  <div class="card">
                    <img src={Invoiceimg2} />
                    <div class="info">
                      <button>Use</button>
                    </div>
                  </div>
                  <div class="card">
                    <img src={Invoiceimg3} />
                    <div class="info">

                      <button>Use</button>
                    </div>
                  </div>
                  <div class="card">
                    <img src={Invoiceimg4} />
                    <div class="info">

                      <button>Use</button>
                    </div>
                  </div>
                </div>
              </TabPanel>

            </Tabs>
          </Card>
        </Grid>






        {/* template create dialog */}

        <Dialog open={this.state.MngcreateTemplate} className="dialog-box">
          <Grid style={{ width: "600px",padding:"25px" }}>

           
              <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"7%"}}>
                <Typography style={{fontWeight:"600",fontSize:"18px"}}>Template Create </Typography >

                <CloseOutlinedIcon
                  onClick={() => {
                    this.setState({ MngcreateTemplate: false });
                  }}

                  className="eventcross-icon"

                />
              </Box>
           

           


            <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"30px"}} >
              <Box style={{display:"flex",alignItems:"center",gap:"7px"}}> 
              <Typography style={{whiteSpace:"nowrap"}}>Image Upload</Typography>
                <Box
                
                  style={{border:"1px solid lightgray",height:"60px",width:"100px",textAlign:"center"}}
                
                >

{" "}
                  <label
                    htmlFor="file"
                
                    style={{}}
                  >
                    <Typography className="upload-file">
                      {" "}
                      <UploadFileIcon style={{fontSize:"50px",textAlign:"center"}}/>{" "}
                    </Typography>


                  </label>
                  <input style={{ display: "none" }} type="file" id="file"
                    onChange={(e) => { this.setState({ image: e.target.files[0] }) }}
                  />
                </Box>
              </Box>
              <Box style={{display:"flex",alignItems:"center"}}>
                <Typography className="desc-text">Link :</Typography>
                <TextField id="standard-basic" variant="standard"  />
              </Box>
              
            </Box>
            <Box className="right-sec">
                
                {/* <Box className="location-category-sec">

                
                  <Box >
                  
                    <FormControl variant="standard">

                      <Select placeholder='Category' className=" event-category" >
                        <MenuItem value={10}>Category Name</MenuItem>
                        <MenuItem value={20}>Category Name</MenuItem>
                        <MenuItem value={30}>Category Name</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>





                </Box> */}
                {/* <Box >
                  <TextField id="standard-basic" variant="standard" placeholder='Address' className="event-address" />


                </Box> */}

              </Box>


           

            <Box style={{display:"flex",justifyContent:"space-between",marginTop:"3%",marginBottom:"3%"}}>

             
              <Box style={{display:"flex",gap:"5px",alignItems:"center"}}>
                <Typography >Template Name :</Typography>
                <TextField id="standard-basic" variant="standard"  />
              </Box>


              <Box style={{display:"flex",gap:"5px"}}>
                <Typography >Category :</Typography>
                <FormControl variant="standard">

                  <Select placeholder='Category' style={{width:"159px"}} >
                    <MenuItem value={10}>Free</MenuItem>
                    <MenuItem value={20}>Paid</MenuItem>

                  </Select>
                </FormControl>
              </Box>

              
            </Box>

            <Box style={{width:"100%",marginTop:"2%"}}>
                <Typography className="desc-text">Description</Typography>
                <textarea rows="4" cols="60" style={{ borderBottom:"1px solid gray",borderTop:"none",borderLeft:"none",borderRight:"none", outline: " none", resize: "none" }}></textarea>
                
                {/* <TextField id="standard-basic" variant="standard" className="event-desc-m" /> */}
              </Box>
              <Grid style={{ marginBottom: "2%" }}></Grid>
              <Box style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
                <Typography></Typography>
              <Button
                variant="contained"
                className="create-event-btn"
                style={{textTransform:"capitalize"}}

                onClick={() => {
                  this.setState({ MngcreateTemplate: false });
                }}

              >
                Create Template
              </Button>
              </Box>




            <Grid style={{ marginBottom: "2%" }}></Grid>
          </Grid>
        </Dialog>



        {/* --------------------delete------------------ */}
        <Dialog
          // onClose={()=>this.setState({ editcat: false })}
          open={this.state.delMngTemplate} style={{}}>
          <Grid style={{ width: "400px", marginBottom: "2%",padding:"10px" }}>


            <Grid style={{ marginTop: "3%", marginLeft: "3%", marginRight: "3%", marginBottom: "3%" }}>


              <Grid style={{ display: "flex", justifyContent: "space-between",borderBottom: "1px solid lightgray"  }}>
                <Typography style={{ fontWeight: "600" }}>Delete</Typography>
                <CloseOutlinedIcon
                  onClick={() => {
                    this.setState({ delMngTemplate: false });
                  }}

                  className="eventcross-icon"

                />
              </Grid>
              <Grid style={{ fontSize: "16px", fontWeight: "500", marginTop: "3%", display: "flex", justifyContent: "center", paddingBottom: "10px", }}>Are you sure you want to delete ?</Grid>


              <Grid style={{ marginTop: "8%", display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={() => { this.setState({ delMngTemplate: false }); }}
                  variant='outlined' style={{ color: "black" ,width:"40%" }}>Cancel</Button>
                <button
                  onClick={() => { this.setState({ delMngTemplate: false }); }}
                  variant='contained' style={{ background: "maroon", width:"40%",borderRadius:"4px",color: "white", padding: "7px 15px", cursor: "pointer", border: "none", outline: "none" }}>Accept</button>
              </Grid>


            </Grid>

          </Grid>
        </Dialog>


      </>
        );
    }
}

