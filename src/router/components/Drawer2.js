import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
// import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Profilepic from "../../pages/image/profilepic.png";
import Logout from '../../router/containers/Lg_Cont';
import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";
import LG_Cont from "../containers/Lg_Cont";
import "../styles/drawer.css";

import noti from "../../pages/image/notification.png";

import support from "../../pages/image/support.png";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { InlineIcon } from '@iconify/react';
import {
  all_admin_option,
  all_manager_option,
  all_executive_option,


} from "../constant";
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, Button, Grid, Tooltip, IconButton, Menu, MenuItem, TextField, Dialog, Paper, } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import "../../router/components/drawer.css";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Crmlogo from "../../pages/image/crmlogo.png";
import Proflogo from "../../pages/image/proflogo.png"
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { styled, alpha } from "@mui/material/styles";
import { useLocation } from 'react-router-dom'
import switchimg from "../../pages/image/switch.png";
import logo from "../../assets/img/email1.svg"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const drawerWidth = 200;
const drawerColor = "#EBF0FF";
const settings = ['Profile', 'Account'];

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: drawerColor,

  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',

});

const closedMixin = (theme) => ({
  backgroundColor: drawerColor,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 25px)`,
  },
});




const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  // width: `calc(100% - 65px)`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    // padding: '5px',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));


export default function MiniDrawer(props) {
  // console.log("rasmiranjan", props.login.org.org_name)
  const classes = useTheme();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedLine, setSelectedLine] = React.useState(0);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [open4, setOpen4] = React.useState(true);
  const [expandopen, setExpand] = React.useState("");
  const [openValue, setValue] = React.useState(true);
  const [countexp, setExp] = React.useState(0);
  const [notimodal, setnotimodal] = React.useState(false);
  const [supportmodal, setsupportmodal] = React.useState(false);

  const location = useLocation();



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleLineSelect = (lineId) => {
    setSelectedLine(lineId);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };

  const setIndex = (bkb, index) => {
    if (bkb > 0 && expandopen === index) {
      setExpand("")
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open5 = Boolean(anchorEl);
  const handleClick5 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose5 = () => {
    setAnchorEl(null);
  };
  const [anchorE2, setAnchorE2] = React.useState(null);
  const open6 = Boolean(anchorE2);
  const handleClick6 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose6 = () => {
    setAnchorE2(null);
  };

  function sideBar(type, open) {
    var side_top =
      <div>
        {openValue ?

          <div>
            <div>
              <Button
                onClick={() => {
                  setValue(!openValue)
                  // console.log(index)
                }}
              >
                <KeyboardDoubleArrowRightIcon style={{ marginLeft: "200px", color: "black" }} />
              </Button>
            </div>
            <center>
              <Avatar alt={localStorage.getItem("name")} src={localStorage.getItem("profile_img")} className="drawer_img">
                {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}
              </Avatar>
            </center>
            <center>
              <Typography variant="subtitle1" className="profile-name" color="secondary" style={{ marginBottom: "10px", marginTop: "5px" }}>
                {localStorage.getItem("name")}
              </Typography>

            </center>
          </div>
          :
          <div>
            <div>
              <Button
                onClick={() => {
                  setValue(!openValue)
                  setOpen(!open)
                  // console.log(index)
                }}
              >
                <KeyboardDoubleArrowRightIcon style={{ color: "black", marginRight: "-70px" }} />
              </Button>
            </div>
            <center>
              {/* <img src={Proflogo}/> */}
              <Avatar alt={localStorage.getItem("name")} src={localStorage.getItem("profile_img")} className="drawer_img_closed" style={{ position: "relative", height: "50px", width: "50px", marginTop: "10px", marginBottom: "10px" }} >
                {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}
              </Avatar>
            </center>
          </div>
        }
      </div>;

    if (type === "A") {
      return (
        <div style={{ marginTop: 1 }}>
          {all_admin_option.map((option) => (
            location.pathname === option.link ?
              <center style={{ background: "linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,0,0,0))", opacity: "0.9" }}>
                <Link key={option.link} to={option.link} style={{ textDecoration: "none", }}   >
                  <ListItem style={{ color: "white" }} button key={option.name} className="drawer_text">
                    <ListItemIcon ><Icon className="drawer_icon">{option.icon}</Icon></ListItemIcon>
                    <span style={{ color: "white" }} >{option.name}</span>
                  </ListItem>
                </Link>
              </center>
              :
              <center>
                <Link key={option.link} to={option.link} style={{ textDecoration: "none", }}   >
                  <ListItem style={{ color: "white" }} button key={option.name} className="drawer_text">

                    <ListItemIcon ><Icon className="drawer_icon">{option.icon}</Icon></ListItemIcon>

                    <span style={{ color: "white" }} >{option.name}</span>
                  </ListItem>
                </Link>
              </center>
          ))}
        </div>
      );
    }

    else if (type === "M") {
      return (
        <div style={{ marginTop: 1 }}>
          {all_manager_option.map((option) => (
            location.pathname === option.link ?
              <center style={{ background: "linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,0,0,0))", opacity: "0.9" }}>
                <Link key={option.link} to={option.link} style={{ textDecoration: "none", }}   >
                  <ListItem style={{ color: "white" }} button key={option.name} className="drawer_text">

                    <ListItemIcon ><Icon className="drawer_icon">{option.icon}</Icon></ListItemIcon>

                    <span style={{ color: "white" }} >{option.name}</span>
                  </ListItem>
                </Link>
              </center>
              :
              <center>
                <Link key={option.link} to={option.link} style={{ textDecoration: "none", }}   >
                  <ListItem style={{ color: "white", }} button key={option.name} className="drawer_text">

                    <ListItemIcon ><Icon className="drawer_icon">{option.icon}</Icon></ListItemIcon>

                    <span style={{ color: "white" }} >{option.name}</span>
                  </ListItem>
                </Link>
              </center>
          ))}
        </div>
      );
    }

    else if (type === "E") {
      return (
        <div style={{ marginTop: 1 }}>
          {all_executive_option.map((option) => (
            location.pathname === option.link ?
              <center style={{ background: "linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,0,0,0))", opacity: "0.9" }}>
                <Link key={option.link} to={option.link} style={{ textDecoration: "none", }}   >
                  <ListItem style={{ color: "white" }} button key={option.name} className="drawer_text">

                    <ListItemIcon ><Icon className="drawer_icon">{option.icon}</Icon></ListItemIcon>

                    <span style={{ color: "white" }} >{option.name}</span>
                  </ListItem>
                </Link>
              </center>
              :
              <center>
                <Link key={option.link} to={option.link} style={{ textDecoration: "none", }}   >
                  <ListItem style={{ color: "white", }} button key={option.name} className="drawer_text">

                    <ListItemIcon ><Icon className="drawer_icon">{option.icon}</Icon></ListItemIcon>

                    <span style={{ color: "white" }} >{option.name}</span>
                  </ListItem>
                </Link>
              </center>
          ))}
        </div>
      );
    }


  }

  return (
    <Box >
      <CssBaseline />
      {/* <div> */}
      <AppBar position="fixed" style={{ background: "rgba(215, 215, 215x)", width: "100%", zIndex: 1 }}>
        <Toolbar style={{}}>
          <div style={{ flexGrow: 1 }} />

          <Link style={{ marginRight: 10 }}>

            <IconButton>
              <img src={noti} onClick={() => setnotimodal(true)} style={{}} />

              <img src={switchimg} style={{ marginLeft: "30px" }} />
              <img src={support} onClick={() => setsupportmodal(true)} style={{ marginLeft: "30px" }} />
            </IconButton>



          </Link>

          <Box >
            <Tooltip title="Open Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Hello" src=''/> */}
                <img src={Crmlogo} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '35px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

              <MenuItem onClick={handleCloseUserMenu} style={{ flexDirection: "column" }}>

                <Logout />
              </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>






        </Toolbar>
      </AppBar>






      <Drawer variant="permanent" open={true} >
        <Grid style={{ backgroundColor: '#414141', height: '100%', flexDirection: 'column', justifyContent: 'space-around', display: 'flex', alignItems: 'center' }}>


          {/* profile here */}
          <Grid style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", color: "white" }}>
            <Box style={{  }}>
              {/* <img src={Profilepic} style={{ height: "100%", width: "100%" }} /> */}

              <center>
              {props.type === "A" ?
               <Link to={"/Profile"}>
                <Avatar
                  
                  style={{ marginTop: "14px", marginLeft: 0, width: 85, height: 85, marginTop: "5%" }} >
                  {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}

                 


                </Avatar> 
                </Link>
                :

                (props.type === "M" ? 
                <Link to={"/ManagerProfile"}>
                <Avatar
                  
                  style={{ marginTop: "14px", marginLeft: 0, width: 85, height: 85, marginTop: "5%" }} >
                  {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}

                  


                </Avatar>
                </Link>
                  :
                  <Link to={"//Executiveprofile"}>
                    <Avatar

                      
                      style={{ marginTop: "14px", marginLeft: 0, width: 85, height: 85, marginTop: "5%" }} >
                      {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}

                     


                    </Avatar></Link>)
              }
            


            </center>


            </Box>
            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "7px" }}>

              <Typography style={{ fontWeight: 500, fontSize: "20px" }}>Denixzao Kornal</Typography>

              {/* portal name changes here  */}

              <Typography style={{ fontWeight: 500, fontSize: "24px" }}>{props.name}</Typography>
              {props.type == "A" ? "Admin" : (props.type == "M" ? "Manager" : "Executives")}

            </Box>
          </Grid>


          {/* options here */}
          <List>
            {sideBar(props.type, open)}
          </List>

          {/* logout option here */}
          <center>
            <LG_Cont />
          </center>
          <center ></center>
        </Grid>
      </Drawer>



      <Dialog open={supportmodal}  >
        <Box style={{ padding: "1em", width: "600px", backgroundColor: "white", "display": "flex", "flexDirection": "column", "alignItems": "flex-end" }}>

          <CloseOutlinedIcon
            style={{
              cursor: "pointer"
            }}
            onClick={() => {
           setsupportmodal(false) 

            
            }}

            className="eventcross-icon"

          />

          <Box style={{ "flexDirection": "column", "display": "flex", "alignItems": "center", width: "100%" }}>
            <>

              <img src={logo} height={40} width={40} />

            </>
            <Typography variant="h6" component="h2">
              Our Agents will reach you back within 24hrs
            </Typography>
          </Box>


          <Box style={{
            display: "flex",
            padding: "36px",
            flexDirection: "column",
            gap: "23px",
            width: "100%"

          }}>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Phone no -" variant="outlined" />

            <Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Book your slot</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value="hello"
                  label="Book your slot"
                // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField id="outlined-basic" label="Description -" variant="outlined" />
          </Box>

          <Button variant="contained">Submit</Button>
        </Box>
      </Dialog>


      <Dialog open={notimodal}>
        <Box style={{ padding: "1em", width: "600px", backgroundColor: "white", "display": "flex", "flexDirection": "column", "alignItems": "flex-end" }}>
          <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10,width:"100%"}}>
            <Typography style={{ fontSize: "20px", fontWeight: "600" }}>Notification</Typography>
            <CloseOutlinedIcon
                          onClick={() =>  setnotimodal(false) }

              style={{ fontSize: 20, color: "#000", cursor: "pointer" }} />
          </Grid>
          <Paper className='srch'
            component="form"
            style={{ display: "flex", marginLeft: "auto", width: "100%", height: "43px", marginTop: "6%", backgroundColor: "rgba(121, 0, 255, 0.08)", boxShadow: "none" }}
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
              placeholder="Search here"
              inputProps={{ "aria-label": "Search here" }}
            />
         </Paper>
         {
[1,2,3,4,5,6].map((i)=>(
  <>  <Box key={i} style={{width:"100%",padding:"10px",display:"flex",flexDirection:"row",justifyContent:"space-between",borderBottom:".5px solid gray",marginTop:"10px"}}>
  <div style={{display:"flex",flexDirection:"row",gap:"20px",width:"100%"}}>
     <Typography style={{"color":"var(--primary-colour-g-1, #3D3B3B)","textAlign":"center","fontFamily":"Roboto","fontSize":"16px","fontStyle":"normal"}}>Sky Dey</Typography>
  <Typography style={{"color":"var(--primary-colour-g-1, #3D3B3B)","textAlign":"center","fontFamily":"Roboto","fontSize":"16px","fontStyle":"normal"}}>Converted By</Typography>
  <Typography style={{"color":"var(--primary-colour-g-1, #3D3B3B)","textAlign":"center","fontFamily":"Lato","fontSize":"16px","fontStyle":"normal","fontWeight":"400"}}>Manish Kathura</Typography>
  <Typography style={{"color":"var(--primary-colour-g-1, #3D3B3B)","textAlign":"center","fontFamily":"Lato","fontSize":"16px","fontStyle":"normal","fontWeight":"400"}}>20min ago</Typography>

  </div>
  <MoreVertIcon/>
</Box>
  </>

))


}



        </Box>
      </Dialog>

    </Box>
  );
}
