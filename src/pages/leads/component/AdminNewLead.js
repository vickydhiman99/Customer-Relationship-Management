import React, { Component } from 'react'
import Checkbox from '@mui/material/Checkbox';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Dialog from "@mui/material/Dialog";

// -----------------------Mui icon import start-------------------//
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EastIcon from '@mui/icons-material/East';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
// -----------------------Mui icon import start-------------------//

// -----------------------import image start----------------------//
import meta from "../../../pages/image/meta.png";
import inbx from "../../../pages/image/direct-inbox.png"
import doc from "../../../pages/image/document-upload.png"
import addcircle from "../../../pages/image/Add circle outline.png"
import trs from "../../../pages/image/trash.png"

import icon1 from "../../../pages/image/crm.png"
import icon2 from "../../../pages/image/excel1.png"
import icon3 from "../../../pages/image/excel2.png"

// -----------------------import image start----------------------//


// -----------------------mui properties start---------------------//
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { TableCell, Grid, TableRow, TableBody, TextField, TableContainer, Table, TableHead, Paper, Button, Modal } from "@mui/material";
// -----------------------mui properties start---------------------//
export default class AdminNewLead extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      inbox: false,
      document: false,
      add: false,
      deleteleadadmin: false,
      closed: true,
      age: '',
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  createData = (si, name, contact, source, status, categories, assignee) => {
    return { si, name, contact, source, status, categories, assignee };
  };



  handleChanges = (event) => {
    this.setState({ age: event.target.value });
  };
  render() {
    const rows = [
      this.createData(1, 'technoboot', 'Abc@gmail.com', 'meta', 'new', 'pms', 'not assignee'),
      this.createData(2, 'technoboot', 'Abc@gmail.com', 'meta', 'new', 'pms', 'not assignee'),
      this.createData(3, 'technoboot', 'Abc@gmail.com', 'meta', 'new', 'pms', 'not assignee'),
      this.createData(4, 'technoboot', 'Abc@gmail.com', 'meta', 'new', 'pms', 'not assignee'),
      this.createData(5, 'technoboot', 'Abc@gmail.com', 'meta', 'new', 'pms', 'not assignee')
    ];


    return (
      <Grid style={{ marginTop: '100px' }}>
        <Paper
          component="form"
          style={{
            display: "flex",
            marginBottom: '7px',
            width: '342px',
            marginLeft: '20px',
            // padding: '10px 247px 9px 8px',
            height: "40px",
            boxShadow: "none",
            backgroundColor: "rgba(242, 242, 242, 0.30)",
            border: "1px solid var(--grey-colour-g-6, #B4B0B4)",
            borderRadius: '18px',
          }}
        >
          <IconButton type="button" style={{ p: "15px" }} aria-label="search">
            <SearchIcon style={{ fontSize: "25px" }} />
          </IconButton>
          <InputBase
            className='serach-text'
            placeholder="Search"
            inputProps={{ "aria-label": "Search " }}
          />
        </Paper>

        <Box sx={{ width: '100%', marginTop: "2%" }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Tabs value={this.state.value} onChange={this.handleChange} aria-label="basic tabs example">
              <Tab label="New Leads" id="simple-tab-0" aria-controls="simple-tabpanel-0" style={{ fontSize: "18px" }} />
              <Tab label="Follow Ups" id="simple-tab-1" aria-controls="simple-tabpanel-1" style={{ fontSize: "18px" }} />
              <Tab label="Old Leads" id="simple-tab-2" aria-controls="simple-tabpanel-2" style={{ fontSize: "18px" }} />
            </Tabs>
            <Grid sx={{ display: 'flex', gap: '20px', alignItems: 'center', marginRight: '22px' }}>
              <img onClick={() => this.setState({ inbox: true })} src={inbx} alt="" style={{ height: '24px', width: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 ,cursor:"pointer"}} />
              <img onClick={() => this.setState({ document: true })} src={doc} alt="" style={{ height: '24px', width: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 ,cursor:"pointer"}} />
              <img onClick={() => this.setState({ add: true })} src={addcircle} alt="" style={{ height: '24px', width: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0,cursor:"pointer" }} />
              <img onClick={() => this.setState({ deleteleadadmin: true })} src={trs} alt="" style={{ height: '24px', width: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0,cursor:"pointer" }} />
            </Grid>
          </Box>
          <div
            role="tabpanel"
            hidden={this.state.value !== 0}
            id="simple-tabpanel-0"
            aria-labelledby="simple-tab-0"
          >
            {this.state.value === 0 && (
              <Box sx={{ p: 3 }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell><Checkbox /> Sl No</TableCell>
                        <TableCell align="start">Name</TableCell>
                        <TableCell align="start">Contact</TableCell>
                        <TableCell align="start">Source</TableCell>
                        <TableCell align="start">Status</TableCell>
                        <TableCell align="start">Category</TableCell>
                        <TableCell align="start">Assignee</TableCell>
                        <TableCell align="start"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.si}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell align='center' component="th" scope="row">
                            {row.si}
                          </TableCell>
                          <TableCell align="start">{row.name}</TableCell>
                          <TableCell align="start">{row.contact}</TableCell>
                          <TableCell align="start" ><Typography style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><img style={{ height: "15px", width: "18px" }} src={meta} alt="Meta Icon" />{row.source}</Typography></TableCell>
                          <TableCell align="start">{row.status}</TableCell>
                          <TableCell align="start">{row.categories}</TableCell>
                          <TableCell align="start">{row.assignee}</TableCell>
                          <TableCell align="start"><Link to="/AdminleadDetails">
                            <EastIcon style={{ color: '#292D32', borderRadius: '50%', padding: '4px 4px', fontSize: '32px', backgroundColor: 'whitesmoke' }} /></Link></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </div>
          <div
            role="tabpanel"
            hidden={this.state.value !== 1}
            id="simple-tabpanel-1"
            aria-labelledby="simple-tab-1"
          >
            {this.state.value === 1 && (
              <Box sx={{ p: 3 }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell><Checkbox />  SI No</TableCell>
                        <TableCell align="start">Name</TableCell>
                        <TableCell align="start">Contact</TableCell>
                        <TableCell align="start">Source</TableCell>
                        <TableCell align="start">Status</TableCell>
                        <TableCell align="start">Category</TableCell>
                        <TableCell align="start">Assignee</TableCell>
                        <TableCell align="start"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.si}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell align='center' component="th" scope="row">
                            {row.si}
                          </TableCell>
                          <TableCell align="start">{row.name}</TableCell>
                          <TableCell align="start">{row.contact}</TableCell>
                          <TableCell align="start" ><Typography style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><img style={{ height: "15px", width: "18px" }} src={meta} alt="Meta Icon" />{row.source}</Typography></TableCell>
                          <TableCell align="start">{row.status}</TableCell>
                          <TableCell align="start">{row.categories}</TableCell>
                          <TableCell align="start">{row.assignee}</TableCell>
                          <TableCell align="start"><EastIcon style={{ color: '#292D32', borderRadius: '50%', padding: '4px 4px', fontSize: '32px', backgroundColor: 'whitesmoke' }} /></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </div>
          <div
            role="tabpanel"
            hidden={this.state.value !== 2}
            id="simple-tabpanel-2"
            aria-labelledby="simple-tab-2"
          >
            {this.state.value === 2 && (
              <Box sx={{ p: 3 }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell><Checkbox />  SI No</TableCell>
                        <TableCell align="start">Name</TableCell>
                        <TableCell align="start">Contact</TableCell>
                        <TableCell align="start">Source</TableCell>
                        <TableCell align="start">Status</TableCell>
                        <TableCell align="start">Category</TableCell>
                        <TableCell align="start">Assignee</TableCell>
                        <TableCell align="start"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.si}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell align='center' component="th" scope="row">
                            {row.si}
                          </TableCell>
                          <TableCell align="start">{row.name}</TableCell>
                          <TableCell align="start">{row.contact}</TableCell>
                          <TableCell align="start" ><Typography style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><img style={{ height: "15px", width: "18px" }} src={meta} alt="Meta Icon" />{row.source}</Typography></TableCell>
                          <TableCell align="start">{row.status}</TableCell>
                          <TableCell align="start">{row.categories}</TableCell>
                          <TableCell align="start">{row.assignee}</TableCell>
                          <TableCell align="start"><EastIcon style={{ color: '#292D32', borderRadius: '50%', padding: '4px 4px', fontSize: '32px', backgroundColor: 'whitesmoke' }} /></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </div>
        </Box>

        <Modal
          open={this.state.inbox}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ height: '600px', width: '1112px', position: 'relative', borderRadius: '12px', backgroundColor: '#FFF', boxShadow: '0px 8px 16px 0px #7B7B7B', margin: '60px 0px 0px 245px' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item lg={7} style={{ backgroundColor: '#FFF' }}>
                  <Grid sx={{ marginTop: '95px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '15px' }}>
                    <img style={{ height: '48px', width: '48px', flexShrink: 0, position: 'absolute', top: '30px', left: '25px' }} src={icon2} alt="" />
                    <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                      <Grid style={{ display: 'flex', gap: '10px' }}>
                        <Typography style={{ fontSize: '20px', fontWeight: 500, lineHeight: '26px', color: '#000' }}>Import data from Excel</Typography>
                        <Typography><ChevronRightIcon style={{ color: '#000', flexShrink: 0 }} /></Typography>
                        <Typography style={{ fontSize: '20px', fontWeight: 500, lineHeight: '26px', color: '#000' }}>to CRM</Typography>
                      </Grid>
                      <Typography style={{ fontSize: '14px', fontWeight: 400, lineHeight: '21px', color: '#000' }}>Move data from an excel spreadsheet into an existing CRM Board</Typography>
                    </Grid>

                    <Grid style={{ width: '485px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '199px', border: '1px solid #A3A3A3', backgroundColor: '#FFFFFF' }}>
                      <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexDirection: 'column' }}>

                        <input style={{ display: "none" }} type="file" id="file" />
                        <label htmlFor="file">  <Typography style={{ color: '#000', lineHeight: '26px', fontSize: '20px', fontWeight: 500 }}>Drag file here or <span style={{ color: '#2439A9' }}>click to browse</span></Typography></label>


                        <Typography style={{ fontSize: '16px', fontWeight: 400, lineHeight: '24px', fontFamily: 'Lato' }}>All .csv, .xlsx & .xls files are supported</Typography>
                      </Grid>
                    </Grid>

                    <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '485px', height: '199px' }}>
                      <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexDirection: 'column' }}>
                        <Typography style={{ color: '#000', lineHeight: '26px', fontSize: '20px', fontWeight: 500 }}>Need Help getting started?</Typography>
                        <Typography style={{ color: '#000', fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}><span style={{ color: '#2439A9' }}>Read and Learn</span> about importing into CRM</Typography>
                        <Typography style={{ color: '#000', lineHeight: '26px', fontSize: '20px', fontWeight: 500 }}><span style={{ color: '#2439A9' }}>Download</span> a sample Excel file</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item lg={5} style={{ backgroundColor: '#F2F2F2', position: 'relative', display: 'flex', width: '470px', height: '600px', alignItems: 'center', justifyContent: 'center' }}>
                  <CloseOutlinedIcon onClick={() => this.setState({ inbox: false })} style={{ height: '25px', position: 'absolute', top: '40px', right: '40px', width: '25px', flexShrink: 0 }} />
                  <img style={{ position: 'absolute', left: '76px', height: '100px', width: '100px', backgroundColor: '#FAFAFA', flexShrink: 0, boxShadow: '0px 3.36986px 3.36986px 0px #000', borderRadius: '16.849px' }} src={icon3} alt="" />
                  <img style={{ position: 'absolute', right: '60px', height: '95px', width: '95px', flexShrink: 0, borderRadius: '16.849px', backgroundColor: '#FAFAFA', boxShadow: '0px 3.36986px 3.36986px 0px #000' }} src={icon1} alt="" />
                  <Grid style={{ width: '324px', height: '324px', borderRadius: '324px', border: '1px solid #51DA57', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid style={{ height: "250px", width: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #51DA57', strokeWidth: '2px', flexShrink: '0px', borderRadius: '250px' }}>
                      <Grid style={{ height: '170px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '170px', borderRadius: '170px', border: '3px solid #51DA57' }}>
                        <ChevronRightIcon style={{ width: '49px', height: '38', color: '#000' }} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Modal>

        <Modal
          open={this.state.document}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ height: '600px', width: '1112px', position: 'relative', borderRadius: '12px', margin: '60px 0px 0px 245px', backgroundColor: '#FFF', boxShadow: '0px 8px 16px 0px #7B7B7B' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item lg={7} style={{ backgroundColor: '#FFF' }}>
                  <Grid sx={{ marginTop: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '15px' }}>
                    <img style={{ height: '48px', width: '48px', flexShrink: 0, position: 'absolute', top: '30px', left: '25px' }} src={icon2} alt="" />
                    <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                      <Grid style={{ display: 'flex', gap: '10px' }}>
                        <Typography style={{ fontSize: '20px', fontWeight: 500, lineHeight: '26px', color: '#000' }}>Export data from Excel</Typography>
                        <Typography><ChevronRightIcon style={{ color: '#000', flexShrink: 0 }} /></Typography>
                        <Typography style={{ fontSize: '20px', fontWeight: 500, lineHeight: '26px', color: '#000' }}>to CRM</Typography>
                      </Grid>
                      <Typography style={{ fontSize: '14px', fontWeight: 400, lineHeight: '21px', color: '#000' }}>Move data from an excel spreadsheet into an existing CRM Board</Typography>
                    </Grid>

                    <Grid style={{ width: '485px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '199px', border: '1px solid #A3A3A3', backgroundColor: '#FFFFFF' }}>
                      <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexDirection: 'column' }}>

                        <input style={{ display: "none" }} type="file" id="file" />
                        <label htmlFor="file">  <Typography style={{ color: '#000', lineHeight: '26px', fontSize: '20px', fontWeight: 500 }}>Drag file here or <span style={{ color: '#2439A9' }}>click to browse</span></Typography></label>


                        <Typography style={{ fontSize: '16px', fontWeight: 400, lineHeight: '24px', fontFamily: 'Lato' }}>All .csv, .xlsx & .xls files are supported</Typography>
                      </Grid>
                    </Grid>

                    <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '485px', height: '180px' }}>
                      <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexDirection: 'column' }}>
                        <Typography style={{ color: '#000', lineHeight: '26px', fontSize: '20px', fontWeight: 500 }}>Need Help getting started?</Typography>
                        <Typography sx={{ color: '#000', fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}><span style={{ color: '#2439A9' }}>Read and Learn</span> about importing into CRM</Typography>
                        <Typography sx={{ color: '#000', lineHeight: '26px', fontSize: '20px', fontWeight: 500 }}><span style={{ color: '#2439A9' }}>Download</span> a sample Excel file</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item lg={5} style={{ backgroundColor: '#F2F2F2', position: 'relative', display: 'flex', width: '470px', height: '600px', alignItems: 'center', justifyContent: 'center' }}>
                  <CloseOutlinedIcon onClick={() => this.setState({ document: false })} style={{ height: '25px', position: 'absolute', top: '40px', right: '40px', width: '25px', flexShrink: 0 }} />
                  <img style={{ position: 'absolute', left: '76px', height: '100px', width: '100px', backgroundColor: '#FAFAFA', flexShrink: 0, boxShadow: '0px 3.36986px 3.36986px 0px #000', borderRadius: '16.849px' }} src={icon3} alt="" />
                  <img style={{ position: 'absolute', right: '60px', height: '95px', width: '95px', flexShrink: 0, borderRadius: '16.849px', backgroundColor: '#FAFAFA', boxShadow: '0px 3.36986px 3.36986px 0px #000' }} src={icon1} alt="" />
                  <Grid style={{ width: '324px', height: '324px', borderRadius: '324px', border: '1px solid #51DA57', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid style={{ height: "250px", width: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #51DA57', strokeWidth: '2px', flexShrink: '0px', borderRadius: '250px' }}>
                      <Grid style={{ height: '170px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '170px', borderRadius: '170px', border: '3px solid #51DA57' }}>
                        <ChevronRightIcon style={{ width: '49px', height: '38', color: '#000' }} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Modal>

        <Modal
          open={this.state.add}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ height: '378px', width: '604px', borderRadius: '12px', position: 'absolute', top: '23vh', left: '35vw', backgroundColor: '#FFF', boxShadow: '0px 8px 16px 0px #7B7B7B' }}>
            <Grid sx={{ display: 'flex', alignItems: 'center', padding: '10px 20px', justifyContent: 'space-between' }}>
              <Typography style={{ color: '#000', fontFamily: 'roboto', fontSize: '20px', fontWeight: 500, lineHeight: '26px' }}>New Leads</Typography>
              <HighlightOffOutlinedIcon onClick={() => this.setState({ add: false })} style={{ color: '#7B7B7B', height: '24px', width: '24px' }} />
            </Grid>
            <Grid style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginTop: '10px' }}>
              <Grid style={{ display: 'flex', gap: '35px' }}>
                <TextField placeholder='Name' style={{ width: '17vw', marginLeft: '22px' }} id="standard-basic" label="Name" variant="standard" />
                <TextField placeholder='Email' style={{ width: '17vw' }} id="standard-basic" label="Email" variant="standard" />
              </Grid>
              <Grid style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
                <TextField placeholder='Phone Number' sx={{ width: '17vw', marginLeft: '22px' }} id="standard-basic" label="Phone Number" variant="standard" />
                <FormControl variant="standard" sx={{ minWidth: '17vw', maxWidth: '18vw' }}>
                  <InputLabel id="demo-simple-select-standard-label">Source</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={this.state.age}
                    onChange={this.handleChanges}
                    label="Source"
                    placeholder='Source'
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid style={{ marginLeft: '22px' }}>
                <FormControl variant="standard" sx={{ minWidth: '36.3vw', maxWidth: '36.3vw' }}>
                  <InputLabel id="demo-simple-select-standard-label">Product</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={this.state.age}
                    placeholder='Product'
                    onChange={this.handleChange}
                    label="Product"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid>
                <Button onClick={() => this.setState({ add: false })} style={{ float: 'right', padding: '7px 30px', marginRight: '22px' }} variant="contained">SAVE</Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>

        <Dialog open={this.state.deleteleadadmin}>
                    <Grid style={{ height: "210px", width: "300px" }}>

                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, }}>
                            {/* <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Delete</Typography> */}
                            <CloseOutlinedIcon
                                onClick={() => { this.setState({ deleteleadadmin: false }); }}
                                style={{ fontSize: 20, color: "#000", cursor: "pointer",marginLeft:"250px" ,marginTop: "3%",}} />
                        </Grid>
                        {/* <Divider style={{ height: "1px", color: "#000" }} /> */}

                        <Typography style={{ textAlign: "center", marginTop: "5%", color: "#000",fontWeight:600 }}>Are you sure you want to delete ?</Typography>

                        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "10%", gap: "10px" }}>
                            <Button
                                onClick={() => { this.setState({ deleteleadadmin: false }); }}
                                variant='outlined' style={{ borderColor: "gray", color: "gray" }}>Yes</Button>
                            <Button
                                onClick={() => { this.setState({ deleteleadadmin: false }); }}
                                variant='contained' style={{ backgroundColor: "gray", color: "#fff", marginRight: "4%" }}>No</Button>
                        </Grid>


                    </Grid>
                </Dialog>
      </Grid>
    )
  }
}
