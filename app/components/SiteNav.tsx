"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNav({ className = "flex flex-wrap justify-center gap-8 text-md font-semibold text-slate-700" }: { className?: string }) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash || "");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <nav className={className}>
      {navItems.map((item) => {
        const isActive =
          item.href === pathname ||
          (item.href.startsWith("/#") && pathname === "/" && item.href === `/${hash}`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`transition ${isActive ? "text-amber-900 font-semibold underline decoration-amber-300 underline-offset-4" : "text-slate-700 hover:text-slate-950"}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
