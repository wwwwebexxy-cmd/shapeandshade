"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import styles from "./OurClients.module.css";

const clientLogos = [
  "https://shapesandshades.ae/wp-content/uploads/2026/09/maxresdefault-1-edited.jpg",
  "https://shapesandshades.ae/wp-content/uploads/2026/09/Four_Points_Logo_neu-1300-1-1024x394.png",
  "https://shapesandshades.ae/wp-content/uploads/2026/09/ADGPG-V2-1024x365.png",
  "https://shapesandshades.ae/wp-content/uploads/2026/09/unnamed.png",
  "https://shapesandshades.ae/wp-content/uploads/2026/09/logo.jpg"
];

export default function OurClients() {
  return (
    <section className="py-20 bg-zinc-950" id="our-clients">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="section-title text-gradient text-center mb-12">Our Clients</h2>
        </ScrollReveal>
        
        <div className={styles.logoGrid}>
          {clientLogos.map((logo, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 + (index * 0.1)}>
              <div className={styles.logoWrapper}>
                <img src={logo} alt={`Client ${index + 1}`} className={styles.logoImage} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
