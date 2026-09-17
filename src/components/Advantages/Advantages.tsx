import Reveal from "@/components/Reveal/Reveal";
import { advantages } from "@/lib/data";
import styles from "./Advantages.module.css";

export default function Advantages() {
  return (
    <section id="advantages" className={`section ${styles.advantages}`}>
      <div className="container">
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Преимущества</p>
          </Reveal>
          <Reveal as="h2" delay={80} className={styles.title}>
            Почему заказчики остаются с нами до сдачи ключей
          </Reveal>
        </div>

        <ul className={styles.grid}>
          {advantages.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 90}>
              <div className={styles.card}>
                <span className={styles.marker} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
