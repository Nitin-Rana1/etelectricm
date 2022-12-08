import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "next/head";
import Image from "next/image";
import Bike from "../components/Bike";
import ChooseEV from "../components/chooseEV";
import LandingFace from "../components/landingFace";
import Scooter from "../components/Scooter";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ET Motors</title>
        <meta name="description" content="Created By Nitin Rana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
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
