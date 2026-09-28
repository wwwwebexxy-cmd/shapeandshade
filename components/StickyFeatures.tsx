"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StickyFeatures.module.css";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    id: 1,
    title: "Al Ain",
    description: "Serving residential and commercial clients across Al Ain.",
    image: "/al_ain_interior.png"
  },
  {
    id: 2,
    title: "Abu Dhabi",
    description: "Transforming spaces in the heart of Abu Dhabi.",
    image: "/abu_dhabi_interior.png"
  },
  {
    id: 3,
    title: "Dubai",
    description: "Premium interior design services in Dubai.",
    image: "/dubai_interior.png"
  },
  {
    id: 4,
    title: "Sharjah",
    description: "Expert fit-out solutions for Sharjah residents.",
    image: "/sharjah_interior.png"
  },
  {
    id: 5,
    title: "Ajman & Um al Quwain",
    description: "Custom joinery and upholstery across the Northern Emirates.",
    image: "/ajman_interior.png"
  },
  {
    id: 6,
    title: "Ras al Khaimah",
    description: "Delivering bespoke design to Ras al Khaimah.",
    image: "/rak_interior.png"
  }
];

export default function StickyFeatures() {
  return (
    <section id="features" className={styles.sectionContainer}>
      <div className="container">

        {/* Top Split Layout */}
        <div className={styles.splitLayout}>
          <div className={styles.textContent}>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="section-title text-gradient" style={{ textAlign: 'left', margin: 0 }}>Our Service Area</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className={styles.description}>
                WHERE ARE WE SERVE! We provide interior design and fit-out services across the UAE. Explore the regions we actively serve.
              </p>
            </ScrollReveal>
          </div>
          <div className={styles.imageContent}>
            <ScrollReveal direction="left" delay={0.2}>
              <img src="/our-area.jpg" alt="Our Service Area" className={styles.mainImage} />
            </ScrollReveal>
          </div>
        </div>

        {/* Movement Carts (Horizontal Slider) */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className={styles.sliderContainer}>
          <div className={styles.sliderTrack}>
            {features.concat(features).map((feature, index) => (
              <div key={`${feature.id}-${index}`} className={styles.slideCard}>
                <img src={feature.image} alt={feature.title} className={styles.slideImage} />
                <div className={styles.slideContent}>
                  <h3 className={styles.slideTitle}>{feature.title}</h3>
                  <p className={styles.slideDesc}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
