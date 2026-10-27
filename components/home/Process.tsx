
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

const steps = [
  {
    key: "discover",
    number: "01",
  },
  {
    key: "design",
    number: "02",
  },
  {
    key: "engineer",
    number: "03",
  },
  {
    key: "launch",
    number: "04",
  },
] as const;

export default async function Process() {
  const t = await getTranslations("HomePage.Process");

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="overflow-hidden bg-background px-6 py-24 text-foreground sm:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-border pb-12 md:grid-cols-[1fr_0.65fr] md:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              04 / {t("eyebrow")}
            </p>

            <h2
              id="process-heading"
              className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              {t.rich("title", {
                accent: (chunks) => (
                  <span className="text-text-muted">{chunks}</span>
                ),
              })}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-text-secondary sm:text-base md:justify-self-end">
            {t("description")}
          </p>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[19px] top-8 w-px bg-foreground/10 md:left-0 md:right-0 md:top-[19px] md:h-px md:w-auto"
          />

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step) => (
              <article key={step.number} className="relative pl-14 md:pl-0">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border border-primary/40 bg-background text-xs font-semibold text-primary md:static md:mb-8">
                  {step.number}
                </div>

                <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
                  {t(`${step.key}.label`)}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {t(`${step.key}.title`)}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-text-secondary">
                  {t(`${step.key}.description`)}
                </p>

                <div className="mt-7 border-t border-border pt-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted">
                    {t("outcomeLabel")}
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    {t(`${step.key}.deliverable`)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-text-secondary">
            {t("footerDescription")}
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
