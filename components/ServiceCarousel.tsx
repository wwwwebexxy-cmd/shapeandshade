"use client";

import React from "react";
import styles from "./ServiceCarousel.module.css";
import ScrollReveal from "./ScrollReveal";

const allServices = [
  { title: "Interior Design", image: "/interior_design.png" },
  { title: "Fit-Out Custom Furniture", image: "/fitout_furniture.png" },
  { title: "Joinery Upholstery", image: "/joinery_upholstery.png" },
  { title: "Soft Furnishings Curtains", image: "/soft_furnishings.png" },
  { title: "Blinds Shade Structures", image: "/blinds_shades.png" },
  { title: "Car Parking Shades", image: "/shade_structures.png" },
  { title: "Office Furniture & Workstations", image: "/office_furniture.png" },
  { title: "Storage Solutions", image: "/our-service-one.jpg" },
  { title: "Sofa & Chair Upholstery", image: "/our-service-three.jpg" },
  { title: "Bedroom & Living room Recreation", image: "/our-service-two.jpg" },
  { title: "Wallpaper & Wall decor", image: "/our-service-four.png" },
  { title: "Paneling & Cladding", image: "/paneling_cladding.png" },
  { title: "Hospital Furniture", image: "/hospital_furniture.png" },
  { title: "Kitchen & Wardrobe", image: "/kitchen_wardrobe.png" },
];

export default function ServiceCarousel() {
  return (
    <section className="py-20 overflow-hidden bg-white" id="services">
      <div className="container mb-12">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="section-title text-gradient text-center">Comprehensive Services</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="section-subtitle text-center mx-auto">
            From bespoke interior design to custom fit-outs and shading solutions, we bring your vision to life.
          </p>
        </ScrollReveal>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {allServices.map((service, index) => (
            <div key={index} className={styles.card}>
              <img src={service.image} alt={service.title} className={styles.cardImage} />
              <div className={styles.overlay}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
