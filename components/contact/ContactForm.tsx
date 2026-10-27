
"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialValues = {
  name: "",
  email: "",
  service: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const t = useTranslations("ContactPage.form");
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<FormStatus>("idle");

  function updateField(
    field: keyof typeof initialValues,
    value: string,
  ) {
    setValues((current) => ({ ...current, [field]: value }));

    if (status !== "idle") {
      setStatus("idle");
    }
  }

  // async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   setStatus("submitting");

  //   try {
  //     const response = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(values),
  //     });

  //     if (!response.ok) {
  //       throw new Error("CONTACT_SUBMISSION_FAILED");
  //     }

  //     setStatus("success");
  //     setValues(initialValues);
  //   } catch {
  //     setStatus("error");
  //   }
  // }
 function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setStatus("submitting");

  const whatsappNumber = "SaadHack"; // رقمك بكود الدولة بدون +

  const message = `
*New Contact Message — AMY Team Studio*

*Name:* ${values.name}
*Email:* ${values.email}
*Subject:* ${values.service}
*Budget:* ${values.budget}
*Message:*
${values.message}
  `.trim();

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  setStatus("success");
  setValues(initialValues);
}

  const fieldClass =
    "mt-2 min-h-12 w-full min-w-0 border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-text-muted focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/30";

  const labelClass = "block text-sm font-medium text-text-secondary";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="contact-name" className={labelClass}>
            {t("name")}
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder={t("namePlaceholder")}
            className={fieldClass}
          />
        </div>

        <div className="min-w-0">
          <label htmlFor="contact-email" className={labelClass}>
            {t("email")}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder={t("emailPlaceholder")}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="contact-service" className={labelClass}>
            {t("service")}
          </label>
          <select
            id="contact-service"
            name="service"
            required
            value={values.service}
            onChange={(e) => updateField("service", e.target.value)}
            className={fieldClass}
          >
            <option value="" disabled>
              {t("servicePlaceholder")}
            </option>
            <option value="web-development">{t("services.web")}</option>
            <option value="backend-api">{t("services.backend")}</option>
            <option value="frontend">{t("services.frontend")}</option>
            <option value="product-design">{t("services.product")}</option>
            <option value="maintenance">{t("services.maintenance")}</option>
            <option value="other">{t("services.other")}</option>
          </select>
        </div>

        <div className="min-w-0">
          <label htmlFor="contact-budget" className={labelClass}>
            {t("budget")}
            <span className="ms-2 font-normal text-text-muted">
              {t("optional")}
            </span>
          </label>
          <select
            id="contact-budget"
            name="budget"
            value={values.budget}
            onChange={(e) => updateField("budget", e.target.value)}
            className={fieldClass}
          >
            <option value="">{t("budgetPlaceholder")}</option>
            <option value="under-1000">{t("budgets.under1000")}</option>
            <option value="1000-5000">{t("budgets.1000to5000")}</option>
            <option value="5000-10000">{t("budgets.5000to10000")}</option>
            <option value="over-10000">{t("budgets.over10000")}</option>
            <option value="undecided">{t("budgets.undecided")}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          {t("message")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          minLength={0}
          maxLength={5000}
          rows={6}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder={t("messagePlaceholder")}
          className={`${fieldClass} min-h-36 resize-y`}
        />
        <p className="mt-2 text-xs text-text-muted">
          {t("messageHint")}
        </p>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-primary px-6 text-sm font-semibold text-background transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
      >
        {status === "submitting" ? t("sending") : t("submit")}
        {status !== "submitting" && (
          <span aria-hidden="true">↗</span>
        )}
      </button>

      <div aria-live="polite" role="status">
        {status === "success" && (
          <p className="border border-success/30 bg-success/10 p-4 text-sm leading-7 text-success">
            {t("success")}
          </p>
        )}

        {status === "error" && (
          <p className="border border-error/30 bg-error/10 p-4 text-sm leading-7 text-error">
            {t("error")}
          </p>
        )}
      </div>
    </form>
  );
}
