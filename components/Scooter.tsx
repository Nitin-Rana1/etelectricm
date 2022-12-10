import { Button, Slider } from "@mui/material";
import { ChangeEvent, useMemo, useState } from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import evsData from "../data/evs";
const cardVariants: Variants = {
  offscreen: {
    y: 300,
    rotate: -30,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
function ScooterCard({
  side,
  pic,
  title,
  des,
  link,
  brand
}: {
  side: number,
  pic: string,
  title: string,
  des: string,
  link: string,
  brand: string,
}) {
  return (
    <main className={styles.scooterCard}>
      {side == 0 && (
        <article className={styles.even}>
          <h2>{title}</h2>
          <h3>{brand}</h3>
          <p>{des}</p>
          {/* <Button variant="text">Download Brochure</Button> */}
        </article>
      )}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className={styles.imgContainer}
      >
        <motion.div className={styles.imgHolder} variants={cardVariants}>
          <Image src={pic} alt="ev pic" fill />
        </motion.div>
      </motion.div>
      {side == 1 && (
        <article className={styles.odd}>
          <h2>{title}</h2>
          <p>{des}</p>
          {/* <Button variant="text">Download Brochure</Button> */}
        </article>
      )}
    </main>
  );
}
function gimmeRange(n: number) {
  if (n <= 75) return "short";
  if (n <= 100) return "medium";
  return "long";
}
export default function Scooter() {
  const [km, setKm] = useState(75);
  const data = useMemo(() => {
    return evsData.filter((ev) => ev.range == gimmeRange(km) && ev.type == "Scooter");
  }, [km]);

  return (
    <main className={styles.scooter}>
      <section className={styles.ranges}>
        <h1>SCOOTER</h1>
        {/* <h4>TAGGY line</h4> */}
        <h2>Choose Your Requirement</h2>
        <div>Daily Use Km: {km}</div>
        <div className={styles.slider}>
          <Slider
            sx={{ width: "100%" }}
            aria-label="Small steps"
            value={km}
            onChange={(e, newValue) => {
              if (typeof newValue == "number") setKm(newValue);
            }}
            step={10}
            marks
            min={50}
            max={150}
            valueLabelDisplay="auto"
          />
        </div>
      </section>
      <section className={styles.allCards}>
        {data.map((ev, index)=>{
          return(
            <ScooterCard
            key={index}
          side={index%2}
          pic={ev.imageUrl}
          link="none"
          title={ev.name}
          brand={ev.brand}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque voluptatem minus sapiente facere vitae, doloremque voluptas ad"
        />    
          )
        })}
        {data.length == 0 && (
          <div className={styles.outOfStocks}>
          <h2>{"Stocks are running fast, doesn't it?"}</h2>
          <h2>Catch one while you can</h2>
          </div>
        )}
      </section>
    </main>
  );
}
