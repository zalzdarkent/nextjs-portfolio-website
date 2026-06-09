import { Html, Head, Main, NextScript } from "next/document";

// Untuk Next.js App Router, biasanya tidak diperlukan _document.
// Tapi pada build/export tertentu error muncul karena Next mencoba membaca /_document.
// File minimal ini memastikan modul /_document tersedia.
export default function Document() {
  return (
    <Html lang="id">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

