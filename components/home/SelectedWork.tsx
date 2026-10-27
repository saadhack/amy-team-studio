
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const projects = [
  {
    key: "fitora",
    name: "Fitora",
    tags: ["React Native", "Node.js"],
    type: "fitness",
    image:"images/fitora.webp"
  },
  {
    key: "brandcraft",
    name: "BrandCraft",
    tags: ["Next.js", "PostgreSQL"],
    type: "commerce",
    image:"images/follows.webp"
  },
  {
    key: "lumina",
    name: "Lumina",
    tags: ["Next.js", "UI/UX"],
    type: "lumina",
    image:"images/lumina.webp"
  },
];

async function ProjectVisual({
  type,
  conceptLabel,
}: {
  type: string;
  conceptLabel: string;
}) {
  const t = await getTranslations("HomePage.SelectedWork.preview");
  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-[5/3] items-center justify-center overflow-hidden border-b border-border bg-surface p-5 sm:p-7"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, color-mix(in srgb, var(--primary) 18%, transparent), transparent 65%)",
        }}
      />

      {type === "fitness" && (
        
        <Image
              src="/images/fitora.webp"
              alt="fitora"
              fill
              />)}
          
           {/* 
        <div className="relative grid w-full max-w-xs grid-cols-2 gap-3">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border bg-surface-elevated p-4"
            >
              <div className="mb-5 size-7 rounded-lg bg-primary/15" />
              <div className="text-2xl font-semibold tracking-tight">
                {item === 1 ? "7,842" : "84%"}
              </div>
              <div className="mt-1 text-xs text-text-muted">
                {item === 1 ? t("dailySteps") : t("goalReached")}
              </div>
              <div className="mt-5 flex h-8 items-end gap-1">
                {[30, 55, 40, 80, 60, 100, 72].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-sm bg-primary/70"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            ))} 
            </div>
            */}


      {type === "commerce" && (
        <Image
              src="/images/follows.webp"
              alt="follows"
              fill
              />
        // <div className="relative w-full max-w-sm rounded-xl border border-border bg-surface-elevated p-4">
        //   <div className="flex items-center justify-between border-b border-border pb-4">
        //     <div className="h-2 w-20 rounded bg-text-muted" />
        //     <div className="size-7 rounded-full bg-primary/20" />
        //   </div>
        //   <div className="mt-5 grid grid-cols-3 gap-2">
        //     {[t("revenue"), t("orders"), t("customers")].map((label, index) => (
        //       <div key={label} className="rounded-lg bg-foreground/[0.04] p-2">
        //         <div className="text-[9px] text-text-muted">{label}</div>
        //         <div className="mt-2 text-sm font-semibold">
        //           {["$24k", "1.2k", "840"][index]}
        //         </div>
        //       </div>
        //     ))}
        //   </div>
        //   <div className="mt-4 flex h-14 items-end gap-2">
        //     {[35, 55, 42, 72, 50, 88, 65, 100, 75, 92].map(
        //       (height, index) => (
        //         <div
        //           key={index}
        //           className="flex-1 rounded-t-sm bg-primary/70"
        //           style={{ height: `${height}%` }}
        //         />
        //       ),
        //     )}
        //   </div>
        // </div>
      )}

      {type === "lumina" && (
        <Image
              src="/images/lumina.webp"
              alt="lumina"
              fill
              />
        // <div className="relative w-full max-w-xs overflow-hidden rounded-xl border border-border bg-surface-elevated p-4">
        //   <div className="h-2 w-16 rounded bg-text-muted" />
        //   <div className="mt-5 flex min-h-24 flex-col justify-end rounded-lg bg-gradient-to-br from-background via-surface to-background p-4">
        //     <span className="text-xs uppercase tracking-[0.2em] text-primary">
        //       {t("digitalExperiences")}
        //     </span>
        //     <span className="mt-2 text-lg font-semibold">
        //       {t("madeToStandOut")}
        //     </span>
        //   </div>
        //   <div className="mt-4 h-1.5 w-3/4 rounded bg-foreground/15" />
        //   <div className="mt-2 h-1.5 w-1/2 rounded bg-foreground/10" />
        // </div>
      )}

      <span className="absolute bottom-3 left-3 rounded-full border border-border bg-background/50 px-3 py-1 text-[10px] text-text-secondary">
        {conceptLabel}
      </span>
    </div>
  );
}

