// import Logo3 from "../../images/navbar/logo.png"
// import logo2 from "../../images/navbar/logo.svg";
// import Japan from "../../images/navbar/japanflag.png";
// import Norway from "../../images/navbar/Flag_of_Norway.svg.png";
// import Germany from "../../images/navbar/Germany.png";
// // import UK from "../../images/navbar/UK.jpg";
// import PWC from "../../images/navbar/PwC.png";
// import "./index.css";
// import { useState } from "react";
// import Button from '@mui/material/Button';
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import FileSaver from 'file-saver'
// // import saveAs from 'file-saver'
// // import ImageFile from "../../images/navbar/logo_Horizontal.png";


// const Navbar = () => {




//   const [colorChange, setColorchange] = useState(false);
//   const navigate = useNavigate()
//   const changeNavbarColor = () => {
//     if (window.scrollY >= 5) {
//       setColorchange(true);
//     } else {
//       setColorchange(false);
//     }
//   };
//   window.addEventListener("scroll", changeNavbarColor);

//   // const downloadImage = () => {
//   //   saveAs([<ImageFile/>], 'image.png') 
//   // }
//   function sayHello() {
//     // var blob = new Blob([require('../../images/navbar/logo_Horizontal.jpg')], {
//     //   type: "text/plain;charset=utf-8"
//     // });
//     FileSaver.saveAs(require('../../images/../images/navbar/logo_Horizontal.jpg'), "image.png");
//   }

//   return (
//     <>

//       <div className={colorChange ? "main-navbar main-change-background-color" : "main-navbar"} >
//         <div className="main-navabar-toll-free">
//           <p>Toll Free : 1800-345-7111 <i>(Timing 10:00 AM-6:00 PM on working days)</i></p>
//           <b
//             download
//             onClick={sayHello} style={{ color: "red", fontSize: 10, cursor: "pointer" }}>
//             <i className="fa fa-download" />
//             Click here to download MIO Logo
//           </b>
//         </div>
//         <div className="main-navbar-section">

//           <div className="main-navbar-images">
//             <Link to="/" style={{ textDecoration: "none" }}><img className="main-navbar-logo1" src={Logo3} alt="Loading..." /></Link>
//           </div>


//           <div className="main-nav-button-section" style={{ display: "flex" }}>
//             <div>
//               <p className="japan-font">Investment Promotion Advisors</p>
//               <div style={{ display: "flex", }}>
//                 <div className="logo-margin">
//                   <img className="main-navbar-logo9" src={PWC} alt="Loading..." />
//                   {/* <p className="norway-font">Germany</p>s */}
//                 </div>

//               </div>
//             </div>
//             <div>
//               <p className="japan-font">Country Partners</p>
//               <div style={{ display: "flex", }}>
//                 <div className="logo-margin">
//                   <img className="main-navbar-logo3" src={Japan} alt="Loading..." />
//                   <p className="japan-font">Japan</p>
//                 </div>
//                 <div className="logo-margin">
//                   <img className="main-navbar-logo5" src={Germany} alt="Loading..." />
//                   <p className="norway-font">Germany</p>
//                 </div>
//                 <div className="logo-margin">
//                   <img className="main-navbar-logo5" src={Norway} alt="Loading..." />
//                   <p className="norway-font">Norway</p>
//                 </div>
//               </div>
//             </div>
//             <img className="main-navbar-logo2" src={logo2} alt="Loading..." />
//             <div className="main-navbar-buttons">
//               <Button variant="contained" onClick={() => { navigate("/login") }} className="main-animated-button1" style={{ marginRight: 10 }}>LOGIN</Button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Navbar;






