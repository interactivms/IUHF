import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from "@material-ui/core";
import Link from "next/link";

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
              src={props.videoLink}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Nuestros Líderes IUHF"
            ></iframe>
            <br />
            <div className="lion-BG pb-5">
            <div className="row w-100 mx-0 p-3">
              <div className="col-12">
              <h2 className="blue">{props.title}</h2>
              </div>
            </div>
            <div className="row w-100 mx-0 p-3">
            <div className="col-12">
            <p className="white"><span className="blue">Docente: </span>{props.teacher}</p>
            <br />
            <p className="white"><span className="blue">Duración: </span>{props.duration}</p>
            <br />
            <p className="white"><span className="blue">Horarios: </span>{props.horarios}</p>
            <br />
            <p className="white"><span className="blue">Fechas: </span>{props.date}</p>
            <br />
            <p className="white"><span className="blue">Inversión sin certificación: </span>{props.inversion}</p>
            
            
            </div>
            </div>
            <div className="row mx-0">
              <div className="col d-flex justify-content-center">
                <Link  href="/especialidad"><p className="p-2 pointer white bg-gradient-light br-15">Consultar especialidad</p></Link>
              </div>
            </div>
            <br />
            
            <div className="row mx-0">
              <div className="col-12">
                <form action="">
                  <div className="row p-1">
                    <div className="col-12 d-flex justify-content-center">
                    <h2 className="white">¡Inscríbete ya!</h2>
                    </div>
                  </div>
                  <br />
                  <div className="row p-1">
                    <div className="col-12 d-flex justify-content-center">
                      <input className="popupInput" placeholder="Nombre" type="text" />
                    </div>
                  </div>
                  <div className="row p-1">
                    <div className="col-12 d-flex justify-content-center">
                      <input className="popupInput" placeholder="Correo" type="text" />
                    </div>
                  </div>
                  <div className="row p-1">
                    <div className="col-12 d-flex justify-content-center">
                      <textarea className="p-3" defaultValue="Me gustaría inscribirme al curso..." type="text" />
                    </div>
                  </div>

                  <div className="row p-1">
                    <div className="col-12 d-flex justify-content-center">
                      <button className="p-2 pointer white bg-gradient-light br-15 border-none">Enviar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            </div>
      </DialogContent>
    </Dialog>
  );
}

export default popup;
