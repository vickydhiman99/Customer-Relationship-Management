
import React, { Component } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import TabContext from '@mui/lab/TabContext';
import Checkbox from '@mui/material/Checkbox';
import Empimg from "../../image/empimg.png";
import Infocircle from "../../image/info-circle.svg";

import {

    CardContent,

    Grid,
    DialogTitle,
    Dialog,
    DialogActions,
    TextField,
    Tooltip


} from "@mui/material";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import Paper from "@mui/material/Paper";
import Sale from "../../image/Sales.svg";
import Sold from "../../image/Sold.svg";
import Order from "../../image/Order.svg";
import Customer from "../../image/Customer.svg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../../dashboard/Components/newdashboard.css";
import Chart from 'react-apexcharts';
import Manrun from './manrunung';
import CloseIcon from '@mui/icons-material/Close';



const chartSetting = {
    yAxis: [
        {

        },
    ],
    width: 500,
    height: 300,
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
        },
    },
};

const dataset = [
    {
        convert: 39,
        infollow: 37,
        month: 'Jan',
    },
    {
        convert: 30,
        infollow: 32,
        month: 'Fev',
    },
    {
        convert: 47,
        infollow: 33,
        month: 'Mar',
    },
    {
        convert: 34,
        infollow: 36,
        month: 'Apr',
    },
    {
        convert: 37,
        infollow: 69,
        month: 'May',
    },
    {
        convert: 40,
        infollow: 43,
        month: 'June',
    },
    {
        convert: 39,
        infollow: 40,
        month: 'July',
    },
    {
        convert: 43,
        infollow: 40,
        month: 'Aug',
    },
    {
        convert: 31,
        infollow: 31,
        month: 'Sept',
    },
    {
        convert: 40,
        infollow: 43,
        month: 'Oct',
    },
    {
        convert: 47,
        infollow: 44,
        month: 'Nov',
    },
    {
        convert: 41,
        infollow: 20,
        newYork: 103,
        seoul: 23,
        month: 'Dec',
    },
];

const valueFormatter = (value) => `${value}`;


