import { Divider, Grid, Typography } from '@mui/material'
import React, { Component } from 'react';
import SettingDrawer2 from "../../../../pages/settings/Admin/Components/SettingDrawer2";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Instimg from "../../../../pages/image/instimg.png";
import Instimg2 from "../../../../pages/image/instimg2.png";
import Instimg3 from "../../../../pages/image/instimg3.png";
import Instimg4 from "../../../../pages/image/instimg4.png";
import Instimg5 from "../../../../pages/image/instimg5.png";




class ManagerintegrationDetail extends Component {
    render() {
        return (
            <Grid style={{ marginTop: "10%", display: "flex", flexDirection: "row", gap: 30 }}>

            <Grid>
                <SettingDrawer2 />
            </Grid>


            <Grid>
                <Grid style={{ display: "flex", flexDirection: "row",  alignItems: "center" }}>
                   <a href='Managerintegration' style={{textDecoration:"none" , cursor:"pointer",color:"black"}}>
                    <Typography style={{ fontSize: "15px", }}>integrations</Typography>
                    </a>
                    <ArrowForwardIosIcon style={{ fontSize: "15px", fontWeight: "500" }} />
                    <Typography style={{ fontSize: "17px", marginLeft: "1%", fontWeight: "500",whiteSpace:"nowrap" }}>Razor Pay</Typography>
                </Grid>

                <Typography style={{ fontSize: "19px",marginTop:"2%" ,  fontWeight: "500",whiteSpace:"nowrap" }}>Razor Pay</Typography>
                


                <Typography style={{ fontSize: "15px",marginTop:"4%" }}>Follow the steps given below to integrate Razorpay Payment Gateway with your CRM website.</Typography>
                <hr style={{color:"000",marginTop:"3%",}}/>

                <Grid style={{marginTop:"2%",marginLeft:"5%"}}>
                <Typography style={{ fontSize: "15px",marginTop:"1%" }}>Let's learn how to integrate Razorpay payment gateway with CRM.</Typography>
                <Typography style={{ fontSize: "15px",marginTop:"3%" }}>Razorpay integration with CRM requires:</Typography>
                <Typography style={{ fontSize: "15px",marginTop:"1%" }}> Step 1 – Generate Razorpay API Key and Secret Key</Typography>
                <Typography style={{ fontSize: "15px",marginTop:"1%" }}> Step 2 - Set up Razorpay payment gateway with CRM</Typography>

                <Typography style={{ fontSize: "18px",marginTop:"3%",fontWeight:"500" }}> Step 1 – Generate Razorpay API Key and Secret Key</Typography>
                <Typography style={{ fontSize: "15px",marginTop:"2%" }}>These steps require you to navigate between the CRM screen and the Razorpay app.</Typography>
                <Typography style={{ fontSize: "15px",marginTop:"4%" }}>Follow these steps to generate the Razorpay API key ID and secret key:</Typography>

                   <Grid style={{marginLeft:"6%"}}>
                   <Typography style={{ fontSize: "15px",marginTop:"2%" }}>1. Sign in to your Razorpay account.</Typography>
                   <Typography style={{ fontSize: "15px",marginTop:"1%" }}>2. On the left side of the home screen, click Settings.</Typography>

                   </Grid>

                   <img style={{width:"90%",marginTop:"2%"}} src={Instimg}/>
                   <Typography style={{ fontSize: "15px",marginTop:"2%" }}>3. Click API Keys.</Typography>
                   <Typography style={{ fontSize: "15px",marginTop:"1%" }}>4. Under Actions, click the General Button. You will be redirected to the New Key window, which will show the API Key ID and Secret Key.</Typography>
                   <img style={{width:"90%",marginTop:"2%"}} src={Instimg2}/>
                   <img style={{width:"90%",marginTop:"2%"}} src={Instimg3}/>
                   <Typography style={{ fontSize: "15px",marginTop:"2%" }}>5. Copy the API ID key and secret key. (For a note or document).</Typography>
                   <Typography style={{ fontSize: "15px",marginTop:"1%" }}>6. Click OK.</Typography>

                   <img style={{width:"90%",marginTop:"2%"}} src={Instimg4}/>
                   <img style={{width:"90%",marginTop:"2%"}} src={Instimg5}/>

                </Grid>

            </Grid>

        </Grid>
        );
    }
}

export default ManagerintegrationDetail;