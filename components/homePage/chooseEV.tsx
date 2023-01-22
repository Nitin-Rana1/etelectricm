"use client";
import { Button } from "@mui/material";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
const cardVariantsLeft: Variants = {
  offscreen: {
    x: -200,
    rotate: 0,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const cardVariantsRight: Variants = {
  offscreen: {
    x: 200,
    rotate: -0,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
function ChooseEvCard({
  pic,
  title,
  side,
  handleContactClick,
}: {
  pic: string;
  title: string;
  side: string;
  handleContactClick: () => void;
}) {
  return (
    <main
      className={styles.chooseEvCard}
      //  onClick={handleContactClick}
    >
      <a href={"#" + title}>
        <div className={styles.titleButton}>
          {title == "Bike" ? (
            <Button variant="contained" className={styles.bike}>
              {title}
            </Button>
          ) : (
            <Button variant="contained" className={styles.scooter}>
              {title}
            </Button>
          )}
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          {side == "left" ? (
            <motion.div
              className={styles.imgHolder}
              variants={cardVariantsLeft}
            >
              <Image src={pic} alt="ev pic" fill />
            </motion.div>
          ) : (
            <motion.div
              className={styles.imgHolder}
              variants={cardVariantsRight}
            >
              <Image src={pic} alt="ev pic" fill />
            </motion.div>
          )}
        </motion.div>

        <div className={styles.viewMore}>
          <Button variant="contained">View More</Button>
        </div>
      </a>
    </main>
  );
}

export default function ChooseEV({
  handleContactClick,
}: {
  handleContactClick: () => void;
}) {
  return (
    <motion.main className={styles.chooseEv}>
      <h2>Choose Your EV</h2>
      <section className={styles.bikeOrScooty}>
        <ChooseEvCard
          handleContactClick={handleContactClick}
          pic="/ev/kinetic-green/s/zing.png"
          side="left"
          title="Scooter"
        />
        <ChooseEvCard
          handleContactClick={handleContactClick}
          pic="/ev/joy-e-bike/b/beast.png"
          side="right"
          title="Bike"
        />
      </section>
    </motion.main>
  );
}
