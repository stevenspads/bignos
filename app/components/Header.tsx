"use client";

import Image from "next/image";
import SiteNav from "./SiteNav";

export default function Header() {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white/80 px-6 py-8 shadow-xl shadow-slate-200/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div className="relative h-64 w-64 overflow-hidden rounded-[2.5rem] bg-slate-100 p-3">
          <Image src="/logo.jpg" alt="Bignos logo" fill className="object-contain" priority />
        </div>
        <SiteNav />
      </div>
    </header>
  );
}