export default async function SelectedWork() {
  const t = await getTranslations("HomePage.SelectedWork");
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="bg-background px-6 py-24 text-foreground sm:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              02 / {t("eyebrow")}
            </p>

            <h2
              id="work-heading"
              className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              {t.rich("title", {
                accent: (chunks) => (
                  <span className="text-primary">{chunks}</span>
                ),
              })}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-text-secondary sm:text-base">
              {t("description")}
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex w-fit items-center gap-3 border-b border-border pb-2 text-sm transition-colors hover:border-primary hover:text-primary"
          >
            {t("viewAll")}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <article className="group grid overflow-hidden rounded-2xl border border-border bg-background md:grid-cols-[1.15fr_0.85fr]">
          <div className="relative flex min-h-72 items-center justify-center overflow-hidden bg-background p-6 sm:min-h-96 sm:p-10">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 100%, color-mix(in srgb, var(--primary) 22%, transparent), transparent 65%)",
              }}
            />

              <Image
              src="/images/voltora.webp"
              alt="voltora"
              fill
              />
            {/* 
            <div className="relative w-full max-w-lg rounded-xl border border-border bg-surface-elevated p-4 shadow-2xl sm:p-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-bold">
                    V
                  </span>
                  <span className="text-sm font-semibold">Voltora</span>
                </div>
                <span className="text-xs text-text-muted">
                  {t("preview.energyOverview")}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  [t("preview.energyUsage"), "12,480", "kWh"],
                  [t("preview.costTracking"), "$2,840", t("preview.thisMonth")],
                  [
                    t("preview.liveStatus"),
                    t("preview.active"),
                    t("preview.monitoring"),
                  ],
                ].map(([label, value, unit]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-border bg-foreground/[0.03] p-3"
                  >
                    <p className="text-[10px] text-text-muted">{label}</p>
                    <p className="mt-2 text-lg font-semibold tracking-tight">
                      {value}
                    </p>
                    <p className="mt-1 text-[10px] text-text-muted">{unit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-border bg-foreground/[0.02] p-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-text-secondary">{t("preview.usageOverview")}</p>
                  <span className="text-[10px] text-primary">
                    {t("preview.sampleData")}
                  </span>
                </div>
                <svg
                  viewBox="0 0 420 100"
                  className="mt-3 w-full"
                  fill="none"
                >
                  <path
                    d="M0 78 C30 65 45 80 75 55 S120 72 155 43 S205 62 240 32 S300 57 335 25 S385 38 420 12"
                    stroke="var(--primary)"
                    strokeWidth="2.5"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M0 78 C30 65 45 80 75 55 S120 72 155 43 S205 62 240 32 S300 57 335 25 S385 38 420 12 L420 100 L0 100Z"
                    fill="url(#voltora-fill)"
                    opacity=".25"
                  />
                  <defs>
                    <linearGradient
                      id="voltora-fill"
                      x1="210"
                      y1="0"
                      x2="210"
                      y2="100"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="var(--primary)" />
                      <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div> 
              */}

            <span className="absolute bottom-4 left-4 rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-text-secondary">
              {t("preview.webPlatformConcept")}
            </span>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {t("featuredLabel", { number: "01" })}
            </p>

            <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Voltora
            </h3>

            <p className="mt-2 text-lg text-text-secondary">
              {t("featuredSubtitle")}
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-text-secondary">
              {t("featuredDescription")}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border px-3 py-1.5 text-xs text-text-secondary"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <div className="mt-9 border-t border-border pt-6">
              <p className="text-xs leading-6 text-text-muted">
                {t("featuredNote")}
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {t("featuredCta")}
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </article>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.key}
              className="group overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-border"
            >
              <ProjectVisual
                type={project.type}
                conceptLabel={t("conceptLabel")}
              />

              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-primary">
                    {t(`projects.${project.key}.category`)}
                  </p>
                  <span className="text-xs text-text-muted">
                    {String(projects.indexOf(project) + 2).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {project.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-text-secondary">
                  {t(`projects.${project.key}.title`)}
                </p>

                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {t(`projects.${project.key}.description`)}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  aria-label={t("projectCta", { name: project.name })}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-primary"
                >
                  {t("similarProjectCta")}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="max-w-lg text-sm leading-6 text-text-secondary">
            {t("footerDescription")}
          </p>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-3 text-sm font-medium text-foreground hover:text-primary"
          >
            {t("footerCta")} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
