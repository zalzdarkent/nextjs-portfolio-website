"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type EditorField = {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
};

export default function AdminDashboardPage() {
  const router = useRouter();

  const [authOk, setAuthOk] = useState(false);
  const [fields, setFields] = useState<EditorField[]>([
    {
      id: "hero_title",
      label: "Hero Title",
      value: "ALIF.DEV — Full Stack Developer",
      placeholder: "Masukkan judul hero...",
    },
    {
      id: "about_paragraph_1",
      label: "About Paragraph #1",
      value:
        "Full Stack Developer yang berfokus pada pembuatan aplikasi web end-to-end yang tangguh dan responsif.",
      placeholder: "Masukkan paragraf...",
    },
    {
      id: "contact_email",
      label: "Contact Email",
      value: "alif@example.com",
      placeholder: "Masukkan email...",
    },
  ]);

  useEffect(() => {
    const token = document.cookie
      .split(";")
      .map((c) => c.trim())
      .find((c) => c.startsWith("admin_auth="));

    setAuthOk(Boolean(token));

    if (!token) {
      router.push("/admin/login");
    }
  }, [router]);

  const handleChange = (id: string, next: string) => {
    setFields((prev) => prev.map((f) => (f.id === id ? { ...f, value: next } : f)));
  };

  const handleLogout = () => {
    document.cookie = "admin_auth=; path=/admin; max-age=0; samesite=lax";
    router.push("/admin/login");
  };

  const [viewLoading, setViewLoading] = useState(false);

  const handleSave = async () => {
    // Placeholder: store locally.
    // Later you can connect this to an API route + database.
    const payload: Record<string, string> = {};
    fields.forEach((f) => (payload[f.id] = f.value));

    localStorage.setItem("portfolio_admin_content", JSON.stringify(payload));

    // Quick feedback.
    alert("Konten disimpan (localStorage). Hubungkan ke DB/API nanti ya.");
  };

  const handleViewPortfolio = async () => {
    if (viewLoading) return;
    setViewLoading(true);

    // Retro brutal: simulasi delay biar keliatan loading effect-nya
    await new Promise((r) => setTimeout(r, 700));

    router.push("/");
  };

  if (!authOk) return null;

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="border-4 border-brutal-black shadow-brutal bg-brutal-white p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-brutal-black border-4 border-brutal-black shadow-brutal-sm">
                  <span className="font-mono font-extrabold text-brutal-yellow">DM</span>
                </div>
                <div>
                  <h1 className="font-display font-extrabold text-2xl tracking-tight">
                    Admin Dashboard
                  </h1>
                  <p className="font-body text-sm text-black/60">
                    Neo Brutal Retro UI untuk update konten.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <button
                onClick={handleLogout}
                className="px-5 py-2 border-4 border-brutal-black shadow-brutal bg-brutal-orange/20 font-body font-bold text-xs uppercase tracking-widest hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Content editor */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 border-4 border-brutal-black shadow-brutal bg-brutal-white p-6">
            <h2 className="font-mono font-bold text-sm uppercase tracking-widest text-black/60">
              Editor Konten
            </h2>
            <p className="font-body text-sm text-black/60 mt-2">
              Ini versi awal: simpan ke localStorage. Nanti bisa di-*wire* ke API/database.
            </p>

            <div className="mt-6 space-y-5">
              {fields.map((f) => (
                <div key={f.id} className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <label className="font-body font-bold text-xs uppercase tracking-widest text-black/60">
                      {f.label}
                    </label>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border-2 border-brutal-black bg-brutal-yellow/10">
                      {f.id}
                    </span>
                  </div>
                  <textarea
                    value={f.value}
                    onChange={(e) => handleChange(f.id, e.target.value)}
                    rows={f.value.length > 90 ? 4 : 2}
                    placeholder={f.placeholder}
                    className="w-full px-4 py-3 border-3 border-brutal-black bg-brutal-white font-body font-bold text-sm outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-brutal-hover"
                  />
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={handleSave}
                className="px-7 py-3.5 border-4 border-brutal-black shadow-brutal bg-brutal-yellow text-brutal-black font-body font-bold text-sm uppercase tracking-widest hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-brutal-hover active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all"
              >
                Save →
              </button>
              <button
                onClick={handleViewPortfolio}
                disabled={viewLoading}
                className={`px-7 py-3.5 border-4 border-brutal-black shadow-brutal font-body font-bold text-sm uppercase tracking-widest transition-all disabled:cursor-not-allowed ${
                  viewLoading
                    ? "bg-brutal-orange/90 text-white translate-x-[3px] translate-y-[3px] animate-pulse"
                    : "bg-brutal-white text-brutal-black hover:translate-x-[3px] hover:translate-y-[3px]"
                }`}
              >
                {viewLoading ? "⚡ Opening..." : "View Portfolio"}
              </button>
            </div>
          </div>

          <aside className="border-4 border-brutal-black shadow-brutal bg-brutal-white p-6">
            <h3 className="font-mono font-bold text-sm uppercase tracking-widest text-black/60">
              Status
            </h3>
            <div className="mt-4 space-y-3">
              {["Neo Brutal Theme: ON", "Auth Middleware: ON", "Storage: localStorage", "API: TBA"].map(
                (t, i) => (
                  <div
                    key={t}
                    className="border-3 border-brutal-black shadow-brutal-sm p-3 bg-brutal-yellow/10"
                    style={{ boxShadow: "6px 6px 0px #0a0a0a" }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-body font-bold text-sm">{t}</span>
                      <span className="font-mono font-bold text-[10px] uppercase tracking-widest bg-brutal-black text-brutal-yellow px-2 py-0.5">
                        #{String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="mt-6 border-3 border-brutal-black bg-brutal-orange/20 p-4">
              <p className="font-body text-sm text-black/70">
                Middleware bakal nge-redirect kalau cookie `admin_auth` belum ada.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

