import Image from "next/image";

type MenuCardProps = {
  name: string;
  description: string;
  price: string;
  imageSrc?: string;
};

export default function MenuCard({ name, description, price, imageSrc = "/bignolati.jpg" }: MenuCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-44 sm:h-48">
        <Image src={imageSrc} alt={name} fill className="object-cover" />
      </div>
      <div className="p-8">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-xl font-semibold text-slate-950">{name}</h3>
          <span className="text-sm font-semibold text-amber-900">{price}</span>
        </div>
        <p className="mt-4 text-slate-600 leading-7">{description}</p>
      </div>
    </article>
  );
}
