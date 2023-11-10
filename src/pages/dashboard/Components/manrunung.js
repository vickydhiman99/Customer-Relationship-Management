
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Container = ({ children }) => (
  <Box
    sx={{
      width: "660.05px",
      height: "108.46px",
      position: "relative",left:"25%"
    }}
  >
    {children}
  </Box>
);

const WhiteBackground = () => (
  <Box
    sx={{
      width: "660.05px",
      height: "102.76px",
      top: "5.71px",
      overFlow: "hidden",
      position: "absolute",
      background: "white"
    }}
  />
);

const GrayBackground = () => (
  <Box
    sx={{
      width: "660.05px",
      height: "22.26px",
      // left: "69.65px",
      top: "51.38px",
      position: "absolute",
      background: "#EBE8E8",
      borderRadius: "11.42px"
    }}
  />
);

const VerticalBars = () => (
  <Box
    sx={{
      width: "334.53px",
      height: "22.83px",
      left: "231.77px",
      top: "50.81px",

      position: "absolute"
    }}
  >
    <Box
      sx={{
        width: "22.26px",
        height: "0px",
        left: "0px",
        top: "0.57px",
        position: "absolute",
        transform: "rotate(90deg)",
        transformOrigin: "0 0",
        border: "0.57px rgba(0, 0, 0, 0.50) solid"
      }}
    />
    <Box
      sx={{
        width: "22.26px",
        height: "0px",
        left: "167.26px",
        top: "0.57px",
        position: "absolute",
        transform: "rotate(90deg)",
        transformOrigin: "0 0",
        border: "0.57px rgba(0, 0, 0, 0.50) solid"
      }}
    />
    <Box
      sx={{
        width: "22.26px",
        height: "0px",
        left: "334.53px",
        top: "0px",
        position: "absolute",
        transform: "rotate(90deg)",
        transformOrigin: "0 0",
        border: "0.57px rgba(0, 0, 0, 0.50) solid"
      }}
    />
  </Box>
);

const TextMarks = () => (
  <Box
    sx={{
      width: "661.79px",
      height: "10px",
      left: "20px",
      top: "77.07px",
      position: "absolute",
      display: "flex",
      justifyContent: "space-between"
    }}
  >
    {Array.from({ length: 20 }, (_, index) => (index + 1) * 10).map(
      (value, index) => (
        <Typography
          key={index}
          sx={{
            position: "absolute",
            left: `${index * 31.97}px`,
            top: "0px",
            color: value === 50 || value === 150 ? "black" : "#B2B0B0",
            fontSize: "7.99px",
            fontFamily: "Inter",
            fontWeight: value === 50 || value === 150 ? 600 : "normal",
            wordWrap: "break-word"
          }}
        >
          {value}
        </Typography>
      )
    )}
  </Box>
);

const Man = (props) => (
  <div style={{marginLeft:`${props.i-3}%`}}>
    {console.log(props.i)}

{
  props.i<100? <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="52"
      viewBox="0 0 53 52"
      fill="none"
    >
      <path
        d="M18.454 30.0626C19.6566 30.0626 20.6405 29.0786 20.6405 27.876C20.6405 26.6734 19.6566 25.6895 18.454 25.6895C17.2514 25.6895 16.2674 26.6734 16.2674 27.876C16.2674 29.0786 17.2514 30.0626 18.454 30.0626ZM14.5182 45.2591L15.6115 40.4487L17.9073 42.6353V49.1949H20.0939V40.9954L17.798 38.8088L18.454 35.529C19.8752 37.1689 22.0618 38.2622 24.467 38.2622V36.0756C22.3898 36.0756 20.6405 34.9823 19.7659 33.4517L18.6726 31.7025C18.2353 31.0465 17.5794 30.6092 16.8141 30.6092C16.4861 30.6092 16.2674 30.7185 15.9394 30.7185L10.2544 33.1237V38.2622H12.441V34.545L14.4089 33.7797L12.6596 42.6353L7.30255 41.542L6.86523 43.7285L14.5182 45.2591Z"
        fill="black"
      />
    </svg>:<svg viewBox="0 0 24 24"  width="33"
      height="52" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
      <path d="M13.9 2.999A1.9 1.9 0 1 1 12 1.1a1.9 1.9 0 0 1 1.9 1.899zM13.544 6h-3.088a1.855 1.855 0 0 0-1.8 1.405l-1.662 6.652a.667.667 0 0 0 .14.573.873.873 0 0 0 .665.33.718.718 0 0 0 .653-.445L10 9.1V13l-.922 9.219a.71.71 0 0 0 .707.781h.074a.69.69 0 0 0 .678-.563L12 14.583l1.463 7.854a.69.69 0 0 0 .678.563h.074a.71.71 0 0 0 .707-.781L14 13V9.1l1.548 5.415a.718.718 0 0 0 .653.444.873.873 0 0 0 .665-.329.667.667 0 0 0 .14-.573l-1.662-6.652A1.855 1.855 0 0 0 13.544 6z"></path>
      <path fill="none" d="M0 0h24v24H0z"></path></g></svg>
}

   
  </div>
);

const ProgressBar = ({ progress }) => (
  <>
    <Man i={progress} />

    <Box
      sx={{
        // width: "0px",
        height: "23px",
        // left: "70.22px",
        top: "51.95px",
        position: "absolute",
        background: "#53776B",
        borderRadius: "20px",
        width: `${progress}%`
      }}
    >
      {" "}
    </Box>
  </>
);

export default function CustomProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <Container>
      {/* <WhiteBackground /> */}

      <GrayBackground />
      <VerticalBars />
      <TextMarks />
      <ProgressBar progress={progress} />
    </Container>
  );
}


