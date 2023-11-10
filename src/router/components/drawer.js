import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";
import LG_Cont from "../containers/Lg_Cont";
import "../styles/drawer.css";
// import logo from "../../images/navbar/logo_Horizontal.jpg"
import {
  // all_admin_option,
  // // all_super_admin_option,
  // all_corporate_options,
  // all_tourism_options,
  all_customer_options
  // all_manager_options,

} from "../constant";
import { red } from '@mui/material/colors';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: 50,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
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
const useStyles = (theme) => ({
  root: {
    display: "flex",

  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // backgroundColor: "#FF7000"
    background: "#fadde1"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

    backgroundColor: "#11101d",

  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#11101d",


    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    // backgroundColor: '#FF7000',
    backgroundColor: "#11101d",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  iconStyle: {
    position: "relative",
    left: 8,
    top: 3,
    fontSize: 18,
    marginRight: 5,
    //   color:'red'
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  grow: {
    flexGrow: 1,
  },
  Icon: {
    //   color:"red",
    position: "relative",
    left: "10px"
  },

  ListItem: {
    border: "1px solid red",

    "&:hover": {
      borderRadius: "3px",
      backgroundColor: "#ed5066",
      // color:'red'
    }
  }



});


export default function MiniDrawer(props) {
  const classes = useTheme();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  function sideBar(type, open) {
    var side_top =
      <div>
        {/* {open ?
          <div style={{ backgroundColor:"#11101d", marginTop:-30 }}>
            <Avatar alt={localStorage.getItem("name")} src={localStorage.getItem("profile_img")} className="drawer_img" >
              {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}
            </Avatar>
            <Typography variant="subtitle1" className="profile-name" color="secondary">
              Hi! {localStorage.getItem("qubi7_name")}
            </Typography>
          </div>
          :
          <Avatar alt={localStorage.getItem("name")} src={localStorage.getItem("profile_img")} className="drawer_img_closed" style={{position:"relative",left:"15px"}} >
            {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}
          </Avatar>
        } */}
      </div>;
    // backgroundColor:'#FF7000'

    // if (type === "M") {
    //   return (
    //     <div style={{ marginTop: 10 }}>
    //       {side_top}
    //       {all_manager_options.map((option) => (
    //         <Link key={option.link} to={option.link} style={{ textDecoration: "none", color: "black" }}>
    //           <ListItem button key={option.name}>
    //             <ListItemIcon><Icon>{option.icon}</Icon></ListItemIcon>
    //             <ListItemText primary={option.name} />
    //           </ListItem>
    //         </Link>
    //       ))}
    //     </div>
    //   );
    if (type === "C") {
      return (
        <div style={{ marginTop: 10 }}>
          {side_top}
          {all_customer_options.map((option) => (
            <Link key={option.link} to={option.link} style={{ textDecoration: "none" }}>
              <ListItem button key={option.name} className="drawer_text" >

                <ListItemIcon ><Icon className="drawer_icon">{option.icon}</Icon></ListItemIcon>

                {option.name}
              </ListItem>
              {/* <Divider/> */}
            </Link>
          ))}
        </div>
      );
    }

  //   else if (type === "SA") {
  //     return (
  //       <div style={{ marginTop: 10 }}>
  //         {side_top}
  //         {all_corporate_options.map((option) => (
  //           // <Link key={option.link} to={option.link} style={{ textDecoration: "none", color: "#fff" }}>
  //           <Link exact activeClassName="active" key={option.link} to={option.link} style={{ textDecoration: "none", color: "#fff" }}>
  //             <ListItem button key={option.name} className="drawer_text">
  //               <ListItemIcon className="drawer_icon"><Icon className="drawer_icon">{option.icon}</Icon></ListItemIcon>
  //               <ListItemText className="listItemText" primary={option.name} />
  //             </ListItem>
  //           </Link>
  //           // </Link>
  //         ))}
  //       </div>
  //     );
  //   }
  //   else if (type === "T") {
  //     return (
  //       <div style={{ marginTop: 10 }}>
  //         {side_top}
  //         {all_tourism_options.map((option) => (
  //           // <Link key={option.link} to={option.link} style={{ textDecoration: "none", color: "#fff" }}>
  //           <Link exact activeClassName="active" key={option.link} to={option.link} style={{ textDecoration: "none", color: "#fff" }}>
  //             <ListItem button key={option.name} className="drawer_text">
  //               <ListItemIcon className="drawer_icon"><Icon className="drawer_icon">{option.icon}</Icon></ListItemIcon>
  //               <ListItemText className="listItemText" primary={option.name} />
  //             </ListItem>
  //           </Link>
  //           // </Link>
  //         ))}
  //       </div>
  //     );
  //   }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={true} style={{ backgroundColor: 'white' }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
         
          <div className={classes.sectionDesktop}>
            <LG_Cont />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={true} style={{ boxShadow: "inherit" }} className="left-bar">
        <DrawerHeader>
          <IconButton>
            {/* <img src={logo} alt="no_img" height="60" /> */}
            {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <List> */}
        <List >
          {sideBar(props.type, open)}
        </List>
        {/* </List> */}
      </Drawer>

    </Box>
  );
}
