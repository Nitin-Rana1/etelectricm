import styles from "../styles/Home.module.scss";

export default function Footer({handleContactClick}:{handleContactClick: ()=> void}) {
  return (
    <footer className={styles.footer}>
      <article>
        <section>
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
          <span onClick={handleContactClick}>Contact Us</span>
        </section>
        <section>
          <h1>Address</h1>
          <span>Sahid Nagar | CRP</span>
          <span>Squarel</span>
          <span>Bhubaneswar</span>
          <span>6742547339</span>
          <span>9337903630</span>
          <span>
            <a href="mailto:etelectricm@gmail.com">etelectricm@gmail.com</a>
          </span>
        </section>
      </article>
      {/* <div className={styles.icons}></div> */}
      <hr />
      <div className={styles.promote}>
        <span>FeatureSM</span>
        <span>
          <a href="https://nitin-rana-portfolio.vercel.app/">Web Dev Nitin</a>
        </span>
      </div>
    </footer>
  );
}
