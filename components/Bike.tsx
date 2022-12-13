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
  brand,
  range,
  handleContactClick
}: {
  side: number;
  pic: string;
  title: string;
  brand: string;
  range: string;
  handleContactClick: ()=> void;
}) {
  return (
    <main className={styles.scooterCard}>
      {side == 0 && (
        <article className={styles.even}>
          <h2>{title}</h2>
          <h3>{brand}</h3>
          {listFromRange(range)}
          {/* <Button variant="text">Download Brochure</Button> */}
        </article>
      )}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className={styles.imgContainer}
      >
        <motion.div onClick={handleContactClick} className={styles.imgHolder} variants={cardVariants}>
          <Image src={pic} alt="ev pic" fill />
        </motion.div>
      </motion.div>
      {side == 1 && (
        <article className={styles.odd}>
          <h2>{title}</h2>
          <h3>{brand}</h3>
          {listFromRange(range)}
          {/* <Button variant="text">Download Brochure</Button> */}
        </article>
      )}
    </main>
  );
}
function listFromRange(range: string) {
  let shortArr = [
    "House Wife",
    "Students for tutor",
    "Business with local deliveries (grocery shop)",
    "Small Businesses",
  ];
  let mediumArr = [
    "Real Estate broker",
    "Salesman",
    "Delivery",
    "Ola / Uber / Rapido partner",
  ];
  let longArr = [
    "Sales",
    "Ola / Uber / Rapido partner",
    "Delivery Boy",
    "Office / Service worker",
  ];
  let dataArr = shortArr;
  if (range == "medium") dataArr = mediumArr;
  else if (range == "long") dataArr = longArr;
  return (
    <div className={styles.ul}>
      {range == "short" && <h3>Best for: Local Commuting</h3>}
      {range == "medium" && <h3>Best for: Intra City Commuting</h3>}
      {range == "long" && <h3>Best for: Inter City Commuting</h3>}

      <ul>
        {dataArr.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}
function gimmeRange(n: number) {
  if (n <= 75) return "short";
  if (n <= 100) return "medium";
  return "long";
}
export default function Bike({
  handleContactClick,
}: {
  handleContactClick: () => void;
}) {
  const [km, setKm] = useState(105);
  const data = useMemo(() => {
    return evsData.filter(
      (ev) => ev.range == gimmeRange(km) && ev.type == "Bike"
    );
  }, [km]);

  return (
    <main className={styles.scooter}>
      <section className={styles.ranges}>
        <h1>BIKE</h1>
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
            min={65}
            max={120}
            valueLabelDisplay="auto"
          />
        </div>
      </section>
      <section className={styles.allCards}>
        {data.map((ev, index) => {
          return (
            <ScooterCard
              key={index}
              side={index % 2}
              pic={ev.imageUrl}
              title={ev.name}
              brand={ev.brand}
              range={ev.range}
              handleContactClick={handleContactClick}
            />
          );
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
