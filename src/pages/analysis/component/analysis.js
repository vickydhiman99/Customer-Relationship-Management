
import React, { Component } from 'react';
import {
    Grid,
    CardContent,
    Box,
    IconButton,
    Button,
    Typography,
    Icon, DialogActions,
    DialogTitle,
    Tooltip,
    Card

} from "@mui/material";
import Chart from 'react-apexcharts';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import Sale from "../../image/Sale-A.png";
import Sold from "../../image/Sold-A.png";
import Order from "../../image/Order-A.png";
import Customer from "../../image/Cutomer-A.png";
import ProductImg from "../../image/productimg.png";
import "../../analysis/component/analysis.css";
import FilterAltOutlined from '@mui/icons-material/FilterAltOutlined';

const chartSetting = {
    yAxis: [
        {

        },
    ],
    width: 700,
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
        month: 'Feb',
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

class analysis extends Component {
    constructor(props) {
        super(props);

        this.state = {

            admidashdetails: false,

            ProductData: [
                {
                    productname: "Tizum Mouse Pad",
                    productDetail: "Computer Mouse Mat with Anti-Slip Rubber Base & Smooth Mouse Control with Spill-Resistant Surface for Laptop, Notebook, MacBook Pro, Gaming Computer (9.4 * 7.9 Inches), Beta",
                    productPrice: "149"
                },
                {
                    productname: "Tizum Mouse Pad",
                    productDetail: "Computer Mouse Mat with Anti-Slip Rubber Base & Smooth Mouse Control with Spill-Resistant Surface for Laptop, Notebook, MacBook Pro, Gaming Computer (9.4 * 7.9 Inches), Beta",
                    productPrice: "149"
                },
                {
                    productname: "Tizum Mouse Pad",
                    productDetail: "Computer Mouse Mat with Anti-Slip Rubber Base & Smooth Mouse Control with Spill-Resistant Surface for Laptop, Notebook, MacBook Pro, Gaming Computer (9.4 * 7.9 Inches), Beta",
                    productPrice: "149"
                },
                {
                    productname: "Tizum Mouse Pad",
                    productDetail: "Computer Mouse Mat with Anti-Slip Rubber Base & Smooth Mouse Control with Spill-Resistant Surface for Laptop, Notebook, MacBook Pro, Gaming Computer (9.4 * 7.9 Inches), Beta",
                    productPrice: "149"
                },
            ]
            ,



            series: [{
                name: 'New Customer',
                data: [31, 40, 28, 51, 42, 109, 100]

            }, {
                name: 'Repeated Customer',
                data: [60, 80, 70, 52, 64, 52, 41]
            }],
            options: {
                chart: {
                    height: 350,
                    width: 600,
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
            <Grid style={{ marginTop: "8%" }}>

                {/* filter button here */}
                <Grid style={{ display: "flex", justifyContent: "space-between", padding: "13px" }}>
                    <Box></Box>
                    {/* <Box style={{border:"1px solid gray",width:"10%",marginBottom:"2%",textAlign:"center"}} className="dropdown-container" >
                  <FilterAltOutlined/>
                <select style={{outline:"none",border:"none",background:"transparent"}}>
               
                    
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Half-Yearly</option>
                    <option>Yearly</option>
                </select>
                </Box> */}

                    <Button className='event-button1'

                    >
                        <FilterAltOutlined style={{ padding: "1%" }} alt="" srcset="" />

                        <select className="dfilter1">
                        <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Half-Yearly</option>
                    <option>Yearly</option>
                        </select>
                    </Button>
                </Grid>
                <Grid style={{ display: "flex", gap: "14px" }}>

                    {/* left side  */}
                    <Grid style={{ width: "68%" }}>
                        <Grid style={{
                            padding: "16px",
                            border: " 1px solid #E0E0E0"
                            //  boxShadow: " 4px 4px 8px 0px #00000040"
                        }}>
                            <Box style={{ marginBottom: "3%" }}>
                                <Typography style={{ fontSize: "20px", fontWeight: "500", color: "#000" }}>Total sales</Typography>
                                <Typography style={{ fontSize: "14px", fontWeight: "400", color: "#000" }}>Real-time snapshot of total sales, revenue, and performance metrics for informed decision-making.</Typography>
                            </Box>

                            <Grid>
                                <Box style={{ display: "flex", gap: "14px" }}>
                                    <Box style={{ borderLeft: "2px solid #000582", justifyContent: "center", alignItems: "center", display: "flex", gap: "14px", width: "250px", height: "100px", boxShadow: "0px 1px 7px 0px #00000040", borderRadius: "2px" }}>

                                        <img src={Sale} style={{ height: "60px", borderTopLeftRadius: "2px" }} />
                                        <Box style={{}}>
                                            <Typography style={{ fontWeight: "500", color: "#000000" }}>₹ 1K</Typography>
                                            <Typography style={{ fontSize: "13px", fontWeight: "400", color: "#8F8F8F" }}>Total Sales</Typography>
                                            <Typography style={{ fontSize: "8px", fontWeight: "400", color: "#8F8F8F" }}>+ 8% from yesterday</Typography>
                                        </Box>
                                    </Box>

                                    <Box style={{ borderLeft: "2px solid #000582", justifyContent: "center", alignItems: "center", display: "flex", gap: "14px", width: "250px", height: "100px", boxShadow: "0px 1px 7px 0px #00000040", borderRadius: "2px" }}>


                                        <img src={Order} style={{ height: "60px", borderTopLeftRadius: "2px" }} />
                                        <Box style={{}}>
                                            <Typography style={{ fontWeight: "500", color: "#000000" }}> 300</Typography>
                                            <Typography style={{ fontSize: "13px", fontWeight: "400", color: "#8F8F8F" }}>Total Order</Typography>
                                            <Typography style={{ fontSize: "8px", fontWeight: "400", color: "#8F8F8F" }}>+ 8% from yesterday</Typography>
                                        </Box>
                                    </Box>



                                    <Box style={{ borderLeft: "2px solid #000582", justifyContent: "center", alignItems: "center", display: "flex", gap: "14px", width: "250px", height: "100px", boxShadow: "0px 1px 7px 0px #00000040", borderRadius: "2px" }}>


                                        <img src={Sold} style={{ height: "60px", borderTopLeftRadius: "2px" }} />
                                        <Box style={{}}>
                                            <Typography style={{ fontWeight: "500", color: "#000000" }}>525</Typography>
                                            <Typography style={{ fontSize: "13px", fontWeight: "400", color: "#8F8F8F" }}>Total Sold</Typography>
                                            <Typography style={{ fontSize: "8px", fontWeight: "400", color: "#8F8F8F" }}>+ 8% from yesterday</Typography>
                                        </Box>
                                    </Box>
                                    <Box style={{ borderLeft: "2px solid #000582", justifyContent: "center", alignItems: "center", display: "flex", gap: "14px", width: "250px", height: "100px", boxShadow: "0px 1px 7px 0px #00000040", borderRadius: "2px" }}>


                                        <img src={Customer} style={{ height: "60px", borderTopLeftRadius: "2px" }} />
                                        <Box style={{}}>
                                            <Typography style={{ fontWeight: "500", color: "#000000" }}>5</Typography>
                                            <Typography style={{ fontSize: "13px", fontWeight: "400", color: "#8F8F8F" }}>Total Cutomer</Typography>
                                            <Typography style={{ fontSize: "8px", fontWeight: "400", color: "#8F8F8F" }}>+ 8% from yesterday</Typography>
                                        </Box>
                                    </Box>
                                </Box>

                            </Grid>
                        </Grid>

                        {/* bar chart */}

                        {/* boxShadow: "0px 1px 7px 0px #00000040" */}
                        <Grid style={{ marginTop: "1%" }}>
                            <Grid style={{ border: " 1px solid #E0E0E0", marginTop: "1%" }}>
                                <Typography style={{ fontSize: "20px", fontWeight: "500", padding: "10px" }}>Leads Analytics</Typography>
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
                        </Grid>

                        {/* wave chart */}
                        <Grid style={{ marginTop: "1%" }}>
                            <Grid style={{
                                //  boxShadow: "0px 1px 7px 0px #00000040",
                                border: " 1px solid #E0E0E0",
                                padding: "10px"
                            }}>
                                <Typography style={{ fontWeight: "500", fontSize: "20px", color: "#3D3B3B" }}>Yearly Bestsellers: Top 5 Products</Typography>
                                <Typography style={{ fontWeight: "500", fontSize: "20px" }}>Customers</Typography>
                                <Grid id="chart" style={{ width: "600px" }}>
                                    <Chart options={this.state.options} series={this.state.series} type="area" height={300} width={800} />
                                </Grid>
                            </Grid>
                        </Grid>x
                    </Grid>

                    {/* right side */}
                    <Grid style={{ width: "30%", border: " 1px solid #E0E0E0", padding: "15px" }}>
                        <Typography style={{ fontSize: "20px", fontWeight: "500", marginBottom: "3%" }}>Yearly Bestsellers: Top 5 Products</Typography>
                        <Grid>
                            {this.state.ProductData.map((item) => {
                                return (
                                    <Card style={{
                                        marginBottom: "6px", boxShadow: "2px 2px 8px 0px #56565640", display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", padding: "5px"
                                    }}>
                                        <img  src={ProductImg} style={{ height: "70%", width: "70%" }} />
                                        <Box style={{ gap: "10px", display: "flex", flexDirection: "column" }}>
                                            <Typography  style={{ fontSize: "16px", color: "#3D3B3B" }} >{item.productname}</Typography>
                                            <Typography className='text-war'>{item.productDetail}</Typography>
                                            <Typography>
                                                ₹ {item.productPrice}
                                            </Typography>
                                        </Box>

                                    </Card>
                                );
                            })}

                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

export default analysis;