import { Button, Slider } from "@mui/material";
import { useState } from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image"
function BikeCard({side, pic, title, des, link}:{side: number, pic: string, title: string, des: string, link: string}){
    return (
        <main className={styles.bikeCard}>
            {side == 0 && 
            (<article className={styles.even}>
                <h2>{title}</h2>
                <p>{des}</p>
                <Button variant="text">Download Brochure</Button>
            </article>)
            }
            
            <div className={styles.imgHolder}>
                <Image src={pic} alt="ev pic" fill objectFit='contain'/>
            </div>
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

export default function Bike() {
    const [range, setRange] = useState(10);
    const [km, setKm] = useState(10);
  return (
    <main className={styles.bike}>
      <section className={styles.ranges}>
      <h1>BIKE</h1>
      <h4>Taggy line</h4>
      <h2>Choose Your Requirement</h2>
        <div>Select Range: {range}</div>
        <Slider
          aria-label="Small steps"  value={range} onChange={(e, newValue)=> {if (typeof newValue == "number") setRange(newValue)}} step={10} marks    min={0}
          max={150}  valueLabelDisplay="auto"
        />
        <div>Daily Use Km: {km}</div>
        <Slider
          aria-label="Small steps"  value={km} onChange={(e, newValue)=> {if (typeof newValue == "number") setKm(newValue)}} step={10} marks    min={0}
          max={150}  valueLabelDisplay="auto"
        />
      </section>
      <section>
        <BikeCard side={0} pic="/img/ev1.jpg" link="none" title="Bike Name" des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque voluptatem minus sapiente facere vitae, doloremque voluptas ad"/>
        <BikeCard side={1} pic="/img/ev2.jpg" link="none" title="Bike Name" des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque voluptatem minus sapiente facere vitae, doloremque voluptas ad"/>
        <BikeCard side={0} pic="/img/ev2.jpg" link="none" title="Bike Name" des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque voluptatem minus sapiente facere vitae, doloremque voluptas ad"/>
        <BikeCard side={1} pic="/img/ev1.jpg" link="none" title="Bike Name" des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque voluptatem minus sapiente facere vitae, doloremque voluptas ad"/>
      </section>
    </main>
  );
}
