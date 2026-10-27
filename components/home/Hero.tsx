
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("HomePage.Hero");
  const preview = await getTranslations("HomePage.Hero.preview");

  return (
    <section className="relative isolate overflow-hidden bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 78% 48%, color-mix(in srgb, var(--primary) 18%, transparent), transparent 42%)",
        }}
      />

      <div className="mx-auto grid min-h-[calc(100svh-88px)] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {t("eyebrow")}
          </p>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
            {t.rich("title", {
              accent: (chunks) => (
                <span className="text-primary">{chunks}</span>
              ),
            })}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
            {t("description")}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center gap-4 rounded-full bg-primary px-6 text-background font-medium transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {t("primaryCta")}
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/work"
              className="inline-flex min-h-12 items-center gap-3 text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
            >
              {t("secondaryCta")}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-14 grid max-w-lg grid-cols-3 border-t border-border pt-6">
            <div>
              <p className="text-2xl font-semibold">{t("experienceValue")}</p>
              <p className="mt-1 text-xs leading-5 text-text-secondary sm:text-sm">
                {t("experienceLabel")}
              </p>
            </div>
            <div className="border-l border-border pl-4 sm:pl-6">
              <p className="text-2xl font-semibold">{t("projectsValue")}</p>
              <p className="mt-1 text-xs leading-5 text-text-secondary sm:text-sm">
                {t("projectsLabel")}
              </p>
            </div>
            <div className="border-l border-border pl-4 sm:pl-6">
              <p className="text-2xl font-semibold">{t("qualityValue")}</p>
              <p className="mt-1 text-xs leading-5 text-text-secondary sm:text-sm">
                {t("qualityLabel")}
              </p>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-6 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl shadow-background/40">
            <div className="flex h-12 items-center gap-2 border-b border-border px-4">
              <span className="size-2.5 rounded-full bg-text-muted" />
              <span className="size-2.5 rounded-full bg-text-muted" />
              <span className="size-2.5 rounded-full bg-text-muted" />
              <span className="ml-3 text-xs text-text-secondary">
                {preview("projectPath")}
              </span>
            </div>

            <div className="grid min-h-72 grid-cols-[auto_1fr] sm:min-h-96">
              <div className="space-y-5 border-r border-border p-4 text-xs text-text-muted">
                <p>{preview("explorer")}</p>
                <p>src</p>
                <p className="pl-2 text-primary">app</p>
                <p className="pl-2">components</p>
                <p className="pl-2">services</p>
                <p>public</p>
              </div>

              <div className="overflow-hidden p-4 font-mono text-xs leading-7 sm:p-6 sm:text-sm">
                <p className="text-text-secondary">01</p>
                <p>
                  <span className="text-primary">const</span>{" "}
                  <span className="text-primary">buildProduct</span>{" "}
                  <span className="text-text-secondary">=</span>
                </p>
                <p className="pl-4 text-text-secondary">{"{"}</p>
                <p className="pl-8">
                  <span className="text-primary">quality</span>
                  <span className="text-text-muted">:</span>{" "}
                  <span className="text-success">"high"</span>
                  <span className="text-text-muted">,</span>
                </p>
                <p className="pl-8">
                  <span className="text-primary">performance</span>
                  <span className="text-text-muted">:</span>{" "}
                  <span className="text-success">"fast"</span>
                  <span className="text-text-muted">,</span>
                </p>
                <p className="pl-8">
                  <span className="text-primary">scalability</span>
                  <span className="text-text-muted">:</span>{" "}
                  <span className="text-success">true</span>
                </p>
                <p className="text-text-secondary">{"}"}</p>

                <div className="mt-8 border-t border-border pt-5">
                  <p className="text-text-secondary">
                    {preview("buildStatus")}
                  </p>
                  <p className="mt-2 text-success">
                    ✓ {preview("readyStatus")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-3 rounded-xl border border-border bg-surface-elevated px-4 py-3 shadow-xl sm:-left-6">
            <p className="text-xs text-text-muted">{preview("focusLabel")}</p>
            <p className="mt-1 text-sm font-medium">{preview("focusValue")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
