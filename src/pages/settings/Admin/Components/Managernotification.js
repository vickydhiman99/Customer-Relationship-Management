import { Grid, Typography } from '@mui/material'
import React, { Component } from 'react';
import Switch from '@mui/material/Switch';
import SettingDrawer2 from "../../../../pages/settings/Admin/Components/SettingDrawer2";




export default class Managernotification extends Component {

    constructor(props) {
        super(props);
        this.state = {
          checked: false,
          Mngnotidata: [
            {
              notihead: "User",
              notidesc: "Notified when User is Invited, Updated, Deleted "
            },
            {
              notihead: "Record ",
              notidesc: "Notified when User is Invited, Updated, Deleted "
            },
            {
              notihead: "Emails ",
              notidesc: "Notified when User is Invited, Updated, Deleted "
            },
            {
              notihead: "Payment ",
              notidesc: "Notified when User is Invited, Updated, Deleted "
            },
            {
              notihead: "Product ",
              notidesc: "Notified when User is Invited, Updated, Deleted "
            },
            {
              notihead: "Task ",
              notidesc: "Notified when User is Invited, Updated, Deleted "
            },
            {
              notihead: "Follow Ups ",
              notidesc: "Notified when User is Invited, Updated, Deleted "
            },
            {
              notihead: "Personalized ",
              notidesc: "Notified when User is Invited, Updated, Deleted "
            },
            {
              notihead: "Mentions ",
              notidesc: "Notified when User is Invited, Updated, Deleted "
            },
          ]
        };
      }
    
      handleChange = (event) => {
        this.setState({ checked: event.target.checked });
      };

    render() {
        return (
            <Grid style={{ marginTop: "10%", display: "flex", flexDirection: "row", gap: 30 }}>


        <Grid>
          <SettingDrawer2 />
        </Grid>

        <Grid style={{marginTop:"3%"}}>
          <Typography style={{ fontSize: "20px" }}><b>Notification Settings</b></Typography>


          {this.state.Mngnotidata.map((item) => {
            return (
              <Grid style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 35 }}>
                <Switch
                  checked={this.state.checked}
                  onChange={this.handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />

                <Typography style={{ fontSize: "15px", fontWeight: "600" }}>{item.notihead}</Typography>
                <Typography style={{ fontSize: "15px", }}>{item.notidesc}</Typography>
              </Grid>
            );
          })}

        </Grid>

      </Grid>
        );
    }
}

