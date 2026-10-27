
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function ContactCTA() {
  const t = await getTranslations("HomePage.ContactCTA");

  return (
    <section
      id="contact"
      aria-labelledby="contact-cta-heading"
      className="relative isolate overflow-hidden bg-background px-6 py-24 text-foreground sm:py-32 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, color-mix(in srgb, var(--primary) 14%, transparent), transparent 55%)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full border border-primary/10 sm:-right-10 sm:-top-32 sm:size-96"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-14 size-56 rounded-full border border-primary/10 sm:right-8 sm:-top-20 sm:size-72"
          />

          <div className="relative max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              {t("eyebrow")}
            </p>

            <h2
              id="contact-cta-heading"
              className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl"
            >
              {t.rich("title", {
                accent: (chunks) => (
                  <span className="text-text-secondary">{chunks}</span>
                ),
              })}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-text-secondary sm:text-base">
              {t("description")}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-fit items-center justify-center gap-4 rounded-full bg-primary px-6 text-sm font-semibold text-background transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {t("button")}
                <span aria-hidden="true">↗</span>
              </Link>

              <p className="text-xs leading-5 text-text-secondary">
                {t("note")}
              </p>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="relative mt-12 flex items-center gap-3 border-t border-border pt-5 sm:mt-16"
          >
            <span className="size-2 rounded-full bg-primary" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-text-secondary">
              AMY Team Studio
            </span>
            <span className="ml-auto hidden text-xs text-text-muted sm:block">
              {t("tagline")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
