import { Card, Grid, Typography ,Box} from '@mui/material'
import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import CanvasJSReact from '@canvasjs/react-charts';
import Tmsimg from "../../../../pages/image/tmsimg.png" ;

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class atlassian extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }],
          options: {
            chart: {
              height: 300,
              
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            
            xaxis: {
              type: 'datetime',
              width: 600,
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
        
        
        };
      }

  render() {
    const options = {
        height: 350,
        // width:300,
        animationEnabled: true,
        title: {
          text: "Total Space Report",
          fontSize: 20,
        },
        subtitles: [
          {
            // text: "71% Positive",
            verticalAlign: "center",
            fontSize: 15,
            dockInsidePlotArea: true,
          },
        ],
        data: [
          {
            type: "doughnut",
            showInLegend: true,
            // indexLabel: "{name}: {y}",
            indexLabel: null,
           
            yValueFormatString: "#,###'%'",
            innerRadius: "75%",
            dataPoints: [
              { name: "Completed", y: 5,color: "#241468" },
              { name: "Pending", y: 31 ,color: "#9F0D7F"},
              { name: "Open", y: 40 ,color: "#4A55A2"},
              { name: "Due", y: 17 ,color: "#A076F9"},
              { name: "Due", y: 10 ,color: "#87CEEB"},
            //   { name: "Neutral", y: 7 },
            ],
            height: 250, // Adjust the height to control the chart's height
            radius: "70%",
          },
        ],
      };
    return (
      <Grid style={{marginTop:"10%"}}>
        <Typography style={{fontSize:"19px",fontWeight:"500"}}>Analysis</Typography>

        <Grid style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <img width={"50%"} src={Tmsimg} />
        {/* <Grid sx={{Width:500,backgroundColor:"#B75858",height:250}}></Grid> */}
        <Card style={{marginRight:"3%"}}>
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={300} width={400} />
        </Card>
        </Grid>
        <Grid style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"3%",marginTop:"2%"}}>
        {/* <Box sx={{maxWidth:500,backgroundColor:"#B75858",height:250}}></Box> */}
        {/* <Card style={{width:"1300px"}}> */}
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={360} width={650} />
        {/* </Card> */}
           
        <CanvasJSChart options={options}  />
       
        </Grid>
      </Grid>
    )
  }
}
