import { Grid, Typography } from '@mui/material'
import React, { Component } from 'react';
import Switch from '@mui/material/Switch';
import SettingDrawer from "../../../../pages/settings/Admin/Components/SettingDrawer";

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      notdata: [
        {
          nothead: "User",
          notdesc: "Notified when User is Invited, Updated, Deleted "
        },
        {
          nothead: "Record ",
          notdesc: "Notified when User is Invited, Updated, Deleted "
        },
        {
          nothead: "Emails ",
          notdesc: "Notified when User is Invited, Updated, Deleted "
        },
        {
          nothead: "Payment ",
          notdesc: "Notified when User is Invited, Updated, Deleted "
        },
        {
          nothead: "Product ",
          notdesc: "Notified when User is Invited, Updated, Deleted "
        },
        {
          nothead: "Task ",
          notdesc: "Notified when User is Invited, Updated, Deleted "
        },
        {
          nothead: "Follow Ups ",
          notdesc: "Notified when User is Invited, Updated, Deleted "
        },
        {
          nothead: "Personalized ",
          notdesc: "Notified when User is Invited, Updated, Deleted "
        },
        {
          nothead: "Mentions ",
          notdesc: "Notified when User is Invited, Updated, Deleted "
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
          <SettingDrawer />
        </Grid>

        <Grid style={{marginTop:"3%"}}>
          <Typography style={{ fontSize: "23px",marginBottom:"4%" }}><b>Notification Settings</b></Typography>


          {this.state.notdata.map((item) => {
            return (
              <Grid style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 35 }}>
                <Switch
                  checked={this.state.checked}
                  onChange={this.handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />

                <Typography style={{ fontSize: "15px", fontWeight: "600" }}>{item.nothead}</Typography>
                <Typography style={{ fontSize: "15px", }}>{item.notdesc}</Typography>
              </Grid>
            );
          })}

        </Grid>

      </Grid>
    )
  }
}
