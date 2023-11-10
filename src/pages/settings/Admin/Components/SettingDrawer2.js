import React, { Component } from 'react'
import { Box, Card } from '@mui/material';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
// import Time from "../../../assets/img/clock.svg";
import IconButton from "@mui/material/IconButton";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Crmm from "../../pages/image/crmm.png"
import { styled, alpha } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar'
import CategoryIcon from '@mui/icons-material/Category';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import BadgeIcon from '@mui/icons-material/Badge';
// import Accounts from '../../pages/image/accounts.png'
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Divider from '@mui/material/Divider';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddIcon from '@mui/icons-material/Add';
// import "../../../src/router/components/drawer3.css";
import ReportIcon from '@mui/icons-material/Report';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default class SettingDrawer2 extends Component {

    render() {


        return (


            <div style={{ marginTop: "10%" }}>
                <Card style={{ width: "220px",height:"auto", marginTop: "1%", marginLeft: "3%", borderRadius: "8px", marginBottom: "30px", boxShadow: "none", border: "1px solid #E0E0E0" }}>

                    <Paper
                        component="form"
                        style={{
                            display: "flex",
                            marginLeft: "3%",
                            marginTop: "5%", 
                            width: "200px",
                            height: "42px",
                            boxShadow: "none",
                            border: "1.5px solid var(--grey-colour-g-6, #B4B0B4)",
                        }}
                    >
                        <IconButton type="button" style={{ p: "15px" }} aria-label="search">
                            <SearchIcon style={{ fontSize: "25px" }} />
                        </IconButton>
                        <InputBase
                            style={{
                                ml: 5,
                                flex: 1,
                                fontSize: "19px",
                                fontFamily: "Montserrat",
                                color: "#706870",
                            }}
                            placeholder="Search "
                            inputProps={{ "aria-label": "Search " }}

                        />
                    </Paper>




                    <Card style={{ width: "200px", marginTop: "7%", marginLeft: "3%", borderRadius: "8px", marginBottom: "10px", boxShadow: "none", border: "1px solid #E0E0E0" }}>

                        




                       


                        <Link style={{ textDecoration: "none", }} to="/Managerintegration">
                            <Typography style={{ marginLeft: "50px", marginTop: "5px", fontSize: "16px", fontWeight: 500, color: "#666", fontFamily: "Lato" } }  className="drawer-active">

                                Integration
                            </Typography>
                        </Link>


                        <Link style={{ textDecoration: "none" }} to="/Managertemplate">
                            <Typography style={{ marginLeft: "50px", marginTop: "5px", fontSize: "16px", fontWeight: 500, color: "#666", fontFamily: "Lato" } } className="drawer-active">

                                Template
                            </Typography>
                        </Link>

                        <Link style={{ textDecoration: "none", }} to="/Managernotification">
                            <Typography style={{ marginLeft: "50px", marginTop: "5px", fontSize: "16px", fontWeight: 500, color: "#666", fontFamily: "Lato" } } className="drawer-active">
                                Notification
                            </Typography>
                        </Link>



                       

                    </Card>



                </Card>
            </div>











        )
    }
}