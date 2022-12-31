import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { useEffect, useState } from "react";
import { setgroups } from "process";
import { motion } from "framer-motion";
import Link from "next/link";
export default function LandingPhoto({
  mobileImg,
  desktopImg,
  // showMenu,
  // handleShowMenu,
  handleContactClick,
}: {
  mobileImg: string;
  desktopImg: string;
  // showMenu: boolean;
  // handleShowMenu: () => void;
  handleContactClick: () => void;
}) {
  let onlyWidth = useWindowWidth();
  const [go, setGo] = useState(false);
  useEffect(() => {
    setGo(true);
  }, []);
  const [showMenu, setShowMenu] = useState(false);
  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <main className={styles.landingPhoto}>
      {showMenu && (
        <motion.div
          initial={{ x: -450, y: -200, rotate: 40 }}
          animate={{ x: 0, y: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className={styles.menu}
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              backgroundColor: "#75a0d0",
              transition: { duration: 0.3 },
            }}
          >
            <Link href="/whychooseus">Why Choose Us</Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              backgroundColor: "#75a0d0",
              transition: { duration: 0.3 },
            }}
          >
            <Link href="/gallery">Gallery</Link>
          </motion.div>
          {/* <motion.div
            whileHover={{
              scale: 1.1,
              backgroundColor: "#75a0d0",
              transition: { duration: 0.3 },
            }}
          >
            About Us
          </motion.div> */}
          <motion.div
            whileHover={{
              scale: 1.1,
              backgroundColor: "#75a0d0",
              transition: { duration: 0.3 },
            }}
            onClick={handleContactClick}
          >
            Contact Us
          </motion.div>
        </motion.div>
      )}
      <div className={styles.settingIconHolder}>
        <div className={styles.settingIcon}>
          <Image
            className={styles.humburger}
            src="/landing/humburger.png"
            alt="setting icon"
            fill
            onClick={handleShowMenu}
          />
        </div>
      </div>
      {go &&
        (onlyWidth < 768 ? (
          <Image
            className={styles.pic}
            src={mobileImg}
            alt="ev features"
            fill
          />
        ) : (
          <Image
            className={styles.pic}
            src={desktopImg}
            alt="ev features"
            fill
          />
        ))}
    </main>
  );
}
