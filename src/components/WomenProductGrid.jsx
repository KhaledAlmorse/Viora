import { useMemo } from "react";
import WomenProductCard from "./WomenProductCard";
import products from "../data/products";

const womenProducts = products.filter((p) => p.category === "نسائي");

export default function WomenProductGrid({ searchQuery = "", activeFilter = "الكل" }) {
  const filtered = useMemo(() => {
    return womenProducts.filter((p) => {
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
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      {filtered.length === 0 ? (
        <p className="text-center text-on-surface-variant font-body-lg py-20">
          لا توجد منتجات تطابق بحثك
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter items-stretch">
          {filtered.map((product) => (
            <WomenProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
