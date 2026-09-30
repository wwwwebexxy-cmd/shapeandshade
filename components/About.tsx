import styles from "./About.module.css";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageWrapper}>
          <ScrollReveal direction="right" className={styles.imageMain}>
            <img 
              src="/about-single-img.png" 
              alt="Luxurious interior design" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }}
            />
          </ScrollReveal>
        </div>
        <div className={styles.textContent}>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="section-title text-gradient" style={{ textAlign: 'left', margin: 0 }}>About Us</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h3 className={styles.heading}>WE ARE A CREATIVE INTERIOR DECORATOR LOCATED IN AL AIN-ABU DHABI</h3>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className={styles.paragraph}>
              We offer a complete suite of interior design, joinery, and outdoor shade solutions. From full turn-key commercial fit-outs to bespoke residential soft furnishings, we bring your vision to life with precision and quality materials.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <p className={styles.paragraph}>
              Shapes and Shades Interior Design is a full-service studio based in Al Ain, Abu Dhabi. We combine interior design with in-house custom furniture manufacturing — sofas, beds, wardrobes, curtains, and blinds — so every space we touch is designed and built as one cohesive vision.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
