import Reveal from "@/components/Reveal/Reveal";
import styles from "./Approach.module.css";

const principles = [
  {
    title: "Свет как материал",
    text: "Естественный свет определяет планировку раньше, чем стены — мы проектируем от него, а не добавляем постфактум.",
  },
  {
    title: "Честность материалов",
    text: "Дерево выглядит как дерево, бетон — как бетон. Отделка не имитирует то, чем не является.",
  },
  {
    title: "Масштаб человека",
    text: "Высота потолков, ширина проёмов и пропорции комнат считаются исходя из того, как в пространстве двигается тело.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className={`section ${styles.approach}`}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <Reveal>
              <p className={`eyebrow ${styles.eyebrowOnDark}`}>Подход</p>
            </Reveal>
            <Reveal as="h2" delay={80} className={styles.title}>
              Меньше жестов — больше смысла в каждом решении
            </Reveal>
            <Reveal delay={140}>
              <p className={styles.lead}>
                Мы не работаем в одном узнаваемом стиле «на продажу». Каждый
                проект NORDEN Architecture начинается с участка, света и
                привычек заказчика — и только потом обретает форму.
              </p>
            </Reveal>
          </div>

          <ul className={styles.principles}>
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 100}>
                <div className={styles.principle}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
