"use client";

import Image from "next/image";
import SiteNav from "./SiteNav";

export default function Footer() {
  return (
    <footer className="rounded-[2rem] border border-slate-200 bg-white/95 p-8 text-slate-800 shadow-xl shadow-slate-200/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-24 w-24 overflow-hidden rounded-3xl">
            <Image src="/logo.jpg" alt="Bignos logo" fill className="object-contain" />
          </div>
          <div>
            <h6 className="uppercase font-bold">Bigno&apos;s</h6>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Fresh Sicilian bignolati made daily with local ingredients.
            </p>
          </div>
        </div>
        <SiteNav className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center" />
      </div>
      <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>© Bignos. Crafted in Montreal, QC.</p>
      </div>
    </footer>
  );
}
