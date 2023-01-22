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
import Para from "../components/whyChooseUs/para";
import LandingPhoto from "../components/LandingPhoto";
import styles from "../styles/WhyChooseUs.module.scss";

export default function WhyChooseUs() {
  const [showPopUp, setShowPopUp] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setShowPopUp(true), 8000);
  // }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>ET Motors</title>
        <meta name="description" content="Created By Nitin Rana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.whyChooseUs}>
        <PopUp open={showPopUp} closing={() => setShowPopUp(false)} />
        <LandingPhoto
          mobileImg="/whyChooseUs/landingM.png"
          desktopImg="/whyChooseUs/landingD.png"
          handleContactClick={() => setShowPopUp(true)}
        />
        <Para />
        <Footer handleContactClick={() => setShowPopUp(true)} type="other" />
      </main>
    </div>
  );
}
