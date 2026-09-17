import HeroGraphic from "@/components/graphics/HeroGraphic";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className="eyebrow">NORDEN Architecture</p>
          <h1 className={styles.title}>
            Архитектура,
            <br />
            которая говорит <em>тише</em>,
            <br />
            но остаётся дольше
          </h1>
          <p className={styles.lead}>
            Проектируем частные дома, квартиры и коммерческие пространства
            полного цикла — от концепции и планировочного решения до
            авторского надзора на стройке.
          </p>
          <div className={styles.ctas}>
            <a href="#contact" className="btn btn-primary">
              Обсудить проект
            </a>
            <a href="#projects" className="btn btn-ghost">
              Смотреть проекты
            </a>
          </div>

          <dl className={styles.stats}>
            <div>
              <dt>Лет практики</dt>
              <dd>12</dd>
            </div>
            <div>
              <dt>Завершённых объектов</dt>
              <dd>60+</dd>
            </div>
            <div>
              <dt>Средняя площадь</dt>
              <dd>250 м²</dd>
            </div>
          </dl>
        </div>

        <div className={styles.graphicWrap} aria-hidden="true">
          <HeroGraphic className={styles.graphic} />
        </div>
      </div>

      <a href="#services" className={styles.scrollCue} aria-label="Пролистать к разделу услуг">
        <span className={styles.scrollLine} />
        Прокрутите
      </a>
    </section>
  );
}
