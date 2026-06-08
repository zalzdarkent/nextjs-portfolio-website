"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Demo auth: just check for non-empty.
      // You can replace with real auth later.
      if (!username.trim() || !password.trim()) {
        setError("Username / password harus diisi.");
        return;
      }

      // Create cookie on client side.
      document.cookie = `admin_auth=1; path=/admin; max-age=${60 * 60 * 24}; samesite=lax`;

      router.push(from);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-lg border-4 border-brutal-black shadow-brutal bg-brutal-white">
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-brutal-black border-4 border-brutal-black shadow-brutal-sm">
              <span className="font-mono font-extrabold text-brutal-yellow">ADM</span>
            </div>
            <div>
              <h1 className="font-display font-extrabold text-2xl tracking-tight">
                Neo Brutal Admin
              </h1>
              <p className="font-body text-sm text-black/60">
                Login dulu biar konten bisa diupdate.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <label className="block">
              <span className="font-body font-bold text-xs uppercase tracking-widest text-black/60">
                Username
              </span>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2 w-full px-4 py-3 border-3 border-brutal-black bg-brutal-white font-body font-bold text-sm outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-brutal-hover"
                placeholder="misal: alif"
              />
            </label>

            <label className="block">
              <span className="font-body font-bold text-xs uppercase tracking-widest text-black/60">
                Password
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-4 py-3 border-3 border-brutal-black bg-brutal-white font-body font-bold text-sm outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-brutal-hover"
                placeholder="••••••••"
              />
            </label>

            {error && (
              <div className="border-3 border-brutal-black bg-brutal-orange/20 p-3 font-body text-sm text-brutal-black">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 border-4 border-brutal-black shadow-brutal font-body font-bold text-sm uppercase tracking-widest transition-all duration-100 cursor-pointer disabled:cursor-not-allowed ${
                loading
                  ? "bg-brutal-orange/90 text-white translate-x-[3px] translate-y-[3px] animate-pulse"
                  : "bg-brutal-yellow text-brutal-black hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-brutal-hover active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
              }`}
            >
              {loading ? "⚡ Checking..." : "Login →"}
            </button>
          </form>

          <div className="mt-6 text-xs font-body text-black/60">
            Demo auth: isi field apa pun yang tidak kosong.
          </div>
        </div>
      </div>
    </div>
  );
}

