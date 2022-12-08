import { Button } from "@mui/material";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

//
// Throttled values
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size/throttled";

export default function LandingFace() {
  let onlyWidth = useWindowWidth();
  const [go, setGo] = useState(0);
  console.log(onlyWidth);
  useEffect(()=>{
    setGo(1);
  },[]);
  return (
    <main className={styles.landingFace}>
      {go == 1 && (onlyWidth < 768 ? (
        <Image
          className={styles.pic}
          src="/landing/l1.jpg"
          alt="ev scooty pic"
          fill
        />
      ) : (
        <Image
          className={styles.pic}
          src="/landing/l2.png"
          alt="ev scooty pic"
          fill
        />
      ))}
      <h1>EV Vahan</h1>
      <span>Lorem Epsum De Dann</span>
      <h2>Ye Aram ka Mamla hai!!</h2>
      {go == 1 && <Button variant="contained">View More</Button>}
    </main>
  );
}
