import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialog: {
    maxHeight: "900px",
    maxWidth: "70vw",
    height: "fit-content",
    width: "1500px",
    top: "1vh",
    backgroundColor: "#1C1D21",
    padding: 0,
  },
  container: {
    alignItems: "unset",
    height: "100vh",
  },
  noPadding: {
    paddingTop: 0,
  },
}));
function teacherCVpopup(props) {
  
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if(window.innerWidth <= 450){
      setIsMobile(true)
    }
  },[])

  const classes = useStyles();

  return (
    <Dialog
      classes={{ container: classes.container, paper: classes.dialog }}
      open={props.open}
      onClose={props.handleClose}
      fullWidth
    >
      <DialogContent classes={{ noPadding: classes.noPadding }}>
        <div className={isMobile ? "cathedratic vh-60 p-1" : "cathedratic vh-60 p-3 " + props.className}>
          <div className="col-12 col-md-6 px-2">
            {
              !isMobile ?
                <img className="cathedraticLogo" src="/img/Recurso5.svg"  alt="" />
              :
                <img className="w-100" src={props.responsiveImage}  alt="" />
            }
            
            <br />
            <br />
            <div className={isMobile ? "w-100 px-1" : "w-75 px-2"}>
            <small className="white">{props.description}</small>
            </div>
            <br />
            {!isMobile && <br />}
            <h2 className="white header-text-background fontsize-3 w-75">{props.name}</h2>
            <br />
            <p className="white">{props.title}</p>
            <br />
         
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default teacherCVpopup;
