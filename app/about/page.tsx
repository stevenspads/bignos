import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-full bg-gradient-to-b from-amber-50 via-amber-100 to-white text-slate-950">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-10 sm:px-8 lg:px-12">
        <Header />

        <section>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40">
            <div className="relative h-80 sm:h-[32rem]">
              <Image src="/display.jpg" alt="Bignos display in the market" fill className="object-cover" />
            </div>
            <div className="absolute inset-x-0 top-0 flex justify-end p-8">
              <div className="max-w-sm rounded-[2rem] bg-slate-950/80 p-6 text-white shadow-2xl shadow-slate-950/20 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-300">About Bigno&apos;s</p>
                <h2 className="mt-2 text-2xl font-semibold">Handmade bites of Sicily!</h2>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/50 sm:p-10">
            <p className="text-sm uppercase tracking-[0.28em] text-amber-900">About BIGNO&apos;s</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              The traditional Sicilian bignolatti
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Just over six months ago, Stefano Infantino opened the first bignolatti shop ever in Montreal. Sicilians in Italy grew up with this family tradition, and only a handful of people have the perseverance to keep it alive. One of those people is Stefano.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              BIGNO&apos;s opened its doors in Rivière-des-Prairies on September 1st, 2020. Since then, fresh bignolatti rarely stay on the shelves for the full day — they sell like hotcakes, only this time they&apos;re hot balls of dough stuffed with meaty goodness.
            </p>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="h-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 sm:p-10">
            <h2 className="text-3xl font-semibold text-slate-950">A story built on family recipes and Montreal flavor.</h2>
            <p className="mt-6 text-slate-700 leading-8">
              Before opening the shop, Stefano ran a cafe where his BIGNO&apos;s sold quickly. He saw the demand, trusted the idea, and launched the brand directly on Instagram after spending years refining the concept.
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              The word bignolatti comes from Italian farmers describing ingredients wrapped in dough. The traditional version is filled with cauliflower and olives, and Stefano brought his grandmother’s recipes to the east end of Montreal with no shortcuts and no machines.
            </p>
          </div>

          <div className="h-full overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40">
            <div className="relative h-full">
              <Image src="/bignolati.jpg" alt="Bignolati" fill className="object-cover" />
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-300">Flavors that stay true</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">Traditional and bold</h3>
            <p className="mt-3 text-slate-600 leading-7">
              Sausage, olives, spinach, roasted peppers, cauliflower, potato and more — every bignolatti is built from fresh ingredients and bold Sicilian inspiration.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-300">A new Montreal ritual</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">Market-fresh every day</h3>
            <p className="mt-3 text-slate-600 leading-7">
              From the first day in Riviere-des-Prairies, customers have lined up for the warm, handcrafted bignos. They move quickly because they’re made with love, family tradition, and real Italian flavor.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-slate-950">From Nonna&apos;s kitchen to Montreal&apos;s east end.</h2>
              <p className="mt-4 text-slate-700 leading-8">
                Stefano learned these recipes by hand and refuses to let them disappear. Family means everything, and keeping these traditions alive is the heart of BIGNO&apos;s.
              </p>
            </div>
            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-amber-900 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-900/20 transition hover:bg-amber-800">
              Back to home
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
