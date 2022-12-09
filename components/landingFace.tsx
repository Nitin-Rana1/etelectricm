import { Button } from "@mui/material";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
//caro

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
// Throttled values
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size/throttled";
import { motion } from "framer-motion";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

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
      <motion.h1
        initial={{ y: "-25vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1, duration: 0.5 } }}
      >
        Powering your journey with sustainable energy
      </motion.h1>
      {/* <h1>Powering your journey with sustainable energy</h1> */}
      {/* <motion.span
        initial={{ x: "-55vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1, duration: 1 } }}
      >
        Sell
      </motion.span> */}
      <motion.h2
        initial={{ y: "25vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1, duration: 1.5 } }}
      >
        Experience the future of transportation with our electric vehicle
        rentals and sales
      </motion.h2>
      {go == 1 && <button> View More
       </button>}
       
    </main>
  );
}

export default function LandingFace() {
  // const [showArrows, setShowArrows] = useState(false);
  // const [go, setGo] = useState(false);
  // const onlyWidth = useWindowWidth();
  // useEffect(() => {
  //   if (onlyWidth > 768) setShowArrows(true);
  //   setGo(true);
  // }, []);
  const taglineS1 = "Powering your journey with sustainable energy";
  const taglineS3 =
    "Experience the future of transportation with our electric vehicle rentals and sales";
  return (
    <main className={styles.landingFace}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={2}
        className={styles.cP}
        // isPlaying
        // interval={5000}
        // infinite
      >
        <Slider className={styles.cP}>
          <Slide index={0}>
            <LandingFaceSell />
          </Slide>
          <Slide index={1}>
            <LandingFaceSell />
          </Slide>
        </Slider>
        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
    </main>
  );
}
