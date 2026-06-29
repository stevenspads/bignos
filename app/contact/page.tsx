import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-full bg-gradient-to-b from-amber-50 via-amber-100 to-white text-slate-950">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-10 sm:px-8 lg:px-12">
        <Header />

        <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/50 sm:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-amber-900">Contact Bigno&apos;s</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Let&apos;s get your order ready.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Have a question, catering request, or want the freshest bignolatti waiting for you? Use the form below and we’ll get back to you fast, fast!
          </p>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 sm:p-10">
            <div className="grid gap-8">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.28em] text-amber-900">Our details</p>
                <h2 className="text-3xl font-semibold text-slate-950">Reach Bigno&apos;s in Montreal.</h2>
                <p className="text-slate-700 leading-8">
                  Drop us a message for pickup, catering, or any specialty request. We answer quickly and make every order with the same Sicilian care.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-amber-50 p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-amber-900">Phone</p>
                  <p className="mt-3 text-xl font-semibold text-slate-950">(514) 012-3456</p>
                </div>
                <div className="rounded-3xl bg-amber-50 p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-amber-900">Email</p>
                  <a href="mailto:hello@bignos.com" className="mt-3 inline-block text-xl font-semibold text-amber-900 underline decoration-amber-200 underline-offset-4">
                    hello@bignos.com
                  </a>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-300">Location</p>
                <p className="mt-3 text-xl font-semibold">1234 Sicilian Market St, Montreal, QC H2R 2P9</p>
                <p className="mt-3 text-slate-300 leading-7">Open daily 10AM–6PM. Fresh bignolatti sold until they’re gone.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 sm:p-10">
            <form className="grid gap-6">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-slate-900">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-semibold text-slate-900">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-semibold text-slate-900">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us what you need..."
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-amber-900 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-900/20 transition hover:bg-amber-800">
                Send message
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
