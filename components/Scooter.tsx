import { Button, Slider } from "@mui/material";
import { ChangeEvent, useState } from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image"
import { motion, Variants } from "framer-motion";
const cardVariants: Variants = {
  offscreen: {
    y: 300,
    rotate: -30,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};
function ScooterCard({side, pic, title, des, link}:{side: number, pic: string, title: string, des: string, link: string}){
    return (
        <main className={styles.scooterCard}>
            {side == 0 && 
            (<article className={styles.even}>
                <h2>{title}</h2>
                <p>{des}</p>
                <Button variant="text">Download Brochure</Button>
            </article>)
            }
            <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
            className={styles.imgContainer}>

            <motion.div className={styles.imgHolder}  variants={cardVariants}>
                <Image src={pic} alt="ev pic" fill/>
            </motion.div>
            </motion.div>
            {side == 1 && 
            (
                <article className={styles.odd}>
                <h2>{title}</h2>
                <p>{des}</p>
                <Button variant="text">Download Brochure</Button>
            </article>
            )
            }
        </main>
    )
}

export default function Scooter() {
    const [km, setKm] = useState(10);
  return (
    <main className={styles.scooter}>
      <section className={styles.ranges}>
      <h1>SCOOTER</h1>
      <h4>TAGGY  line</h4>
      <h2>Choose Your Requirement</h2>
        <div>Daily Use Km: {km}</div>
        <div className={styles.slider}>

        <Slider
        sx={{width: "100%"}}
        aria-label="Small steps"  value={km} onChange={(e, newValue)=> {if (typeof newValue == "number") setKm(newValue)}} step={10} marks    min={0}
        max={150}  valueLabelDisplay="auto"
        />
        </div>
      </section>
      <section>
        <ScooterCard side={0} pic="/scooty/s1.png" link="none" title="Scooty Name" des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque voluptatem minus sapiente facere vitae, doloremque voluptas ad"/>
        <ScooterCard side={1} pic="/scooty/s1.png" link="none" title="Scooty Name" des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque voluptatem minus sapiente facere vitae, doloremque voluptas ad"/>
        <ScooterCard side={0} pic="/scooty/s1.png" link="none" title="Scooty Name" des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque voluptatem minus sapiente facere vitae, doloremque voluptas ad"/>
        <ScooterCard side={1} pic="/scooty/s1.png" link="none" title="Scooty Name" des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque voluptatem minus sapiente facere vitae, doloremque voluptas ad"/>
      </section>
    </main>
  );
}
