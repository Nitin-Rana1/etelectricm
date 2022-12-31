import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import GalleryPics from "../components/gallery/galleryPics";
import LandingPhoto from "../components/LandingPhoto";
import PopUp from "../components/PopUp";
import styles from "../styles/Gallery.module.scss";

export default function Gallery() {
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
      <main className={styles.gallery}>
        <PopUp open={showPopUp} closing={() => setShowPopUp(false)} />
        <LandingPhoto
          mobileImg="/gallery/landingM.png"
          desktopImg="/gallery/landingM.png"
          handleContactClick={() => setShowPopUp(true)}
        />
        <h1>Gallery</h1>
        <section className={styles.images}>
          <GalleryPics />
        </section>
        <Footer handleContactClick={() => setShowPopUp(true)} type="other" />
      </main>
    </div>
  );
}
