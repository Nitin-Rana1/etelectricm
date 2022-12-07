import { Button } from '@mui/material'
import styles from '../styles/Home.module.scss'

export default function LandingFace(){
    return(
        <main className={styles.landingFace}>
            <h1>EV Vahan</h1>
            <span>LUX COZI</span>
            <h2>Ye Aram ka Mamla hai!!</h2>
            <Button variant="contained">Contained</Button>
        </main>
    )
}