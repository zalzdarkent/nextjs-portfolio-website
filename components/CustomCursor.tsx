"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 640) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    let animationFrameId: number;
    
    const render = () => {
      // Nilai lerp sengaja dibuat agak lambat (0.12) biar efek kotaknya 'tertinggal' 
      // di belakang mouse asli, khas web-web brutalist modern.
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.12;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.12;

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Event Delegation untuk mendeteksi hover elemen interactable secara dinamis
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractable = target.closest("a, button, .project-card, [data-hoverable]");
      
      if (isInteractable) {
        cursor.classList.add("hovered");
        
        // OPSIONAL: Jika ingin mengambil teks kustom saat hover (misal: "VIEW", "CLICK")
        const hoverText = (isInteractable as HTMLElement).getAttribute("data-hover-text");
        const badge = cursor.querySelector(".cursor-badge");
        if (badge && hoverText) {
          badge.textContent = hoverText;
          cursor.classList.add("has-text");
        }
      } else {
        cursor.classList.remove("hovered", "has-text");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      // "fixed top-0 left-0" wajib agar koordinat transform-nya presisi dari titik 0,0
      className="custom-brutalist-cursor hidden sm:block fixed top-0 left-0 pointer-events-none z-[999999] will-change-transform"
    >
      {/* Kotak Utama Kursor */}
      <div className="cursor-box" />
      {/* Teks Badge Opsional yang muncul saat hover tombol tertentu */}
      <span className="cursor-badge" />
    </div>
  );
}