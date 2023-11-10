import { a, Typography } from '@mui/material';
import React, { Component } from 'react';
import { Box, Grid } from '@mui/material';
import Whatsapp from "../../../image/whatsapp (2).png";
import Sms from "../../../image/sms.png";
import Facebook from "../../../image/facebook.png";
import Razorpay from "../../../image/razorpay.png";
import Paypal from "../../../image/paypal.png";
import Calender from "../../../image/calender.png";
import GoogleDrive from "../../../image/google-drive.png";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import SettingDrawer2 from "../../../../pages/settings/Admin/Components/SettingDrawer2";


const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));


class Managerintegration extends Component {
    render() {
        return (
            <div>
                <Grid style={{ marginTop: "10%",  display: "flex", flexDirection: "row", gap: 30 }}>
          <Grid>
                    <SettingDrawer2 />
                </Grid>
        <Grid>
        <Typography style={{ fontSize: "24px", fontWeight: "500", marginBottom: "3%" }}>Integrations</Typography>
        <Grid style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
          <Grid style={{ width: "250px", boxShadow: "0px 0px 7px 0px #00000040", padding: "14px", borderRadius: "6px" }}>
            <a style={{ textDecoration: "none" }} href="/ManagerintegrationDetail">
              <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "12px" }}>
                <img src={Whatsapp} style={{ height: "40px" }} />
                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
              </Box>
            </a>
            <a style={{ textDecoration: "none",cursor:"pointer" }} href="/ManagerintegrationDetail">
              <Box>
                <Typography style={{ fontSize: "16px", fontWeight: "600", color: "#000", marginBottom: "2%" }}>WhatsApp</Typography>
                <Typography style={{ fontSize: "14px", fontWeight: "400", color: "#666" }}>Lorem ipsum dolor sit amet. Cum perferendis voluptas ex </Typography>
              </Box>
            </a>

          </Grid>


          <Grid style={{ width: "250px", boxShadow: "0px 0px 7px 0px #00000040", padding: "14px", borderRadius: "6px" }}>
            <a style={{ textDecoration: "none" }} href="/ManagerintegrationDetail">
              <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "12px" }}>
                <img src={Sms} />
                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
              </Box>
            </a>
            <a style={{ textDecoration: "none" }} href="/ManagerIntegrationDetails">
              <Box>
                <Typography style={{ fontSize: "16px", fontWeight: "600", color: "#000", marginBottom: "2%" }}>SMS</Typography>
                <Typography style={{ fontSize: "14px", fontWeight: "400", color: "#666" }}>Lorem ipsum dolor sit amet. Cum perferendis voluptas ex </Typography>
              </Box>
            </a>
          </Grid>
          <Grid style={{ width: "250px", boxShadow: "0px 0px 7px 0px #00000040", padding: "14px", borderRadius: "6px" }}>
            <a style={{ textDecoration: "none" }} href="/ManagerintegrationDetail">
              <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "12px" }}>
                <img src={Facebook} />
                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
              </Box>
            </a>
            <a style={{ textDecoration: "none" }} href="/ManagerintegrationDetail">
              <Box>
                <Typography style={{ fontSize: "16px", fontWeight: "600", color: "#000", marginBottom: "2%" }}>Facebook</Typography>
                <Typography style={{ fontSize: "14px", fontWeight: "400", color: "#666" }}>Lorem ipsum dolor sit amet. Cum perferendis voluptas ex </Typography>
              </Box>
            </a>

          </Grid>
          <Grid style={{ width: "250px", boxShadow: "0px 0px 7px 0px #00000040", padding: "14px", borderRadius: "6px" }}>
            <a style={{ textDecoration: "none" }} href="/ManagerintegrationDetail">
              <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "12px" }}>
                <img src={Paypal} />
                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
              </Box>
            </a>
            <a style={{ textDecoration: "none" }} href="/ManagerintegrationDetail">
              <Box>
                <Typography style={{ fontSize: "16px", fontWeight: "600", color: "#000", marginBottom: "2%" }}>Paypal</Typography>
                <Typography style={{ fontSize: "14px", fontWeight: "400", color: "#666" }}>Lorem ipsum dolor sit amet. Cum perferendis voluptas ex </Typography>
              </Box>
            </a>

          </Grid>
          <Grid style={{ width: "250px", boxShadow: "0px 0px 7px 0px #00000040", padding: "14px", borderRadius: "6px" }}>
            <a style={{ textDecoration: "none" }} href="/ManagerintegrationDetail">
              <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "12px" }}>

                <img src={Razorpay} />
                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
              </Box>
            </a>
            <a style={{ textDecoration: "none" }} href="/ManagerintegrationDetail">
              <Box>
                <Typography style={{ fontSize: "16px", fontWeight: "600", color: "#000", marginBottom: "2%" }}>Razorpay</Typography>
                <Typography style={{ fontSize: "14px", fontWeight: "400", color: "#666" }}>Lorem ipsum dolor sit amet. Cum perferendis voluptas ex </Typography>
              </Box>
            </a>

          </Grid>
          <Grid style={{ width: "250px", boxShadow: "0px 0px 7px 0px #00000040", padding: "14px", borderRadius: "6px" }}>
            <a style={{ textDecoration: "none" }} href="/ManagerintegrationDetail">
              <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "12px" }}>
                <img src={GoogleDrive} />
                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
              </Box>
            </a>
            <a style={{ textDecoration: "none" }} href="/ManagerintegrationDetail">
              <Box>
                <Typography style={{ fontSize: "16px", fontWeight: "600", color: "#000", marginBottom: "2%" }}>Google Drive</Typography>
                <Typography style={{ fontSize: "14px", fontWeight: "400", color: "#666" }}>Lorem ipsum dolor sit amet. Cum perferendis voluptas ex </Typography>
              </Box>
            </a>

          </Grid>
          <Grid style={{ width: "250px", boxShadow: "0px 0px 7px 0px #00000040", padding: "14px", borderRadius: "6px" }}>
            <a style={{ textDecoration: "none" }} href="/ManagerintegrationDetail">
              <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "12px" }}>
                <img src={Calender} />
                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
              </Box>
            </a>
            <a style={{ textDecoration: "none" }} href="/ManagerintegrationDetail">
              <Box>
                <Typography style={{ fontSize: "16px", fontWeight: "600", color: "#000", marginBottom: "2%" }}>Google Calender</Typography>
                <Typography style={{ fontSize: "14px", fontWeight: "400", color: "#666" }}>Lorem ipsum dolor sit amet. Cum perferendis voluptas ex </Typography>
              </Box>

            </a>

          </Grid>
        </Grid>
        </Grid>
      </Grid>
            </div>
        );
    }
}

export default Managerintegration;