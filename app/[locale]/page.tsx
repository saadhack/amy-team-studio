import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import Process from "@/components/home/Process";
import WhyAmy from "@/components/home/WhyAmy";
import ContactCTA from "@/components/home/ContactCTA";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Home",
  description:
  "AMY Team Studio designs and develops high-quality websites, applications, and scalable software solutions that help businesses grow and turn ideas into digital products.",
};
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <SelectedWork/>
      <Process/>
      <WhyAmy/>
      <ContactCTA/>

      </main>
  );
}
