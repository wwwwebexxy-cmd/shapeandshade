"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/#home" onClick={closeMenu}>
            <Image
              src="/shapes-shades-logo.webp"
              alt="Shapes & Shades Interior Studio"
              width={1178}
              height={683}
              priority
              className={styles.logoImage}
              sizes="(max-width: 768px) 170px, 220px"
            />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={styles.mobileToggle}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <div
          id="primary-navigation"
          className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ""}`}
        >
          <Link href="/#home" className={styles.navLink} onClick={closeMenu}>Home</Link>
          <Link href="/#about" className={styles.navLink} onClick={closeMenu}>About</Link>
          <Link href="/#services" className={styles.navLink} onClick={closeMenu}>Services</Link>
          <Link href="/#contact" className={styles.navLink} onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
