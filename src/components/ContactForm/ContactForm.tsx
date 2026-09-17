"use client";

import { useRef, useState, type FormEvent } from "react";
import { projectTypeOptions } from "@/lib/data";
import styles from "./ContactForm.module.css";

type FormValues = {
  name: string;
  contact: string;
  projectType: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  contact: "",
  projectType: projectTypeOptions[0],
  message: "",
  consent: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\d][\d\s\-()]{6,18}\d$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Введите имя (минимум 2 символа).";
  }

  const contact = values.contact.trim();
  if (!contact) {
    errors.contact = "Укажите телефон или email.";
  } else if (!EMAIL_RE.test(contact) && !PHONE_RE.test(contact)) {
    errors.contact = "Проверьте формат телефона или email.";
  }

  if (values.message.trim().length > 0 && values.message.trim().length < 10) {
    errors.message = "Расскажите чуть подробнее — минимум 10 символов.";
  }

  if (!values.consent) {
    errors.consent = "Нужно согласие на обработку данных.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const setField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) {
      setErrors(validate(next));
    }
  };

  const handleBlur = (key: keyof FormValues) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({
      name: true,
      contact: true,
      projectType: true,
      message: true,
      consent: true,
    });

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = formRef.current?.querySelector<HTMLElement>(
        "[aria-invalid='true']",
      );
      firstInvalid?.focus();
      return;
    }

    setStatus("submitting");
    // Демонстрационная отправка: в проде здесь вызов реального API.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setValues(initialValues);
    setTouched({});
    setErrors({});
  };

  if (status === "success") {
    return (
      <div className={styles.success} role="status">
        <h3>Заявка отправлена</h3>
        <p>
          Спасибо! Это демонстрационная форма портфолио — сообщение никуда не
          передаётся, но валидация и состояние отправки полностью рабочие.
        </p>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => setStatus("idle")}
        >
          Отправить ещё раз
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            aria-invalid={Boolean(touched.name && errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {touched.name && errors.name && (
            <p className={styles.error} id="name-error">
              {errors.name}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="contact">Телефон или email</label>
          <input
            id="contact"
            name="contact"
            type="text"
            inputMode="email"
            autoComplete="email"
            value={values.contact}
            onChange={(e) => setField("contact", e.target.value)}
            onBlur={() => handleBlur("contact")}
            aria-invalid={Boolean(touched.contact && errors.contact)}
            aria-describedby={errors.contact ? "contact-error" : undefined}
          />
          {touched.contact && errors.contact && (
            <p className={styles.error} id="contact-error">
              {errors.contact}
            </p>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="projectType">Тип проекта</label>
        <select
          id="projectType"
          name="projectType"
          value={values.projectType}
          onChange={(e) => setField("projectType", e.target.value)}
        >
          {projectTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Сообщение</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Коротко о задаче: участок, площадь, сроки"
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          aria-invalid={Boolean(touched.message && errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {touched.message && errors.message && (
          <p className={styles.error} id="message-error">
            {errors.message}
          </p>
        )}
      </div>

      <div className={styles.consentRow}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => setField("consent", e.target.checked)}
            onBlur={() => handleBlur("consent")}
            aria-invalid={Boolean(touched.consent && errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span>Согласен(на) на обработку персональных данных</span>
        </label>
        {touched.consent && errors.consent && (
          <p className={styles.error} id="consent-error">
            {errors.consent}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Отправка…" : "Отправить заявку"}
      </button>
    </form>
  );
}
