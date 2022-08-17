import React from "react";
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
    top: "5vh",
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
  
  const classes = useStyles();

  return (
    <Dialog
      classes={{ container: classes.container, paper: classes.dialog }}
      open={props.open}
      onClose={props.handleClose}
      fullWidth
    >
      <DialogContent classes={{ noPadding: classes.noPadding }}>
        <div className={"cathedratic vh-60 p-3 " + props.className}>
          <div className="col-12 col-md-6 px-2">
          <img className="cathedraticLogo" src="/img/Recurso 5.svg"  alt="" />
          <br />
          <br />
          <div className="w-75 px-2">
          <small className="white">{props.description}</small>
          </div>
          <br />
          <br />
          <h2 className="white header-text-background fontsize-3 w-75">{props.name}</h2>
          <br />
          <p className="white">{props.title}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default teacherCVpopup;
