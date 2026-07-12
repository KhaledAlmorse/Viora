import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

export default function MenProductCard({ product }) {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const {
    slug,
    name,
    tags,
    badge,
    badgeColor,
    image,
    description,
  } = product;

  const displayBadge = selectedSize.discount || badge;

  const badgeBg =
    badgeColor === "tertiary"
      ? "bg-tertiary/90 text-on-tertiary"
      : "bg-primary/90 text-on-primary";

  const whatsappUrl = `https://wa.me/201022750486?text=${encodeURIComponent(
    `مرحباً، أريد طلب:\n${name}\nالحجم: ${selectedSize.label}\nالسعر: ${selectedSize.price} ج.م`
  )}`;

  return (
    <div
      onClick={() => navigate(`/product/${slug}`)}
      className="product-card bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden group flex flex-col h-full no-underline cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container h-[350px]">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={image}
          alt={name}
          loading="lazy"
        />
        {displayBadge && (
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <span
              className={`${badgeBg} text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest`}
            >
              {displayBadge}
            </span>
          </div>
        )}
      </div>
      <div className="p-6 text-center flex-1 flex flex-col">
        {tags && tags.length > 0 && (
          <div className="flex justify-center gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-surface-container-highest text-on-surface-variant text-[11px] px-3 py-1 rounded-full font-label-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="font-display-md text-display-md text-primary mb-2 line-clamp-1 h-[1.2em]">
          {name}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2 h-[3.2em] mb-6">
          {description}
        </p>
        <div className="flex justify-center items-center gap-4 mb-6 mt-auto">
          <div className="flex flex-col">
            <span className="text-primary font-bold text-xl">{selectedSize.price} ج.م</span>
            {selectedSize.oldPrice && (
              <span className="text-outline text-sm line-through decoration-error/40">
                {selectedSize.oldPrice} ج.م
              </span>
            )}
          </div>
          <div className="h-8 w-[1px] bg-outline-variant" />
          <div className="text-right flex flex-col items-end gap-1">
            <span className="block text-[10px] text-outline font-bold">
              اختر الحجم
            </span>
            <div className="flex gap-1" onClick={(e) => e.preventDefault()}>
              {product.sizes.map((size) => (
                <button
                  key={size.label}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedSize(size);
                  }}
                  className={`px-2 py-0.5 text-[11px] rounded transition-all font-bold ${
                    selectedSize.label === size.label
                      ? "bg-primary text-white"
                      : "bg-surface-container-highest text-on-surface-variant hover:bg-outline-variant"
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-full bg-on-secondary-fixed text-primary-fixed py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-primary hover:text-on-primary transition-all duration-300 font-label-md"
        >
          <Icon name="chat" className="text-xl" />
          اطلب عبر واتساب
        </a>
      </div>
    </div>
  );
}
