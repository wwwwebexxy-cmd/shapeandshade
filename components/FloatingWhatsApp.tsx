"use client";

import { FaWhatsapp } from "react-icons/fa";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/971545784247"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingBtn}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  );
}
