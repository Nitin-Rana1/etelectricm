import styles from "../../styles/WhyChooseUs.module.scss";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useEffect, useState } from "react";
import { setgroups } from "process";
export default function Photo() {
  let onlyWidth = useWindowWidth();
  const [go, setGo] = useState(false);
  useEffect(() => {
    setGo(true);
  });
  return (
    <main className={styles.photo}>
      {go &&
        (onlyWidth < 768 ? (
          <Image
            className={styles.pic}
            src="/whyChooseUs/landingM.png"
            alt="ev features"
            fill
          />
        ) : (
          <Image
            className={styles.pic}
            src="/whyChooseUs/landingD.png"
            alt="ev features"
            fill
          />
        ))}
    </main>
  );
}
