import ContactForm from "@/components/ContactForm/ContactForm";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={`container ${styles.grid}`}>
        <div>
          <Reveal>
            <p className="eyebrow">Контакты</p>
          </Reveal>
          <Reveal as="h2" delay={80} className={styles.title}>
            Расскажите о своём проекте
          </Reveal>
          <Reveal delay={140}>
            <p className={styles.lead}>
              Заполните форму или напишите напрямую — ответим в течение
              одного рабочего дня и предложим удобное время для консультации.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <dl className={styles.details}>
              <div>
                <dt>Почта</dt>
                <dd>
                  <a href="mailto:hello@norden-architecture.studio">
                    hello@norden-architecture.studio
                  </a>
                </dd>
              </div>
              <div>
                <dt>Телефон</dt>
                <dd>
                  <a href="tel:+79000000000">+7 (900) 000-00-00</a>
                </dd>
              </div>
              <div>
                <dt>География</dt>
                <dd>Проекты по России и за её пределами</dd>
              </div>
              <div>
                <dt>Часы работы</dt>
                <dd>Пн–Пт, 10:00–19:00</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={120} className={styles.formWrap}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
