import { Button } from "@mui/material";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
function ChooseEvCard({ pic, title }: { pic: string; title: string }) {
  return (
    <main className={styles.chooseEvCard}>
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
        <div className={styles.imgHolder}>
          <Image src={pic} alt="ev pic" fill/>
        </div>
        <div className={styles.viewMore}>
          <Button variant="contained">View More</Button>
        </div>
      </a>
    </main>
  );
}

export default function ChooseEV() {
  return (
    <motion.main
    
    className={styles.chooseEv}>
      <h2>Choose Your EV</h2>
      <section className={styles.bikeOrScooty}>
      <ChooseEvCard pic="/scooty/s1.png" title="Scooter" />
      <ChooseEvCard pic="/bike/b1.png" title="Bike" />
      </section>
    </motion.main>
  );
}
