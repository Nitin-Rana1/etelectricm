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
import { useEffect, useState } from "react";
import { minHeight } from "@mui/system";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopUp({open, closing}:{open: boolean, closing: ()=> void}) {
  // const [open, setOpen] = useState(state);
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [city, setCity] = useState("");
  const [thankYou, setThankYou] = useState(false);
  const handleClickOpen = () => {
    // setOpen(true);
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
      closing();
      setThankYou(false);
    }, 900);
  }

  return (
    <main className={styles.popUp}>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={closing}
        aria-describedby="alert-dialog-slide-description"
      >
        {thankYou ? 
        <DialogContent sx={{ minHeight: "55vh", display: "grid", justifyContent: "center", textAlign: "center"}}>
          <DialogContentText
          sx={{ marginBottom: "1.5em", marginTop: "1.2em",fontSize: "1.8em", color: "#1d8a33"}}
          id="alert-dialog-slide-description"
        >
         Thanks
        </DialogContentText>

        <DialogContentText
          sx={{ marginBottom: "1.5em", marginTop: "1.2em", fontSize: "1.8em",  color: "#1d8a33" }}
          id="alert-dialog-slide-description"
        >
         Let&apos;s Go Green Together!!
        </DialogContentText>
      </DialogContent>
        : 
        <>
        <DialogTitle sx={{fontSize: "1.2em", color: "#1d8a33", fontWeight: "bold"}}>Your First step to Go Green</DialogTitle>

        <DialogContent sx={{display: "grid", justifyContent: "center"}}>
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
        <Button variant="text" sx={{marginRight: "2em"}} onClick={closing}>
            Cancel
          </Button>
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