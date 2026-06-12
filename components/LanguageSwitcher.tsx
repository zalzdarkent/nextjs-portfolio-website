"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div className={`flex border-3 border-brutal-black overflow-hidden shadow-brutal-sm transition-opacity ${
      isPending ? "opacity-70 pointer-events-none" : "" 
    }`}>
      <button
        disabled={isPending}
        onClick={() => switchLocale("id")}
        className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-colors ${
          locale === "id"
            ? "bg-brutal-black text-brutal-yellow"
            : "bg-brutal-white text-brutal-black hover:bg-brutal-black/10"
        }`}
      >
        {isPending && locale === "en" ? "..." : "ID"}
      </button>

      <div className="w-[3px] bg-brutal-black" />

      <button
        disabled={isPending}
        onClick={() => switchLocale("en")}
        className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-colors ${
          locale === "en"
            ? "bg-brutal-black text-brutal-yellow"
            : "bg-brutal-white text-brutal-black hover:bg-brutal-black/10"
        }`}
      >
        {isPending && locale === "id" ? "..." : "EN"}
      </button>
    </div>
  );
}