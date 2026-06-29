import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuCard from "../components/MenuCard";

export const menuItems = [
  {
    name: "Bignolato con salsiccia",
    description: "Spicy sausage, provolone, roasted onions, and a crisp golden crust.",
    price: "$12",
  },
  {
    name: "Pane al forno",
    description: "Oven-baked bread with garlic butter, sea salt, and herb oil.",
    price: "$6",
  },
  {
    name: "Salame e formaggio",
    description: "Sliced salami, pecorino, olives, and a drizzle of Sicilian citrus honey.",
    price: "$14",
  },
  {
    name: "Spinaci e formaggio",
    description: "Spinach, ricotta, provolone, and fresh herbs wrapped in golden dough.",
    price: "$13",
  },
  {
    name: "Cauliflower & olive",
    description: "A classic family recipe with roasted cauliflower, olives, and fennel.",
    price: "$13",
  },
  {
    name: "Smoke Meat Bigno",
    description: "Montreal smoke meat with mustard, pickles, and melted cheese.",
    price: "$16",
  },
];

export default function Menu() {
  return (
    <div className="min-h-full bg-gradient-to-b from-amber-50 via-amber-100 to-white text-slate-950">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-10 sm:px-8 lg:px-12">
        <Header />

        <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/50 sm:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-amber-900">Menu</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Explore our handcrafted Sicilian favorites.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            From savory bignolati to fresh bakery bites, every item is made for easy market lunches, cozy dinners, and delicious take away.
          </p>
        </section>

        <section >
          <div className="grid gap-6 lg:grid-cols-3">
              {menuItems.map((item) => (
                <MenuCard key={item.name} {...item} />
              ))}
            </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 sm:p-10">
            <h2 className="text-3xl font-semibold text-slate-950">Perfect for sharing or take away.</h2>
            <p className="mt-5 text-slate-700 leading-8">
              Order a few bignolati to enjoy at the market, bring home for dinner, or reserve a catering tray for your next event. Every bite is handmade and baked fresh each day.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-amber-50 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-900">Catering</p>
                <p className="mt-3 text-slate-700 leading-7">Small trays and fresh bakery boxes ready for market gatherings.</p>
              </div>
              <div className="rounded-3xl bg-amber-50 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-900">Daily specials</p>
                <p className="mt-3 text-slate-700 leading-7">Ask about our rotating seasonal fillings and Italian market breads.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-amber-900 p-10 text-white shadow-2xl shadow-amber-900/20">
            <p className="text-sm uppercase tracking-[0.28em] text-amber-200">Chef’s note</p>
            <h2 className="mt-4 text-3xl font-semibold">Fresh every day from Stefano’s kitchen.</h2>
            <p className="mt-6 text-slate-200 leading-8">
              We keep our menu simple, seasonal, and full of bold flavors. Everything is made by hand, using authentic Sicilian techniques and local Montreal ingredients.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
