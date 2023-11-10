import { InlineIcon } from '@iconify/react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Dashboardicon from "../pages/image/dashboard.png";
import Producticon from "../pages/image/product.png";
import Salesicon from "../pages/image/sales.png";
import Employeeicon from "../pages/image/executives.png";
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import Leadsicon from "../pages/image/leads.png";
import Allotmenticon from "../pages/image/allotment.png";
import Analysisicon from "../pages/image/analysis.svg";
import Settingicon from "../pages/image/Setting.png";




// Admin Portal Drawer

export const all_admin_option = [
    { id: 0, name: "Dashboard"  , icon: <img src={Dashboardicon} style={{width: "100%", height: "100%"}} /> ,link: "/newdashboard" },
    { id: 1, name: "Product"  , icon: <img src={Producticon} style={{width: "100%", height: "100%"}} />, link: "/product" },
    { id: 2, name: "Sales",icon:<img src={Salesicon} style={{width:"100%",height:"100%",color:"white"}}/>  , link: "/Adminsales" },
   
    { id: 3, name: "Employees",  icon: <img src={Employeeicon} style={{width: "100%", height: "100%"}} />, link: "/Employee" },
   
    {
        id: 5, name: "Lead", icon: <img src={Leadsicon} style={{width: "100%", height: "100%"}} />, link: "/AdminNewLead"},
          
        
    
    { id: 6, name: "Allotment", icon: <img src={Allotmenticon} style={{width: "100%", height: "100%"}} />, link: "/Adminallotment" },
    { id: 6, name: "Analysis", icon: <img src={Analysisicon} style={{width: "100%", height: "100%"}} />, link: "/analysis" },
    

    {
        id: 7, name: "Setting", icon: <img src={Settingicon} style={{width: "100%", height: "100%"}} /> , link: "/setting"
      
    },


];


// Manager Portal Drawer


export const all_manager_option = [
    { id: 0, name: "Dashboard"  , icon: <img src={Dashboardicon} style={{width: "100%", height: "100%"}} /> ,link: "/Managerdashboard" },
    { id: 1, name: "Product"  , icon: <img src={Producticon} style={{width: "100%", height: "100%"}} />, link: "/managerproduct" },
    { id: 2, name: "Sales",icon:<img src={Salesicon} style={{width:"100%",height:"100%",color:"white"}}/>  , link: "/Managersales" },
   
    { id: 3, name: "Executives",  icon: <img src={Employeeicon} style={{width: "100%", height: "100%"}} />, link: "/Executives" },
    
    
    {
        id: 5, name: "Lead", icon: <img src={Leadsicon} style={{width: "100%", height: "100%"}}/>,link: "/ManagerNewLead",
         expand: true,
     
    },
    { id: 6, name: "Allotment", icon: <img src={Allotmenticon} style={{width: "100%", height: "100%"}} />, link: "/Managerallotment" },
    
    {
        id: 7, name: "Setting", icon: <img src={Settingicon} style={{width: "100%", height: "100%"}} /> , link: "/Managersetting"
        
    },


];

// Executive Portal Drawer


export const all_executive_option = [
    { id: 0, name: "Dashboard"  , icon: <img src={Dashboardicon} style={{width: "100%", height: "100%"}} /> ,link: "/Executivesdashboard" },
    { id: 1, name: "Product"  , icon: <img src={Producticon} style={{width: "100%", height: "100%"}} />, link: "/Executivesproducts" },
    { id: 2, name: "Sales",icon:<img src={Salesicon} style={{width:"100%",height:"100%",color:"white"}}/>  , link: "/Executivesales" },
  
    { id: 2, name: "Leads",icon:<img src={Leadsicon} style={{width:"100%",height:"100%",color:"white"}}/>  , link: "/ExecutiveLeads" },
    { id: 6, name: "Allotment", icon: <img src={Allotmenticon} style={{width: "100%", height: "100%"}} />, link: "/Executivesallotment" },
]


















// airport_shuttle

export const all_super_admin_options = [
  
];
export const all_customer_options = [
   
];


