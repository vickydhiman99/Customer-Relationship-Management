import React, { Component } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import "./newlead.css"

// -------------------Mui icons-------------------
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
// -------------------Mui icons-------------------

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide the last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Category, Action) {
  return { Category, Action };
}

const rows = [
  createData('User Page', 100),
  createData('Admin Portal', 200),
  createData('Admin Portal', 200),
  createData('Admin Portal', 200),
  createData('Admin Portal', 200),
  createData('Admin Portal', 200),
];

export default class NewCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false,
      delet: false,
      edit: false,
      view: false,
    };
  }

  toggleDisplay = () => {
    this.setState({ display: !this.state.display });
  };

  render() {
    return (
      <Grid style={{ marginLeft: '30px', marginTop: '90px', marginRight: '20px' }}>
        <div>
          {
            this.state.display ? (
              <div className="main-modal">
                <Box sx={{ height: '225px', width: '300px', borderRadius: '4px', padding: '16px' }}>
                  <Grid style={{ display: 'flex', marginBottom: '15px', marginRight: '15px', marginLeft: '15px', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography style={{ color: '#000', fontWeight: '500', fontSize: '24px', }}>Add Category</Typography>
                    <Typography style={{ height: '24px', width: '24px', display: 'flex', color: '#7B7B7B' }}><HighlightOffRoundedIcon onClick={this.toggleDisplay} /></Typography>
                  </Grid>

                  <Grid style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                    <FormControl style={{ width: '225px' }} variant="standard" sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-helper-label">Add Category</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Source"
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
                  <Button onClick={this.toggleDisplay} variant="contained" style={{ float: 'center', marginTop: '15px', marginLeft: '90px', padding: '5px 30px', backgroundColor: '#AA3F1D' }}>Save</Button>
                </Box>
              </div>
            ) : null
          }
          {
            this.state.view ? (
              <div className="main-modal">
                <Box sx={{ height: '200px', width: '300px', borderRadius: '4px', padding: '16px' }}>
                  <Grid style={{ display: 'flex', marginBottom: '4px', marginRight: '10px', marginLeft: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography style={{ color: '#000', fontWeight: '500', fontSize: '24px', }}>View Category</Typography>
                    <Typography style={{ height: '24px', width: '24px', display: 'flex', color: '#7B7B7B' }}><HighlightOffRoundedIcon onClick={() => this.setState({ view: !this.state.view })} /></Typography>
                  </Grid>

                  <Grid style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                    <FormControl style={{ width: '250px' }} variant="standard" sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-helper-label">View Category</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Source"
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
                  <Button onClick={() => this.setState({ view: !this.state.view })} variant="contained" style={{ float: 'center', marginTop: '15px', marginLeft: '90px', padding: '5px 30px', backgroundColor: '#AA3F1D' }}>Okay</Button>
                </Box>
              </div>
            ) : null
          }
          {
            this.state.delet ? (
              <div className="main-modal-delet">
                <Box sx={{ height: '200px', width: '300px', borderRadius: '4px' }}>

                  <Grid style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px 10px 2px 10px', boxShadow: '0px 1px 0px 0px grey', marginBottom: '20px' }}>
                    <Typography style={{ color: '#000', fontWeight: '500', fontSize: '24px', lineHeight: '31.2px', fontFamily: 'roboto' }}>Delete</Typography>
                    <Typography style={{ height: '24px', width: '24px', display: 'flex', color: '#7B7B7B' }}><HighlightOffRoundedIcon onClick={() => this.setState({ delet: false })} /></Typography>
                  </Grid>

                  <Grid style={{ display: 'flex', gap: '15px', width: '237px' }}>
                    <Typography style={{ height: '30px', color: '#000', whiteSpace: 'nowrap', textAlign: 'center', marginLeft: '30px', wordSpacing: '-2px' }}>Are You Sure You Want To Delete</Typography>
                  </Grid>
                  <Grid style={{ display: 'flex', justifyContent: 'space-evenly', gap: '40px', marginTop: '35px' }}>
                    <Button onClick={() => this.setState({ delet: false })} variant="outlined" style={{ padding: '5px 30px' }}>No</Button>
                    <Button variant="contained" style={{ padding: '5px 30px', backgroundColor: '#AA3F1D' }}>Yes</Button>
                  </Grid>
                </Box>
              </div>
            ) : null
          }
          {
            this.state.edit ? (
              <div className="main-modal">
                <Box sx={{ height: '200px', width: '300px', borderRadius: '4px', padding: '16px' }}>
                  <Grid style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin:'0px 11px 0px 5px' }}>
                    <Typography style={{ color: '#000', fontWeight: '500', fontSize: '24px', lineHeight: '31.2px', fontFamily: 'roboto' }}>Edit Category</Typography>
                    <Typography style={{ height: '24px', width: '24px', display: 'flex', color: '#7B7B7B' }}><HighlightOffRoundedIcon onClick={() => this.setState({ edit: false })} /></Typography>
                  </Grid>

                  <Grid >
                    <FormControl style={{ width: '250px' }} variant="standard" sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-helper-label">Edit Category</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Source"
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
                  <Button onClick={() => this.setState({ edit: false })} variant="contained" style={{ float: 'center', marginTop: '25px', marginLeft: '75px', padding: '5px 30px', backgroundColor: '#AA3F1D' }}>Update</Button>
                </Box>
              </div>
            ) : null
          }
          <Grid maxWidth={1000}>
            <Grid style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0px' }}>
              <Typography variant="contained">Category</Typography>
              <Button onClick={() => this.setState({ display: true })} variant="contained">Add</Button>
            </Grid>

            <TableContainer component={Paper}>
              <Table sx={{ maxWidth: "100vw" }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Category</StyledTableCell>
                    <StyledTableCell align="right">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.Category}>
                      <StyledTableCell component="th" scope="row">
                        {row.Category}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <EditIcon className='icons' onClick={() => this.setState({ edit: true })} /> <VisibilityIcon onClick={() => this.setState({ view: true })} /> <DeleteIcon onClick={() => this.setState({ delet: true })} />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </div>
      </Grid>
    );
  }
}


