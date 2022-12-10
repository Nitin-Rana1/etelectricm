import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { TextField } from "@mui/material";
import styles from "../styles/Home.module.scss";
import { nanoid } from "nanoid";
import { storage, db, auth } from "../fireb/firebApp";

import {
  setDoc,
  doc,
  DocumentData,
  onSnapshot,
  updateDoc,
  arrayUnion,
  serverTimestamp,
} from "firebase/firestore";
import { useState } from "react";
import { minHeight } from "@mui/system";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopUp() {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [city, setCity] = useState("");
  const [thankYou, setThankYou] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  async function handleSubmit() {
    let uid = nanoid();
    setThankYou(true);
    await setDoc(doc(db, "users", uid), {
      name: name,
      phoneNo: phoneNo,
      city: city,
      createdAt: serverTimestamp(),
    });
    setTimeout(()=>{
      setThankYou(false);
      handleClose();
    }, 1500);
  }

  return (
    <main className={styles.popUp}>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {thankYou ? 
        <DialogContent sx={{ minHeight: "55vh", display: "grid", justifyContent: "center", textAlign: "center"}}>
          <DialogContentText
          sx={{ marginBottom: "1.5em", marginTop: "1.2em",fontSize: "1.8em",}}
          id="alert-dialog-slide-description"
        >
         Thanks
        </DialogContentText>

        <DialogContentText
          sx={{ marginBottom: "1.5em", marginTop: "1.2em", fontSize: "1.8em", }}
          id="alert-dialog-slide-description"
        >
         Let&apos;s Go Green Together!!
        </DialogContentText>
      </DialogContent>
        : 
        <>
        <DialogTitle sx={{fontSize: "1.2em"}}>Your First step to Go Green</DialogTitle>

        <DialogContent>
          <DialogContentText
            sx={{ marginBottom: "1.5em", marginTop: "1.5em" }}
            id="alert-dialog-slide-description"
          >
            <TextField value={name} onChange={(e)=> setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          </DialogContentText>
          <DialogContentText
            sx={{ marginBottom: "1.5em" }}
            id="alert-dialog-slide-description"
          >
            <TextField
              value = {phoneNo}
              onChange={(e)=> setPhoneNo(e.target.value)}
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
            />
          </DialogContentText>
          <DialogContentText
            sx={{ marginBottom: "1.5em" }}
            id="alert-dialog-slide-description"
          >
            <TextField value={city} onChange={(e)=> setCity(e.target.value)} id="outlined-basic" label="City" variant="outlined" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
        </>
}
      </Dialog>
    </main>
  );
}