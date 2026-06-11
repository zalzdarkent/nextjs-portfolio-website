"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Ganti prefix locale di URL: /id/... → /en/...
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex border-3 border-brutal-black overflow-hidden shadow-brutal-sm">
      <button
        onClick={() => switchLocale("id")}
        className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-colors ${
          locale === "id"
            ? "bg-brutal-black text-brutal-yellow"
            : "bg-brutal-white text-brutal-black hover:bg-brutal-black/10"
        }`}
      >
        ID
      </button>
      <div className="w-[3px] bg-brutal-black" />
      <button
        onClick={() => switchLocale("en")}
        className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-colors ${
          locale === "en"
            ? "bg-brutal-black text-brutal-yellow"
            : "bg-brutal-white text-brutal-black hover:bg-brutal-black/10"
        }`}
      >
        EN
      </button>
    </div>
  );
}