
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
  "Get in touch with AMY Team Studio to discuss your project, explore software development solutions, and turn your ideas into digital products.",
};
export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("ContactPage");

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative border-b border-border px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:px-16 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96"
        />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-medium tracking-[0.2em] text-primary uppercase sm:text-sm">
            {t("eyebrow")}
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.1] tracking-[-0.045em] [overflow-wrap:anywhere] sm:text-6xl md:text-7xl lg:text-8xl">
            {t("title")}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
            {t("intro")}
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <aside className="min-w-0">
            <p className="mb-4 text-xs font-medium tracking-[0.18em] text-primary uppercase sm:text-sm">
              {t("asideEyebrow")}
            </p>

            <h2 className="max-w-md text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              {t("asideTitle")}
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              {t("asideDescription")}
            </p>

            <div className="mt-10 border-t border-border pt-6">
              <p className="text-sm font-medium text-foreground">
                {t("projectNoteTitle")}
              </p>
              <p className="mt-2 max-w-sm text-sm leading-7 text-text-secondary">
                {t("projectNote")}
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm font-medium text-foreground">
                {t("otherWaysTitle")}
              </p>
              <p className="mt-2 text-sm leading-7 text-text-secondary">
                {t("otherWaysDescription")}
              </p>

              <Link
                href="/"
                className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {t("backHome")}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </aside>

          <div className="min-w-0 border border-border bg-surface p-5 sm:p-8 lg:p-10">
            <div className="mb-8 border-b border-border pb-6">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {t("formTitle")}
              </h2>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {t("formDescription")}
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
