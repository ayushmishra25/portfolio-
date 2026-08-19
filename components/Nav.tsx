"use client";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/resume";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => Boolean(el));
    if (!sections.length) return;

    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(`#${e.target.id}`); }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = root.getAttribute("data-theme") ?? (prefersDark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-16 w-[92vw] max-w-[1080px] items-center gap-4">
        <a href="#top" className="flex items-center gap-2.5 text-[0.98rem] font-bold text-ink">
          <span className="grid h-[30px] w-[30px] place-items-center rounded-lg bg-accent text-[0.76rem] text-white">
            {profile.initials}
          </span>
          {profile.name}
        </a>

        <nav className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-16 flex-col gap-0 border-b border-line bg-surface p-2 shadow-lg md:ml-auto md:static md:flex md:flex-row md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2.5 text-[0.92rem] font-medium transition-colors md:py-1.5 ${
                active === n.href
                  ? "bg-accent-soft text-accent"
                  : "text-ink-2 hover:bg-surface-2 hover:text-ink"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 md:ml-0">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="grid h-[34px] w-[34px] place-items-center rounded-lg border border-line bg-surface text-ink-2 transition-colors hover:border-ink-3 hover:text-ink"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z" fill="currentColor" />
            </svg>
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid h-[34px] w-[34px] place-items-center rounded-lg border border-line bg-surface text-ink-2 md:hidden"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
