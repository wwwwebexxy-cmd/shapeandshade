import styles from "./Services.module.css";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Interior Design",
    image: "/our-service-one.jpg"
  },
  {
    title: "Commercial & Residential Fit-Outs",
    image: "/our-service-two.jpg"
  },
  {
    title: "Custom Joinery & Upholstery",
    image: "/our-service-three.jpg"
  },
  {
    title: "Curtains, Blinds & Soft Furnishings",
    image: "/our-service-four.png"
  },
  {
    title: "Shade Structures & Car Parking",
    image: "/shade_structures.png"
  },
  {
    title: "Office Furniture & Workstations",
    image: "/office_furniture.png"
  }
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="section-title text-gradient">Our Services</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="section-subtitle">
            LET'S WORK TOGETHER! We offer a complete suite of interior design, joinery, and outdoor shade solutions.
          </p>
        </ScrollReveal>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={0.2 + (index * 0.1)}>
              <div className={styles.card}>
                <img src={service.image} alt={service.title} className={styles.cardImage} />
                <div className={styles.overlay}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
