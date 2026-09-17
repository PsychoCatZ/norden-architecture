import Reveal from "@/components/Reveal/Reveal";
import { services } from "@/lib/data";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Услуги</p>
          </Reveal>
          <Reveal as="h2" delay={80} className={styles.title}>
            Проектируем пространство целиком — от фундамента до дверной ручки
          </Reveal>
        </div>

        <ul className={styles.list}>
          {services.map((service, i) => (
            <Reveal as="li" key={service.index} delay={i * 90}>
              <article className={styles.card}>
                <span className={styles.index}>{service.index}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
