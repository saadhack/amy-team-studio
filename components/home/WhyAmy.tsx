
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

const principles = [
  {
    key: "clarity",
    number: "01",
  },
  {
    key: "quality",
    number: "02",
  },
  {
    key: "performance",
    number: "03",
  },
  {
    key: "longevity",
    number: "04",
  },
] as const;

export default async function WhyAmy() {
  const t = await getTranslations("HomePage.WhyAmy");

  return (
    <section
      id="why-amy"
      aria-labelledby="why-amy-heading"
      className="relative overflow-hidden bg-background px-6 py-24 text-foreground sm:py-32 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/[0.07] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              05 / {t("eyebrow")}
            </p>

            <h2
              id="why-amy-heading"
              className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
            >
              {t.rich("title", {
                accent: (chunks) => (
                  <span className="text-text-muted">{chunks}</span>
                ),
              })}
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-text-secondary sm:text-base">
              {t("description")}
            </p>

            <div className="mt-9 flex items-center gap-4">
              <div
                aria-hidden="true"
                className="flex size-11 items-center justify-center rounded-full border border-primary/30 text-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="size-5"
                >
                  <path
                    d="M5 12.5 9.2 16.5 19 7.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="text-sm text-text-secondary">
                {t("supportingLine")}
              </p>
            </div>
          </div>

          <div className="border-t border-border">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="grid gap-4 border-b border-border py-7 sm:grid-cols-[48px_1fr] sm:gap-6 sm:py-9"
              >
                <span className="pt-1 font-mono text-xs text-primary">
                  / {principle.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {t(`${principle.key}.title`)}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-text-secondary sm:text-base">
                    {t(`${principle.key}.description`)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-border pt-7 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-6 text-text-secondary">
            {t("closingDescription")}
          </p>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            {t("footerCta")}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
