import React, { Component } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import BusinessSetting from "../../../image/business-setting.svg";
import Payment from "../../../image/payment.svg";
import Integration from "../../../image/integration.svg";
import Template from "../../../image/template.svg";
import Notification from "../../../image/notification-bing.svg";
import Security from "../../../image/security-safe.svg";



class Managersetting extends Component {
    render() {
        return (
            <div>
                <Grid style={{ marginTop: "10%" }}>

                    <Grid style={{ width: "60%" }}>

                        <Grid style={{ display: "flex", gap: "37px", marginTop: "4%", justifyContent: "space-around" }}>
                            <a href="/Managerintegration" style={{ textDecoration: "none" }}>
                                <Box style={{ textAlign: "center" }}>
                                    <img src={Integration} />
                                    <Typography
                                        style={{
                                            fontSize: " 20px",
                                            fontStyle: " normal",
                                            fontWeight: " 500",
                                            color: "#666"
                                        }}>
                                        Integration
                                    </Typography>
                                </Box>
                            </a>

                            <a href="/ManagerTemplate" style={{ textDecoration: "none" }}>
                                <Box style={{ textAlign: "center" }}>
                                    <img src={Template} />
                                    <Typography
                                        style={{
                                            fontSize: " 20px",
                                            fontStyle: " normal",
                                            fontWeight: " 500",
                                            color: "#666"
                                        }}>
                                        Template
                                    </Typography>
                                </Box>
                            </a>
                            <a href="/ManagerNotification " style={{ textDecoration: "none" }}>
                                <Box style={{ textAlign: "center" }}>
                                    <img src={Notification} />
                                    <Typography
                                        style={{
                                            fontSize: " 20px",
                                            fontStyle: " normal",
                                            fontWeight: " 500",
                                            color: "#666"
                                        }}>
                                        Notification
                                    </Typography>
                                </Box>
                            </a>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Managersetting;