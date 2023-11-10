import React, { Component, ReactDOM } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import OtpInput from 'react-otp-input';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import LoaderCon from "../../common/loader/containers/loader_cont";
import TimerIcon from '@mui/icons-material/Timer';
import "../../auth/components/login.css";
export default class logina extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: "",
            time: {},
            seconds: 30
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }
    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }
    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.startTimer();
    }

    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds == 0) {
            clearInterval(this.timer);
        }
    }



    handleChange = (otp) => this.setState({ otp });
    render() {
        console.log(this.props.login.org_id);
        return (
          

                <div  style={{ display: "flex", flexDirection: "row" ,justifyContent:"space-evenly"}}>

                    <Box>
                        <img
                            src=''
                            alt="logo_img"
                            style={{ height: 450,  marginTop: "100px", width: 450 }}
                        />

                    </Box>
                    
                    <Card style={{width: "400px", marginTop: "180px", height: "300px", background:"rgba(235, 240, 255, 0.71)", boxShadow: "2px 2px 15px rgba(0, 0, 0, 0.2)"  }}>
                        <CardContent>

                         
                            <Typography style={{ fontSize: "20px", marginTop: "1%", textAlign: "center", fontWeight: 500, }}>
                                OTP Verification
                            </Typography>
                            <Typography style={{ fontSize: "15px", marginTop: "1%", textAlign: "center", fontWeight: 500, color: "#B3B3B3" }}>
                                Enter the OTP sent to +{this.props.login.otpmobile}
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Box >
                                <OtpInput
                                    inputStyle={{
                                        width: '2rem',
                                        height: '2rem',
                                        marginLeft: "18%",
                                        fontSize: '2rem',
                                        borderRadius: 4,
                                        border: '1px solid rgba(0, 0, 0, 0.2)',
                                        boxShadow: " 2px 2px 6px rgba(0, 0, 0, 0.25)"
                                    }}
                                    onChange={this.handleChange}
                                    numInputs={5}
                                    value={this.state.otp}
                                    renderSeparator={<span></span>}
                                    renderInput={(props) => <input {...props} />}
                                />
                            </Box>

                        </CardActions>
                        <CardContent>

                            <Typography style={{ fontSize: "14px", marginTop: "2%", textAlign: "center", fontWeight: 500, color: "#B3B3B3" }}>
                                Didn’t receive OTP ?
                                <Button
                                  
                                    
                                    onClick={() => {
                                        this.props.phone_login(this.props.login.otpmobile);
                                    }}
                                    disabled={this.state.time.s !== 0}
                                >
                                    <strong style={{ color: "#EC1212" }}>
                                        Resend
                                    </strong>
                                </Button>
                               
                                    <TimerIcon style={{ color: '#888',fontSize:14 }} />
                                    {this.state.time.s}
                                
                               
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Link to="/" style={{ color: "#D17407" }}>
                                <Button
                                    variant="contained"
                                    style={{ background: "#7E9DE1", width: '240px', color: 'white', marginLeft: "28%", marginTop: "1%" }}
                                    onClick={() => {

                                        this.props.verify_otp(this.props.login.otpmobile, this.state.otp);
                                    }}
                                >
                                    Verify & Continue
                                </Button>
                            </Link>
                            :

                        </CardActions>
                     
                    </Card>
                
                <LoaderCon />
            </div >
                    
              
                
              
        )
    }
}
