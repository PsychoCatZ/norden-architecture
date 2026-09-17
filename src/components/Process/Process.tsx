import Reveal from "@/components/Reveal/Reveal";
import { processSteps } from "@/lib/data";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <section id="process" className={`section ${styles.process}`}>
      <div className="container">
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Процесс</p>
          </Reveal>
          <Reveal as="h2" delay={80} className={styles.title}>
            Как строится работа над проектом
          </Reveal>
        </div>

        <ol className={styles.list}>
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.index} delay={i * 70}>
              <div className={styles.step}>
                <span className={styles.number}>{step.index}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
