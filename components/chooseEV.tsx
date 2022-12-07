import { Button } from "@mui/material";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
function ChooseEvCard({ pic, title }: { pic: string; title: string }) {
  return (
    <main className={styles.chooseEvCard}>
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
        <Image src={pic} alt="ev pic" fill objectFit="contain" />
        {/* <img src={pic} alt="ev pic"/> */}
      </div>
      <div className={styles.viewMore}>
        <a href={"#" + title}>
          <Button variant="contained">View More</Button>
        </a>
      </div>
    </main>
  );
}

export default function ChooseEV() {
  return (
    <main className={styles.chooseEv}>
      <h2>Choose Your EV</h2>
      <ChooseEvCard pic="/img/ev3.png" title="Scooter" />
      <ChooseEvCard pic="/img/ev1.jpg" title="Bike" />
    </main>
  );
}
