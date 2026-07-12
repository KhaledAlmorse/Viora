import { useMemo } from "react";
import MenProductCard from "./MenProductCard";
import products from "../data/products";

const menProducts = products.filter((p) => p.category === "رجالي");

export default function MenProductGrid({ searchQuery = "", activeFilter = "الكل" }) {
  const filtered = useMemo(() => {
    return menProducts.filter((p) => {
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      const matchFilter =
        activeFilter === "الكل" ||
        p.tags.includes(activeFilter);

      return matchSearch && matchFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-padding">
      {filtered.length === 0 ? (
        <p className="text-center text-on-surface-variant font-body-lg py-20">
          لا توجد منتجات تطابق بحثك
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filtered.map((product) => (
            <MenProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
