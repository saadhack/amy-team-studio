
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Work",
  description:
  "Explore AMY Team Studio's selected projects, showcasing our approach to web development, digital product design, and scalable software solutions.",
};
const projects = [
  { key: "voltora", number: "01", featured: true },
  { key: "fitora", number: "02", featured: false },
  { key: "brandcraft", number: "03", featured: false },
  { key: "lumina", number: "04", featured: true },
] as const;

function ProjectPreview({ project }: { project: string }) {
  if (project === "voltora") {
    return (
      <Image
                    src="/images/voltora.webp"
                    alt="voltora"
                    fill
                    />
                    
      // <div className="relative flex h-full min-h-64 flex-col overflow-hidden bg-surface-elevated p-4 sm:min-h-80 sm:p-7">
      //   <div className="flex items-center justify-between border-b border-border pb-4">
      //     <span className="text-xs font-bold tracking-widest text-foreground">
      //       VOLTORA
      //     </span>
      //     <span className="text-[10px] text-text-muted">OVERVIEW / 2026</span>
      //   </div>

      //   <div className="grid flex-1 grid-cols-[1fr_0.85fr] gap-3 py-5 sm:gap-5 sm:py-7">
      //     <div className="flex flex-col justify-between">
      //       <div>
      //         <div className="h-2 w-16 bg-primary/80 sm:w-24" />
      //         <div className="mt-4 h-5 w-full max-w-44 bg-surface-elevated/90 sm:h-7" />
      //         <div className="mt-2 h-5 w-4/5 max-w-36 bg-foreground/20 sm:h-7" />
      //         <div className="mt-5 h-2 w-full max-w-40 bg-foreground/15" />
      //         <div className="mt-2 h-2 w-4/5 max-w-32 bg-foreground/15" />
      //       </div>
      //       <div className="mt-6 flex gap-2">
      //         <div className="h-8 w-20 bg-primary sm:w-28" />
      //         <div className="hidden h-8 w-20 border border-border sm:block" />
      //       </div>
      //     </div>

      //     <div className="flex min-w-0 items-center justify-center border border-primary/20 bg-surface-elevated p-2 sm:p-4">
      //       <div className="relative aspect-square w-full max-w-48 rounded-full border border-primary/20">
      //         <div className="absolute inset-[15%] rounded-full border border-primary/30" />
      //         <div className="absolute inset-[30%] rounded-full border border-primary/50" />
      //         <div className="absolute inset-[43%] rounded-full bg-primary shadow-[0_0_30px_var(--primary)]" />
      //         <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-primary/20" />
      //         <div className="absolute left-0 top-1/2 h-px w-full bg-primary/20" />
      //       </div>
      //     </div>
      //   </div>

      //   <div className="flex gap-2">
      //     <div className="h-1.5 w-1/3 bg-primary/70" />
      //     <div className="h-1.5 w-1/4 bg-foreground/15" />
      //     <div className="h-1.5 flex-1 bg-foreground/10" />
      //   </div>
      // </div>
    );
  }

  if (project === "fitora") {
    return (
      <Image
              src="/images/fitora.webp"
              alt="fitora"
              fill
              />
      // <div className="flex h-full min-h-56 flex-col bg-[#e8e9e3] p-4 text-[#20261f] sm:min-h-64 sm:p-6">
      //   <div className="flex items-center justify-between border-b border-border pb-3">
      //     <span className="text-sm font-black tracking-tight">fitora.</span>
      //     <span className="text-[10px]">YOUR SPACE</span>
      //   </div>
      //   <div className="grid flex-1 grid-cols-[1fr_0.8fr] items-center gap-3 py-5">
      //     <div>
      //       <div className="h-4 w-4/5 bg-[#20261f] sm:h-5" />
      //       <div className="mt-2 h-4 w-3/5 bg-[#20261f] sm:h-5" />
      //       <div className="mt-4 h-2 w-full bg-background/15" />
      //       <div className="mt-2 h-2 w-4/5 bg-background/15" />
      //       <div className="mt-5 h-7 w-20 bg-[#c3ed76] sm:w-24" />
      //     </div>
      //     <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#c3ed76]">
      //       <div className="absolute h-3/4 w-3/4 rounded-t-full border-[10px] border-[#20261f]/80 sm:border-[16px]" />
      //       <div className="absolute bottom-0 h-1/3 w-full bg-[#20261f]/10" />
      //     </div>
      //   </div>
      // </div>
    );
  }

  if (project === "brandcraft") {
    return (
      <Image
              src="/images/follows.webp"
              alt="follows"
              fill
              />
      // <div className="flex h-full min-h-56 flex-col justify-between bg-[#e8ddcf] p-4 text-[#29221d] sm:min-h-64 sm:p-6">
      //   <div className="flex items-center justify-between">
      //     <span className="text-xs font-bold tracking-[0.2em]">BC / STUDIO</span>
      //     <span className="text-[10px]">IDENTITY SYSTEM</span>
      //   </div>
      //   <div className="py-6 sm:py-8">
      //     <p className="font-serif text-4xl tracking-[-0.06em] sm:text-6xl">
      //       Form
      //       <br />
      //       follows
      //       <br />
      //       feeling.
      //     </p>
      //   </div>
      //   <div className="flex items-end justify-between border-t border-border pt-3">
      //     <div className="flex gap-1.5">
      //       <div className="h-5 w-5 rounded-full bg-[#29221d]" />
      //       <div className="h-5 w-5 rounded-full bg-[#b55b3f]" />
      //       <div className="h-5 w-5 rounded-full bg-[#d5b66b]" />
      //     </div>
      //     <span className="text-[10px]">BRAND EXPLORATION</span>
      //   </div>
      // </div>
    );
  }

  return (
    <Image
              src="/images/lumina.webp"
              alt="lumina"
              fill
              />
    // <div className="flex h-full min-h-64 flex-col bg-[#171322] p-4 text-foreground sm:min-h-80 sm:p-7">
    //   <div className="flex items-center justify-between border-b border-border pb-4">
    //     <span className="text-xs font-semibold tracking-[0.25em]">LUMINA</span>
    //     <span className="text-[10px] text-primary/70">DIGITAL EXPERIENCE</span>
    //   </div>
    //   <div className="flex flex-1 flex-col justify-center py-6">
    //     <div className="relative mx-auto flex aspect-square w-2/3 max-w-52 items-center justify-center">
    //       <div className="absolute inset-0 rotate-45 border border-primary/20" />
    //       <div className="absolute inset-[12%] -rotate-12 border border-primary/30" />
    //       <div className="absolute inset-[24%] rotate-12 border border-primary/50" />
    //       <div className="absolute inset-[36%] rounded-full bg-primary/80 shadow-[0_0_50px_var(--primary)]" />
    //     </div>
    //     <p className="mt-5 text-center font-serif text-2xl sm:text-3xl">
    //       Explore the unseen.
    //     </p>
    //   </div>
    //   <div className="flex justify-between border-t border-border pt-3 text-[10px] text-text-muted">
    //     <span>CONCEPT / 04</span>
    //     <span>INTERACTIVE DESIGN</span>
    //   </div>
    // </div>
  );
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("WorkPage");

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:px-16 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-medium tracking-[0.2em] text-primary uppercase sm:text-sm">
            {t("eyebrow")}
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] [overflow-wrap:anywhere] sm:text-6xl md:text-7xl lg:text-8xl">
            {t("title")}
          </h1>

          <div className="mt-8 grid gap-6 border-t border-border pt-6 sm:mt-10 sm:grid-cols-2 sm:items-end lg:grid-cols-[1fr_auto]">
            <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              {t("intro")}
            </p>

            <p className="text-xs leading-6 text-text-muted sm:text-sm lg:text-right">
              {t("conceptNote")}
            </p>
          </div>
        </div>
      </section>

      {/* Project gallery */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-medium tracking-[0.18em] text-primary uppercase sm:text-sm">
                {t("galleryEyebrow")}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
                {t("galleryTitle")}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-text-secondary">
              {t("galleryIntro")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-14 lg:gap-x-8 lg:gap-y-20">
            {projects.map(({ key, number, featured }) => (
              <article
                key={key}
                className={`min-w-0 ${featured ? "sm:col-span-2" : "sm:col-span-1"}`}
              >
                <div
                  className={`group relative overflow-hidden border border-border ${
                    featured ? "aspect-[5/4] sm:aspect-[16/8] lg:aspect-[16/7]" : "aspect-[4/3]"
                  }`}
                >
                  <ProjectPreview project={key} />
                  <span className="absolute right-3 top-3 border border-border bg-background/80 px-3 py-1.5 text-[10px] font-medium tracking-wider text-text-secondary backdrop-blur-sm sm:right-5 sm:top-5 sm:text-xs">
                    {t("conceptLabel")}
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-[1fr_auto] gap-3 sm:mt-6">
                  <div className="min-w-0">
                    <p className="mb-2 text-xs font-medium tracking-[0.16em] text-primary uppercase">
                      {t(`projects.${key}.category`)}
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
                      {t(`projects.${key}.title`)}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-text-secondary sm:text-base">
                      {t(`projects.${key}.description`)}
                    </p>
                  </div>

                  <span className="pt-1 font-mono text-xs text-text-secondary sm:text-sm">
                    {number}
                  </span>
                </div>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {(t.raw(`projects.${key}.tags`) as string[]).map((tag) => (
                    <li
                      key={tag}
                      className="border border-border px-3 py-2 text-xs text-text-secondary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-16">
        <div className="mx-auto max-w-7xl border border-border bg-surface p-6 sm:p-10 lg:p-16">
          <p className="mb-5 text-xs font-medium tracking-[0.18em] text-primary uppercase sm:text-sm">
            {t("ctaEyebrow")}
          </p>

          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
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
