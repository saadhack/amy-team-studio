
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === "en" ? "ar" : "en";

  return (
    <button
      type="button"
      onClick={() =>
        router.replace(pathname, { locale: nextLocale })
      }
      aria-label={
        locale === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"
      }
      className="rounded-md border border-border px-3 py-2 text-sm transition-colors hover:border-border"
    >
      {locale === "en" ? "العربية" : "English"}
    </button>
  );
}