export default class Executivesdashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exedashdeatils: false,

            mngdata: [
                {
                    empname: "Kristin Watson",
                    empid: "EMP123456",
                    empmail: "abc@gmail.com",
                    emprole: "Sales Manager",
                    empprog: "70 % Completed",
                },

                {
                    empname: "Kristin Watson",
                    empid: "EMP123456",
                    empmail: "abc@gmail.com",
                    emprole: "Sales Manager",
                    empprog: "70 % Completed",
                },


            ],

            exedata: [
                {
                    exeempname: "Kristin Watson",
                    exeempid: "EMP123456",
                    exeempmail: "abc@gmail.com",
                    exeemprole: "Sales Representative",
                    exeempprog: "70 % Completed",
                },
                {
                    exeempname: "Kristin Watson",
                    exeempid: "EMP123456",
                    exeempmail: "abc@gmail.com",
                    exeemprole: "Sales Representative",
                    exeempprog: "70 % Completed",
                },
                {
                    exeempname: "Kristin Watson",
                    exeempid: "EMP123456",
                    exeempmail: "abc@gmail.com",
                    exeemprole: "Sales Representative",
                    exeempprog: "70 % Completed",
                },
                {
                    exeempname: "Kristin Watson",
                    exeempid: "EMP123456",
                    exeempmail: "abc@gmail.com",
                    exeemprole: "Sales Representative",
                    exeempprog: "70 % Completed",
                },
                {
                    exeempname: "Kristin Watson",
                    exeempid: "EMP123456",
                    exeempmail: "abc@gmail.com",
                    exeemprole: "Sales Representative",
                    exeempprog: "70 % Completed",
                },
                {
                    exeempname: "Kristin Watson",
                    exeempid: "EMP123456",
                    exeempmail: "abc@gmail.com",
                    exeemprole: "Sales Representative",
                    exeempprog: "70 % Completed",
                },
                {
                    exeempname: "Kristin Watson",
                    exeempid: "EMP123456",
                    exeempmail: "abc@gmail.com",
                    exeemprole: "Sales Representative",
                    exeempprog: "70 % Completed",
                },
                {
                    exeempname: "Kristin Watson",
                    exeempid: "EMP123456",
                    exeempmail: "abc@gmail.com",
                    exeemprole: "Sales Representative",
                    exeempprog: "70 % Completed",
                },
            ],



            series: [{
                name: 'New Customer',
                data: [31, 40, 28, 51, 42, 109, 100]

            }, {
                name: 'Repeated Customer',
                data: [60, 80, 70, 52, 64, 52, 41]
            }],
            options: {
                chart: {
                    height: 300,
                    width: 450,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                colors: ['#79A495', '#CC542E'],
                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                },

            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]

        };
    }







    render() {

        return (
            <>
                <Grid style={{ marginTop: "8%", width: "100%" }}>
                    {/* first row card */}

                    <Manrun />

                    <Grid style={{ display: "flex", justifyContent: "space-between", gap: "10px", marginRight: "18px", marginLeft: "2%" }}>
                        <Grid style={{
                            padding: "16px", boxShadow: " 4px 4px 8px 0px #00000040"
                        }}>
                            <Box style={{ marginBottom: "3%" }}>
                                <Typography style={{ fontSize: "16px", fontWeight: "400", color: "#000" }}>Total sales</Typography>
                                <Typography style={{ fontSize: "14px", fontWeight: "400", color: "#000" }}>Sale’s Summary</Typography>
                            </Box>

                            <Grid>
                                <Box style={{ display: "flex", gap: "14px" }}>
                                    <Box style={{ width: "200px", boxShadow: "0px 1px 7px 0px #00000040", borderRadius: "2px" }}>

                                        <img src={Sale} style={{ height: "60px", borderTopLeftRadius: "2px" }} />
                                        <Box style={{ padding: " 2px 13px" }}>
                                            <Typography style={{ fontWeight: "500", color: "#000000" }}>₹ 1K</Typography>
                                            <Typography style={{ fontSize: "16px", fontWeight: "400", color: "#8F8F8F" }}>Total Sales</Typography>
                                            <Typography style={{ fontSize: "12px", fontWeight: "400", color: "#8F8F8F" }}>+ 8% from yesterday</Typography>
                                        </Box>
                                    </Box>

                                    <Box style={{ width: "200px", boxShadow: "0px 1px 7px 0px #00000040", borderRadius: "2px" }}>

                                        <img src={Order} style={{ height: "60px", borderTopLeftRadius: "2px" }} />
                                        <Box style={{ padding: " 2px 13px" }}>
                                            <Typography style={{ fontWeight: "500", color: "#000000" }}>300</Typography>
                                            <Typography style={{ fontSize: "16px", fontWeight: "400", color: "#8F8F8F" }}>Total Orders</Typography>
                                            <Typography style={{ fontSize: "12px", fontWeight: "400", color: "#8F8F8F" }}>+ 8% from yesterday</Typography>
                                        </Box>
                                    </Box>

                                </Box>

                                <Box style={{ display: "flex", gap: "14px", marginTop: "3%" }}>
                                    <Box style={{ width: "200px", boxShadow: "0px 1px 7px 0px #00000040", borderRadius: "2px" }}>

                                        <img src={Sold} style={{ height: "60px", borderTopLeftRadius: "2px" }} />
                                        <Box style={{ padding: " 2px 13px" }}>
                                            <Typography style={{ fontWeight: "500", color: "#000000" }}>8</Typography>
                                            <Typography style={{ fontSize: "16px", fontWeight: "400", color: "#8F8F8F" }}>Product Sold</Typography>
                                            <Typography style={{ fontSize: "12px", fontWeight: "400", color: "#8F8F8F" }}>+ 8% from yesterday</Typography>
                                        </Box>
                                    </Box>
                                    <Box style={{ width: "200px", boxShadow: "0px 1px 7px 0px #00000040", borderRadius: "2px" }}>

                                        <img src={Customer} style={{ height: "60px", borderTopLeftRadius: "2px" }} />
                                        <Box style={{ padding: " 2px 13px" }}>
                                            <Typography style={{ fontWeight: "500", color: "#000000" }}>5</Typography>
                                            <Typography style={{ fontSize: "16px", fontWeight: "400", color: "#8F8F8F" }}>New Customers</Typography>
                                            <Typography style={{ fontSize: "12px", fontWeight: "400", color: "#8F8F8F" }}>+ 8% from yesterday</Typography>
                                        </Box>
                                    </Box>
                                </Box>

                            </Grid>
                        </Grid>
                        {/* bar chart code here */}
                        <Grid>
                            <Grid style={{ padding: "20px", borderRadius: "6px", display: "flex", justifyContent: "space-between", gap: "20px", alignItems: "center", boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.25)" }}>

                                {/* <Typography style={{ fontWeight: "500", fontSize: "18px", textAlign: "center" }}>Leads Analytics</Typography> */}

                                <Tabs  >
                                    <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <Typography style={{ fontWeight: "500", fontSize: "18px", textAlign: "center" }}>Leads Analytics</Typography>

                                        <TabList className='tab-list'>
                                            <Tab ><Button className='tab-list-btn'>Daily</Button></Tab>
                                            <Tab><Button className='tab-list-btn'>Weekly</Button></Tab>
                                            <Tab> <Button className='tab-list-btn'>Monthly</Button></Tab>

                                        </TabList>
                                    </Box>
                                    <TabPanel style={{width:"42em"}}>
                                        <Grid style={{ boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.25)", marginTop: "1%" }}>
                                            <BarChart
                                                dataset={dataset}
                                                xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                                                series={[
                                                    { dataKey: 'infollow', label: 'In-follow', valueFormatter, color: '#668E80' },
                                                    { dataKey: 'convert', label: 'Converted', valueFormatter, color: '#EE6C43' },

                                                ]}
                                                {...chartSetting}
                                            />
                                        </Grid>
                                    </TabPanel>

                                    <TabPanel style={{width:"42em"}}>
                                        <BarChart
                                            dataset={dataset}
                                            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                                            series={[
                                                { dataKey: 'infollow', label: 'In-follow', valueFormatter, color: '#668E80' },
                                                { dataKey: 'convert', label: 'Converted', valueFormatter, color: '#EE6C43' },

                                            ]}
                                            {...chartSetting}
                                        />
                                    </TabPanel>
                                    <TabPanel style={{width:"42em"}}>
                                        <BarChart
                                            dataset={dataset}
                                            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                                            series={[
                                                { dataKey: 'infollow', label: 'In-follow', valueFormatter, color: '#668E80' },
                                                { dataKey: 'convert', label: 'Converted', valueFormatter, color: '#EE6C43' },

                                            ]}
                                            {...chartSetting}
                                        />
                                    </TabPanel>

                                </Tabs>
                            </Grid>

                        </Grid>
                    </Grid>

                    {/* second row card */}
                    <Grid style={{ display: "flex", justifyContent: "flex-end", marginTop: "2%", marginLeft: "2%" }}>

                        {/* <Grid className="tablee" style={{ boxShadow: "0px 1px 7px 0px #00000040", padding: "10px", height: "320px", overflowY: "scroll" }}>
                            <Typography style={{ fontSize: "18px", fontWeight: "600" }}>Best Employees of Month</Typography>

                            <Tabs>
                                <TabList className="main-tab">
                                    <Tab className="tabii">Managers</Tab>
                                    <Tab className="tabii">Executives</Tab>
                                </TabList>
                                <TabPanel>
                                    <Table size="small" aria-label="a dense table">

                                        <TableHead >
                                            <TableRow style={{ height: "70px" }}>

                                                <TableCell style={{ textAlign: "center", fontSize: "18px", color: "#525D79" }}></TableCell>
                                                <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}> Employee Name</TableCell>
                                                <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}>Employee ID</TableCell>
                                                <TableCell style={{ textAlign: "center", fontSize: "18px", color: "#525D79" }}>Info</TableCell>


                                            </TableRow>
                                        </TableHead>

                                        {this.state.mngdata.map((item) => {
                                            return (
                                                <TableBody className="tablebody" style={{}} >


                                                    <TableRow >


                                                        <TableCell style={{ textAlign: "center", fontSize: "14px" }}>
                                                            <img src={Empimg} />
                                                        </TableCell>

                                                        <TableCell style={{ textAlign: "center", fontSize: "14px" }}>
                                                            <Typography style={{ fontSize: "15px" }}>{item.empname}</Typography>
                                                        </TableCell>

                                                        <TableCell style={{ textAlign: "center", fontSize: "14px" }}>
                                                            <Typography style={{ fontSize: "15px" }}>{item.empid}</Typography>
                                                        </TableCell>

                                                        <TableCell style={{ textAlign: "center", fontSize: "18px", cursor: "pointer" }}>
                                                            <img

                                                                onClick={() => {
                                                                    this.setState({ exedashdeatils: true });
                                                                }}

                                                                src={Infocircle} />
                                                        </TableCell>




                                                    </TableRow>

                                                </TableBody>
                                            );
                                        })}

                                    </Table>
                                </TabPanel>
                                <TabPanel>
                                    <Table size="small" aria-label="a dense table">

                                        <TableHead >
                                            <TableRow style={{ height: "70px" }}>

                                                <TableCell style={{ textAlign: "center", fontSize: "18px", color: "#525D79" }}></TableCell>
                                                <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}> Employee Name</TableCell>
                                                <TableCell style={{ textAlign: "center", fontSize: "16px", color: "#525D79" }}>Employee ID</TableCell>
                                                <TableCell style={{ textAlign: "center", fontSize: "18px", color: "#525D79" }}>Info</TableCell>


                                            </TableRow>
                                        </TableHead>

                                        {this.state.exedata.map((item) => {
                                            return (
                                                <TableBody className="tablebody" >


                                                    <TableRow >


                                                        <TableCell style={{ textAlign: "center", fontSize: "14px" }}>
                                                            <img src={Empimg} />
                                                        </TableCell>

                                                        <TableCell style={{ textAlign: "center", fontSize: "14px" }}>
                                                            <Typography style={{ fontSize: "15px" }}>{item.exeempname}</Typography>
                                                        </TableCell>

                                                        <TableCell style={{ textAlign: "center", fontSize: "14px" }}>
                                                            <Typography style={{ fontSize: "15px" }}>{item.exeempid}</Typography>
                                                        </TableCell>

                                                        <TableCell style={{ textAlign: "center", fontSize: "18px", cursor: "pointer" }}>
                                                            <img src={Infocircle} />
                                                        </TableCell>




                                                    </TableRow>

                                                </TableBody>
                                            );
                                        })}

                                    </Table>
                                </TabPanel>
                            </Tabs>
                        </Grid> */}

                        {/* wave chart code here */}
                        <Grid style={{ boxShadow: "0px 1px 7px 0px #00000040", padding: "10px" }}>
                            <Typography style={{ fontWeight: "500", fontSize: "20px" }}>Customers</Typography>
                            <div id="chart">
                                <Chart options={this.state.options} series={this.state.series} type="area" height={300} />
                            </div>
                        </Grid>

                    </Grid>

                </Grid>






                <Dialog
                    open={this.state.exedashdeatils} style={{}}>
                    <Grid style={{ height: "auto", width: "450px", marginBottom: "30px", cursor: "pointer" }}>

                        <Box >
                            <CloseIcon
                                onClick={() => { this.setState({ exedashdeatils: false }); }}
                                style={{ marginLeft: "400px", marginTop: "20px" }} />
                            <center>

                                <Typography className='Create'>Details Of Employee</Typography></center>


                            <Grid style={{ marginTop: "5%" }}>


                                <Typography className='Name' style={{}}> User Name </Typography>
                                <TextField style={{ marginLeft: "30px", width: "380px", borderColor: "#B5E4D5" }} id="standard-basic" variant="standard" />



                                <Typography className='Name' style={{ marginTop: "10px" }}>Email</Typography>
                                <TextField type="Email" style={{ marginLeft: "30px", width: "380px", borderColor: "#B5E4D5" }} id="standard-basic" variant="standard" />

                                <Typography className='Name' style={{ marginTop: "10px" }}>Phone Number</Typography>
                                <TextField type="number" style={{ marginLeft: "30px", width: "380px", borderColor: "#B5E4D5" }} id="standard-basic" variant="standard" />

                                <Typography className='Name' style={{ marginTop: "10px" }}>Employee Id</Typography>
                                <TextField style={{ marginLeft: "30px", width: "380px", borderColor: "#B5E4D5" }} id="standard-basic" variant="standard" />

                                <Grid style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px 20px", marginTop: "8%" }}>
                                    <div style={{ display: "flex", flexDirection: 'row', marginLeft: "2%" }}>


                                        <Card className='cardddddd'>
                                            <CardActions>


                                                <Typography className='total'>
                                                    Total Lead<br />
                                                    <b style={{ color: "#000", marginLeft: "5%" }}>400</b>

                                                </Typography>
                                            </CardActions>
                                        </Card>
                                        <Card className='cardddd'>
                                            <CardActions>


                                                <Typography className='total'>
                                                    Converted Lead<br />
                                                    <b style={{ color: "#000", marginLeft: "5%" }}>600</b>

                                                </Typography>
                                            </CardActions>
                                        </Card>





                                    </div>

                                </Grid>


                                <center>
                                    <button className='buttnn'
                                        onClick={() => { this.setState({ exedashdeatils: false }); }}
                                        style={{ color: "black" }}>Okay</button>
                                </center>

                            </Grid>




                        </Box>

                    </Grid>
                </Dialog>






            </>
        )
    }
}


