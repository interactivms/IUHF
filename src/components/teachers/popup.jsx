import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialog: {
    maxHeight: "800px",
    height: "fit-content",
    width: "1500px",
    top: "5vh",
    backgroundColor: "#1C1D21",
    padding: 0
  },
  container: {
    alignItems: "unset",
    height: "100vh",
  },
  noPadding: {
    paddingTop: 0
  }
}));
function popup(props) {

  const classes = useStyles();
  return (
    <Dialog
      classes={{ container: classes.container, paper: classes.dialog }}
      open={props.open}
      onClose={props.handleClose}
    >
      <DialogContent classes={{ noPadding: classes.noPadding }}>
            <iframe
            className="w-100"
              width="550"
              height="350"
              src="https://player.vimeo.com/video/737168646?h=a622836f1a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Nuestros Líderes IUHF"
            ></iframe>
            <br />
            <div className="row w-100">

            </div>
      </DialogContent>

      <DialogActions>
        <Button className="white" onClick={() => props.handleClose()}> <span className="white">Cerrar</span> </Button>
      </DialogActions>
    </Dialog>
  );
}

export default popup;
