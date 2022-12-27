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

function LandingFaceSell({ mSrc, dSrc }: { mSrc: string; dSrc: string }) {
  let onlyWidth = useWindowWidth();
  const [go, setGo] = useState(0);
  useEffect(() => {
    setGo(1);
  }, []);
  return (
    <main className={styles.rent}>
      {go == 1 &&
        (onlyWidth < 768 ? (
          <Image className={styles.pic} src={mSrc} alt="ev scooty pic" fill />
        ) : (
          <Image className={styles.pic} src={dSrc} alt="ev scooty pic" fill />
        ))}
      <motion.h1
        initial={{ y: "-25vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0, duration: 0.5 } }}
      >
        Electrify your move
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
        animate={{ y: 0, opacity: 1, transition: { delay: 0, duration: 1.5 } }}
      >
        First Step to Future
      </motion.h2>
      {/* {go == 1 && <motion.button initial={{x: "20vw", opacity: 0}}
      animate={{x:0, opacity: 1, transition: {delay: 0, duration: 1}}}
      > View More
       </motion.button>} */}
    </main>
  );
}

export default function LandingFace() {
  return (
    <main className={styles.landingFace}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={2}
        className={styles.cP}
        isPlaying
        interval={4000}
        infinite
      >
        <Slider className={styles.cP}>
          <Slide index={0}>
            <LandingFaceSell mSrc="/landing/m1.png" dSrc="/landing/d2.png" />
          </Slide>
          <Slide index={1}>
            <LandingFaceSell mSrc="/landing/m2.png" dSrc="/landing/d2.png" />
          </Slide>
        </Slider>
      </CarouselProvider>
    </main>
  );
}
