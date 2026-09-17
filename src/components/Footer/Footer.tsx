import { navItems } from "@/lib/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <a href="#top" className={styles.logo}>
            NORDEN
            <span>Architecture</span>
          </a>
          <p>Бюро архитектуры и дизайна интерьера.</p>
        </div>

        <nav aria-label="Навигация в подвале" className={styles.nav}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contact}>
          <a href="mailto:hello@norden-architecture.studio">
            hello@norden-architecture.studio
          </a>
          <a href="tel:+79000000000">+7 (900) 000-00-00</a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} NORDEN Architecture</p>
        <p className={styles.disclaimer}>
          Концептуальный демонстрационный проект, созданный для портфолио
          frontend-разработки. Не является предложением реальных услуг.
        </p>
      </div>
    </footer>
  );
}
