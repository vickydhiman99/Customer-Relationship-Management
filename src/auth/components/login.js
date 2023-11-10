import { Typography } from '@mui/material'
import React, { Component } from 'react'
import LoginImg from "../../pages/image/Nice to meet you.png"

export default class login extends Component {
    render() {
        return (
            <div >
                <div className='first-container'>
                    <Typography className='wellcome-crm'>Welcome To CRM</Typography>
                    <img src={LoginImg} className='login-img' />
                    <p className='login-content'>Lorem ipsum dolor sit amet. Qui saepe galisum qui ducimus iure aut dolor architecto? Aut aspernatur necessitatibus et sunt omnis ut </p>
                </div>
                <div className='second-container'>

                </div>

            </div>
        )
    }
}
