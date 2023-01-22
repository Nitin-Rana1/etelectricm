import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.scss";
export default function MenuBox({
  showMenu,
  handleContactClick,
  handleShowMenu,
}: {
  showMenu: boolean;
  handleContactClick: () => void;
  handleShowMenu: () => void;
}) {
  return (
    <main className={styles.menuBox}>
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
          <motion.div
            whileHover={{
              scale: 1.1,
              backgroundColor: "#75a0d0",
              transition: { duration: 0.3 },
            }}
          >
            <Link href="/">Home</Link>
          </motion.div>
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
    </main>
  );
}
