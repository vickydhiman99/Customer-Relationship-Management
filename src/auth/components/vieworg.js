import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import 'react-tabs/style/react-tabs.css';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LoaderCon from "../../common/loader/containers/loader_cont";

export default class vieworg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: "",
        };
    }

    componentDidMount() {
        this.props.viewAllOrgbyMobile(this.props.login.mobile);
    }
    render() {
        const { login } = this.props;
        return (
            <div className='bg'>

                <Box style={{ display: "flex" }}>

                    <Card style={{ marginLeft: "auto", marginRight: "auto", width: "400px", marginTop: "50px", height: "400px", boxShadow: "2px 2px 15px rgba(0, 0, 0, 0.2)", borderRadius: "10px"}}>
                        <CardContent>
                            <center>
                                <img
                                    src=''
                                    alt="logo_img"
                                    style={{ height: 100, width: 100 }}
                                />
                            </center>

                            <Box style={{ display: "flex", marginTop: "5px", marginLeft: "15%", border: "1px solid #161514", height: "5vh", width: "70%", borderRadius: "15px" }}>
                                
                                <Avatar sx={{ width: 24, height: 24, marginLeft: "5%", marginTop: "3%" }} />
                                <Typography style={{ display: "flex", fontSize: "15px", fontWeight: 400, marginLeft: "3%", marginTop: "3%" }}>
                                    {login.mobile ? login.mobile : login.email}
                                </Typography>

                            </Box>
                            <Typography style={{ fontSize: "16px", marginTop: "8%", fontWeight: 600, marginLeft: "22%" }}>
                                Choose Organization
                            </Typography>
                            <Box>
                                <div style={{ boxShadow: "none", height:'160px', overflowY: "scroll", }}>

                                    {/* {login.organizations.map((e) => ( */}
                                        <Box style={{ display: "flex", marginTop: "5%", height: "5vh", width: "80%", marginLeft: "11%" }}>
                                            <Avatar 
                                            // src={e.organisation_info.logo}
                                             sx={{ width: 24, height: 24, marginLeft: "9%", marginTop: "2%" }} />
                                            <Link style={{ textDecoration: "none" }} to="/">
                                                <Button onClick={() => { 
                                                    // this.props.viewUserOrgDetails(e.user_id, e.org_id) 
                                                }}
                                                    style={{ color: "black", display: "flex", fontSize: "15px", fontWeight: 400 }}>
                                                    {/* {e.organisation_info.org_name} */}
                                                </Button>
                                            </Link>
                                        </Box>
                                    {/* ))} */}
                                    <Box style={{ display: "flex", marginTop: "5%", marginLeft: "23%", }}>

                                        <Link style={{ textDecoration: "none" }} to="/organization">
                                            <Button startIcon={<AddIcon style={{ fontSize: "15px" }} />} style={{ color: "blue", display: "flex", fontSize: "13px", fontWeight: 400 }}>
                                                Create Organization
                                            </Button>
                                        </Link>
                                    </Box>
                                </div>
                            </Box>
                        </CardContent>

                    </Card>

                </Box>
                <LoaderCon />
            </div>

        )
    }
} 