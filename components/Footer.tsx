import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t  = useTranslations("footer");
  return (
    <footer className="bg-brutal-black px-6 sm:px-10 lg:px-14 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-wrap">
      <span className="font-display text-2xl font-extrabold text-brutal-yellow">
        <Image 
          src="/logo/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="inline-block mr-2"
        />
      </span>
      <span className="font-mono text-xs text-white/40">
        {t("copy")}
      </span>
    </footer>
  );
}
