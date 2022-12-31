import styles from "../../styles/Gallery.module.scss";
import evsData from "../../data/evs";
import Image from "next/image";
export default function GalleryPics() {
  return (
    <main className={styles.galleryPics}>
      {evsData.map((ev, i) => {
        return (
          <div className={styles.pic}>
            <Image fill src={ev.imageUrl} alt={ev.brand + ev.name} />
          </div>
        );
      })}
    </main>
  );
}
