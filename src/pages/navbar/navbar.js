import React, { Component } from 'react';
import LOGO from "../../pages/image/TMS.svg";
import Profilimg from "../../pages/image/Prof.svg";
import Dashboradicon from "../../pages/image/element-2.svg";
import Settingicon from "../../pages/image/setting-2.svg";
import Charticon from "../../pages/image/chart.svg";
import Receipticon from "../../pages/image/receipt-2.svg";
import Usericon from "../../pages/image/profile-2user.svg";
import { Grid, Box } from '@mui/material';
import Style from "../../pages/navbar/navbar.css"

class navbar extends Component {
    render() {
        return (
            <div  style={{marginTop:"10%"}}>
                <Grid  style={{ background: "#005555", display: "flex", justifyContent: "space-evenly",alignItems:"center" }}>
                    <Box>
                        <img src={LOGO} />
                    </Box>
                    <Box>
                        <ul className='main-list'>
                            <li className='list-item'><span><img src={Dashboradicon} /></span>Dashboard</li>
                            <li className='list-item'><span><img src={Receipticon} /></span>Spaces</li>
                            <li className='list-item'><span><img src={Charticon} /></span>Analysis</li>
                            <li className='list-item'><span><img src={Usericon} /></span>Users</li>
                            <li className='list-item'><span><img src={Settingicon} /></span>Setting</li>
                        </ul>
                    </Box>
                    <Box>
                        <img src={Profilimg} />
                    </Box>
                </Grid>
            </div>
        );
    }
}

export default navbar;