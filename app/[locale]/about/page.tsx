
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
 description:
  "Learn about AMY Team Studio, our software development approach, and our commitment to building high-quality, reliable, and scalable digital products.",
};
const principles = [
  { key: "clarity", number: "01" },
  { key: "quality", number: "02" },
  { key: "performance", number: "03" },
  { key: "longevity", number: "04" },
] as const;

const collaborationSteps = [
  { key: "understand", number: "01" },
  { key: "align", number: "02" },
  { key: "deliver", number: "03" },
] as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("AboutPage");

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative border-b border-border px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-16 lg:pb-32 lg:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-12 h-80 w-80 rounded-full bg-primary/10 blur-3xl sm:h-[28rem] sm:w-[28rem]"
        />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-medium tracking-[0.2em] text-primary uppercase sm:text-sm">
            {t("eyebrow")}
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.1] tracking-[-0.045em] [overflow-wrap:anywhere] sm:text-6xl md:text-7xl lg:text-8xl">
            {t("title")}
          </h1>

          <div className="mt-10 grid gap-6 border-t border-border pt-6 sm:mt-12 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-12">
            <p className="max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl sm:leading-9">
              {t("intro")}
            </p>

            <p className="max-w-xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              {t("supportingText")}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-medium tracking-[0.18em] text-primary uppercase sm:text-sm">
              {t("philosophyEyebrow")}
            </p>

            <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {t("philosophyTitle")}
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-text-secondary sm:text-base sm:leading-9">
            <p>{t("philosophyParagraph1")}</p>
            <p>{t("philosophyParagraph2")}</p>

            <div className="border-s-2 border-primary py-2 ps-5">
              <p className="text-lg font-medium leading-8 text-foreground sm:text-2xl sm:leading-9">
                {t("philosophyQuote")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-border bg-surface px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-medium tracking-[0.18em] text-primary uppercase sm:text-sm">
              {t("principlesEyebrow")}
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {t("principlesTitle")}
            </h2>

            <p className="mt-5 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              {t("principlesIntro")}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-foreground/10 sm:mt-16 sm:grid-cols-2">
            {principles.map(({ key, number }) => (
              <article
                key={key}
                className="min-w-0 bg-surface p-6 sm:p-8 lg:p-10"
              >
                <span className="font-mono text-sm text-primary">
                  {number}
                </span>

                <h3 className="mt-8 text-xl font-semibold tracking-tight sm:mt-12 sm:text-2xl">
                  {t(`principles.${key}.title`)}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
                  {t(`principles.${key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="h-fit lg:sticky lg:top-28">
            <p className="mb-5 text-xs font-medium tracking-[0.18em] text-primary uppercase sm:text-sm">
              {t("collaborationEyebrow")}
            </p>

            <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {t("collaborationTitle")}
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              {t("collaborationIntro")}
            </p>
          </div>

          <div className="border-t border-border">
            {collaborationSteps.map(({ key, number }) => (
              <article
                key={key}
                className="grid gap-4 border-b border-border py-7 sm:grid-cols-[56px_1fr] sm:gap-6 sm:py-9"
              >
                <span className="font-mono text-sm text-primary">
                  {number}
                </span>

                <div>
                  <h3 className="text-xl font-medium sm:text-2xl">
                    {t(`collaboration.${key}.title`)}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
                    {t(`collaboration.${key}.description`)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden border border-border bg-surface p-6 sm:p-10 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -end-16 -top-20 h-64 w-64 rounded-full border border-primary/10 sm:h-80 sm:w-80"
          />

          <div className="relative">
            <p className="mb-5 text-xs font-medium tracking-[0.18em] text-primary uppercase sm:text-sm">
              {t("ctaEyebrow")}
            </p>

            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {t("ctaTitle")}
              </h2>

              <Link
                href="/contact"
                className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-primary px-6 text-sm font-semibold text-background transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {t("ctaButton")}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
