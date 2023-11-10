import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import 'react-phone-input-2/lib/style.css'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LoaderCon from "../../common/loader/containers/loader_cont";
import validator from 'validator';

export default class organization extends Component {


    constructor(props) {
        super(props);
        this.state = {
            tab1: false,
            tab2: false,
            type: "Organization ",
            logo: "",
            gstin_no: "",
            org_name: "",
            last_name: "",
            first_name: "",
            email: "",
            value: '1',
            isEmail: false,
            dis: true,
        };
    }
    validateEmail = () => {
        const { email } = this.state;
        const isValid = validator.isEmail(email);
        this.setState({ isEmail: isValid });
        console.log(this.state.isEmail)
    };
    render() {

        const { value }
            = this.state
        console.log("this.props.login.email", this.props.login.email)

        return (

            <div>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs>
                        <TabList style={{ backgroundColor: '#1F2535', width: "270px", marginLeft: "auto", marginRight: "auto" }}>
                            <Tab><Button onClick={() => {
                                this.setState({
                                    type: "Organization",
                                })
                            }} style={{ color: "black" }}>Organization</Button></Tab>
                            <Tab><Button onClick={() => {
                                this.setState({
                                    type: "Entrepreneur",
                                })
                            }} style={{ color: "black" }}>Entrepreneur</Button></Tab>
                        </TabList>

                        <TabPanel>
                            <Box style={{ display: "flex" }}>
                                <Box>
                                    <img
                                        src=''
                                        alt="logo_img"
                                        style={{ height: 400, marginLeft: "55%", marginTop: "100px", width: 400 }}
                                    />


                                </Box>

                                <Card style={{ marginLeft: "auto", marginRight: "auto", width: "500px", marginTop: "20px", height: "520px", background: "#F9F9F9", boxShadow: "2px 2px 15px rgba(0, 0, 0, 0.2)" }}>
                                    <CardContent>

                                        <Avatar src={this.state.logo !== "" ? URL.createObjectURL(this.state.logo) : this.state.logo} style={{ height: "5vw", width: "5vw", marginLeft: "auto", marginRight: "auto" }}>
                                            <input style={{ display: "none" }} type="file" id="file" onChange={(e) => { this.setState({ logo: e.target.files[0] }) }} />
                                            <label htmlFor="file"><CameraAltIcon style={{ marginTop: "25%" }} /></label>
                                        </Avatar>

                                        {this.props.login.mobile !== "" && this.props.login.mobile !== undefined && this.props.login.mobile !== null ? <Typography style={{ fontSize: "17px", marginTop: "2%", textAlign: "center", fontWeight: 500, }}>
                                            Namaskar {this.props.login.mobile}
                                        </Typography> : <Typography style={{ fontSize: "17px", marginTop: "2%", textAlign: "center", fontWeight: 500, }}>
                                            Namaskar {this.props.login.email}
                                        </Typography>}

                                        {/* {this.props.login.email!==""&&this.props.login.email!==undefined&&this.props.login.email!==null&&<Typography style={{ fontSize: "17px", marginTop: "2%", textAlign: "center", fontWeight: 500, }}>
                                            Namaskar {this.props.login.email}
                                        </Typography>} */}
                                        <div>
                                            <TextField style={{ marginTop: "2%", marginLeft: "10%", width: "80%", borderRadius: "10px", backgroundColor: "rgba(206, 206, 206, 0.67)" }} id="outlined-basic" variant="outlined" type="text"
                                                placeholder="Organization Name"
                                                onChange={(e) => this.setState({ org_name: e.target.value })}
                                            >

                                            </TextField>
                                            <TextField style={{ marginTop: "2%", marginLeft: "10%", width: "80%", borderRadius: "10px", backgroundColor: "rgba(206, 206, 206, 0.67)" }} id="outlined-basic" variant="outlined" type="text"
                                                placeholder="First Name"
                                                onChange={(e) => {
                                                    this.setState({ first_name: e.target.value })
                                                    if (this.state.org_name === "") {
                                                        alert(" Organisation name must be filled.");
                                                    }
                                                }}
                                            >

                                            </TextField>
                                            <TextField style={{ marginTop: "2%", marginLeft: "10%", width: "80%", borderRadius: "10px", backgroundColor: "rgba(206, 206, 206, 0.67)" }} id="outlined-basic" variant="outlined" type="text"
                                                placeholder="Last Name"
                                                onChange={(e) => {
                                                    this.setState({ last_name: e.target.value })
                                                    if (this.state.first_name === "") {
                                                        alert(" First name must be filled.");
                                                    }
                                                }}
                                            >

                                            </TextField>
                                            <TextField style={{ marginTop: "2%", marginLeft: "10%", width: "80%", borderRadius: "10px", backgroundColor: "rgba(206, 206, 206, 0.67)" }} id="outlined-basic" variant="outlined" type="text"
                                                placeholder="Email id"
                                                onChange={(e) => {
                                                    this.setState({ email: e.target.value })
                                                    if (this.state.last_name === "") {
                                                        alert(" Last name must be filled.");
                                                    }
                                                }}
                                            >

                                            </TextField>

                                            <TextField style={{ marginTop: "2%", marginLeft: "10%", width: "80%", borderRadius: "10px", backgroundColor: "rgba(206, 206, 206, 0.67)" }} id="outlined-basic" variant="outlined" type="text"
                                                placeholder="GSTIN No"
                                                onChange={(e) => {
                                                    this.setState({ gstin_no: e.target.value })
                                                }}
                                            >

                                            </TextField>
                                            <Link style={{ textDecoration: "none" }} to="/"
                                            >
                                                <Button
                                                    disabled={this.state.first_name === "" || this.state.last_name === "" || this.state.org_name === ""}
                                                    variant="contained"
                                                    style={{ backgroundColor: '#1F2535', width: '150px', color: 'white', marginLeft: "32%", marginTop: "4%" }}
                                                    onClick={() => {
                                                        console.log(this.state.dis)
                                                        this.props.picCreateOrg(this.state.logo, this.props.login.mobile, this.state.org_name, this.state.first_name, this.state.last_name, this.state.email, this.state.gstin_no, "Organization");

                                                    }}
                                                >
                                                    SUBMIT
                                                </Button>
                                            </Link>



                                        </div>


                                    </CardContent>

                                </Card>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box style={{ display: "flex" }}>
                                <Box>
                                    <img
                                        src=''
                                        alt="logo_img"
                                        style={{ height: 400, marginLeft: "55%", marginTop: "100px", width: 400 }}
                                    />

                                </Box>

                                <Card style={{ marginLeft: "auto", marginRight: "auto", width: "500px", height: "500px", marginTop: "20px", background: "#F9F9F9", boxShadow: "2px 2px 15px rgba(0, 0, 0, 0.2)" }}>
                                    <CardContent>

                                        <Avatar src={this.state.logo !== "" ? URL.createObjectURL(this.state.logo) : this.state.logo} style={{ height: "5vw", width: "5vw", marginLeft: "auto", marginRight: "auto" }}>
                                            <input style={{ display: "none" }} type="file" id="file" onChange={(e) => { this.setState({ logo: e.target.files[0] }) }} />
                                            <label htmlFor="file"><CameraAltIcon style={{ marginTop: "25%" }} /></label>
                                        </Avatar>
                                        <Typography style={{ fontSize: "17px", marginTop: "2%", textAlign: "center", fontWeight: 500, }}>
                                            Hello +{this.props.login.mobile}
                                        </Typography>
                                        <div>
                                            <TextField style={{ marginTop: "2%", marginLeft: "10%", width: "80%", borderRadius: "10px", backgroundColor: "rgba(206, 206, 206, 0.67)" }} id="outlined-basic" variant="outlined" type="text"
                                                placeholder="Organization Name"
                                                onChange={(e) => this.setState({ org_name: e.target.value })}
                                            >

                                            </TextField>
                                            <TextField style={{ marginTop: "2%", marginLeft: "10%", width: "80%", borderRadius: "10px", backgroundColor: "rgba(206, 206, 206, 0.67)" }} id="outlined-basic" variant="outlined" type="text"
                                                placeholder=" Name"
                                                onChange={(e) => this.setState({ first_name: e.target.value })}
                                            >

                                            </TextField>
                                            <TextField style={{ marginTop: "4%", marginLeft: "10%", width: "80%", borderRadius: "10px", backgroundColor: "rgba(206, 206, 206, 0.67)" }} id="outlined-basic" variant="outlined" type="text"
                                                placeholder="Last Name"
                                                onChange={(e) => this.setState({ last_name: e.target.value })}
                                            >

                                            </TextField>
                                            <TextField style={{ marginTop: "4%", marginLeft: "10%", width: "80%", borderRadius: "10px", backgroundColor: "rgba(206, 206, 206, 0.67)" }} id="outlined-basic" variant="outlined" type="text"
                                                placeholder="Email id"
                                                onChange={(e) => this.setState({ email: e.target.value })}
                                            >

                                            </TextField>

                                            <Link style={{ textDecoration: "none" }} to="/">
                                                <Button
                                                    variant="contained"
                                                    style={{ backgroundColor: '#1F2535', width: '150px', color: 'white', marginLeft: "32%", marginTop: "4%" }}
                                                    onClick={() => {
                                                        this.props.picCreateOrg(this.state.logo, this.props.login.mobile, this.state.org_name, this.state.first_name, this.state.last_name, this.state.email, this.state.gstin_no, "Entrepreneur");
                                                    }}
                                                >
                                                    SUBMIT
                                                </Button>
                                            </Link>


                                        </div>


                                    </CardContent>

                                </Card>
                            </Box>
                        </TabPanel>

                    </Tabs>
                </Box>
                <LoaderCon />

            </div>
        )
    }
}
