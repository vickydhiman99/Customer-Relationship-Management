import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Controller from "../containers/controller_cont";
import Login from "../../auth/container/logincont";
import Loginotp from "../../auth/container/loginotpcont";
import Drawer_option_con from "../containers/drawer_cont";
import Dashboardpage from "../../pages/dashboard/Components/newdashboard"


//Admin
import Organization from "../../../src/auth/container/organizationCont";
import Vieworg from "../../../src/auth/container/vieworgCont";
import Error from "../../404";
import Product from "../../pages/product/Admin/Component/product";
import Employee from "../../pages/employee/Admin/Components/Employee";
import Managersales from "../../pages/sales/Admin/Components/Managersales";
import Adminsales from "../../pages/sales/Admin/Components/Adminsales";
import Newdashboard from "../../pages/dashboard/Components/newdashboard";
import Lead from "../../pages/leads/container/leadsCont";
import TodayLead from "../../pages/leads/container/TodaylclientsCont";
import Category from "../../pages/Category/Components/category";
import Source from "../../pages/Source/Components/source";
import Employeedetail from "../../pages/employee/Admin/Components/Employeedetail";
import Setting from "../../pages/settings/Admin/Components/setting";
import SettingDrawer from "../../pages/settings/Admin/Components/SettingDrawer"
import Businesssetting from "../../pages/settings/Admin/Components/businesssetting";
import Integration from "../../pages/settings/Admin/Components/integration";
import Template from "../../pages/settings/Admin/Components/template";
import Notification from "../../pages/settings/Admin/Components/Notification";
import Security from "../../pages/settings/Admin/Components/security";
import Pay from "../../pages/settings/Admin/Components/payment";
import Businesspersonal from "../../pages/settings/Admin/Components/businesspersonal";
import Businesscategory from "../../pages/settings/Admin/Components/businesscategory";
import Roleandpermission from "../../pages/settings/Admin/Components/roleandpermission";
import Atlassian from "../../pages/settings/Admin/Components/atlassian";
import Intgdetapage from "../../pages/settings/Admin/Components/integrationdetailpage";
import Analysis from "../../pages/analysis/component/analysis";
import AdminNewLead from "../../pages/leads/component/AdminNewLead"
// import NewLead from "../../pages/leads/component/AdminNewLead"

import User from "../../pages/User/user";
import Space from "../../pages/Space/space";
import Navbar from "../../pages/navbar/navbar";
import NewCategory from "../../pages/Category/Components/NewCategory"
import NewSource from "../../pages/Source/Components/NewSource";

import AdminleadDetails from "../../pages/leads/component/Adminleaddetails";



import Executives from "../../pages/Executives/Components/Executives";
import Executivedetails from "../../pages/Executives/Components/Executivedetails";
import Executivedetailsnext from "../../pages/Executives/Components/Executivedetailsnext";

//Executive



//Manager
import Managerdashboard from "../../pages/dashboard/Components/managerdashboard";
import Managerproduct from "../../pages/product/Admin/Component/managerproduct";
import Executivesdashboard from "../../pages/dashboard/Components/Executivesdashboard";
import Executivesproducts from "../../pages/product/Admin/Component/Executivesproducts";
import Executivesales from "../../pages/sales/Admin/Components/Executivesales";
import ManagerNewLead from "../../pages/leads/component/ManagerNewLead";
import Managerallotment from "../../pages/allotment/Components/Managerallotment";
import Adminallotment from "../../pages/allotment/Components/Adminallotment";
import Managersetting from "../../pages/settings/Admin/Components/Managersetting";
import ManagerIntegration from "../../pages/settings/Admin/Components/Managerintegration";
import ManagerTemplate from "../../pages/settings/Admin/Components/Managertemplate";
import ManagerNotification from "../../pages/settings/Admin/Components/Managernotification";
import ManagerIntegrationDetails from "../../pages/settings/Admin/Components/ManagerintegrationDetail";
import Executivesallotment from "../../pages/allotment/Components/Executivesallotment";
import Managerdetailsnext from "../../pages/leads/component/Managerdetailsnext";
import SettingDrawer2 from "../../pages/settings/Admin/Components/SettingDrawer2";
import NewLead from "../../pages/leads/component/NewLead";
// import Profile from "../../pages/profile/Admin/Profile";
import ExecutiveLeads from "../../pages/leads/component/ExecutiveLeads";
import ExecutiveLeadsDetails from "../../pages/leads/component/ExecutiveLeadsDetails";
import Profile from "../../pages/profile/Admin/component/Profile";
import ManagerProfile from "../../pages/profile/Admin/component/ManagerProfile";
import ExecutiveProfile from "../../pages/profile/Admin/component/Executiveprofile";




