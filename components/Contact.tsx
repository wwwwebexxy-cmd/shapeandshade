"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Contact.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`container ${styles.container}`}>

        {/* Left Column: Info Blocks */}
        <div className={styles.infoColumn}>
          <ScrollReveal direction="right" delay={0.1}>
            <div className={styles.infoBlock}>
              <span className={styles.icon}><FaPhoneAlt /></span>
              <span className={styles.infoText}>+971 54 578 4247</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className={styles.infoBlock}>
              <span className={styles.icon}><FaEnvelope /></span>
              <span className={styles.infoText}>Sales@shapesandshades.ae</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.3}>
            <div className={styles.infoBlock}>
              <span className={styles.icon}><FaMapMarkerAlt /></span>
              <span className={styles.infoText}>Industrial Area, Al Ain, Abu Dhabi – UAE</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Map */}
        <div className={styles.mapColumn}>
          <ScrollReveal direction="left" delay={0.2} style={{ width: '100%', height: '100%' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.1519384709363!2d55.763479!3d24.1991651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab74523a05825%3A0x9c31e236f76e9e12!2sShapes%20and%20shades%20interior%20design%20llc%20spc!5e1!3m2!1sen!2sin!4v1790423411011!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Google Maps"
              className={styles.mapIframe}
            ></iframe>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
