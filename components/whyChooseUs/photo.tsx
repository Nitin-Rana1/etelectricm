import styles from "../../styles/WhyChooseUs.module.scss";
import Image from "next/image";
export default function Photo() {
  return (
    <main className={styles.photo}>
      <Image alt="whyChooseUs" src="/landing/whyChooseUs.png" fill />
    </main>
  );
}
