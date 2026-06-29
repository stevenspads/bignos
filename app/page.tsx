import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuCard from "./components/MenuCard";
import { menuItems } from "./menu/page";

export default function Home() {
  return (
    <div className="min-h-full bg-gradient-to-b from-amber-50 via-amber-100 to-white text-slate-950">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-10 sm:px-8 lg:px-12">
        <Header />

        <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.32em] text-amber-900">
              Sicilian street food & bakery
            </span>
            <h1 className="max-w-3xl text-6xl font-semibold tracking-tight text-slate-950 sm:text-7xl">
              Bigno&apos;s brings bold Sicilian bignolati to Montreal.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              Rustic sausage bread baked fresh every morning with fennel, spicy salami, provolone, and a golden crust. Crafted for easy lunch runs, market cravings, and warm evening bites.
            </p>
            <div className="grid gap-4 sm:grid-cols-[auto_auto]">
              <a href="/menu" className="inline-flex items-center justify-center rounded-full bg-amber-900 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-900/20 transition hover:bg-amber-800">
                Order now
              </a>
              <a href="/about" className="inline-flex items-center justify-center rounded-full border border-amber-900/20 bg-white px-7 py-3 text-sm font-semibold text-amber-950 transition hover:bg-amber-50">
                Our story
              </a>
            </div>            
          </div>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/40">
              <div className="relative h-64 sm:h-72">
                <Image
                  src="/display.jpg"
                  alt="Sicilian bakery display close up"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <span className="inline-flex rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-900">
                  Market fresh
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                  Bite into a taste of Sicily!
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Golden loaves, artisan breads, and savory bignolati stacked with care. It’s all about texture, heat, and that Italian neighborhood charm.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="rounded-[2rem] bg-slate-950/95 p-8 text-white shadow-2xl shadow-slate-950/20 sm:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-amber-300">Rustic bignolati</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              A bold Sicilian staple made for sharing.
            </h2>
            <p className="mt-5 max-w-2xl text-slate-200 leading-8">
              From spicy sausage to melty provolone, each bignolato celebrates vibrant Mediterranean flavors and handcrafted bread. Perfect for market lunch, office catering, or a cozy evening treat.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.26em] text-slate-300">Signature</p>
                <p className="mt-3 text-lg font-semibold text-white">Bignolato con salsiccia</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.26em] text-slate-300">Best paired</p>
                <p className="mt-3 text-lg font-semibold text-white">Provolone, olives, and fresh herbs</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 lg:h-full">
            <div className="relative h-full min-h-[420px] sm:min-h-[520px]">
              <Image
                src="/bignolati.jpg"
                alt="Bignolati"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-3xl bg-emerald-950/5 p-8 shadow-lg shadow-emerald-950/5">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-900">Tradizione siciliana</p>
            <h2 className="mt-8 text-3xl font-semibold text-slate-950">Handmade from our family kitchen.</h2>
            <p className="mt-8 text-slate-700 leading-8">
              Bigno&apos;s brings a warm slice of Sicily to your neighborhood. Each bignolato is baked fresh, filled with fennel-spiced sausage and cheese, and wrapped in tender golden bread.
            </p>
            <p className="mt-8 text-slate-700 leading-8">
              We celebrate local ingredients, simple flavors, and a taste of Sicily!
            </p>
            <p className="mt-8 text-slate-700 leading-8">
              Located in the east-end of Montreal, Bigno&apos;s is your gateway to the authentic flavors of Sicily!
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Pane rustico", description: "Wood-fired inspired bread with a golden crust." },
              { title: "Sicilian spice", description: "Fennel, paprika, and herb notes in every bite." },
              { title: "Fresh fillings", description: "Sausage, provolone, peppers, and seasonal greens." },
              { title: "Community vibe", description: "Market-style warmth for lunch, catering, and take away." },
            ].map((item) => (
              <div key={item.title} className="flex h-full min-h-[260px] flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div>
                  <div className="mb-5 inline-flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-200 to-amber-400 text-amber-950 shadow-sm">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path d="M12 2l2.9 6.1L22 9.1l-5 4.9L18 22l-6-3.1L6 22l1-7.9-5-4.9 7.1-1L12 2z" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-7">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="menu" className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.28em] text-amber-900">Menu highlights</p>
            <h2 className="text-3xl font-semibold text-slate-950">Fresh bignolati & Sicilian favorites</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {menuItems.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-[2rem] bg-gradient-to-r from-amber-200 via-slate-50 to-green-100 p-10 shadow-xl shadow-amber-200/40">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-amber-900">Get in touch</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">Ready for the next warm bite?</h2>
              <p className="mt-4 text-slate-700 leading-8">
                Visit Bignos for a cozy lunch, order a fresh bignolato to go, or reserve a small catering tray for your next gathering.
              </p>
            </div>
            <div className="min-w-64 rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Contact</p>
              <p className="mt-4 text-xl font-semibold">(514) 012-3456</p>
              <a href="mailto:hello@bignos.com" className="mt-2 inline-block text-amber-900 underline decoration-amber-200 underline-offset-2 transition hover:text-amber-700">
                hello@bignos.com
              </a>
              <p className="mt-2 text-slate-600">1234 Sicilian Market St<br />Montreal, QC<br />H2R 2P9</p>
              <p className="mt-4 text-slate-600">Open daily 10AM-6PM</p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
