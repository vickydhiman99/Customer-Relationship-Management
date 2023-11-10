// import logo1 from "../../images/navbar/govt.png";
import Logo3 from "../../images/navbar/navbar-logo_Horizontal.png"
import logo2 from "../../images/navbar/logo.svg";
import "./index.css";
import { useState } from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logout from '../../router/containers/Lg_Cont'

const Navbar = () => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [colorChange, setColorchange] = useState(false);
  const navigate = useNavigate()
  const changeNavbarColor = () => {
    if (window.scrollY >= 5) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>

      <div style={{backgroundColor:"white"}} className={"navbar"}>

        <div className="navbar-images">
          <Link to="/" style={{textDecoration:"none"}}><img className="navbar-logo1" src={Logo3} alt="Loading..." /></Link>
        </div>
        <div className="navabar-toll-free">
          <p>Toll Free : 1800-345-7111 <i>(Timing 10:00 AM-6:00 PM on working days)</i></p>
        </div>

        <div className="nav-button-section" style={{ display: "flex" }}>

          <img className="navbar-logo2" src={logo2} alt="Loading..." />
          <div className="navbar-buttons">

           <Logout/>
           {/* <Image_upload/> */}
          </div>
          {/* <div className="navbar-buttons" onClick={handleOpen}>

           {/* <Logout/>
           <Image_upload/>

          </div> */}
        </div>
{/* <Modal
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleClose}
        // closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
              <Button  className="modal-button1" >Upload Image</Button>               
              <Button onClick={handleClose}  className="modal-button1" style={{left:10}}>Close</Button>               
          </Box>
        </Fade>
      </Modal> */}

      </div>
    </>
  );
};

export default Navbar;
