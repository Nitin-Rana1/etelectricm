import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Bike from "../components/Bike";
import ChooseEV from "../components/chooseEV";
import Footer from "../components/Footer";
import LandingFace from "../components/landingFace";
import PopUp from "../components/PopUp";
import Scooter from "../components/Scooter";
import Para from "../components/whyChooseUs/para";
import Photo from "../components/whyChooseUs/photo";
import styles from "../styles/WhyChooseUs.module.scss";

export default function WhyChooseUs() {
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
      <main className={styles.whyChooseUs}>
        <PopUp open={showPopUp} closing={() => setShowPopUp(false)} />
        <Photo />
        <Para />
        <Footer handleContactClick={() => setShowPopUp(true)} />
      </main>
    </div>
  );
}