class Routers extends Component {
  render() {
    const { login, onLogout } = this.props;
    let body;

    if (login.isHome) {
      body = (
        <div>
          <main
            style={{
              flexGrow: 1,
            }}
          >
            <Controller />
            <Routes>
              //Admin
              {/* <Route exact path="/Product" element={<Product />} /> */}
              <Route exact path="/" element={<Login />} />
              <Route exact path="/loginotp" element={<Loginotp />} />
              <Route exact path="/Employee" element={<><Employee /></>} />
              {/* <Route exact path="/checkstatus" element={<OrderStatus />} />
              <Route exact path="/checkstatusdownload" element={< OrderStatusdown />} />  */}
              <Route exact path="*" element={<Error />} />


            </Routes>

          </main>
        </div>
      );
    }




    if (login.type === "A") {
      body = (
        <div
          style={{
            // display: "flex",
          }}
        >
          <Drawer_option_con type={login.type} onLogout={onLogout} name={login.name} />
          <main
            style={{
              flexGrow: 1,
              marginTop: 20,
              marginLeft: 250
            }}
          >
            <Controller />
            <Routes>
              <Route exact path="/" element={<><Newdashboard /></>} />
              <Route exact path="/newdashboard" element={<Newdashboard />} />
              <Route exact path="/product" element={<Product />} />
              <Route exact path="/Employee" element={<Employee />} />
              <Route exact path="/Employeedetail" element={<Employeedetail />} />
              <Route exact path="/Adminsales" element={<Adminsales />} />
              <Route exact path="/AdminleadDetails" element={<AdminleadDetails />} />

              <Route exact path="/Adminallotment" element={<Adminallotment />} />
              <Route exact path="/AdminNewLead" element={<AdminNewLead />} />



              <Route exact path="/all_lead" element={<><Lead /></>} />
              <Route exact path="/todays_lead" element={<><TodayLead /></>} />
              <Route exact path="/category" element={<><Category /></>} />
              <Route exact path="/source" element={<><Source /></>} />
              <Route exact path="/setting" element={<Setting />} />
              <Route exact path="/SettingDrawer" element={<SettingDrawer />} />

              <Route exact path="/businesssetting" element={<Businesssetting />} />
              <Route exact path="/businesspersonal" element={<Businesspersonal />} />
              <Route exact path="/businesscategory" element={<Businesscategory />} />
              <Route exact path="/roleandpermission" element={<Roleandpermission />} />
              <Route exact path="/integrationdetailpage" element={<Intgdetapage />} />
              <Route exact path="/atlassian" element={<Atlassian />} />
              <Route exact path="/analysis" element={<Analysis />} />
              <Route exact path="/Profile" element={<Profile />} />
              
              <Route exact path="/integration" element={<Integration />} />
              <Route exact path="/template" element={<Template />} />
              <Route exact path="/notification" element={<Notification />} />
              <Route exact path="/security" element={<Security />} />
              <Route exact path="/payment" element={<Pay />} />
              {/*<Route exact path="/NewLead" element={<NewLead/>} />*/}

              <Route exact path="/user" element={<User />} />
              <Route exact path="/space" element={<Space />} />
              <Route exact path="/navbar" element={<Navbar />} />


            </Routes>
          </main>
        </div>
      );
    }


    else if (login.type === "M") {
      body = (
        <div style={{
          // display: "flex",
        }}>
          <Drawer_option_con type={login.type} onLogout={onLogout} name={login.name} />

          <main
            style={{
              flexGrow: 1,
              marginTop: 20,
              marginLeft: 250
            }}
          >
            <Controller />
            <Routes>
              {/* ----------Manager Portal---------------------------- */}
              <Route exact path="/" element={<Managerdashboard />} />
              <Route exact path="/Managerdashboard" element={<Managerdashboard />} />
              <Route exact path="/Executives" element={<Executives />} />
              <Route exact path="/ManagerNewLead" element={<ManagerNewLead/>} />   
              <Route exact path="/managerproduct" element={<Managerproduct />} />
              <Route exact path="/Managersales" element={<Managersales />} />
              <Route exact path="/integrationdetailpage" element={<Intgdetapage />} />
              <Route exact path="/template" element={<Template />} />
              <Route exact path="/notification" element={<Notification />} />
              <Route exact path="/security" element={<Security />} />
              
              <Route exact path="/payment" element={<Pay />} />

              <Route exact path="/Managerdetailsnext" element={<><Managerdetailsnext /></>} />
              {/* <Route exact path="/Executivedetailsnext" element={<><Executivedetailsnext /></>} /> */}

              <Route exact path="/integration" element={<Integration />} />
              {/* <Route exact path="/allotment" element={<Allotment />} /> */}
              <Route exact path="/Managersetting" element={<Managersetting />} />
              <Route exact path="/Managerintegration" element={<ManagerIntegration />} />
              <Route exact path="/ManagerintegrationDetail" element={<ManagerIntegrationDetails />} />
              <Route exact path="/Executivedetails" element={<Executivedetails />} />

              <Route exact path="/Managertemplate" element={<ManagerTemplate />} />
              <Route exact path="/Managerallotment" element={<Managerallotment />} />

              <Route exact path="/ManagerProfile" element={<ManagerProfile />} />
            

              <Route exact path="/Managernotification" element={<ManagerNotification />} />

              <Route exact path="/SettingDrawer2" element={<SettingDrawer2 />} />
             






            </Routes>
          </main>
        </div>
      )
    }

    else if (login.type === "E") {
      body = (
        <div style={{
          // display: "flex",
        }}>
          <Drawer_option_con type={login.type} onLogout={onLogout} name={login.name} />

          <main
            style={{
              flexGrow: 1,
              marginTop: 20,
              marginLeft: 250
            }}
          >
            <Controller />
            <Routes>
              {/* ----------Executive Portal---------------------------- */}


              <Route exact path="/" element={<Executivesdashboard />} />
              <Route exact path="/Executivesdashboard" element={<Executivesdashboard />} />
              <Route exact path="/Executivesproducts" element={<Executivesproducts />} />
              <Route exact path="/ExecutiveLeads" element={<ExecutiveLeads />} />
              <Route exact path="/ExecutiveLeadsDetails" element={<ExecutiveLeadsDetails />} />
              <Route exact path="/Profile" element={<Profile />} />
              
              <Route exact path="/Executiveprofile" element={<ExecutiveProfile />} />
            



              {/* <Route exact path="/Executives" element={<><Executives /></>} /> */}
              <Route exact path="/Executivesales" element={<><Executivesales /></>} />

              {/* <Route exact path="/sales" element={<><Sales /></>} /> */}
              <Route exact path="/Executives" element={<><Executives /></>} />
              <Route exact path="/Executivedetails" element={<><Executivedetails /></>} />
              <Route exact path="/Executivedetailsnext" element={<><Executivedetailsnext /></>} />
              <Route exact path="/Executivesallotment" element={<><Executivesallotment /></>} />
            </Routes>
          </main>
        </div>
      )
    }



    else {
      body = (
        <div
        >
          <main>
            <Controller />
            <Routes>
              <Route exact path="/" element={<><Vieworg /></>} />
              <Route exact path="/organization" element={<><Organization /></>} />
            </Routes>
          </main>
        </div>
      );
    }
    return <Router>{body}</Router>;
  }
}

export default Routers;
