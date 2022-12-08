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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function LandingFaceRent() {
  let onlyWidth = useWindowWidth();
  const [go, setGo] = useState(0);
  useEffect(() => {
    setGo(1);
  }, []);
  return (
    <main className={styles.rent}>
      {go == 1 &&
        (onlyWidth < 768 ? (
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
      <h1>EV Vahan Rent</h1>
      <span>Lorem Epsum De Dann</span>
      <h2>Ye Aram ka Mamla hai!!</h2>
      {go == 1 && <Button variant="contained">View More</Button>}
    </main>
  );
}
function LandingFaceSell() {
    let onlyWidth = useWindowWidth();
    const [go, setGo] = useState(0);
    useEffect(() => {
      setGo(1);
    }, []);
    return (
      <main className={styles.rent}>
        {go == 1 &&
          (onlyWidth < 768 ? (
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
        <h1>EV Vahan Sell</h1>
        <span>Lorem Epsum De Dann</span>
        <h2>Ye Aram ka Mamla hai!!</h2>
        {go == 1 && <Button variant="contained">View More</Button>}
      </main>
    );
  }
export default function LandingFace() {
  return (
    <main className={styles.landingFace}>
      <Carousel showThumbs={false} infiniteLoop interval={2000} >
        <div className={styles.carousel}>
          <LandingFaceRent />
        </div>
        <div className={styles.carousel}>
          <LandingFaceSell />
        </div>
      </Carousel>
    </main>
  );
}
