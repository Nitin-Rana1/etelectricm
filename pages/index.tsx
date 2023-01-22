import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Bike from "../components/homePage/Bike";
import ChooseEV from "../components/homePage/chooseEV";
import Footer from "../components/Footer";
import LandingFace from "../components/landingFace";
import PopUp from "../components/PopUp";
import Scooter from "../components/homePage/Scooter";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowPopUp(true), 8000);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>ET Motors</title>
        <meta name="description" content="Created By Nitin Rana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} id="home">
        <PopUp open={showPopUp} closing={() => setShowPopUp(false)} />
        <LandingFace handleContactClick={() => setShowPopUp(true)} />
        <ChooseEV handleContactClick={() => setShowPopUp(true)} />
        <div id="Scooter">
          <Scooter handleContactClick={() => setShowPopUp(true)} />
        </div>
        <div id="Bike">
          <Bike handleContactClick={() => setShowPopUp(true)} />
        </div>
        <Footer handleContactClick={() => setShowPopUp(true)} type="home" />
      </main>
    </div>
  );
}
