
import Link from "next/link";
import MobileNav from "./home/MobileNav";
import LanguageSwitcher from "./home/LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { getTranslations } from "next-intl/server";


export default async function Header() {

  const t = await getTranslations("Header");
  
  const navLinks = [
    { label: "home", href: "/" },
    { label: "services", href: "/services" },
    { label: "work", href: "/work" },
    { label: "about", href: "/about" },
    { label: "contact", href: "/contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 text-foreground backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <svg
            viewBox="0 0 28 28"
            fill="none"
            className="size-8"
            aria-hidden="true"
          >
            <path
              d="M4.6 24 14 5.2 23.4 24"
              stroke="currentColor"
              strokeWidth="2.6"
            />
            <path
              d="M9.7 18.4h8.6"
              stroke="var(--primary)"
              strokeWidth="2.6"
            />
          </svg>

          <span className="text-lg font-semibold tracking-tight">
            AMY <span className="text-text-muted">Team Studio</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-foreground"
            >
              {t(link.label.toString())}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle/>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
