import { Link } from "react-router-dom";
import Icon from "./Icon";
import ProductCard from "./ProductCard";
import { getProductBySlug } from "../data/products";

const bestSellerSlugs = ["stronger-with-you", "dior-sauvage", "good-girl", "very-sexy"];
const bestSellers = bestSellerSlugs.map(getProductBySlug).filter(Boolean);

export default function BestSellers() {
  return (
    <section className="py-section-padding bg-surface" id="shop">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-display-md text-display-md text-on-surface">
              الأكثر مبيعاً
            </h2>
            <p className="text-on-surface-variant mt-2">
              اكتشف العطور التي خطفت قلوب عملائنا
            </p>
          </div>
          <Link
            to="/category/men"
            className="text-primary font-label-md text-label-md flex items-center gap-2 group"
          >
            عرض الكل
            <Icon
              name="arrow_back"
              className="group-hover:translate-x-[-4px] transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {bestSellers.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              badge={index === 0 ? "الأكثر طلباً" : null}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
