import Reveal from "@/components/Reveal/Reveal";
import { projectGraphics } from "@/components/graphics/ProjectGraphics";
import { projects } from "@/lib/data";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Проекты</p>
          </Reveal>
          <Reveal as="h2" delay={80} className={styles.title}>
            Избранные работы
          </Reveal>
          <Reveal delay={140}>
            <p className={styles.note}>
              Демонстрационная подборка проектов, подготовленная для
              портфолио NORDEN Architecture.
            </p>
          </Reveal>
        </div>

        <ul className={styles.grid}>
          {projects.map((project, i) => {
            const Graphic = projectGraphics[project.graphic];
            return (
              <Reveal as="li" key={project.slug} delay={(i % 2) * 100}>
                <article className={styles.card}>
                  <div className={styles.media}>
                    <Graphic className={styles.graphic} />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.infoTop}>
                      <h3>{project.title}</h3>
                      <span className={styles.year}>{project.year}</span>
                    </div>
                    <p className={styles.meta}>
                      {project.category} · {project.area}
                    </p>
                    <p className={styles.description}>{project.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
