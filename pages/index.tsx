import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Bike from "../components/Bike";
import ChooseEV from "../components/chooseEV";
import LandingFace from "../components/landingFace";
import PopUp from "../components/PopUp";
import Scooter from "../components/Scooter";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    setTimeout(()=> setShowPopUp(true), 5000);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>ET Motors</title>
        <meta name="description" content="Created By Nitin Rana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {showPopUp && <PopUp/>}
        <LandingFace />
        <ChooseEV />
        <div id="Scooter">
          <Scooter />
        </div>
        <div id="Bike">
        <Bike />
        </div>
      </main>
    </div>
  );
}
