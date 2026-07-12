import { Link } from "react-router-dom";
import { getRelatedProducts } from "../data/products";

export default function RelatedProducts({ slugs }) {
  const related = getRelatedProducts(slugs);
  if (!related.length) return null;

  return (
    <section className="py-section-padding">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-display-md text-display-md text-primary mb-2">عطور قد تنال إعجابك</h2>
          <p className="text-on-surface-variant">مجموعة مختارة بعناية تتوافق مع ذوقك</p>
        </div>
        <Link
          to="/category/men"
          className="text-primary font-bold flex items-center gap-2 hover:translate-x-[-8px] transition-transform"
        >
          عرض الكل
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {related.map((p) => (
          <Link
            key={p.slug}
            to={`/product/${p.slug}`}
            className="group bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 luxury-shadow hover:border-primary transition-colors no-underline"
          >
            <div className="aspect-square relative overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={p.image}
                alt={p.name}
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-display text-lg text-primary mb-1">{p.name}</h3>
              <p className="text-on-surface-variant text-sm mb-4">{p.subtitle}</p>
              <span className="font-bold text-on-surface">{p.sizes?.[0]?.price} ج.م</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
