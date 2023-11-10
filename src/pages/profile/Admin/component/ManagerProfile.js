import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'

import React, { Component } from 'react'

export default class managerProfile extends Component {
    render() {
        return (
            <>


                <Box style={{ width: "97%", border: "0.4px solid #A4A4A4", display: "flex", flexDirection: 'row', justifyContent: "space-between", padding: "23px", marginTop: "6em", borderRadius: "23px" }}>

                    <Box style={{ display: "flex", flexDirection: 'row', gap: "20px" }}>
                        <Box style={{ height: "100px", width: "100px", backgroundColor: "gray", borderRadius: "50%" }}>
                        </Box>

                        <Box style={{ display: "flex", flexDirection: 'column' }}>
                            <Typography style={
                                { "fontFamily": "Montserrat", "fontSize": "16px", "fontStyle": "normal", "fontWeight": "700" }
                            }>Brooklyn Simmons</Typography>
                            <Typography style={{ "color": "#5A5A5A", "fontFamily": "Nunito Sans", "fontSize": "14px", "fontStyle": "normal", "fontWeight": "400" }}>Executive</Typography>
                            <Box style={{ display: "flex", flexDirection: 'row', gap: "5px" }}>
                                <Typography variant='Body1'>5464546454</Typography>
                                <Typography variant='Body1'>randon@gmail.com</Typography>

                            </Box>
                        </Box>
                    </Box>

                    <Box style={{ height: "42px", width: "79px", borderRadius: "10px", border: "1px solid", alignItems: "center", padding: "10px", display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>

                        <>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="vuesax/outline/user-edit">
                                    <g id="user-edit">
                                        <path id="Vector" d="M10.0002 10.6243C7.3585 10.6243 5.2085 8.47435 5.2085 5.83268C5.2085 3.19102 7.3585 1.04102 10.0002 1.04102C12.6418 1.04102 14.7918 3.19102 14.7918 5.83268C14.7918 8.47435 12.6418 10.6243 10.0002 10.6243ZM10.0002 2.29102C8.05016 2.29102 6.4585 3.88268 6.4585 5.83268C6.4585 7.78268 8.05016 9.37435 10.0002 9.37435C11.9502 9.37435 13.5418 7.78268 13.5418 5.83268C13.5418 3.88268 11.9502 2.29102 10.0002 2.29102Z" fill="#292D32" />
                                        <path id="Vector_2" d="M13.1828 18.9568C12.8661 18.9568 12.5661 18.8402 12.3495 18.6235C12.0911 18.3652 11.9745 17.9902 12.0328 17.5985L12.1911 16.4735C12.2328 16.1819 12.4078 15.8402 12.6162 15.6235L15.5661 12.6735C16.7495 11.4902 17.7912 12.1652 18.2995 12.6735C18.7328 13.1069 18.9578 13.5735 18.9578 14.0402C18.9578 14.5152 18.7412 14.9568 18.2995 15.3985L15.3495 18.3485C15.1411 18.5569 14.7912 18.7319 14.4995 18.7735L13.3745 18.9318C13.3078 18.9485 13.2495 18.9568 13.1828 18.9568ZM16.9245 13.2652C16.7745 13.2652 16.6411 13.3652 16.4495 13.5569L13.4995 16.5068C13.4745 16.5318 13.4328 16.6152 13.4328 16.6485L13.2828 17.6902L14.3245 17.5402C14.3578 17.5318 14.4411 17.4902 14.4661 17.4652L17.4162 14.5152C17.5495 14.3818 17.7078 14.1902 17.7078 14.0402C17.7078 13.9152 17.6078 13.7402 17.4162 13.5569C17.2162 13.3569 17.0661 13.2652 16.9245 13.2652Z" fill="#292D32" />
                                        <path id="Vector_3" d="M17.4338 16.0158C17.3755 16.0158 17.3171 16.0075 17.2671 15.9908C16.1671 15.6825 15.2922 14.8075 14.9838 13.7075C14.8922 13.3742 15.0838 13.0325 15.4172 12.9409C15.7505 12.8492 16.0922 13.0408 16.1838 13.3742C16.3755 14.0575 16.9172 14.5992 17.6005 14.7908C17.9338 14.8825 18.1255 15.2325 18.0338 15.5575C17.9588 15.8325 17.7088 16.0158 17.4338 16.0158Z" fill="#292D32" />
                                        <path id="Vector_4" d="M2.8418 18.9583C2.50013 18.9583 2.2168 18.675 2.2168 18.3333C2.2168 14.775 5.70849 11.875 10.0002 11.875C10.9085 11.875 11.8085 12.0084 12.6501 12.2584C12.9835 12.3584 13.1668 12.7083 13.0668 13.0333C12.9668 13.3667 12.6168 13.55 12.2918 13.45C11.5585 13.2333 10.7918 13.1167 10.0002 13.1167C6.40015 13.1167 3.4668 15.45 3.4668 18.325C3.4668 18.675 3.18346 18.9583 2.8418 18.9583Z" fill="#292D32" />
                                    </g>
                                </g>
                            </svg>

                        </>

                        <Typography variant='Body1'>Edit</Typography>

                    </Box>



                </Box>

                <Box style={{ width: "97%", border: "0.4px solid #A4A4A4", display: "flex", flexDirection: 'row', justifyContent: "space-between", marginTop: "6em", borderRadius: "23px" }}>

                    <Box style={{ display: "flex", flexDirection: 'column', gap: "20px", margin: "23px" }}>

                        <Typography style={{ "fontFamily": "Montserrat", "fontSize": "16px", "fontStyle": "normal", "fontWeight": "700" }}>Organization Information</Typography>


                        <Box style={{ display: "flex", flexDirection: 'row', gap: "20px" }}>
                            <Box style={{ height: "100px", width: "100px", backgroundColor: "gray", borderRadius: "50%" }}>
                            </Box>

                            <Box style={{ display: "flex", flexDirection: 'column' }}>
                                <Typography style={{ "color": "#5A5A5A", "fontFamily": "Nunito Sans", "fontSize": "14px", "fontStyle": "normal", "fontWeight": "400" }}>Organization Name </Typography>
                                <Typography style={{ "fontFamily": "Montserrat", "fontSize": "16px", "fontStyle": "normal", "fontWeight": "700" }}>Brooklyn Simmons</Typography>

                            </Box>
                        </Box>
                        <Box style={{
                            display: "flex", flexDirection: 'row', gap: "5px", flexwarp: "warp", width: "37em", gap: "7px",
                            flexWrap: "wrap",
                        }}>

                            {/* <Box> */}
                            <Box style={{ display: "flex", flexDirection: 'column' }}>
                                <Typography style={{ "color": "#5A5A5A", "fontFamily": "Nunito Sans", "fontSize": "14px", "fontStyle": "normal", "fontWeight": "400" }}>Organization Name </Typography>
                                <Typography style={{ "fontFamily": "Montserrat", "fontSize": "16px", "fontStyle": "normal", "fontWeight": "700" }}>Brooklyn Simmons</Typography>

                            </Box>
                            <Box style={{ display: "flex", flexDirection: 'column' }}>
                                <Typography style={{ "color": "#5A5A5A", "fontFamily": "Nunito Sans", "fontSize": "14px", "fontStyle": "normal", "fontWeight": "400" }}>Organization Name </Typography>
                                <Typography style={{ "fontFamily": "Montserrat", "fontSize": "16px", "fontStyle": "normal", "fontWeight": "700" }}>Brooklyn Simmons</Typography>

                            </Box>
                            <Box style={{ display: "flex", flexDirection: 'column' }}>
                                <Typography style={{ "color": "#5A5A5A", "fontFamily": "Nunito Sans", "fontSize": "14px", "fontStyle": "normal", "fontWeight": "400" }}>Organization Name </Typography>
                                <Typography style={{ "fontFamily": "Montserrat", "fontSize": "16px", "fontStyle": "normal", "fontWeight": "700" }}>Brooklyn Simmons</Typography>

                            </Box>
                            <Box style={{ display: "flex", flexDirection: 'column' }}>
                                <Typography style={{ "color": "#5A5A5A", "fontFamily": "Nunito Sans", "fontSize": "14px", "fontStyle": "normal", "fontWeight": "400" }}>Organization Name </Typography>
                                <Typography style={{ "fontFamily": "Montserrat", "fontSize": "16px", "fontStyle": "normal", "fontWeight": "700" }}>Brooklyn Simmons</Typography>

                            </Box>

                            {/* </Box> */}

                        </Box>
                    </Box>

                    <>
                        <svg style={{ alignSelf: "flex-end" }} width="423" height="251" viewBox="0 0 423 251" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="381" cy="158" r="149" fill="#CC542E" />
                            <circle cx="206" cy="229" r="149" fill="#3D3B3B" fill-opacity="0.8" />
                            <circle cx="240.5" cy="61.5" r="8.5" fill="#3D3B3B" fill-opacity="0.8" />
                            <circle cx="46" cy="160" r="46" fill="#3D3B3B" fill-opacity="0.8" />
                            <circle cx="147.5" cy="31.5" r="31.5" fill="#3D3B3B" fill-opacity="0.8" />
                        </svg>

                    </>


                </Box>
            </>
        );
    }
}

