import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="grid grid-cols-3 items-center bg-brutal-black px-6 py-10">
      <div>
        <Image
          src="/logo/logo.png"
          alt="Logo"
          width={50}
          height={50}
        />
      </div>

      <div className="text-center">
        <span className="font-mono text-xs text-white/40">
          {t("copy")}
        </span>
      </div>

      <div />
    </footer>
  );
}
