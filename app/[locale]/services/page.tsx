
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our software development and digital product services.",
};
const services = [
  { key: "web", number: "01" },
  { key: "backend", number: "02" },
  { key: "frontend", number: "03" },
  { key: "product", number: "04" },
  { key: "maintenance", number: "05" },
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("ServicesPage");

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative border-b border-border px-6 pb-20 pt-24 sm:px-10 sm:pb-28 sm:pt-32 lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-medium tracking-[0.2em] text-primary uppercase">
            {t("eyebrow")}
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
            {t("title")}
          </h1>

          <div className="mt-10 flex flex-col gap-8 border-t border-border pt-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
              {t("intro")}
            </p>

            <Link
              href="/contact"
              className="inline-flex min-h-12 w-fit shrink-0 items-center gap-3 rounded-full bg-primary px-6 text-sm font-semibold text-background transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {t("heroCta")}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section
        id="services-list"
        className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div className="h-fit lg:sticky lg:top-28">
            <p className="mb-4 text-sm font-medium tracking-[0.18em] text-primary uppercase">
              {t("listEyebrow")}
            </p>

            <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t("listTitle")}
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-text-secondary">
              {t("listIntro")}
            </p>
          </div>

          <div className="border-t border-border">
            {services.map(({ key, number }) => (
              <article
                key={key}
                className="grid gap-5 border-b border-border py-8 sm:grid-cols-[56px_1fr] sm:gap-8 sm:py-10"
              >
                <span className="pt-1 font-mono text-sm text-primary">
                  {number}
                </span>

                <div>
                  <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                    {t(`services.${key}.title`)}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
                    {t(`services.${key}.description`)}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {(
                      t.raw(`services.${key}.deliverables`) as string[]
                    ).map((item) => (
                      <li
                        key={item}
                        className="border border-border px-3 py-2 text-sm text-text-secondary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-border bg-surface px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-5 text-sm font-medium tracking-[0.18em] text-primary uppercase">
              {t("approachEyebrow")}
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {t("approachTitle")}
            </h2>
          </div>

          <p className="max-w-xl leading-8 text-text-secondary">
            {t("approachDescription")}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-px bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {(["discover", "plan", "build", "improve"] as const).map(
            (step, index) => (
              <div key={step} className="bg-surface p-6 sm:p-8">
                <span className="font-mono text-sm text-primary">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-xl font-medium">
                  {t(`approach.${step}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {t(`approach.${step}.description`)}
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Technology */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-medium tracking-[0.18em] text-primary uppercase">
              {t("technologyEyebrow")}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("technologyTitle")}
            </h2>
          </div>

          <div>
            <p className="max-w-2xl leading-8 text-text-secondary">
              {t("technologyDescription")}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "REST APIs",
              ].map((technology) => (
                <span
                  key={technology}
                  className="border border-border px-4 py-3 text-sm text-text-secondary"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 pb-24 sm:px-10 sm:pb-32 lg:px-16">
        <div className="mx-auto max-w-7xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
          <p className="mb-5 text-sm font-medium tracking-[0.18em] text-primary uppercase">
            {t("ctaEyebrow")}
          </p>

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {t("ctaTitle")}
            </h2>

            <Link
              href="/contact"
              className="inline-flex min-h-12 w-fit shrink-0 items-center gap-3 rounded-full bg-primary px-6 text-sm font-semibold text-background transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {t("ctaButton")}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
