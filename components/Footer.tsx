import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Footer({
  handleContactClick,
  type,
}: {
  handleContactClick: () => void;
  type: string;
}) {
  return (
    <footer className={styles.footer}>
      <article>
        {type == "home" && (
          <section className={styles.noUnderline}>
            <h1>Quick List</h1>
            <a href="#home">
              <span>Home</span>
            </a>
            <a href="#Scooter">
              <span>Scooter</span>
            </a>
            <a href="#Bike">
              <span>Bike</span>
            </a>
            <span onClick={handleContactClick} className={styles.contact}>
              {" "}
              Contact Us
            </span>
          </section>
        )}
        {type == "other" && (
          <section className={styles.noUnderline}>
            <h1>Quick List</h1>
            <Link href="/gallery">
              <span>Gallery</span>
            </Link>
            <Link href="/">
              <span>Home</span>
            </Link>
            <Link href="/aboutus">
              <span>About Us</span>
            </Link>
            <span onClick={handleContactClick} className={styles.contact}>
              {" "}
              Contact Us
            </span>
          </section>
        )}
        <section>
          <h1>Address</h1>
          <span>Sahid Nagar | CRP</span>
          <span>Squarel</span>
          <span>Bhubaneswar</span>
          <span className={styles.callUs}>Call Us:-</span>
          <span>
            <a href="tel:+916742547339">6742547339</a>
          </span>
          <span>
            <a href="tel:+919337903630">9337903630</a>
          </span>
          <span className={styles.callUs}>Mail Us:-</span>
          <span>
            <a href="mailto:etelectricm@gmail.com">etelectricm@gmail.com</a>
          </span>
        </section>
      </article>
      {/* <div className={styles.icons}></div> */}
      <hr />
      <div className={styles.promote}>
        <div className={styles.vertical}>
          <span>
            <a href="https://www.instagram.com/featuresm.digitalserviceanswer/?hl=en">
              FeatureSM
            </a>
          </span>
          <span>
            <a href="https://nitin-rana-portfolio.vercel.app/">Web Dev NR</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
