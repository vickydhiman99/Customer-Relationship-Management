import React, { Component } from 'react';
import SettingDrawer from "../../../../pages/settings/Admin/Components/SettingDrawer";
import { Grid, Typography } from '@mui/material';
import Switch from '@mui/material/Switch';

export default class security extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,

    };
  }

  handleChange = (event) => {
    this.setState({ checked: event.target.checked });
  };
  render() {
    return (
      <Grid style={{ marginTop: "10%", display: "flex", flexDirection: "row", gap: 30, marginRight: "5%" }}>


        <Grid>
          <SettingDrawer />
        </Grid>


<Grid>
  <Typography style={{marginBottom:"4%",fontSize:"23px",fontWeight:"500"}}>Security</Typography>
        <Grid style={{ display: "flex", flexDirection: "row", gap: 35, marginTop: "4%" }}>
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Grid>
            <Typography style={{ fontSize: "17px", fontWeight: "600" }}>Visibility and login protection</Typography>
            <Typography style={{ fontSize: "15px", marginTop: "3%" }}>Ensures that users only have access to the data and functionalities that are necessary for their job roles, reducing the risk of unauthorized access to sensitive customer data</Typography>
          </Grid>
        </Grid>

        <Grid style={{ display: "flex", flexDirection: "row", gap: 35, marginTop: "2%" }}>
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Grid>
            <Typography style={{ fontSize: "17px", fontWeight: "600" }}>Organizational data management</Typography>
            <Typography style={{ fontSize: "15px", marginTop: "3%" }}>Protect sensitive customer data in the CRM system</Typography>
          </Grid>
        </Grid>

        <Grid style={{ display: "flex", flexDirection: "row", gap: 35, marginTop: "2%" }}>
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Grid>
            <Typography style={{ fontSize: "17px", fontWeight: "600" }}>User access and device logs</Typography>
            <Typography style={{ fontSize: "15px", marginTop: "3%" }}>Get notifications about the times and locations of user logins over the last 60 days to pinpoint and prevent suspicious activity</Typography>
          </Grid>
        </Grid>

        <Grid style={{ display: "flex", flexDirection: "row", gap: 35, marginTop: "2%" }}>
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Grid>
            <Typography style={{ fontSize: "17px", fontWeight: "600" }}>Security alerts</Typography>
            <Typography style={{ fontSize: "15px", marginTop: "3%" }}>Get instant email notifications about suspicious access to your company’s account, potential data leaks and data loss</Typography>
          </Grid>
        </Grid>

        </Grid>
      </Grid>
    )
  }
}
